# `/attach-folder`

> Opens a folder picker and attaches a folder to your message.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Context & input
- **Data snapshot:** 2026-09-14

## What it does

Opens a folder picker and attaches a folder to your message.

Selects a directory when the relevant unit is a module or package rather than a handful of files. Prefer the smallest relevant folder so the intended scope is clear; attaching a folder does not establish that every file is loaded into the context window.

> **Note:** Folder attachments remain subject to applicable content exclusion policies.

## Canonical example

`/attach-folder`

## Related commands

- [`/attach-files`](./attach-files.md)
- [`/context`](./context.md)
- [`/compact`](./compact.md)

## Official sources

- [Content exclusion in the GitHub Copilot app](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app#content-exclusion)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/attach-folder)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
