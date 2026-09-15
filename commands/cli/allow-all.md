# `/allow-all [off|auto|show]`

> Skips ordinary permission prompts within managed policy.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-09-14
- **Aliases:** `/yolo`

## What it does

Skips ordinary permission prompts within managed policy.

An alias for `/permissions allow-all` covering tools, paths, and URLs. Managed deny rules still block operations and ask rules still require human approval; user settings, auto-approval, and previously saved approvals cannot override those restrictions.

> **Note:** An enabled sandbox and configured content exclusions still apply. For Business and Enterprise, excluded files are not used as Copilot context. A worktree separates Git changes, not access to your machine; sandboxing provides OS-level restrictions.

## Canonical example

`/allow-all`

## Related commands

- [`/permissions`](./permissions.md)
- [`/sandbox`](./sandbox.md)
- [`/reset-allowed-tools`](./reset-allowed-tools.md)

## Also in other surfaces

- [GitHub Copilot app — `/allow-all-tools`](../app/allow-all-tools.md)
- [GitHub Copilot Chat in VS Code — `/yolo`](../vscode/yolo.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Enterprise-managed permissions (GA, 2026-09-09)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/)
- [Content exclusions in Copilot CLI (GA, 2026-09-02)](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/allow-all)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
