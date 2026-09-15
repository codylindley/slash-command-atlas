# `/skill-doctor`

> Reports skill context costs and usage to help identify unused extensions.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-09-14
- **Requires:** Feature-flag fetching; a current Claude Code build
- **Flags:** inherited

## What it does

Reports skill context costs and usage to help identify unused extensions.

The interactive report opens the plugin manager’s Stats tab; a non-interactive `-p` run prints text. It excludes bundled and enterprise skills. A command forwarded through Remote Control is refused: run it on the host machine instead.

> **Note:** Anthropic’s command and skills guides specify 2.1.252+, while the changelog announces this command in 2.1.261. Use a current build if it is missing.

**Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/skill-doctor`

## Related commands

- [`/skills`](./skills.md)
- [`/doctor`](./doctor.md)
- [`/context`](./context.md)

## Also in other surfaces

- [Claude Code CLI — `/skill-doctor`](../claude-cli/skill-doctor.md)
- [Claude Code on the web — `/skill-doctor`](../claude-web/skill-doctor.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/skill-doctor)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
