# `/search QUERY`

> Generates a search query for the Search view from natural language.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Editor actions
- **Data snapshot:** 2026-09-14
- **Requires:** @vscode chat participant

## What it does

Generates a search query for the Search view from natural language.

Microsoft documents the full invocation as `@vscode /search` followed by a description of what to find. The example below assumes `@vscode` is already selected; the command sends its generated query to the Search view.

## Canonical example

`/search every call to fetch that does not check response.ok`

## Related commands

- [`/explain`](./explain.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/search`](../cli/search.md)

## Official sources

- [VS Code AI features cheat sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/search)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
