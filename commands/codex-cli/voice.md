# `/voice [settings|mute|stop]`

> Starts or stops a live voice conversation in a supported preview build.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session modes
- **Data snapshot:** 2026-09-14
- **Requires:** 0.155.0-alpha.4 prerelease; voice-enabled main chat
- **Flags:** preview

## What it does

Starts or stops a live voice conversation in a supported preview build.

The bare command toggles live voice. Use `settings` to choose the voice for future voice conversations, `mute` to toggle the microphone, or `stop` to end voice without starting it again.

> **Note:** Source-backed prerelease behavior, not a stable `0.154.0` command or an entry in the prose reference. It also requires realtime conversation support and macOS, an MSVC-based Windows build, or a glibc-based Linux build.

## Canonical example

`/voice`

## More examples

- `/voice settings`
- `/voice mute`
- `/voice stop`

## Related commands

- [`/status`](./status.md)
- [`/model`](./model.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/voice`](../cli/voice.md)
- [Claude Code CLI — `/voice`](../claude-cli/voice.md)
- [Claude Desktop — Code tab — `/voice`](../claude-app/voice.md)

## Official sources

- [Codex CLI command source (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/slash_command.rs)
- [Codex CLI argument handling (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/chatwidget/slash_dispatch.rs)
- [Codex CLI voice requirements (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/chatwidget/realtime.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/voice)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
