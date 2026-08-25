# `/prompts:<name> [ARGUMENTS]`

> Runs a legacy custom prompt by its configured name.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Customization authoring
- **Data snapshot:** 2026-08-23
- **Flags:** custom

## What it does

Runs a legacy custom prompt by its configured name.

Markdown files directly under `~/.codex/prompts/` appear dynamically as slash commands. They can accept positional placeholders, `$ARGUMENTS`, and named `KEY=value` arguments.

> **Note:** OpenAI has deprecated custom prompts in favor of skills, but existing prompt files remain supported after restarting Codex.

## Canonical example

`/prompts:review-pr focus=security`

## Related commands

- [`/skills`](./skills.md)
- [`/init`](./init.md)

## Official sources

- [Custom prompts in Codex](https://learn.chatgpt.com/docs/custom-prompts)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/custom-prompt)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
