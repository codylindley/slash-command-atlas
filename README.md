# Slash Command Atlas

An interactive reference for the slash commands of AI coding agents — **GitHub Copilot**, **Claude
Code** and **OpenAI Codex** — organized by product and by the surface you actually type them into,
because `/` gives you a different menu in a desktop app, a terminal, an editor extension, and the web.

**517 command entries across 14 surfaces and 3 products.** No build step, no dependencies, no framework.

---

## What it does

- **Explore by product and surface.** Pick an agent and one of its surfaces to see only that command
  set, with a short note on how it differs from its siblings.
- **Search everything.** Names, aliases, descriptions, arguments, subcommands, and examples. Typing
  `/yolo` finds `/allow-all` because it knows the aliases.
- **Filter by category and prerequisites.** Surface-relevant categories, plus a toggle for commands that work
  without an active session, a repository, or an open pull request.
- **Read the detail.** Every entry has a concise explanation, a canonical common-case example, and
  official source links; many add variants, use cases, gating conditions, related commands, and
  cross-surface equivalents.
- **Compare surfaces.** A matrix of command name × surface, with spanning product headers. Filled cells
  link to the surface-specific behavior; faint dots mean “not listed,” and question marks mark
  evidence-only subsets where the vendor's documentation is not exhaustive.
- **Deep links.** Every command has its own URL — `#/app/security-review` — so you can share one.
- **Continue in AI.** Copy a command&rsquo;s self-contained prompt, or choose ChatGPT, Claude,
  Gemini, or Perplexity to copy that same prompt and open a new conversation.
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

Every AI handoff uses a self-contained prompt assembled from the complete command record: product and
surface, prerequisites, availability markers, explanation, examples, subcommands, related commands,
cross-surface differences, and official sources. It does not depend on an assistant being able to fetch
the Atlas page. **Copy prompt** puts that prompt on the clipboard. **Discuss in AI** lets you choose
ChatGPT, Claude, Gemini, or Perplexity, then copies the same prompt and opens a new conversation so you
can paste it.

The site has no AI API keys, sends no background AI requests, and stores no conversation data.

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
assets/js/data/examples.js  Canonical examples for argument-heavy or ambiguous commands
assets/js/data/app.js       GitHub Copilot app commands (47)
assets/js/data/cli.js       GitHub Copilot CLI commands (72)
assets/js/data/editors.js   VS Code (32), JetBrains (7), Visual Studio (9), Xcode (5), web (4)
assets/js/data/claude-*.js  Claude Desktop Code tab (107), CLI (103), IDE extension (9), web (18)
assets/js/data/codex-*.js   OpenAI Codex desktop (26), CLI (54), IDE (24), web (0 published)
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
  flags: ['preview'],                // also inherited and blocked; see the site legend
  summary: 'One line.',              // shown on the card
  detail: 'A paragraph. May contain <code>markup</code>.',
  note: 'Rendered as a callout.',    // optional
  when: ['Bullet', 'Bullet'],        // optional
  examples: ['/security-review'],    // optional; first entry is canonical
  subs: [['reload', 'What it does']],// optional subcommand table
  related: ['review', 'pr-open'],    // keys within the same surface
  docs: [['Link title', 'https://…']]
}
```

`summary`, `detail`, `note`, `when` and `subs` descriptions are rendered as HTML, so they are trusted
content — keep them authored by hand rather than interpolating anything external.

Every command receives a canonical example. Strong inline `examples` arrays are kept, while
`assets/js/data/examples.js` supplies or corrects examples for argument-heavy, dynamic, and ambiguous
commands. A command that normally opens a picker or acts on the current editor selection falls back
to its bare token. Argument-bearing commands must have an authored example, enforced by the exporter.
In the version 3 JSON schema, `canonicalExample` is also the first item in the ordered `examples`
array; any remaining items are optional variants.

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
first-party documentation and, where a published table lags, first-party source code. Rule-derived
Desktop entries are visibly marked as inherited rather than presented as individually documented:

- [Slash commands for the GitHub Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)
- [Built-in skills for the GitHub Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [GitHub Copilot Chat cheat sheet](https://docs.github.com/en/copilot/reference/chat-cheat-sheet) (Visual Studio, JetBrains, Xcode, github.com)
- [VS Code AI features cheat sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)
- [Visual Studio: customize chat responses](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio)
- [GitHub Copilot agent in JetBrains IDEs](https://www.jetbrains.com/help/ai-assistant/copilot-agent.html)
- [Claude Code command reference](https://code.claude.com/docs/en/commands)
- [Claude Code Desktop](https://code.claude.com/docs/en/desktop)
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)
- [Claude Code Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Claude Code in VS Code](https://code.claude.com/docs/en/vs-code)
- [Slash commands in the ChatGPT desktop app](https://learn.chatgpt.com/docs/reference/slash-commands)
- [OpenAI Codex CLI commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli)
- [OpenAI Codex IDE commands](https://learn.chatgpt.com/docs/developer-commands?surface=ide)
- [OpenAI Codex commands on the web](https://learn.chatgpt.com/docs/developer-commands?surface=web)
- [OpenAI Codex CLI slash-command source](https://github.com/openai/codex/blob/main/codex-rs/tui/src/slash_command.rs)

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
