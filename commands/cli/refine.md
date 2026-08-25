# `/refine TEXT`

> Rewrites a roughly composed prompt into a clearer one for review.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Context & input
- **Data snapshot:** 2026-08-23

## What it does

Rewrites a roughly composed prompt into a clearer one for review.

Run it with no arguments (via `Ctrl`+`X` then `/refine`) to clean up whatever is currently in the input box. Particularly useful for prompts entered by speaking.

## Canonical example

`/refine add retries to the upload handler without changing its API`

## Related commands

- [`/voice`](./voice.md)
- [`/plan`](./plan.md)

## Official sources

- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/refine)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
