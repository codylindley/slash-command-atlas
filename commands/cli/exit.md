# `/exit`

> Closes the current session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/quit`

## What it does

Closes the current session.

If other sessions are running, this foregrounds the newest remaining one rather than quitting; the CLI only exits when this is the last open session. `/exit print` always tears the CLI down and offers to dump the transcript.

## Related commands

- [`/resume`](./resume.md)
- [`/session`](./session.md)
- [`/share`](./share.md)

## Also in other surfaces

- [Claude Code CLI — `/exit`](../claude-cli/exit.md)
- [Claude Desktop — Code tab — `/exit`](../claude-app/exit.md)
- [OpenAI Codex CLI — `/exit`](../codex-cli/exit.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/exit)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
