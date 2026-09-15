# `/autopilot`

> Enables Autopilot for the current session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Session modes
- **Data snapshot:** 2026-09-14
- **Requires:** Supported local or Copilot CLI session

## What it does

Enables Autopilot for the current session.

Lets the agent continue until it considers the task complete, retrying errors and answering task questions that would otherwise block it. It skips ordinary tool approvals but does not disable an enabled terminal sandbox. In Agent Host sessions, enterprise-managed deny rules still block operations and ask rules still require human approval.

> **Note:** This is the VS Code session control, not a promise that the terminal CLI’s objective arguments or credit-cap options work here.

## Canonical example

`/autopilot`

## Related commands

- [`/exitAutopilot`](./exitAutopilot.md)
- [`/yolo`](./yolo.md)
- [`/plan`](./plan.md)

## Also in other surfaces

- [GitHub Copilot app — `/autopilot`](../app/autopilot.md)
- [GitHub Copilot CLI — `/autopilot`](../cli/autopilot.md)

## Official sources

- [VS Code AI features cheat sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)
- [Approvals and permissions](https://code.visualstudio.com/docs/agents/run/approvals)
- [Enterprise-managed permissions (GA, 2026-09-09)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/autopilot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
