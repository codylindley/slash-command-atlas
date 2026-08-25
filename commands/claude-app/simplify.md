# `/simplify [TARGET]`

> Finds cleanup opportunities in changed code and applies them.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Flags:** skill, inherited

## What it does

Finds cleanup opportunities in changed code and applies them.

Four agents inspect reuse, clarity, efficiency, and abstraction level in parallel. Current versions deliberately do not look for correctness bugs; pair it with `/code-review` for that.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

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
- [Claude Code CLI — `/simplify`](../claude-cli/simplify.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/simplify)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
