# `/exit`

> Runs the local CLI’s exit action through Remote Control.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14

## What it does

Runs the local CLI’s exit action through Remote Control.

This acts on the session running on your machine, not just the browser tab. An ordinary CLI session exits; an attached background session detaches and keeps running.

> **Note:** Explicitly listed for web/mobile Remote Control. Anthropic does not separately document it as a cloud-session exit command.

## Canonical example

`/exit`

## Related commands

- [`/clear`](./clear.md)
- [`/resume`](./resume.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/exit`](../cli/exit.md)
- [Claude Code CLI — `/exit`](../claude-cli/exit.md)
- [Claude Desktop — Code tab — `/exit`](../claude-app/exit.md)
- [OpenAI Codex CLI — `/exit`](../codex-cli/exit.md)

## Official sources

- [Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/exit)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
