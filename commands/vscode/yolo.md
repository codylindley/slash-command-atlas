# `/yolo`

> Skips ordinary approvals for the current session, subject to policy.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Aliases:** `/autoApprove`
- **Requires:** Supported local or Copilot CLI session

## What it does

Skips ordinary approvals for the current session, subject to policy.

Selects the session-scoped Allow all level for edits, terminal commands, and external tools. An enabled terminal sandbox still applies. In Agent Host sessions, enterprise-managed deny and ask rules remain enforced; user or workspace settings, auto-approval, and saved approvals cannot weaken them.

> **Note:** This does not enable global auto-approval across every workspace. The global setting is `chat.tools.global.autoApprove`. Use `/disableYolo` to restore the session’s default permissions.

## Canonical example

`/yolo`

## Related commands

- [`/disableYolo`](./disableYolo.md)
- [`/autopilot`](./autopilot.md)

## Also in other surfaces

- [GitHub Copilot app — `/allow-all-tools`](../app/allow-all-tools.md)
- [GitHub Copilot CLI — `/allow-all`](../cli/allow-all.md)

## Official sources

- [VS Code AI features cheat sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)
- [Approvals and permissions](https://code.visualstudio.com/docs/agents/run/approvals)
- [Enterprise-managed permissions (GA, 2026-09-09)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/yolo)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
