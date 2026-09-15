# `/reset-allowed-tools`

> Clears session-level tool approvals and turns auto-approval off.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Requires:** Active session

## What it does

Clears session-level tool approvals and turns auto-approval off.

Clears approvals you granted for this session, including `/yolo`, and restores normal approval behavior. Enterprise-managed restrictions remain in force; this command neither resets nor relaxes administrator policies.

## Canonical example

`/reset-allowed-tools`

## Related commands

- [`/allow-all-tools`](./allow-all-tools.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/reset-allowed-tools`](../cli/reset-allowed-tools.md)

## Official sources

- [Enterprise-managed agent permissions (September 9, 2026)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/reset-allowed-tools)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
