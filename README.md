# Slash Command Atlas

An interactive reference for the slash commands of AI coding agents — **GitHub Copilot**, **Claude
Code** and **OpenAI Codex** — organized by product and by the surface you actually type them into,
because `/` gives you a different menu in a desktop app, a terminal, an editor extension, and the web.

**496 command entries across 14 surfaces and 3 products.** No build step, no dependencies, no framework.

---

## What it does

- **Explore by product and surface.** Pick an agent and one of its surfaces to see only that command
  set, with a short note on how it differs from its siblings.
- **Search everything.** Names, aliases, descriptions, arguments, subcommands, and examples. Typing
  `/yolo` finds `/allow-all` because it knows the aliases.
- **Filter by category and prerequisites.** Surface-relevant categories, plus a toggle for commands that work
  without an active session, a repository, or an open pull request.
- **Read the detail.** Every entry has a concise explanation and official source links; many add
  worked examples, use cases, gating conditions, related commands, and cross-surface equivalents.
- **Compare surfaces.** A matrix of command name × surface, with spanning product headers. Filled cells
  link to the surface-specific behavior; faint dots mean “not listed,” and question marks distinguish
  evidence-only subsets where the vendor does not publish an exhaustive surface table.
- **Deep links.** Every command has its own URL — `#/app/security-review` — so you can share one.
- **Continue in AI.** Copy a command&rsquo;s structured context or open it in ChatGPT, Claude,
  Gemini, or Perplexity for follow-up questions.
- **Light and dark**, keyboard shortcuts (`/` to search, `Esc` to close), and responsive down to
  phone width.

## Accessibility

The site was audited and meets WCAG 2.1 AA on the points that apply to it:

- **Contrast** — every text/background pair was measured programmatically in both themes across all
  views, including translucent `color-mix()` surfaces resolved through oklab and alpha compositing.
  All body text is at or above 4.5:1; the compare-table indicators meet the 3:1 non-text requirement.
- **Surface picker** — a full ARIA tab pattern: `role="tablist"`/`tab`/`tabpanel`, `aria-controls`,
  roving `tabindex`, and Arrow/Home/End navigation.
- **Detail panel** — a real modal. The rest of the page is marked `inert` while it is open, so Tab
  cannot escape it, and closing returns focus to the card that opened it.
- **Compare table** — `scope="col"` on column headers and `scope="row"` on every command name, so
  screen readers can announce which command and surface a cell belongs to.
- **Also** — skip link, visible focus rings, every interactive element has an accessible name, no
  duplicate IDs, no horizontal page scroll at 320px, and `prefers-reduced-motion` is honored.

## AI handoff and privacy

The command detail panel can open a new conversation in ChatGPT, Claude, or Perplexity with a short
prompt pointing to that command&rsquo;s generated Markdown page. Gemini does not support prompt-prefill
links, so its menu action copies the same fetch prompt before opening Gemini. The site has no AI API
keys, sends no background AI requests, and stores no conversation data. **Copy AI context** keeps the
complete command record on your clipboard so you can paste it into an installed app or any other
assistant.

Prompt-prefill URLs are conveniences offered by third-party web interfaces rather than stable APIs.
If a provider changes its behavior, use **Copy AI context** as the reliable fallback.

## Run it locally

It is a static site, so any web server works:

```bash
python3 -m http.server 4180
```

Then open <http://localhost:4180>.

## GitHub Pages

The public site is <https://codylindley.github.io/slash-command-atlas/>.

Pushes to `main` deploy automatically through
[`.github/workflows/pages.yml`](.github/workflows/pages.yml). The included `.nojekyll` file stops
Jekyll from touching the assets.

## Project layout

```
index.html                  Markup and view shells
assets/css/styles.css       All styling; light/dark via CSS custom properties
assets/js/app.js            Router, search, filtering, detail panel, compare table
assets/js/data/meta.js      Surfaces, categories, sources
assets/js/data/app.js       GitHub Copilot app commands (47)
assets/js/data/cli.js       GitHub Copilot CLI commands (71)
assets/js/data/editors.js   VS Code (32), JetBrains (7), Visual Studio (6), Xcode (5), web (4)
assets/js/data/claude-*.js  Claude Desktop Code tab (107), CLI (103), VS Code (8), web (10)
assets/js/data/codex-*.js   OpenAI Codex desktop (25), CLI (49), IDE extension (22)
data/commands.json          Generated machine-readable export
commands/{surface}/*.md     Generated, public Markdown page for every command
llms.txt                    AI-readable command index
llms-full.txt               Complete command reference in one Markdown document
tools/export-json.js        Validates and regenerates every machine-readable artifact
```

The data files are plain scripts that call `window.SLASH.register(surface, [...])`. Surface metadata
assigns every globally unique surface ID to a product; loading order is set in `index.html`.

## Editing the data

Add or change a command by editing the relevant file in `assets/js/data/`. Each record looks like:

```js
{
  key: 'security-review',            // URL slug, unique within the surface
  cmd: '/security-review',           // primary token
  aliases: ['/sec'],                 // optional
  args: '[PROMPT]',                  // optional
  cat: 'review',                     // key from window.SLASH.categories
  requires: 'Active session',        // optional gating condition
  flags: ['preview'],                // skill | workflow | custom | hidden | preview | experimental
  summary: 'One line.',              // shown on the card
  detail: 'A paragraph. May contain <code>markup</code>.',
  note: 'Rendered as a callout.',    // optional
  when: ['Bullet', 'Bullet'],        // optional
  examples: ['/security-review'],    // optional
  subs: [['reload', 'What it does']],// optional subcommand table
  related: ['review', 'pr-open'],    // keys within the same surface
  docs: [['Link title', 'https://…']]
}
```

`summary`, `detail`, `note`, `when` and `subs` descriptions are rendered as HTML, so they are trusted
content — keep them authored by hand rather than interpolating anything external.

After editing, regenerate the JSON and Markdown exports:

```bash
node tools/export-json.js
```

Verify that the committed export is current without rewriting it (the same check GitHub Pages runs
before deployment):

```bash
node tools/export-json.js --check
```

Check mode preserves the export's existing `generated` date while rebuilding in memory, so the
comparison is deterministic on later days.

### Cache busting

Asset URLs in `index.html` carry a `?v=N` query string. **Bump `N` on every deploy that changes CSS
or JS.** GitHub Pages serves HTML with a short cache lifetime but lets browsers hold onto assets, so
without this a returning visitor can end up running fresh HTML against a stale script — which fails
in confusing, hard-to-reproduce ways rather than cleanly.

## Where the data comes from

Command names, arguments, aliases, gating conditions and one-line descriptions are derived from
official documentation:

- [Slash commands for the GitHub Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)
- [Built-in skills for the GitHub Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [GitHub Copilot Chat cheat sheet](https://docs.github.com/en/copilot/reference/chat-cheat-sheet) (VS Code, Visual Studio, JetBrains, Xcode, github.com)
- [VS Code: GitHub Copilot cheat sheet](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)
- [Claude Code command reference](https://code.claude.com/docs/en/commands)
- [Claude Code Desktop](https://code.claude.com/docs/en/desktop)
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)
- [Claude Code in VS Code](https://code.claude.com/docs/en/ide-integrations)
- [Slash commands in the ChatGPT desktop app](https://learn.chatgpt.com/docs/reference/slash-commands)
- [OpenAI Codex CLI commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [OpenAI Codex IDE commands](https://learn.chatgpt.com/docs/developer-commands?surface=ide)

The longer explanations, "reach for it when" bullets and example prompts are editorial — written to
make the reference usable, not copied from the docs.

## Accuracy

This is a snapshot compiled on 2026-08-23. These products ship changes often, and availability also
depends on your plan, platform, provider, organization policies, feature rollout, and client version.
The authoritative answer for your setup is always the same: **type `/` in the prompt box** and read
the picker, or run the product&rsquo;s help command in the CLI.

## License

Authored by [Cody Lindley](https://codylindley.com/). This is an unofficial reference and is not
affiliated with GitHub, Microsoft, Anthropic or OpenAI.
GitHub and GitHub Copilot are trademarks of GitHub, Inc.; Claude and Claude Code are trademarks of
Anthropic; OpenAI and Codex are trademarks of OpenAI.

Throughout this project the product is called **GitHub Copilot**, never bare "Copilot" — Microsoft
ships several unrelated products under that word and none of them share this command set.
