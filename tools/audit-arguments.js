/* Audits how well each command documents what you can type after the token.

   A command records that in a single `args` string, so an empty value is
   ambiguous: it can mean the command takes nothing, opens a picker, wants a
   secondary verb, or was simply never written down.

   Findings are ordered by how much you can trust them:

     1. Structural  — the record contradicts itself. No heuristics, no judgement.
     2. Comparative — the same command documents different input on two surfaces
                      OF THE SAME PRODUCT. Comparing across products is invalid:
                      Xcode's /simplify and Claude's /simplify are unrelated.
     3. Prose       — wording hints at input the record does not show. Pattern
                      matching, so this is a candidate list, not a defect list.

   Only tier 1 gates --strict. Tiers 2 and 3 need a human.

   Usage: node tools/audit-arguments.js [--json] [--strict] */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const knownArgs = ['--json', '--strict'];
const unknownArgs = args.filter(function (arg) { return knownArgs.indexOf(arg) === -1; });
if (unknownArgs.length) {
  console.error('Unknown argument' + (unknownArgs.length > 1 ? 's' : '') + ': ' + unknownArgs.join(', '));
  console.error('Usage: node tools/audit-arguments.js [--json] [--strict]');
  process.exit(2);
}

const jsonMode = args.includes('--json');
const strictMode = args.includes('--strict');
const rootDir = path.join(__dirname, '..');

/* Wording that hints a command consumes something after the token. These are
   candidates only: "takes the work and opens a pull request" matches "takes the"
   while describing what the command does to existing state, not what you type. */
const INPUT_HINTS = [
  /\boptional(ly)?\b/i,
  /\bpass (a|an|the|it|your|in)\b/i,
  /\bargument\b/i,
  /\bfollowed by\b/i,
  /\benables? or disables?\b/i,
  /\bon or off\b/i,
  /\bsubcommand/i,
  /\bspecify\b/i
];

/* Some entries describe a command explicitly NOT taking input — Desktop's
   `/config` "accepts no key=value form" is the canonical case. */
const NEGATION = /\b(no|not|never|cannot|can't|doesn't|does not|isn't|ignores?|ignored|without|unlike)\b/i;

function dataScriptsFromIndex(projectRoot) {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
  const prefix = 'assets/js/data/';
  const scriptPattern = /<script\b[^>]*\bsrc\s*=\s*(["'])([^"']+)\1[^>]*>/gi;
  const scripts = [];
  let match;
  while ((match = scriptPattern.exec(indexHtml))) {
    const src = match[2].split(/[?#]/, 1)[0].replace(/^\.\//, '');
    if (src.startsWith(prefix)) scripts.push(src);
  }
  return scripts;
}

function plainText(value) {
  return String(value == null ? '' : value).replace(/<[^>]+>/g, ' ');
}

function documentsInput(c) {
  return Boolean(c.args) || Boolean((c.subs || []).length);
}

/* Does the canonical example type anything after the token? Compare against the
   primary name and every alias, since an example may legitimately use either. */
function exampleCarriesInput(c) {
  const example = String(c.canonicalExample || '');
  if (!example) return false;
  return [c.cmd].concat(c.aliases || []).some(function (name) {
    return example.length > name.length && example.indexOf(name + ' ') === 0;
  });
}

global.window = {};
dataScriptsFromIndex(rootDir).forEach(function (relativePath) {
  require(path.join(rootDir, relativePath));
});

const S = global.window.SLASH;
const commands = S.commands;
const productName = {};
S.products.forEach(function (p) { productName[p.id] = p.name; });
const productOfSurface = {};
S.surfaces.forEach(function (s) { productOfSurface[s.id] = s.product; });

/* Tier 1: the record contradicts itself. The example demonstrates input the
   signature never declares, so one of the two fields is wrong. */
const selfContradictions = [];
commands.forEach(function (c) {
  if (documentsInput(c)) return;
  if (!exampleCarriesInput(c)) return;
  selfContradictions.push({
    surface: c.surface,
    command: c.cmd,
    key: c.key,
    example: c.canonicalExample
  });
});

/* Tier 2: same product, same token, different input story. */
const grouped = {};
commands.forEach(function (c) {
  if (c.noCompare) return;
  const key = productOfSurface[c.surface] + ' ' + c.cmd;
  (grouped[key] = grouped[key] || []).push(c);
});

const inconsistent = [];
Object.keys(grouped).sort().forEach(function (key) {
  const list = grouped[key];
  if (list.length < 2) return;
  const documented = list.filter(documentsInput);
  const bare = list.filter(function (c) { return !documentsInput(c); });
  if (!documented.length || !bare.length) return;
  inconsistent.push({
    product: productOfSurface[list[0].surface],
    command: list[0].cmd,
    documented: documented.map(function (c) {
      return { surface: c.surface, args: c.args || '(subcommands only)' };
    }),
    bare: bare.map(function (c) { return c.surface; })
  });
});

/* Tier 3: prose hints. Candidates for review, never a pass/fail signal. */
const proseCandidates = [];
commands.forEach(function (c) {
  if (documentsInput(c) || exampleCarriesInput(c)) return;
  const sentences = [c.summary, c.detail, c.note].concat(c.when || [])
    .map(plainText).join(' ').split(/(?<=[.!?])\s+/);
  const phrases = [];
  sentences.forEach(function (sentence) {
    if (NEGATION.test(sentence)) return;
    INPUT_HINTS.forEach(function (re) {
      const m = re.exec(sentence);
      if (m) phrases.push(m[0].trim().toLowerCase());
    });
  });
  if (!phrases.length) return;
  proseCandidates.push({
    surface: c.surface,
    command: c.cmd,
    key: c.key,
    phrases: [...new Set(phrases)]
  });
});

const coverage = S.surfaces.map(function (s) {
  const list = commands.filter(function (c) { return c.surface === s.id; });
  const documented = list.filter(documentsInput).length;
  return {
    surface: s.id,
    name: s.name,
    total: list.length,
    documented: documented,
    bare: list.length - documented,
    percentDocumented: list.length ? Math.round((documented / list.length) * 100) : 0
  };
});

const report = {
  totalCommands: commands.length,
  selfContradictions: selfContradictions,
  crossSurfaceInconsistencies: inconsistent,
  proseCandidates: proseCandidates,
  coverage: coverage
};

function labelWidth(list) {
  return list.reduce(function (max, row) {
    return Math.max(max, (row.surface + ' ' + row.command).length);
  }, 0) + 2;
}

if (jsonMode) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log('Argument documentation audit — ' + commands.length + ' commands\n');

  console.log('1. Self-contradictory: example types input the signature omits (' +
    selfContradictions.length + ')');
  if (!selfContradictions.length) {
    console.log('   none');
  } else {
    const width = labelWidth(selfContradictions);
    selfContradictions.forEach(function (row) {
      console.log('   ' + (row.surface + ' ' + row.command).padEnd(width) + row.example);
    });
  }

  console.log('\n2. Same product, documented on one surface but bare on another (' +
    inconsistent.length + ')');
  inconsistent.forEach(function (row) {
    console.log('   ' + productName[row.product] + '  ' + row.command);
    row.documented.forEach(function (d) {
      console.log('       ' + d.surface.padEnd(15) + d.args);
    });
    console.log('       bare: ' + row.bare.join(', '));
  });

  console.log('\n3. Prose hints at input (candidates for review, not defects) (' +
    proseCandidates.length + ')');
  if (proseCandidates.length) {
    const width = labelWidth(proseCandidates);
    proseCandidates.forEach(function (row) {
      console.log('   ' + (row.surface + ' ' + row.command).padEnd(width) +
        row.phrases.join(', '));
    });
  }

  console.log('\nInput documented per surface');
  coverage.forEach(function (row) {
    console.log('   ' + row.surface.padEnd(15) +
      String(row.documented + '/' + row.total).padEnd(8) +
      String(row.percentDocumented + '%').padStart(4) + '  ' + row.name);
  });

  console.log('\nA bare command is usually correct — most commands genuinely take nothing.');
  console.log('Only section 1 is a defect list; --strict gates on it alone.');
}

if (strictMode && selfContradictions.length) process.exit(1);
