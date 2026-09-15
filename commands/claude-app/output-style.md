# `/output-style [NAME]`

> Lists output styles or switches to a named style.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code 2.1.269+
- **Flags:** inherited

## What it does

Lists output styles or switches to a named style.

Select a built-in or installed style to change Claude’s response role, tone, and format. The command was restored in 2.1.269, including text-based cloud, Remote Control, and headless use.

> **Note:** **Desktop inheritance:** the 2.1.269 release restores this engine command for headless sessions but does not name Desktop separately. The Desktop output-style guide still directs you to a settings file. Verify the slash handler in your installed app.

## Canonical example

`/output-style Concise`

## Related commands

- [`/config`](./config.md)
- [`/model`](./model.md)

## Also in other surfaces

- [Claude Code CLI — `/output-style`](../claude-cli/output-style.md)
- [Claude Code on the web — `/output-style`](../claude-web/output-style.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code 2.1.269 — output-style command restored](https://github.com/anthropics/claude-code/releases/tag/v2.1.269)
- [Output styles](https://code.claude.com/docs/en/output-styles)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/output-style)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
