# `/prompts:<name>`

> Runs a legacy custom prompt by its configured name.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex in the ChatGPT desktop app
- **Category:** Customization authoring
- **Data snapshot:** 2026-09-14
- **Requires:** A configured custom prompt
- **Flags:** custom

## What it does

Runs a legacy custom prompt by its configured name.

Custom prompts appear dynamically in the composer as `/prompts:<name>`. The concrete names depend on the prompts available in your setup, so this wildcard record is not a built-in command.

> **Note:** OpenAI deprecates custom prompts in favor of skills. Enabled skills also appear in the slash list, but the documented explicit invocation syntax for a Codex skill is `$skill-name`, not an invented slash spelling.

## Canonical example

`/prompts:review-pr`

## Official sources

- [ChatGPT desktop app slash commands](https://learn.chatgpt.com/docs/reference/slash-commands#available-slash-commands)
- [Custom prompts in Codex](https://learn.chatgpt.com/docs/custom-prompts)
- [OpenAI Codex in the ChatGPT desktop app slash command reference](https://learn.chatgpt.com/docs/reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-app/custom-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
