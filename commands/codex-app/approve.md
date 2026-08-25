# `/approve`

> Approves one retry of an action that automatic review recently denied.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex in the ChatGPT desktop app
- **Category:** Tools & permissions
- **Data snapshot:** 2026-08-23
- **Requires:** Recent automatic-review denial

## What it does

Approves one retry of an action that automatic review recently denied.

This is a narrowly scoped override: it retries the denied action once while automatic review is active. It does not disable automatic review or grant a standing approval for later actions.

## Reach for it when

- You inspected a recent automatic-review denial and want Codex to try that action once
- The denial was a false positive rather than a signal to change the approach

## Canonical example

`/approve`

## Related commands

- [`/review`](./review.md)
- [`/status`](./status.md)

## Also in other surfaces

- [OpenAI Codex CLI — `/approve`](../codex-cli/approve.md)
- [OpenAI Codex IDE extension — `/approve`](../codex-ide/approve.md)

## Official sources

- [ChatGPT desktop app slash commands](https://learn.chatgpt.com/docs/reference/slash-commands#available-slash-commands)
- [OpenAI Codex in the ChatGPT desktop app slash command reference](https://learn.chatgpt.com/docs/reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-app/approve)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
