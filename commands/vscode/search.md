# `/search`

> Generates a search query for the Search view from natural language.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Editor actions
- **Data snapshot:** 2026-08-23

## What it does

Generates a search query for the Search view from natural language.

Describe what you are looking for and it composes the regex or glob for you, then hands it to the Search view rather than answering itself.

## Canonical example

`/search every call to fetch that does not check response.ok`

## Related commands

- [`/explain`](./explain.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/search`](../cli/search.md)

## Official sources

- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/search)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
