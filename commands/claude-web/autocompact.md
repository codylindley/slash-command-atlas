# `/autocompact [auto|TOKENS]`

> Changes the auto-compact window for this cloud environment.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** Claude Code 2.1.221+

## What it does

Changes the auto-compact window for this cloud environment.

Pass a token count, or `auto` to restore the model-tuned window. With no argument, web and mobile print the current window size instead of opening a terminal dialog. The command only takes effect when `CLAUDE_CODE_AUTO_COMPACT_WINDOW` is not already set in the cloud environment; the web-managed percentage override remains separate.

## Examples

- `/autocompact 500k`

## Related commands

- [`/compact`](./compact.md)
- [`/context`](./context.md)

## Also in other surfaces

- [Claude Code CLI — `/autocompact`](../claude-cli/autocompact.md)
- [Claude Desktop — Code tab — `/autocompact`](../claude-app/autocompact.md)

## Official sources

- [Claude Code on the web — manage context](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/autocompact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
