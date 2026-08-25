# `/security-review`

> Runs a security-focused review against the current diff.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Requires:** Active session with changes
- **Flags:** preview

## What it does

Runs a security-focused review against the current diff.

Scans your in-progress changes for high-confidence vulnerabilities and returns prioritized findings with severity and confidence scores, plus suggested fixes you can apply and verify in the same session. It is an on-demand check on local changes, not a repository-wide audit — it complements code scanning, Dependabot and secret scanning rather than replacing them.

## Reach for it when

- Before opening a PR that touches authentication, input handling or crypto
- After accepting a large agent-written diff you have not read line by line

## Canonical example

`/security-review`

## Related commands

- [`/review`](./review.md)
- [`/pr-open`](./pr-open.md)
- [`/rubber-duck`](./rubber-duck.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/security-review`](../cli/security-review.md)
- [Claude Code CLI — `/security-review`](../claude-cli/security-review.md)
- [Claude Desktop — Code tab — `/security-review`](../claude-app/security-review.md)

## Official sources

- [Using /security-review in app sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#using-security-review-in-app-sessions)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/security-review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
