# `/share [link|off|file|html|gist|research] [...]`

> Shares or exports the current session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Aliases:** `/export`

## What it does

Shares or exports the current session.

With no subcommand it generates a shareable GitHub link when you are logged in and synced, falling back to Markdown file export otherwise. Exports can cover the session transcript or a research report specifically.

## Subcommands

- `/share link / link off` — Explicit link sharing, and stopping it
- `/share off` — Stop sharing
- `/share file [session|research] [PATH]` — Export to Markdown
- `/share html [session|research] [PATH]` — Export to HTML
- `/share gist [session|research]` — Create a GitHub gist
- `/share research [PATH]` — Export the research report

## Canonical example

`/share file session`

## Related commands

- [`/research`](./research.md)
- [`/copy`](./copy.md)
- [`/exit`](./exit.md)

## Also in other surfaces

- [Claude Code CLI — `/bug`](../claude-cli/bug.md)
- [Claude Desktop — Code tab — `/bug`](../claude-app/bug.md)
- [OpenAI Codex in the ChatGPT desktop app — `/share`](../codex-app/share.md)
- [Claude Code CLI — `/export`](../claude-cli/export.md)
- [Claude Desktop — Code tab — `/export`](../claude-app/export.md)
- [OpenAI Codex CLI — `/export`](../codex-cli/export.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/share)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
