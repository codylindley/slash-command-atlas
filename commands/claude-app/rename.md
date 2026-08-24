# `/rename [NAME]`

> Renames the current session, or generates a name from its history.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Flags:** inherited

## What it does

Renames the current session, or generates a name from its history.

Names appear in the prompt bar and session lists. Claude Code removes invisible control characters, caps names at 200 characters, and disambiguates a name already used by another live session.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/rename oauth-token-rotation`

## Related commands

- [`/color`](./color.md)
- [`/resume`](./resume.md)

## Also in other surfaces

- [GitHub Copilot app — `/rename`](../app/rename.md)
- [GitHub Copilot CLI — `/rename`](../cli/rename.md)
- [GitHub Copilot Chat on GitHub.com — `/rename`](../web/rename.md)
- [Claude Code CLI — `/rename`](../claude-cli/rename.md)
- [Claude Code on the web — `/rename`](../claude-web/rename.md)
- [OpenAI Codex CLI — `/rename`](../codex-cli/rename.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/rename)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
