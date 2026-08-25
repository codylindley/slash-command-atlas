# `/allow-all-tools`

> Turns tool auto-approval on, or shows its current state.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Aliases:** `/yolo`
- **Requires:** Active session

## What it does

Turns tool auto-approval on, or shows its current state.

Stops the agent asking permission for each tool call. Genuinely useful in a throwaway worktree or a cloud sandbox where the blast radius is contained, and considerably less so pointed at a repository you care about with shell access enabled.

> **Note:** This switches off the approval prompts that are your main guardrail. Prefer it in disposable or sandboxed environments, and use `/reset-allowed-tools` to turn it back off when you are done.

## Canonical example

`/allow-all-tools`

## Related commands

- [`/reset-allowed-tools`](./reset-allowed-tools.md)
- [`/autopilot`](./autopilot.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/allow-all`](../cli/allow-all.md)
- [GitHub Copilot Chat in VS Code — `/yolo`](../vscode/yolo.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/allow-all-tools)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
