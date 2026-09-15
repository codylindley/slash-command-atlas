# `/generateInstructions`

> Generates a repository-wide Copilot instructions file.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in Visual Studio
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** Chat window in a supporting Visual Studio release

## What it does

Generates a repository-wide Copilot instructions file.

Creates a starting `.github/copilot-instructions.md` from the current solution so future chat requests inherit the project’s conventions.

> **Note:** Microsoft documents this for its current Visual Studio release, not in the Visual Studio 2022 command table. It is not an inline-chat command.

## Canonical example

`/generateInstructions`

## Related commands

- [`/generate`](./generate.md)
- [`/savePrompt`](./savePrompt.md)

## Official sources

- [Customize chat responses in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/visualstudio/generateInstructions)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
