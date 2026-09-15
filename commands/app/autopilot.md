# `/autopilot [PROMPT]`

> Switches into Autopilot mode and optionally starts execution.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session modes
- **Data snapshot:** 2026-09-14

## What it does

Switches into Autopilot mode and optionally starts execution.

The agent writes code, runs tests and iterates without waiting for routine input. It works best on well-specified work with a clear pass/fail signal, because a test suite is what tells it whether it is finished. A common pattern is to run `/plan` first, approve the plan, then hand execution to Autopilot.

> **Note:** Autopilot controls how independently the agent works; tool approvals and enterprise-managed restrictions are separate controls. Do not assume switching modes grants every tool permission.

## Reach for it when

- Dependency upgrades and other mechanical migrations
- Tasks with an unambiguous success check, like a green test suite
- Long-running chores you do not want to babysit

## Canonical example

`/autopilot upgrade to React 19 and get the test suite passing`

## Related commands

- [`/plan`](./plan.md)
- [`/interactive`](./interactive.md)
- [`/allow-all-tools`](./allow-all-tools.md)
- [`/fleet`](./fleet.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)
- [GitHub Copilot Chat in VS Code — `/autopilot`](../vscode/autopilot.md)

## Official sources

- [Choosing a session mode](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode)
- [Enterprise-managed agent permissions (September 9, 2026)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/autopilot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
