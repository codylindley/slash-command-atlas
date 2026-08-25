# `/resume [SESSION]`

> Resumes a saved conversation by ID or name, or opens the picker.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/continue`
- **Flags:** inherited

## What it does

Resumes a saved conversation by ID or name, or opens the picker.

Background sessions appear with a `bg` marker. A background session that is still running must be attached from agent view or stopped before it can be resumed here.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/resume oauth-token-rotation`

## Related commands

- [`/clear`](./clear.md)
- [`/branch`](./branch.md)
- [`/rename`](./rename.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/resume`](../cli/resume.md)
- [Claude Code CLI — `/resume`](../claude-cli/resume.md)
- [Claude Code on the web — `/resume`](../claude-web/resume.md)
- [OpenAI Codex CLI — `/resume`](../codex-cli/resume.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/resume)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
