/* Audits how well each command documents what you can type after the token.

   The data model has one `args` string per command, so an empty value is
   ambiguous: it can mean "takes nothing", "opens a picker", "wants a secondary
   verb", or "we simply never wrote the arguments down". This tool surfaces the
   cases where that ambiguity is demonstrably a gap rather than a design choice.

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
const dataDir = path.join(rootDir, 'assets', 'js', 'data');

/* Phrases that imply a command consumes something after the token. Deliberately
   conservative: these describe taking input, not merely doing work. */
const INPUT_HINTS = [
  /\boptional(ly)?\b/i,
  /\bpass (a|an|the|it|your|in)\b/i,
  /\bargument\b/i,
  /\bfollowed by\b/i,
  /\benables? or disables?\b/i,
  /\bon or off\b/i,
  /\bsubcommand/i,
  /\btakes? (a|an|the)\b/i,
  /\bspecify\b/i,
  /\baccepts?\b/i
];

/* Several entries describe a command explicitly *not* taking input — Desktop's
   `/config` "accepts no key=value form" is the canonical case. Matching on the
   verb alone would report those as gaps when they are the opposite. */
const NEGATION = /\b(no|not|never|cannot|can't|doesn't|does not|isn't|ignores?|ignored|without|unlike)\b/i;
const NEGATION_WINDOW = 40;

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

function prose(c) {
  return [c.summary, c.detail, c.note].concat(c.when || []).map(plainText).join(' ');
}

function takesInput(c) {
  return Boolean(c.args) || Boolean((c.subs || []).length);
}

global.window = {};
dataScriptsFromIndex(rootDir).forEach(function (relativePath) {
  require(path.join(rootDir, relativePath));
});

const S = global.window.SLASH;
const commands = S.commands;
const surfaceName = {};
S.surfaces.forEach(function (s) { surfaceName[s.id] = s.name; });

/* Finding 1: the same token documents arguments on one surface but nothing on
   another. Either the bare entry is under-documented or the difference is real
   and deserves an explicit note. */
const byToken = {};
commands.forEach(function (c) {
  if (c.noCompare) return;
  (byToken[c.cmd] = byToken[c.cmd] || []).push(c);
});

const inconsistent = [];
Object.keys(byToken).sort().forEach(function (token) {
  const list = byToken[token];
  if (list.length < 2) return;
  const documented = list.filter(takesInput);
  const bare = list.filter(function (c) { return !takesInput(c); });
  if (!documented.length || !bare.length) return;
  inconsistent.push({
    command: token,
    documented: documented.map(function (c) {
      return { surface: c.surface, args: c.args || '(subcommands only)' };
    }),
    bare: bare.map(function (c) { return c.surface; })
  });
});

/* Finding 2: a command documents no input, but its own prose says otherwise. */
const proseConflicts = [];
commands.forEach(function (c) {
  if (takesInput(c)) return;
  const text = prose(c);
  const matched = [];
  INPUT_HINTS.forEach(function (re) {
    const m = re.exec(text);
    if (!m) return;
    const from = Math.max(0, m.index - NEGATION_WINDOW);
    const to = Math.min(text.length, m.index + m[0].length + NEGATION_WINDOW);
    if (NEGATION.test(text.slice(from, to))) return;
    matched.push(m[0].trim().toLowerCase());
  });
  if (!matched.length) return;
  proseConflicts.push({
    surface: c.surface,
    command: c.cmd,
    key: c.key,
    phrases: [...new Set(matched)]
  });
});

/* Coverage, so a surface that documents nothing at all is visible. */
const coverage = S.surfaces.map(function (s) {
  const list = commands.filter(function (c) { return c.surface === s.id; });
  const documented = list.filter(takesInput).length;
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
  crossSurfaceInconsistencies: inconsistent,
  proseImpliesInput: proseConflicts,
  coverage: coverage
};

if (jsonMode) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log('Argument documentation audit — ' + commands.length + ' commands\n');

  console.log('Input documented per surface');
  coverage.forEach(function (row) {
    const bar = String(row.documented + '/' + row.total).padEnd(8);
    console.log('  ' + row.surface.padEnd(15) + bar + String(row.percentDocumented + '%').padStart(4) +
      '  ' + row.name);
  });

  console.log('\nSame command, arguments on one surface but bare on another (' +
    inconsistent.length + ')');
  if (!inconsistent.length) {
    console.log('  none');
  } else {
    inconsistent.forEach(function (row) {
      console.log('  ' + row.command);
      row.documented.forEach(function (d) {
        console.log('      ' + d.surface.padEnd(15) + d.args);
      });
      console.log('      bare: ' + row.bare.join(', '));
    });
  }

  console.log('\nDocuments no input, but its own prose implies input (' +
    proseConflicts.length + ')');
  if (!proseConflicts.length) {
    console.log('  none');
  } else {
    const labelWidth = proseConflicts.reduce(function (max, row) {
      return Math.max(max, (row.surface + ' ' + row.command).length);
    }, 0) + 2;
    proseConflicts.forEach(function (row) {
      console.log('  ' + (row.surface + ' ' + row.command).padEnd(labelWidth) +
        'implied by: ' + row.phrases.join(', '));
    });
  }

  console.log('\nThis audit is advisory. A bare command is often correct — many commands');
  console.log('genuinely take nothing. Findings mark where the data contradicts itself.');
}

if (strictMode && (inconsistent.length || proseConflicts.length)) process.exit(1);
