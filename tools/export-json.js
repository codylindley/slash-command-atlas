/* Regenerates machine-readable command artifacts from the browser data files.
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

function buildCommandNameIndex(commands) {
  const index = new Map();
  commands.forEach(function (c) {
    if (c.noCompare) return;
    [c.cmd].concat(c.aliases || []).forEach(function (name) {
      const key = name.toLowerCase();
      if (!index.has(key)) index.set(key, []);
      index.get(key).push(c);
    });
  });
  return index;
}

function commandMarkdownPath(c) {
  return 'commands/' + c.surface + '/' + c.key + '.md';
}

function publicUrl(relativePath) {
  return new URL(relativePath, S.siteUrl).toString();
}

function interactiveUrl(c) {
  return new URL('#/' + c.surface + '/' + c.key, S.siteUrl).toString();
}

function commandNames(c) {
  return [c.cmd].concat(c.aliases || []);
}

function alsoIn(c) {
  if (c.noCompare) return [];
  const seen = new Set();
  const matches = [];
  commandNames(c).forEach(function (name) {
    (commandNameIndex.get(name.toLowerCase()) || []).forEach(function (other) {
      if (other.surface === c.surface || seen.has(other.id)) return;
      seen.add(other.id);
      matches.push(other);
    });
  });
  return matches;
}

function inlineCode(value) {
  return '`' + String(value).replace(/`/g, '\\`') + '`';
}

function renderCommandMarkdown(c, absoluteLinks, includeFooter) {
  const surface = surfaceById[c.surface];
  const product = productById[surface.product];
  const command = c.cmd + (c.args ? ' ' + c.args : '');
  const lines = [
    '# ' + inlineCode(command),
    '',
    '> ' + toMarkdownText(c.summary),
    '',
    '- **Product:** ' + product.name,
    '- **Surface:** ' + surface.name,
    '- **Category:** ' + S.categories[c.cat],
    '- **Data snapshot:** ' + S.built
  ];

  if (c.aliases && c.aliases.length) {
    lines.push('- **Aliases:** ' + c.aliases.map(inlineCode).join(', '));
  }
  if (c.requires) lines.push('- **Requires:** ' + toMarkdownText(c.requires));
  if (c.flags && c.flags.length) lines.push('- **Flags:** ' + c.flags.join(', '));

  lines.push('', '## What it does', '', toMarkdownText(c.summary));
  if (c.detail) lines.push('', toMarkdownText(c.detail));
  if (c.note) lines.push('', '> **Note:** ' + toMarkdownText(c.note));

  if (c.when && c.when.length) {
    lines.push('', '## Reach for it when', '');
    c.when.forEach(function (item) { lines.push('- ' + toMarkdownText(item)); });
  }
  if (c.subs && c.subs.length) {
    lines.push('', '## Subcommands', '');
    c.subs.forEach(function (sub) {
      lines.push('- ' + inlineCode(c.cmd.split(' ')[0] + ' ' + sub[0]) + ' — ' + toMarkdownText(sub[1]));
    });
  }
  if (c.canonicalExample) {
    lines.push('', '## Canonical example', '', inlineCode(c.canonicalExample));
  }
  if (c.examples && c.examples.length > 1) {
    lines.push('', '## More examples', '');
    c.examples.slice(1).forEach(function (example) { lines.push('- ' + inlineCode(example)); });
  }

  const related = (c.related || []).map(function (key) {
    return commandByRoute.get(c.surface + '/' + key);
  }).filter(Boolean);
  if (related.length) {
    lines.push('', '## Related commands', '');
    related.forEach(function (other) {
      const href = absoluteLinks
        ? publicUrl(commandMarkdownPath(other))
        : './' + other.key + '.md';
      lines.push('- [' + inlineCode(other.cmd) + '](' + href + ')');
    });
  }

  const otherSurfaces = alsoIn(c);
  if (otherSurfaces.length) {
    lines.push('', '## Also in other surfaces', '');
    otherSurfaces.forEach(function (other) {
      const otherSurface = surfaceById[other.surface];
      const href = absoluteLinks
        ? publicUrl(commandMarkdownPath(other))
        : '../' + other.surface + '/' + other.key + '.md';
      lines.push('- [' + otherSurface.name + ' — ' + inlineCode(other.cmd) +
        '](' + href + ')');
    });
  }

  const docs = [];
  const seenDocs = new Set();
  (c.docs || []).concat([[surface.name + ' slash command reference', surface.docs]]).forEach(function (doc) {
    if (!doc[1] || seenDocs.has(doc[1])) return;
    seenDocs.add(doc[1]);
    docs.push(doc);
  });
  lines.push('', '## Official sources', '');
  docs.forEach(function (doc) { lines.push('- [' + toMarkdownText(doc[0]) + '](' + doc[1] + ')'); });

  lines.push(
    '',
    '## Atlas links',
    '',
    '- [Interactive command view](' + interactiveUrl(c) + ')',
    '- [All commands as JSON](' + publicUrl('data/commands.json') + ')',
    '- [AI-readable command index](' + publicUrl('llms.txt') + ')'
  );
  if (includeFooter !== false) {
    lines.push(
      '',
      '---',
      '',
      'This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.'
    );
  }
  lines.push('');
  return lines.join('\n');
}

function renderLlmsIndex() {
  const lines = [
    '# Slash Command Atlas',
    '',
    '> An interactive reference for slash commands in GitHub Copilot, Claude Code, and OpenAI Codex, organized by product and surface.',
    '',
    'Use the per-command Markdown pages below for focused context. Vendor documentation linked from each page is authoritative.',
    '',
    '## Complete exports',
    '',
    '- [Complete Markdown reference](' + publicUrl('llms-full.txt') + ')',
    '- [Machine-readable JSON dataset](' + publicUrl('data/commands.json') + ')'
  ];

  S.surfaces.forEach(function (surface) {
    const commands = S.commands.filter(function (c) { return c.surface === surface.id; });
    lines.push('', '## ' + surface.name, '');
    if (!commands.length) {
      lines.push('No published command inventory is available for this surface.');
    }
    commands.forEach(function (c) {
      lines.push('- [' + inlineCode(c.cmd + (c.args ? ' ' + c.args : '')) + '](' +
        publicUrl(commandMarkdownPath(c)) + '): ' + toMarkdownText(c.summary));
    });
  });
  lines.push('');
  return lines.join('\n');
}

function renderLlmsFull() {
  const lines = [
    '# Slash Command Atlas — complete reference',
    '',
    '> All generated command pages in one document. Vendor documentation linked in each entry is authoritative.',
    ''
  ];
  S.surfaces.forEach(function (surface) {
    const commands = S.commands.filter(function (c) { return c.surface === surface.id; });
    lines.push('## ' + surface.name, '');
    if (!commands.length) {
      lines.push('No published command inventory is available for this surface.', '');
    }
    commands.forEach(function (c) {
      const command = renderCommandMarkdown(c, true, false)
        .replace(/^## /gm, '#### ')
        .replace(/^# /, '### ')
        .trim();
      lines.push(command, '', '---', '');
    });
  });
  return lines.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

const checkMode = args.includes('--check');
const rootDir = path.join(__dirname, '..');
const dataDir = path.join(rootDir, 'assets', 'js', 'data');
const jsonDest = path.join(rootDir, 'data', 'commands.json');
const commandsDest = path.join(rootDir, 'commands');
const llmsDest = path.join(rootDir, 'llms.txt');
const llmsFullDest = path.join(rootDir, 'llms-full.txt');
const existingText = checkMode ? readExistingExport(jsonDest) : null;
const generatedDate = checkMode
  ? readExistingGeneratedDate(existingText, jsonDest)
  : new Date().toISOString().slice(0, 10);

global.window = {};
dataScriptsFromIndex(rootDir, dataDir).forEach(function (relativePath) {
  require(path.join(rootDir, relativePath));
});

const S = global.window.SLASH;
validate(S);

const surfaceById = Object.fromEntries(S.surfaces.map(function (s) { return [s.id, s]; }));
const productById = Object.fromEntries(S.products.map(function (p) { return [p.id, p]; }));
const commandByRoute = new Map(S.commands.map(function (c) { return [c.surface + '/' + c.key, c]; }));
const commandNameIndex = buildCommandNameIndex(S.commands);
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
  schemaVersion: 3,
  generated: generatedDate,
  dataCompiled: S.built,
  siteUrl: S.siteUrl,
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
      canonicalExample: c.canonicalExample,
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

function toMarkdownText(value) {
  const codeSpans = [];
  let text = String(value || '').replace(/<(code|kbd)>([\s\S]*?)<\/\1>/gi,
    function (match, tag, content) {
      const token = '\u0000CODE' + codeSpans.length + '\u0000';
      codeSpans.push(inlineCode(decodeHtmlEntities(content.replace(/<[^>]+>/g, ''))));
      return token;
    });
  text = text
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, '**$2**')
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, '*$2*')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
    .replace(/<\/?p[^>]*>/gi, '');
  text = decodeHtmlEntities(text.replace(/<[^>]+>/g, '')).trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return text.replace(/\u0000CODE(\d+)\u0000/g, function (match, index) {
    return codeSpans[Number(index)];
  });
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
  if (indexScripts[1] !== prefix + 'examples.js') {
    errors.push('index.html must load ' + prefix + 'examples.js immediately after meta.js');
  }

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

  if (!/^https:\/\/.+\/$/.test(data.siteUrl || '')) {
    errors.push('siteUrl must be an absolute HTTPS URL ending in /');
  }

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
        s.coverage !== 'runtime-variable') {
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
      if (typeof item !== 'string' || !item.trim() || item.charAt(0) !== '/') {
        errors.push('Invalid example on command ' + at + ': ' + item);
      }
    });
    if (!c.canonicalExample || !Array.isArray(c.examples) || !c.examples.length) {
      errors.push('Command is missing a canonical example: ' + at);
    } else {
      if (c.examples[0] !== c.canonicalExample) {
        errors.push('Canonical example must be first on command ' + at);
      }
      const argumentPlaceholders = String(c.args || '').match(/\b[A-Z][A-Z0-9_-]*\b/g) || [];
      const exampleWords = c.canonicalExample.split(/\s+/);
      if (c.canonicalExample.includes('<') || c.canonicalExample.includes('[') ||
          c.canonicalExample.includes('{') ||
          argumentPlaceholders.some(function (placeholder) {
            return exampleWords.includes(placeholder);
          })) {
        errors.push('Canonical example contains a placeholder on command ' + at + ': ' + c.canonicalExample);
      }
      const knownNames = [c.cmd].concat(Array.isArray(c.aliases) ? c.aliases : []);
      const usesKnownName = knownNames.some(function (name) {
        return c.canonicalExample === name || c.canonicalExample.indexOf(name + ' ') === 0;
      });
      if (!(c.flags || []).includes('custom') && !usesKnownName) {
        errors.push('Canonical example must use a documented command name on ' + at + ': ' +
          c.canonicalExample);
      }
    }
    if (c.args && !c._exampleExplicit) {
      errors.push('Argument-bearing command needs an authored canonical example: ' + at);
    }
    (Array.isArray(c.subs) ? c.subs : []).forEach(function (sub) {
      if (!Array.isArray(sub) || sub.length !== 2 || !sub[0] || typeof sub[1] !== 'string') {
        errors.push('Invalid subcommand entry on command ' + at);
      }
    });
    commandIds.add(c.id);
    commandKeys.add(at);
  });

  if (!data.exampleOverrides || typeof data.exampleOverrides !== 'object' ||
      Array.isArray(data.exampleOverrides)) {
    errors.push('exampleOverrides must be an object');
  } else {
    Object.keys(data.exampleOverrides).forEach(function (at) {
      const values = [].concat(data.exampleOverrides[at]);
      if (!commandKeys.has(at)) errors.push('Example override targets an unknown command: ' + at);
      if (!values.length || values.some(function (value) {
        return typeof value !== 'string' || !value.trim() || value.charAt(0) !== '/';
      })) {
        errors.push('Invalid example override on ' + at);
      }
    });
  }

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

const renderedJson = JSON.stringify(out, null, 2) + '\n';
const generatedArtifacts = [
  { file: jsonDest, content: renderedJson },
  { file: llmsDest, content: renderLlmsIndex() },
  { file: llmsFullDest, content: renderLlmsFull() }
].concat(S.commands.map(function (c) {
  return {
    file: path.join(commandsDest, c.surface, c.key + '.md'),
    content: renderCommandMarkdown(c)
  };
}));

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(function (entry) {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });
}

function writeArtifact(artifact) {
  fs.mkdirSync(path.dirname(artifact.file), { recursive: true });
  fs.writeFileSync(artifact.file, artifact.content);
}

const expectedCommandFiles = new Set(generatedArtifacts
  .filter(function (artifact) { return artifact.file.startsWith(commandsDest + path.sep); })
  .map(function (artifact) { return artifact.file; }));
const unexpectedCommandFiles = listFiles(commandsDest).filter(function (file) {
  return !expectedCommandFiles.has(file);
});

function removeEmptyDirectories(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entry) {
    if (entry.isDirectory()) removeEmptyDirectories(path.join(dir, entry.name));
  });
  if (dir !== commandsDest && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

if (checkMode) {
  const stale = generatedArtifacts.filter(function (artifact) {
    return !fs.existsSync(artifact.file) || fs.readFileSync(artifact.file, 'utf8') !== artifact.content;
  });
  if (stale.length || unexpectedCommandFiles.length) {
    if (stale.length) {
      console.error('Generated artifacts are out of date:\n- ' +
        stale.map(function (artifact) { return path.relative(rootDir, artifact.file); }).join('\n- '));
    }
    if (unexpectedCommandFiles.length) {
      console.error('Unexpected generated command pages:\n- ' +
        unexpectedCommandFiles.map(function (file) { return path.relative(rootDir, file); }).join('\n- '));
    }
    console.error('Run `node tools/export-json.js` and commit the updated files.');
    process.exitCode = 1;
  } else {
    console.log('Command artifacts are up to date (' + out.commands.length + ' command pages)');
  }
} else {
  generatedArtifacts.forEach(writeArtifact);
  unexpectedCommandFiles.forEach(function (file) { fs.unlinkSync(file); });
  removeEmptyDirectories(commandsDest);
  console.log('Wrote command artifacts (' + out.commands.length + ' command pages)');
}
