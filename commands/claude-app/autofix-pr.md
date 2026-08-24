# `/autofix-pr [PROMPT]`

> Starts a cloud session that watches this branch’s pull request.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Pull requests
- **Data snapshot:** 2026-08-23
- **Requires:** gh CLI, open PR, and Claude Code on the web

## What it does

Starts a cloud session that watches this branch’s pull request.

The cloud agent reacts to CI failures and review comments and pushes clear fixes. By default it handles every failure and comment; an optional prompt narrows its remit.

## Examples

- `/autofix-pr only fix lint and type errors`

## Related commands

- [`/code-review`](./code-review.md)
- [`/teleport`](./teleport.md)
- [`/web-setup`](./web-setup.md)

## Also in other surfaces

- [Claude Code CLI — `/autofix-pr`](../claude-cli/autofix-pr.md)

## Official sources

- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/autofix-pr)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
