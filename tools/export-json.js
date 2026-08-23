/* Regenerates data/commands.json from the browser data files.
   Usage: node tools/export-json.js [--check] */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const unknownArgs = args.filter(function (arg) { return arg !== '--check'; });
if (unknownArgs.length) {
  console.error('Unknown argument' + (unknownArgs.length > 1 ? 's' : '') + ': ' + unknownArgs.join(', '));
  console.error('Usage: node tools/export-json.js [--check]');
  process.exit(2);
}

const checkMode = args.includes('--check');
const rootDir = path.join(__dirname, '..');
const dataDir = path.join(rootDir, 'assets', 'js', 'data');
const dest = path.join(rootDir, 'data', 'commands.json');
const existingText = checkMode ? readExistingExport(dest) : null;
const generatedDate = checkMode
  ? readExistingGeneratedDate(existingText, dest)
  : new Date().toISOString().slice(0, 10);

global.window = {};
dataScriptsFromIndex(rootDir, dataDir).forEach(function (relativePath) {
  require(path.join(rootDir, relativePath));
});

const S = global.window.SLASH;
validate(S);

const surfaceById = Object.fromEntries(S.surfaces.map(function (s) { return [s.id, s]; }));
const NAMED_HTML_ENTITIES = Object.freeze({
  amp: '&',
  apos: "'",
  bull: '\u2022',
  copy: '\u00a9',
  gt: '>',
  hellip: '\u2026',
  laquo: '\u00ab',
  larr: '\u2190',
  ldquo: '\u201c',
  lsquo: '\u2018',
  mdash: '\u2014',
  middot: '\u00b7',
  nbsp: '\u00a0',
  ndash: '\u2013',
  quot: '"',
  raquo: '\u00bb',
  rarr: '\u2192',
  rdquo: '\u201d',
  reg: '\u00ae',
  rsquo: '\u2019',
  times: '\u00d7',
  trade: '\u2122',
  lt: '<'
});

const out = {
  schemaVersion: 2,
  generated: generatedDate,
  dataCompiled: S.built,
  products: S.products.map(function (p) {
    return { id: p.id, name: p.name, vendor: p.vendor };
  }),
  surfaces: S.surfaces.map(function (s) {
    return {
      id: s.id,
      product: s.product,
      name: s.name,
      label: s.label,
      coverage: s.coverage || 'documented-reference',
      where: s.where,
      docs: s.docs
    };
  }),
  categories: S.categories,
  sources: S.sources.map(function (s) { return { title: s[0], url: s[1] }; }),
  commands: S.commands.map(function (c) {
    const surface = surfaceById[c.surface];
    return {
      id: c.id,
      product: surface.product,
      surface: c.surface,
      command: c.cmd,
      aliases: c.aliases || [],
      arguments: c.args || null,
      category: c.cat,
      categoryLabel: S.categories[c.cat],
      requires: c.requires || null,
      flags: c.flags || [],
      comparisonEligible: !c.noCompare,
      summary: toPlainText(c.summary),
      summaryHtml: c.summary,
      subcommands: (c.subs || []).map(function (p) {
        return { name: p[0], description: toPlainText(p[1]) };
      }),
      examples: c.examples || [],
      related: c.related || [],
      docs: (c.docs || []).map(function (d) { return { title: d[0], url: d[1] }; })
    };
  })
};

function toPlainText(value) {
  return decodeHtmlEntities(String(value || '').replace(/<[^>]+>/g, '')).trim();
}

function decodeHtmlEntities(value) {
  return value.replace(/&(#(?:[xX][0-9a-fA-F]+|[0-9]+)|[A-Za-z][A-Za-z0-9]+);/g,
    function (match, entity) {
      if (entity.charAt(0) === '#') {
        const hex = entity.charAt(1).toLowerCase() === 'x';
        const digits = entity.slice(hex ? 2 : 1);
        const codePoint = parseInt(digits, hex ? 16 : 10);
        if (!Number.isInteger(codePoint) || codePoint < 0 || codePoint > 0x10ffff ||
            (codePoint >= 0xd800 && codePoint <= 0xdfff)) {
          return match;
        }
        return String.fromCodePoint(codePoint);
      }
      return Object.prototype.hasOwnProperty.call(NAMED_HTML_ENTITIES, entity)
        ? NAMED_HTML_ENTITIES[entity]
        : match;
    });
}

function dataScriptsFromIndex(projectRoot, sourceDir) {
  const indexPath = path.join(projectRoot, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const prefix = 'assets/js/data/';
  const scriptPattern = /<script\b[^>]*\bsrc\s*=\s*(["'])([^"']+)\1[^>]*>/gi;
  const indexScripts = [];
  let match;

  while ((match = scriptPattern.exec(indexHtml))) {
    const src = match[2].split(/[?#]/, 1)[0].replace(/^\.\//, '');
    if (src.startsWith(prefix)) indexScripts.push(src);
  }

  const diskScripts = fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(function (entry) { return entry.isFile() && entry.name.endsWith('.js'); })
    .map(function (entry) { return prefix + entry.name; })
    .sort();
  const indexSet = new Set(indexScripts);
  const diskSet = new Set(diskScripts);
  const errors = [];
  const duplicates = indexScripts.filter(function (src, i) { return indexScripts.indexOf(src) !== i; });
  const missingFromIndex = diskScripts.filter(function (src) { return !indexSet.has(src); });
  const missingFromDisk = indexScripts.filter(function (src) { return !diskSet.has(src); });

  if (duplicates.length) errors.push('Duplicate data script in index.html: ' + Array.from(new Set(duplicates)).join(', '));
  if (missingFromIndex.length) errors.push('Data file not loaded by index.html: ' + missingFromIndex.join(', '));
  if (missingFromDisk.length) errors.push('index.html loads a missing data file: ' + missingFromDisk.join(', '));
  if (indexScripts[0] !== prefix + 'meta.js') errors.push('index.html must load ' + prefix + 'meta.js first');

  if (errors.length) {
    throw new Error('Data-script loader parity check failed:\n- ' + errors.join('\n- '));
  }
  return indexScripts;
}

function readExistingExport(exportPath) {
  if (!fs.existsSync(exportPath)) {
    throw new Error('Cannot check missing export: ' + exportPath + '\nRun `node tools/export-json.js` first.');
  }
  return fs.readFileSync(exportPath, 'utf8');
}

function readExistingGeneratedDate(text, exportPath) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    throw new Error('Cannot check invalid JSON in ' + exportPath + ': ' + error.message);
  }
  if (!parsed || typeof parsed.generated !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(parsed.generated)) {
    throw new Error('Cannot check ' + exportPath + ': expected a generated date in YYYY-MM-DD format');
  }
  return parsed.generated;
}

function validate(data) {
  const allowedFlags = new Set([
    'skill', 'workflow', 'custom', 'hidden', 'preview', 'experimental', 'inherited', 'blocked'
  ]);
  const registryId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  const routeKey = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;
  const productIds = new Set();
  const surfaceIds = new Set();
  const commandIds = new Set();
  const commandKeys = new Set();
  const commandTokens = new Map();
  const errors = [];

  data.products.forEach(function (p) {
    if (!p.id || !p.name || !p.vendor) errors.push('Product is missing id, name, or vendor');
    if (!registryId.test(p.id || '')) errors.push('Product id is not route/DOM safe: ' + p.id);
    if (productIds.has(p.id)) errors.push('Duplicate product id: ' + p.id);
    productIds.add(p.id);
  });

  data.surfaces.forEach(function (s) {
    if (!s.id || !s.name || !s.label || !s.where || !s.color || !s.note) {
      errors.push('Surface is missing id, name, label, where, color, or note: ' + (s.id || '(unknown)'));
    }
    if (!registryId.test(s.id || '')) errors.push('Surface id is not route/DOM safe: ' + s.id);
    if (/['";<>]/.test(s.color || '')) errors.push('Unsafe surface color value on ' + s.id);
    if (surfaceIds.has(s.id)) errors.push('Duplicate surface id: ' + s.id);
    if (!productIds.has(s.product)) errors.push('Unknown product on surface ' + s.id + ': ' + s.product);
    if (s.coverage && s.coverage !== 'documented-subset' &&
        s.coverage !== 'unpublished-inventory') {
      errors.push('Unknown coverage value on surface ' + s.id + ': ' + s.coverage);
    }
    if (!/^https:\/\//.test(s.docs || '')) errors.push('Invalid docs URL on surface ' + s.id);
    surfaceIds.add(s.id);
  });

  data.commands.forEach(function (c) {
    const at = c.surface + '/' + c.key;
    if (!surfaceIds.has(c.surface)) errors.push('Unknown surface on command ' + at);
    if (!c.key || !c.cmd || !c.summary || !c.cat) {
      errors.push('Command is missing a required field: ' + at);
    }
    if (!routeKey.test(c.key || '')) errors.push('Command key is not route/DOM safe: ' + at);
    if (c.id !== c.surface + '-' + c.key) errors.push('Command id does not match surface/key: ' + at);
    if (typeof c.cmd !== 'string' || c.cmd.charAt(0) !== '/') errors.push('Command does not start with /: ' + at);
    if (!data.categories[c.cat]) errors.push('Unknown category on command ' + at + ': ' + c.cat);
    ['aliases', 'flags', 'related', 'docs', 'when', 'examples', 'subs'].forEach(function (field) {
      if (c[field] != null && !Array.isArray(c[field])) {
        errors.push('Command field must be an array (' + field + '): ' + at);
      }
    });
    (Array.isArray(c.flags) ? c.flags : []).forEach(function (flag) {
      if (!allowedFlags.has(flag)) errors.push('Unknown flag on command ' + at + ': ' + flag);
    });
    if (commandIds.has(c.id)) errors.push('Duplicate command id: ' + c.id);
    if (commandKeys.has(at)) errors.push('Duplicate command key: ' + at);
    [c.cmd].concat(Array.isArray(c.aliases) ? c.aliases : []).forEach(function (token) {
      if (typeof token !== 'string' || token.charAt(0) !== '/') {
        errors.push('Invalid command token on ' + at + ': ' + token);
        return;
      }
      const tokenAt = c.surface + '/' + String(token).toLowerCase();
      if (commandTokens.has(tokenAt) && commandTokens.get(tokenAt) !== c.id) {
        errors.push('Duplicate command token ' + tokenAt + ': ' + commandTokens.get(tokenAt) + ' and ' + c.id);
      }
      commandTokens.set(tokenAt, c.id);
    });
    (Array.isArray(c.docs) ? c.docs : []).forEach(function (doc) {
      if (!Array.isArray(doc) || doc.length !== 2 || !doc[0] || !/^https:\/\//.test(doc[1] || '')) {
        errors.push('Invalid docs entry on command ' + at);
      }
    });
    (Array.isArray(c.when) ? c.when : []).forEach(function (item) {
      if (typeof item !== 'string') errors.push('Invalid when entry on command ' + at);
    });
    (Array.isArray(c.examples) ? c.examples : []).forEach(function (item) {
      if (typeof item !== 'string') errors.push('Invalid example on command ' + at);
    });
    (Array.isArray(c.subs) ? c.subs : []).forEach(function (sub) {
      if (!Array.isArray(sub) || sub.length !== 2 || !sub[0] || typeof sub[1] !== 'string') {
        errors.push('Invalid subcommand entry on command ' + at);
      }
    });
    commandIds.add(c.id);
    commandKeys.add(at);
  });

  data.commands.forEach(function (c) {
    (Array.isArray(c.related) ? c.related : []).forEach(function (key) {
      if (typeof key !== 'string' || !routeKey.test(key)) {
        errors.push('Invalid related-command key from ' + c.surface + '/' + c.key + ': ' + key);
        return;
      }
      if (!commandKeys.has(c.surface + '/' + key)) {
        errors.push('Unknown related command from ' + c.surface + '/' + c.key + ': ' + key);
      }
    });
  });

  data.sources.forEach(function (source, i) {
    if (!Array.isArray(source) || source.length !== 2 || !source[0] || !/^https:\/\//.test(source[1] || '')) {
      errors.push('Invalid source entry at index ' + i);
    }
  });

  if (errors.length) {
    throw new Error('Data validation failed:\n- ' + errors.join('\n- '));
  }
}

const rendered = JSON.stringify(out, null, 2) + '\n';
if (checkMode) {
  if (rendered !== existingText) {
    console.error('Generated command data is out of date: ' + dest);
    console.error('Run `node tools/export-json.js` and commit the updated file.');
    process.exitCode = 1;
  } else {
    console.log('Command data is up to date (' + out.commands.length + ' commands)');
  }
} else {
  fs.writeFileSync(dest, rendered);
  console.log('Wrote ' + dest + ' (' + out.commands.length + ' commands)');
}
