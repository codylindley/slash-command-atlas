# `/simplify [TARGET]`

> Finds cleanup opportunities in changed code and applies them.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Flags:** skill

## What it does

Finds cleanup opportunities in changed code and applies them.

Four agents inspect reuse, clarity, efficiency, and abstraction level in parallel. Current versions deliberately do not look for correctness bugs; pair it with `/code-review` for that.

## Reach for it when

- A feature works but the implementation feels more complicated than necessary
- You want a focused cleanup pass before review

## Canonical example

`/simplify src/auth`

## Related commands

- [`/code-review`](./code-review.md)
- [`/security-review`](./security-review.md)
- [`/verify`](./verify.md)

## Also in other surfaces

- [GitHub Copilot Chat in Xcode — `/simplify`](../xcode/simplify.md)
- [Claude Desktop — Code tab — `/simplify`](../claude-app/simplify.md)

## Official sources

- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/simplify)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
