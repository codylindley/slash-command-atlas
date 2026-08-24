# `/allow-all [off|auto|show]`

> Enables all permissions — tools, paths and URLs.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Aliases:** `/yolo`

## What it does

Enables all permissions — tools, paths and URLs.

An alias for `/permissions allow-all`. Worth pairing with `/sandbox enable` if you want the speed without handing over the whole machine.

> **Note:** This removes the approval prompts that are your main guardrail. Prefer a sandbox or a disposable worktree.

## Related commands

- [`/permissions`](./permissions.md)
- [`/sandbox`](./sandbox.md)
- [`/reset-allowed-tools`](./reset-allowed-tools.md)

## Also in other surfaces

- [GitHub Copilot app — `/allow-all-tools`](../app/allow-all-tools.md)
- [GitHub Copilot Chat in VS Code — `/yolo`](../vscode/yolo.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/allow-all)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
