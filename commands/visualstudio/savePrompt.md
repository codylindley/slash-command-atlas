# `/savePrompt`

> Extracts a reusable prompt from the current conversation.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in Visual Studio
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** An existing conversation in a supporting Visual Studio Chat window

## What it does

Extracts a reusable prompt from the current conversation.

After Copilot responds, run the command without arguments, then choose the prompt file’s name. It saves `.github/prompts/[name].prompt.md` for reuse from the slash picker.

> **Note:** Documented in the current-release guidance, not the Visual Studio 2022 command table. This runs in the Chat window, not inline chat.

## Canonical example

`/savePrompt`

## Related commands

- [`/generateInstructions`](./generateInstructions.md)
- [`/generate`](./generate.md)

## Official sources

- [Customize chat responses in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/visualstudio/savePrompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
