# `/undo`

> Opens the rewind picker to roll the session back to an earlier turn.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/rewind`

## What it does

Opens the rewind picker to roll the session back to an earlier turn.

Choose **Conversation only** to roll back the discussion while leaving files as they are, or **Conversation + files** to also restore the files Copilot changed in that turn and any later discarded turns — skipping any you have edited yourself since. File changes are tracked per turn across editing tools, shell commands and subagents, so this does not require Git.

## Related commands

- [`/session`](./session.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [Claude Code CLI — `/rewind`](../claude-cli/rewind.md)
- [Claude Desktop — Code tab — `/rewind`](../claude-app/rewind.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/undo)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
