# `/security-review`

> Checks the current branch changes for security vulnerabilities.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Requires:** Git repository with an origin remote

## What it does

Checks the current branch changes for security vulnerabilities.

Reviews the diff against the origin default branch for risks such as injection, authorization failures, and data exposure.

## Canonical example

`/security-review`

## Related commands

- [`/code-review`](./code-review.md)
- [`/simplify`](./simplify.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [GitHub Copilot app — `/security-review`](../app/security-review.md)
- [GitHub Copilot CLI — `/security-review`](../cli/security-review.md)
- [Claude Desktop — Code tab — `/security-review`](../claude-app/security-review.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/security-review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
