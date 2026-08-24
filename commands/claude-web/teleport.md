# `/teleport`

> Prints the exact CLI command for continuing this cloud session locally.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Cloud environment with Claude Code 2.1.223+

## What it does

Prints the exact CLI command for continuing this cloud session locally.

From inside the cloud session, this returns a ready-to-run `claude --teleport <session-id>` command. The actual branch fetch and conversation handoff happen after you run that command in a matching local checkout.

## Related commands

- [`/rename`](./rename.md)

## Also in other surfaces

- [Claude Code CLI — `/teleport`](../claude-cli/teleport.md)
- [Claude Desktop — Code tab — `/teleport`](../claude-app/teleport.md)

## Official sources

- [Claude Code on the web — web to terminal](https://code.claude.com/docs/en/claude-code-on-the-web#from-web-to-terminal)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/teleport)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
