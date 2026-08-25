# `/security-review [PROMPT]`

> Runs a focused security review of active local changes.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23

## What it does

Runs a focused security review of active local changes.

Returns prioritized vulnerability findings with remediation suggestions. This is explicitly not a full repository security audit — it looks at what you have changed.

## Canonical example

`/security-review focus on authentication and input validation`

## Related commands

- [`/review`](./review.md)
- [`/rubber-duck`](./rubber-duck.md)

## Also in other surfaces

- [GitHub Copilot app — `/security-review`](../app/security-review.md)
- [Claude Code CLI — `/security-review`](../claude-cli/security-review.md)
- [Claude Desktop — Code tab — `/security-review`](../claude-app/security-review.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/security-review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
