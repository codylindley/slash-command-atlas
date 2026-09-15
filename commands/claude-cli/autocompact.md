# `/autocompact [auto|TOKENS]`

> Sets how full the context window gets before automatic compaction.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code 2.1.221+

## What it does

Sets how full the context window gets before automatic compaction.

Pass a window from 100K to 1M tokens, such as `500k`, or `auto` for the model-tuned default. The value is capped at the model’s context size and saved to user settings. Run bare for a dialog; an environment or higher-priority settings override can prevent a saved change from taking effect.

## Canonical example

`/autocompact 500k`

## More examples

- `/autocompact auto`

## Related commands

- [`/compact`](./compact.md)
- [`/context`](./context.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/autocompact`](../claude-app/autocompact.md)
- [Claude Code on the web — `/autocompact`](../claude-web/autocompact.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Model configuration](https://code.claude.com/docs/en/model-config)
- [Explore the context window](https://code.claude.com/docs/en/context-window)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/autocompact)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
