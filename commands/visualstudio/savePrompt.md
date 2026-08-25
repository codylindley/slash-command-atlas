# `/savePrompt [NAME]`

> Extracts a reusable prompt from the current conversation.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in Visual Studio
- **Category:** Customization authoring
- **Data snapshot:** 2026-08-23

## What it does

Extracts a reusable prompt from the current conversation.

Saves the result under `.github/prompts/` as a `.prompt.md` file so it can be reviewed, committed, and invoked again.

## Canonical example

`/savePrompt review-api-changes`

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
