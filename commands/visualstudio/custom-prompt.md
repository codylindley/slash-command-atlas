# `/<prompt name>`

> Invokes a saved custom prompt from the Chat window.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in Visual Studio
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** Saved prompt file and a supporting Visual Studio release
- **Flags:** custom

## What it does

Invokes a saved custom prompt from the Chat window.

Save reusable prompts as `.github/prompts/*.prompt.md`. In current Visual Studio, type `/` to choose them from the top of the completion list, marked with a bookmark icon.

> **Note:** Microsoft’s Visual Studio 2022 guidance uses `#prompt:` or Add context to attach prompt files instead of documenting slash invocation.

## Canonical example

`/review-api-changes`

## Related commands

- [`/savePrompt`](./savePrompt.md)
- [`/generateInstructions`](./generateInstructions.md)

## Official sources

- [Customize chat responses in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/visualstudio/custom-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
