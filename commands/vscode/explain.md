# `/explain`

> Explains a code block, a file, or a programming concept.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Editor actions
- **Data snapshot:** 2026-08-23

## What it does

Explains a code block, a file, or a programming concept.

The workhorse. With a selection it explains that code; with nothing selected it explains the active file; with neither it will happily explain a concept. Pairs well with a `#` reference when the thing you want explained is not what is currently on screen.

## Canonical example

`/explain what does this reducer do when the action is unknown?`

## Related commands

- [`/fix`](./fix.md)
- [`/doc`](./doc.md)
- [`/tests`](./tests.md)

## Also in other surfaces

- [GitHub Copilot Chat in JetBrains — `/explain`](../jetbrains/explain.md)
- [GitHub Copilot Chat in Visual Studio — `/explain`](../visualstudio/explain.md)
- [GitHub Copilot Chat in Xcode — `/explain`](../xcode/explain.md)

## Official sources

- [Chat in VS Code](https://code.visualstudio.com/docs/copilot/chat/copilot-chat)
- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/explain)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
