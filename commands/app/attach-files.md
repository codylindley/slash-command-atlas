# `/attach-files`

> Opens a file picker and attaches files to your message.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Context & input
- **Data snapshot:** 2026-09-14

## What it does

Opens a file picker and attaches files to your message.

Pins specific files into the prompt instead of hoping the agent finds them. Attaching the two or three files that actually matter is usually faster, cheaper and more reliable than describing where to look.

> **Note:** For GitHub Copilot Business and Enterprise, applicable content exclusions still prevent excluded files from being used as context. Selecting an attachment is not a policy override.

## Canonical example

`/attach-files`

## Related commands

- [`/attach-folder`](./attach-folder.md)
- [`/context`](./context.md)
- [`/init`](./init.md)

## Official sources

- [Content exclusion in the GitHub Copilot app](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app#content-exclusion)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/attach-files)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
