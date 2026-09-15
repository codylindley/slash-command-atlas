# `/prompts:<name> [ARGUMENTS]`

> Runs a legacy custom prompt by its configured name.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex IDE extension
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** A local custom-prompt file
- **Flags:** custom

## What it does

Runs a legacy custom prompt by its configured name.

Markdown files directly under `~/.codex/prompts/` appear dynamically in the IDE slash menu and can accept positional, free-form, or uppercase named arguments, such as `FOCUS=security` when the prompt defines `$FOCUS`.

> **Note:** OpenAI has deprecated custom prompts in favor of skills, but existing prompt files remain supported after restarting the extension.

## Canonical example

`/prompts:review-pr FOCUS=security`

## Related commands

- [`/init`](./init.md)

## Official sources

- [Custom prompts in Codex](https://learn.chatgpt.com/docs/custom-prompts)
- [OpenAI Codex IDE extension slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-ide/custom-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
