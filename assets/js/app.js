/* Slash Command Atlas — view logic.
   No dependencies, no build step. Everything is driven off window.SLASH. */

(function () {
  'use strict';

  var S          = window.SLASH;
  var SURFACES   = S.surfaces;
  var PRODUCTS   = S.products;
  var CATS       = S.categories;
  var BY_ID      = {};
  var BY_SURFACE = {};
  var NAME_INDEX = {};   // "/plan" -> [command, command…]

  var state = { surface: 'app', query: '', cats: [], noReq: false, open: null, view: 'explore' };
  var lastTriggerId = null;   // command whose card opened the detail panel
  var pendingTabFocus = false; // move focus to the selected surface tab after re-render

  /* ---------------------------------------------------------------- utils */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function stripTags(s) { return String(s || '').replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' '); }

  /* Highlight query matches without breaking markup or HTML entities. */
  function hl(html, q) {
    if (!q || q.length < 2) return html;
    var re = new RegExp('(' + escRe(q) + ')', 'ig');
    return String(html).split(/(<[^>]+>|&[a-z]+;)/g).map(function (part) {
      return (part.charAt(0) === '<' || part.charAt(0) === '&')
        ? part
        : part.replace(re, '<mark>$1</mark>');
    }).join('');
  }

  function surfaceOf(id) {
    for (var i = 0; i < SURFACES.length; i++) if (SURFACES[i].id === id) return SURFACES[i];
    return SURFACES[0];
  }
  function names(c) { return [c.cmd].concat(c.aliases || []); }

  /* "Desktop app" is ambiguous once several products each ship one. */
  function surfaceTitle(s) {
    if (PRODUCTS.length < 2) return s.label;
    return s.name;
  }

  function coverageLabel(s) {
    if (s.coverage === 'documented-subset') return 'documented subset';
    if (s.coverage === 'unpublished-inventory') return 'inventory not published';
    return '';
  }

  function coverageAbsence(s) {
    return s.coverage === 'unpublished-inventory'
      ? 'No command inventory is published for this surface'
      : 'Not documented in the published subset';
  }

  /* ---------------------------------------------------------------- index */

  function buildIndex() {
    S.commands.forEach(function (c) {
      BY_ID[c.id] = c;
      (BY_SURFACE[c.surface] = BY_SURFACE[c.surface] || []).push(c);

      if (!c.noCompare) {
        names(c).forEach(function (n) {
          var k = n.toLowerCase();
          (NAME_INDEX[k] = NAME_INDEX[k] || []).push(c);
        });
      }

      c._hay = [
        names(c).join(' '), c.args || '', c.summary || '', stripTags(c.detail || ''),
        (c.when || []).join(' '), (c.examples || []).join(' '),
        (c.subs || []).map(function (s) { return s.join(' '); }).join(' '),
        stripTags(c.note || ''), CATS[c.cat] || '', c.requires || ''
      ].join('   ').toLowerCase();
    });
  }

  function score(c, q) {
    var n = c.cmd.toLowerCase(), bare = n.replace(/^\//, '');
    if (n === q || bare === q) return 100;
    if (bare.indexOf(q.replace(/^\//, '')) === 0) return 80;
    if ((c.aliases || []).some(function (a) { return a.toLowerCase().indexOf(q) === 0; })) return 70;
    if (n.indexOf(q) > -1) return 60;
    if ((c.summary || '').toLowerCase().indexOf(q) > -1) return 40;
    if (c._hay.indexOf(q) > -1) return 20;
    return 0;
  }

  /* Alphabetical by command name, ignoring the leading slash. */
  function byName(a, b) {
    return sortKey(a).localeCompare(sortKey(b), 'en');
  }
  /* Wildcard placeholders like /<skill name> sort to the end, not the top. */
  function sortKey(c) {
    var n = c.cmd.replace(/^\//, '').toLowerCase();
    return n.charAt(0) === '<' ? '￿' + n : n;
  }

  function visible() {
    var list = (BY_SURFACE[state.surface] || []).slice();
    var q = state.query.trim().toLowerCase();

    if (state.cats.length) {
      list = list.filter(function (c) { return state.cats.indexOf(c.cat) > -1; });
    }
    if (state.noReq) {
      list = list.filter(function (c) { return !c.requires; });
    }
    if (q) {
      return list.map(function (c) { return { c: c, s: score(c, q) }; })
                 .filter(function (r) { return r.s > 0; })
                 .sort(function (a, b) { return b.s - a.s || byName(a.c, b.c); })
                 .map(function (r) { return r.c; });
    }
    return list.sort(byName);
  }

  /* ---------------------------------------------------- surface + filters */

  function makeTab(s) {
    var n = (BY_SURFACE[s.id] || []).length;
    var selected = s.id === state.surface;
    var coverage = coverageLabel(s);
    var b = el('button', 'surface-card');
    b.type = 'button';
    b.id = 'tab-' + s.id;
    b.dataset.surface = s.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'results');
    b.setAttribute('aria-selected', String(selected));
    b.tabIndex = selected ? 0 : -1;
    b.style.setProperty('--sc', s.color);
    b.innerHTML =
      '<span class="sr-only">' + esc(surfaceTitle(s)) + ': </span>' +
      '<span class="sc-name"><span class="sc-dot"></span>' + esc(s.label) + '</span>' +
      '<span class="sc-where">' + esc(s.where) + '</span>' +
      '<span class="sc-count"><b>' + n + '</b> command' + (n === 1 ? '' : 's') +
      (coverage ? ' shown <span class="sc-coverage">' + esc(coverage) + '</span>' : '') + '</span>';
    b.addEventListener('click', function () {
      if (s.id === state.surface) return;
      pendingTabFocus = true;
      go('#/' + s.id);
    });
    b.addEventListener('keydown', onTabKey);
    return b;
  }

  function renderSurfaces() {
    var box = $('#surface-picker');
    box.innerHTML = '';

    /* One product: a flat grid reads better. Several: group them, because
       "Desktop app" is ambiguous once three products each ship one. */
    if (PRODUCTS.length < 2) {
      box.setAttribute('role', 'tablist');
      box.setAttribute('aria-label', 'Coding agent surfaces');
      SURFACES.forEach(function (s) { box.appendChild(makeTab(s)); });
    } else {
      /* This remains one tab widget with one active panel. Product wrappers
         are visual grouping only; every tab has its full product-aware name. */
      box.setAttribute('role', 'tablist');
      box.setAttribute('aria-label', 'Coding agent surfaces, grouped by product');
      PRODUCTS.forEach(function (p) {
        var mine = SURFACES.filter(function (s) { return s.product === p.id; });
        if (!mine.length) return;
        var total = mine.reduce(function (a, s) { return a + (BY_SURFACE[s.id] || []).length; }, 0);
        var grp = el('div', 'product-group');
        grp.setAttribute('role', 'presentation');
        var headingId = 'product-' + p.id + '-heading';
        grp.innerHTML = '<h2 class="product-name" id="' + headingId + '" aria-hidden="true">' + esc(p.name) +
          ' <span class="product-count">' + total + ' commands across ' + mine.length +
          ' surface' + (mine.length === 1 ? '' : 's') + '</span></h2>';
        var row = el('div', 'product-surfaces');
        row.setAttribute('role', 'presentation');
        mine.forEach(function (s) { row.appendChild(makeTab(s)); });
        grp.appendChild(row);
        box.appendChild(grp);
      });

      /* Flex rows replace the stacked picker on phones. Keep a deep-linked
         or keyboard-selected surface in view without moving the page itself. */
      if (window.matchMedia('(max-width: 620px)').matches) {
        var chosen = box.querySelector('.surface-card[aria-selected="true"]');
        if (chosen && chosen.parentElement) {
          var rowBox = chosen.parentElement;
          rowBox.scrollLeft += chosen.getBoundingClientRect().left -
            rowBox.getBoundingClientRect().left - 3;
        }
      }
    }
    var panel = $('#results');
    panel.setAttribute('aria-labelledby', 'tab-' + state.surface);

    /* Arrow-key navigation changes the hash, which re-renders these buttons.
       Focus has to be applied to the new element, not the one we just replaced. */
    if (pendingTabFocus) {
      pendingTabFocus = false;
      var sel = $('#tab-' + state.surface);
      if (sel) sel.focus();
    }
  }

  /* Arrow-key navigation between surface tabs. */
  function onTabKey(e) {
    var keys = { ArrowRight: 1, ArrowLeft: -1 };
    var current = surfaceOf(e.currentTarget.dataset.surface);
    var tabs = SURFACES;
    var i = tabs.findIndex(function (s) { return s.id === current.id; });
    var next;
    if (keys[e.key]) next = (i + keys[e.key] + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    pendingTabFocus = true;
    go('#/' + tabs[next].id);
  }

  function renderNote() {
    var s = surfaceOf(state.surface), note = $('#surface-note');
    note.style.setProperty('--sc', s.color);
    note.innerHTML =
      '<div><p><strong>' + esc(s.name) + '</strong> &mdash; ' + esc(s.where) + '</p>' +
      s.note +
      '<p><a href="' + esc(s.docs) + '" target="_blank" rel="noopener">Official reference for this surface &rarr;</a></p></div>';
  }

  function renderChips() {
    var box  = $('#category-chips');
    var list = BY_SURFACE[state.surface] || [];
    var counts = {};
    list.forEach(function (c) { counts[c.cat] = (counts[c.cat] || 0) + 1; });

    box.innerHTML = '';
    var all = el('button', 'chip');
    all.type = 'button';
    all.textContent = 'All';
    all.setAttribute('aria-pressed', String(state.cats.length === 0));
    all.appendChild(el('span', 'chip-n', String(list.length)));
    all.addEventListener('click', function () { state.cats = []; render(); });
    box.appendChild(all);

    Object.keys(CATS).filter(function (k) { return counts[k]; }).forEach(function (k) {
      var b = el('button', 'chip');
      b.type = 'button';
      b.textContent = CATS[k];
      b.setAttribute('aria-pressed', String(state.cats.indexOf(k) > -1));
      b.appendChild(el('span', 'chip-n', String(counts[k])));
      b.addEventListener('click', function () {
        var i = state.cats.indexOf(k);
        if (i > -1) state.cats.splice(i, 1); else state.cats.push(k);
        render();
      });
      box.appendChild(b);
    });
  }

  /* ------------------------------------------------------------- badges */

  function badges(c, opts) {
    var out = [];
    if (!opts || !opts.noCat) out.push('<span class="badge badge-cat">' + esc(CATS[c.cat] || '') + '</span>');
    if (c.requires)  out.push('<span class="badge badge-req">Requires: ' + esc(c.requires) + '</span>');
    (c.flags || []).forEach(function (f) {
      if (f === 'skill')        out.push('<span class="badge badge-skill">Built-in skill</span>');
      if (f === 'workflow')     out.push('<span class="badge badge-workflow">Bundled workflow</span>');
      if (f === 'custom')       out.push('<span class="badge badge-custom">Dynamic command</span>');
      if (f === 'hidden')       out.push('<span class="badge badge-hidden">Hidden from menu</span>');
      if (f === 'preview')      out.push('<span class="badge badge-preview">Preview</span>');
      if (f === 'experimental') out.push('<span class="badge badge-exp">Experimental</span>');
      if (f === 'inherited')    out.push('<span class="badge badge-inherited">Inherited built-in</span>');
      if (f === 'blocked')      out.push('<span class="badge badge-blocked">Not available here</span>');
    });
    (c.aliases || []).forEach(function (a) {
      out.push('<span class="badge badge-alias">' + esc(a) + '</span>');
    });
    return out.join('');
  }

  /* -------------------------------------------------------------- cards */

  function renderCards() {
    var wrap = $('#results');
    var list = visible();
    var s    = surfaceOf(state.surface);
    var q    = state.query.trim();
    var total = (BY_SURFACE[state.surface] || []).length;

    wrap.innerHTML = '';
    list.forEach(function (c) {
      var b = el('button', 'cmd-card');
      b.type = 'button';
      b.style.setProperty('--sc', s.color);
      b.dataset.id = c.id;
      if (state.open === c.id) b.classList.add('is-active');
      b.innerHTML =
        '<span class="cmd-head"><span class="cmd-name">' + hl(esc(c.cmd), q) + '</span>' +
        (c.args ? '<span class="cmd-args">' + esc(c.args) + '</span>' : '') + '</span>' +
        '<p class="cmd-summary">' + hl(c.summary, q) + '</p>' +
        '<span class="cmd-tags">' + badges(c) + '</span>';
      b.addEventListener('click', function () { go('#/' + c.surface + '/' + c.key); });
      wrap.appendChild(b);
    });

    $('#result-count').textContent =
      list.length + (list.length === 1 ? ' command' : ' commands') +
      (list.length !== total ? ' of ' + total : '');
    var empty = $('#empty-state');
    empty.innerHTML = total === 0
      ? 'The vendor confirms a slash menu exists here, but does not publish its command inventory. ' +
        'See the surface note above for the first-party source.'
      : 'No commands match that search. ' +
        '<button type="button" class="linkish" data-reset-filters>Reset the filters</button>';
    empty.hidden = list.length > 0;
  }

  /* ------------------------------------------------------- detail panel */

  function alsoIn(c) {
    var seen = {}, out = [];
    names(c).forEach(function (n) {
      (NAME_INDEX[n.toLowerCase()] || []).forEach(function (o) {
        if (o.surface === c.surface || seen[o.id]) return;
        seen[o.id] = 1;
        out.push(o);
      });
    });
    return out;
  }

  function exampleHTML(x) {
    var m = x.match(/^(\/[\w-]+(?:\s+[a-z-]+)?)(.*)$/);
    return m
      ? '<code class="example"><span class="ex-cmd">' + esc(m[1]) + '</span>' + esc(m[2]) + '</code>'
      : '<code class="example">' + esc(x) + '</code>';
  }

  function openDetail(c) {
    var s     = surfaceOf(c.surface);
    var panel = $('#detail');
    var box   = $('#detail-body');
    panel.style.setProperty('--sc', s.color);

    $('#detail-surface').innerHTML = '<span class="sc-dot"></span>' + esc(s.name);
    $('#detail-title').innerHTML = esc(c.cmd) +
      (c.args ? ' <span class="t-args">' + esc(c.args) + '</span>' : '');

    var h = '';
    h += '<div class="detail-badges">' + badges(c) + '</div>';

    h += '<div class="copy-row">' +
         '<button class="copy-btn" type="button" data-copy="' + esc(c.cmd) + '">' +
         '<span>Copy</span> <code>' + esc(c.cmd) + '</code></button></div>';

    h += '<h3>What it does</h3><p>' + c.summary + '</p>';
    if (c.detail) h += '<p>' + c.detail + '</p>';
    if (c.note)   h += '<div class="callout">' + c.note + '</div>';

    if (c.subs && c.subs.length) {
      h += '<h3>Subcommands</h3><ul>';
      c.subs.forEach(function (p) {
        h += '<li><code>' + esc(c.cmd.split(' ')[0]) + ' ' + esc(p[0]) + '</code> &mdash; ' + p[1] + '</li>';
      });
      h += '</ul>';
    }

    if (c.when && c.when.length) {
      h += '<h3>Reach for it when</h3><ul>';
      c.when.forEach(function (w) { h += '<li>' + w + '</li>'; });
      h += '</ul>';
    }

    if (c.examples && c.examples.length) {
      h += '<h3>Example' + (c.examples.length > 1 ? 's' : '') + '</h3>';
      c.examples.forEach(function (x) { h += exampleHTML(x); });
    }

    var also = alsoIn(c);
    h += '<h3>Also in other surfaces</h3>';
    if (also.length) {
      h += '<div class="also-in">';
      also.forEach(function (o) {
        var os = surfaceOf(o.surface);
        h += '<button class="also-btn" type="button" data-goto="' + esc(o.id) + '">' +
             '<span class="sc-dot" style="background:' + os.color + '"></span>' +
             '<span><span class="also-name">' + esc(surfaceTitle(os)) + '</span> &middot; ' +
             '<span class="also-sum">' + esc(stripTags(o.summary)) + '</span></span></button>';
      });
      h += '</div>';
    } else {
      h += '<p style="color:var(--text-muted);font-size:14px">Nothing by this name elsewhere &mdash; ' +
           'no other indexed surface currently lists it.</p>';
    }

    var rel = (c.related || []).map(function (k) { return BY_ID[c.surface + '-' + k]; })
                               .filter(Boolean);
    if (rel.length) {
      h += '<h3>Related commands</h3><div class="related-list">';
      rel.forEach(function (o) {
        h += '<button class="related-btn" type="button" data-goto="' + esc(o.id) + '">' + esc(o.cmd) + '</button>';
      });
      h += '</div>';
    }

    h += '<h3>Documentation</h3><div class="doc-links">';
    var seenDocs = {};
    (c.docs || []).concat([[s.name + ' — slash command reference', s.docs]])
      .filter(function (d) {
        if (seenDocs[d[1]]) return false;
        seenDocs[d[1]] = true;
        return true;
      }).forEach(function (d) {
      var host = '';
      try { host = new URL(d[1]).hostname.replace(/^www\./, ''); } catch (e) {}
      h += '<a class="doc-link" href="' + esc(d[1]) + '" target="_blank" rel="noopener">' +
           '<span>' + esc(d[0]) + '</span><span class="dl-host">' + esc(host) + ' &nearr;</span></a>';
      });
    h += '</div>';

    box.innerHTML = h;
    panel.hidden = false;
    $('#scrim').hidden = false;
    document.body.classList.add('no-scroll');
    panel.scrollTop = 0;
    lastTriggerId = c.id;
    setBackgroundInert(true);
    setTimeout(function () { $('.detail-close').focus(); }, 30);
  }

  /* The dialog claims aria-modal, so the rest of the page must actually be
     unreachable — otherwise Tab walks straight out of it. */
  var INERT_SELECTOR = '.site-header, #view-explore, #view-compare, #view-about, .site-footer';
  function setBackgroundInert(on) {
    document.querySelectorAll(INERT_SELECTOR).forEach(function (n) {
      if (on) n.setAttribute('inert', '');
      else n.removeAttribute('inert');
    });
  }

  function hidePanel() {
    $('#detail').hidden = true;
    $('#scrim').hidden = true;
    document.body.classList.remove('no-scroll');
    setBackgroundInert(false);
  }

  function closeDetail() {
    if ($('#detail').hidden) return;
    var returnTo = lastTriggerId;
    hidePanel();
    state.open = null;
    if (location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).length > 1) {
      go('#/' + state.surface, true);
    } else {
      renderCards();
    }
    restoreFocus(returnTo);
  }

  /* Send focus back to the card that opened the panel, not to <body>. */
  function restoreFocus(id) {
    lastTriggerId = null;
    if (!id) return;
    var card = document.querySelector('.cmd-card[data-id="' + id + '"]');
    if (card) card.focus();
    else $('#results').focus();
  }

  /* ------------------------------------------------------------ compare */

  function renderCompare() {
    var rows = {};
    Object.keys(NAME_INDEX).forEach(function (n) {
      rows[n] = {};
      NAME_INDEX[n].forEach(function (c) { rows[n][c.surface] = c; });
    });

    var q      = ($('#compare-search').value || '').trim().toLowerCase();
    var shared = $('#compare-shared').checked;

    var list = Object.keys(rows).filter(function (n) {
      if (q && n.indexOf(q) === -1) return false;
      if (shared && Object.keys(rows[n]).length < 2) return false;
      return true;
    }).sort(function (a, b) {
      return a.replace(/^\//, '').localeCompare(b.replace(/^\//, ''), 'en');
    });

    /* Derive one canonical column order and reuse it for colgroups, headers,
       and body cells so product spans can never drift from the data columns. */
    var productColumns = [];
    var columnSurfaces = [];
    PRODUCTS.forEach(function (p) {
      var mine = SURFACES.filter(function (s) { return s.product === p.id; });
      if (!mine.length) return;
      productColumns.push({ product: p, surfaces: mine });
      columnSurfaces = columnSurfaces.concat(mine);
    });

    var h = '<colgroup class="cmp-command-col"><col></colgroup>';
    productColumns.forEach(function (g) {
      h += '<colgroup span="' + g.surfaces.length + '"></colgroup>';
    });
    h += '<thead>';
    if (productColumns.length > 1) {
      h += '<tr class="cmp-products"><th class="cmp-command-head" scope="col" rowspan="2">Command</th>';
      productColumns.forEach(function (g) {
        h += '<th scope="colgroup" colspan="' + g.surfaces.length + '">' + esc(g.product.name) + '</th>';
      });
      h += '</tr><tr>';
    } else {
      h += '<tr><th class="cmp-command-head" scope="col">Command</th>';
    }
    columnSurfaces.forEach(function (s) {
      var coverage = coverageLabel(s);
      h += '<th class="cmp-surface-head" scope="col" aria-label="' +
        esc(surfaceTitle(s) + (coverage ? ', ' + coverage : '')) + '">' + esc(s.label) +
        (coverage
          ? '<span class="cmp-subset">' + esc(coverage) + '</span>' : '') + '</th>';
    });
    h += '</tr></thead><tbody>';

    list.forEach(function (n) {
      h += '<tr><th scope="row" class="cmp-name">' + esc(n) + '</th>';
      columnSurfaces.forEach(function (s) {
        var c = rows[n][s.id];
        h += '<td class="cmp-cell">' + (c
          ? '<button class="cmp-dot" type="button" style="--sc:' + s.color + '" data-goto="' + esc(c.id) +
            '" title="' + esc(stripTags(c.summary)) + '" aria-label="' +
            esc(surfaceTitle(s) + ': ' + stripTags(c.summary)) + '">&#9679;</button>'
          : coverageLabel(s)
            ? '<span class="cmp-unknown" role="img" aria-label="' + esc(coverageAbsence(s)) + '" ' +
              'title="' + esc(coverageAbsence(s)) + '">?</span>'
            : '<span class="cmp-none" aria-hidden="true">&middot;</span>') + '</td>';
      });
      h += '</tr>';
    });
    h += '</tbody>';

    var t = $('#compare-table');
    t.innerHTML = '<caption class="sr-only">Slash command availability by agent and surface</caption>' + h;
    t.onclick = function (e) {
      var g = e.target.closest('[data-goto]');
      if (!g) return;
      var c = BY_ID[g.dataset.goto];
      if (c) go('#/' + c.surface + '/' + c.key);
    };
  }

  /* ------------------------------------------------------------- router */

  function go(hash, replace) {
    if (replace) {
      history.replaceState(null, '', hash);
      route();
    } else if (location.hash === hash) {
      route();
    } else {
      location.hash = hash;
    }
  }

  function route() {
    var parts = (location.hash || '#/app').replace(/^#\/?/, '').split('/').filter(Boolean);
    var head  = parts[0] || 'app';
    var previousView = state.view;

    if (head === 'compare' || head === 'about') {
      state.view = head;
      state.open = null;
      hidePanel();
      showView(head);
      if (head === 'compare') renderCompare();
      if (previousView !== head) window.scrollTo(0, 0);
      return;
    }

    state.view = 'explore';
    showView('explore');

    var knownSurface = SURFACES.some(function (s) { return s.id === head; });
    if (!knownSurface) {
      go('#/' + SURFACES[0].id, true);
      return;
    }
    if (head !== state.surface) { state.surface = head; state.cats = []; }

    var cmd = parts[1] ? BY_ID[state.surface + '-' + parts[1]] : null;
    if (parts[1] && !cmd) {
      go('#/' + state.surface, true);
      return;
    }
    state.open = cmd ? cmd.id : null;

    render();
    if (previousView !== 'explore') window.scrollTo(0, 0);
    if (cmd) openDetail(cmd);
    else hidePanel();
  }

  function showView(v) {
    $('#view-explore').hidden = v !== 'explore';
    $('#view-compare').hidden = v !== 'compare';
    $('#view-about').hidden   = v !== 'about';
    document.querySelectorAll('.header-nav a').forEach(function (a) {
      if (a.dataset.nav === v) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function render() {
    renderSurfaces();
    renderNote();
    renderChips();
    renderCards();
  }

  /* --------------------------------------------------------------- misc */

  function isDarkNow() {
    var cur = document.documentElement.getAttribute('data-theme');
    return cur === 'dark' ||
      (cur !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  var SUN  = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">' +
             '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-8.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 8 2.75Zm0 9.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM2.75 8a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 2.75 8Zm9.5 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM3.75 3.75a.75.75 0 0 1 1.06 0l.7.7a.75.75 0 1 1-1.06 1.07l-.7-.71a.75.75 0 0 1 0-1.06Zm6.73 6.73a.75.75 0 0 1 1.06 0l.71.7a.75.75 0 1 1-1.06 1.07l-.71-.71a.75.75 0 0 1 0-1.06Zm1.77-6.73a.75.75 0 0 1 0 1.06l-.71.71a.75.75 0 1 1-1.06-1.07l.71-.7a.75.75 0 0 1 1.06 0ZM5.52 10.48a.75.75 0 0 1 0 1.06l-.7.71a.75.75 0 0 1-1.07-1.06l.71-.71a.75.75 0 0 1 1.06 0Z"/></svg>';
  var MOON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">' +
             '<path d="M9.6 1.34a.75.75 0 0 1 .3.9 5.5 5.5 0 0 0 6.32 7.3.75.75 0 0 1 .86 1.02A7.5 7.5 0 1 1 8.7 1.06a.75.75 0 0 1 .9.28Zm-1.5 1.4a6 6 0 1 0 6.55 8.5A7 7 0 0 1 8.1 2.74Z"/></svg>';

  function paintThemeIcon() {
    $('[data-theme-icon]').innerHTML = isDarkNow() ? SUN : MOON;
  }
  function initTheme() {
    var saved = localStorage.getItem('slash-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    paintThemeIcon();
    $('#theme-toggle').addEventListener('click', function () {
      var next = isDarkNow() ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('slash-theme', next);
      paintThemeIcon();
    });
  }

  function initAbout() {
    var ul = $('#source-list');
    S.sources.forEach(function (s) {
      var li = el('li');
      li.innerHTML = '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a>';
      ul.appendChild(li);
    });
    $('#build-stamp').textContent =
      'Command data compiled ' + S.built + ' · ' + S.commands.length +
      ' commands across ' + SURFACES.length + ' surfaces from ' +
      PRODUCTS.length + (PRODUCTS.length === 1 ? ' product.' : ' products.');
  }

  /* Counts in prose go stale the moment the data changes, so derive them. */
  function initStats() {
    var stat = $('#hero-stat');
    if (!stat) return;
    stat.textContent = S.commands.length + ' commands, ' + SURFACES.length +
      ' surfaces, ' + PRODUCTS.length + (PRODUCTS.length === 1 ? ' product.' : ' products.') + ' ';
  }

  function initEvents() {
    var t;
    $('#search').addEventListener('input', function (e) {
      clearTimeout(t);
      var v = e.target.value;
      $('#search-clear').hidden = !v;
      t = setTimeout(function () { state.query = v; renderCards(); }, 110);
    });
    $('#search-clear').addEventListener('click', function () {
      $('#search').value = ''; state.query = '';
      $('#search-clear').hidden = true;
      $('#search').focus(); renderCards();
    });
    $('#filter-noreq').addEventListener('change', function (e) {
      state.noReq = e.target.checked; renderCards();
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('[data-reset-filters]')) return;
      state.query = ''; state.cats = []; state.noReq = false;
      $('#search').value = ''; $('#filter-noreq').checked = false;
      $('#search-clear').hidden = true;
      render();
    });

    $('#compare-search').addEventListener('input', renderCompare);
    $('#compare-shared').addEventListener('change', renderCompare);
    $('#scrim').addEventListener('click', closeDetail);
    $('.detail-close').addEventListener('click', closeDetail);

    /* Delegated once, rather than rebound on every open. */
    $('#detail-body').addEventListener('click', function (e) {
      var g = e.target.closest('[data-goto]');
      if (g) { var t = BY_ID[g.dataset.goto]; if (t) go('#/' + t.surface + '/' + t.key); return; }
      var cp = e.target.closest('[data-copy]');
      if (!cp) return;
      /* Absent on insecure origins (e.g. served over plain HTTP from a LAN address). */
      if (!navigator.clipboard) { cp.disabled = true; return; }
      var flash = function (label, cls) {
        var sp = $('span', cp);
        if (sp) sp.textContent = label;
        if (cls) cp.classList.add(cls);
        setTimeout(function () {
          if (cls) cp.classList.remove(cls);
          var s2 = $('span', cp);
          if (s2) s2.textContent = 'Copy';
        }, 1400);
      };
      navigator.clipboard.writeText(cp.dataset.copy).then(
        function () { flash('Copied', 'done'); },
        function () { flash('Copy failed', 'failed'); }
      );
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDetail(); return; }
      var tag = document.activeElement ? document.activeElement.tagName : '';
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(tag);
      if (e.key === '/' && !typing && state.view === 'explore') {
        e.preventDefault(); $('#search').focus(); $('#search').select();
      }
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (state.view !== 'explore') go('#/' + state.surface);
        $('#search').focus(); $('#search').select();
      }
    });

    window.addEventListener('hashchange', route);
  }

  /* --------------------------------------------------------------- boot */

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('load', function () { window.scrollTo(0, 0); }, { once: true });
  buildIndex();
  initTheme();
  initAbout();
  initStats();
  initEvents();
  route();
})();
