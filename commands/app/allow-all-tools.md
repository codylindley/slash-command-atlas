# `/allow-all-tools`

> Turns tool auto-approval on, or shows its current state.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Aliases:** `/yolo`
- **Requires:** Active session

## What it does

Turns tool auto-approval on, or shows its current state.

Enables session tool auto-approval so eligible operations can run without per-call prompts. It does not isolate shell access or file writes: even a disposable worktree can run commands that affect files elsewhere.

> **Note:** Enterprise-managed deny and ask rules take precedence over auto-approval and previously saved approvals. These controls became generally available in the app on 2026-09-09. Use `/reset-allowed-tools` to clear session approvals; it does not change administrator policies.

## Canonical example

`/allow-all-tools`

## Related commands

- [`/reset-allowed-tools`](./reset-allowed-tools.md)
- [`/autopilot`](./autopilot.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/allow-all`](../cli/allow-all.md)
- [GitHub Copilot Chat in VS Code — `/yolo`](../vscode/yolo.md)

## Official sources

- [Enterprise-managed agent permissions (September 9, 2026)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/allow-all-tools)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
