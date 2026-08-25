# `/design-sync [NAME-HINT]`

> Uploads a React design system so Claude Design uses real components.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Requires:** Anthropic API connection and Claude Design access
- **Flags:** skill

## What it does

Uploads a React design system so Claude Design uses real components.

Verifies and converts the repository’s component library before synchronization. A first upload can take hours for a large design system.

## Canonical example

`/design-sync component-library`

## Related commands

- [`/design-login`](./design-login.md)
- [`/dataviz`](./dataviz.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/design-sync`](../claude-app/design-sync.md)

## Official sources

- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/design-sync)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
