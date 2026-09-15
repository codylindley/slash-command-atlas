# `/skill-doctor`

> Is refused over Remote Control; run skill usage reports on the host machine.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-09-14
- **Flags:** blocked

## What it does

Is refused over Remote Control; run skill usage reports on the host machine.

Anthropic documents a connection-specific refusal for this command from a phone or browser. In a local interactive terminal it opens the plugin manager’s Stats tab; a directly invoked `-p` session prints text instead.

> **Note:** This is an explicit Remote Control restriction. The direct headless text form does not separately establish cloud-browser support.

## Canonical example

`/skill-doctor`

## Related commands

- [`/usage`](./usage.md)
- [`/context`](./context.md)

## Also in other surfaces

- [Claude Code CLI — `/skill-doctor`](../claude-cli/skill-doctor.md)
- [Claude Desktop — Code tab — `/skill-doctor`](../claude-app/skill-doctor.md)

## Official sources

- [Skill usage reports and Remote Control limits](https://code.claude.com/docs/en/skills#find-unused-skills)
- [Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/skill-doctor)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
