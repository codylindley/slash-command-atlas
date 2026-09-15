# `/btw`

> Opens a side conversation while the primary chat continues.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** A primary chat in the Agents window

## What it does

Opens a side conversation while the primary chat continues.

The side chat shares the primary chat’s context and prompt cache. Use it to branch into a side discussion without stopping the primary chat’s work.

> **Note:** This is the Agents window’s side-chat action, not the terminal CLI’s `/btw QUESTION` helper. No CLI-style question argument or alias is assumed here.

## Canonical example

`/btw`

## Related commands

- [`/fork`](./fork.md)
- [`/compact`](./compact.md)

## Also in other surfaces

- [GitHub Copilot app — `/ask`](../app/ask.md)
- [GitHub Copilot CLI — `/ask`](../cli/ask.md)
- [Claude Code CLI — `/btw`](../claude-cli/btw.md)
- [Claude Desktop — Code tab — `/btw`](../claude-app/btw.md)
- [Claude Code in VS Code — `/btw`](../claude-vscode/btw.md)
- [OpenAI Codex CLI — `/side`](../codex-cli/side.md)

## Official sources

- [VS Code August releases: 1.132–1.135 (2026-08-31)](https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/)
- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/btw)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
