# `/autocompact [auto|TOKENS]`

> Sets how full the context window gets before automatic compaction.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Context & input
- **Data snapshot:** 2026-08-23
- **Requires:** Claude Code 2.1.221+
- **Flags:** inherited

## What it does

Sets how full the context window gets before automatic compaction.

Pass a window such as `500k`, or `auto` to return to the model-tuned default. Without an argument the command opens a dialog showing the current value and saves changes to user settings.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/autocompact 500k`

## More examples

- `/autocompact auto`

## Related commands

- [`/compact`](./compact.md)
- [`/context`](./context.md)

## Also in other surfaces

- [Claude Code CLI — `/autocompact`](../claude-cli/autocompact.md)
- [Claude Code on the web — `/autocompact`](../claude-web/autocompact.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Explore the context window](https://code.claude.com/docs/en/context-window)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/autocompact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
