# `/rename [NAME]`

> Renames the current session, or generates a name from its history.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23

## What it does

Renames the current session, or generates a name from its history.

Names appear in the prompt bar and session lists. Claude Code removes invisible control characters, caps names at 200 characters, and disambiguates a name already used by another live session.

## Examples

- `/rename oauth-token-rotation`

## Related commands

- [`/color`](./color.md)
- [`/resume`](./resume.md)

## Also in other surfaces

- [GitHub Copilot app — `/rename`](../app/rename.md)
- [GitHub Copilot CLI — `/rename`](../cli/rename.md)
- [GitHub Copilot Chat on GitHub.com — `/rename`](../web/rename.md)
- [Claude Desktop — Code tab — `/rename`](../claude-app/rename.md)
- [Claude Code on the web — `/rename`](../claude-web/rename.md)
- [OpenAI Codex CLI — `/rename`](../codex-cli/rename.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/rename)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
