# `/rubber-duck [PROMPT]`

> Asks a different model to critique your plan, implementation or tests.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23

## What it does

Asks a different model to critique your plan, implementation or tests.

The rubber duck is a built-in critic that deliberately runs on a *different* model from the one driving your session, so it is less likely to share the main agent’s blind spots. When it is enabled, Copilot can also consult it automatically at key moments, take the critique, and decide what to do with it before continuing.

> **Note:** Currently available only when the main agent is running a Claude or GPT model.

## Reach for it when

- A plan feels right but you cannot articulate why
- Before committing to a large refactor
- A second opinion on whether your tests actually cover the risk

## Examples

- `/rubber-duck is this migration plan safe to run against production data?`

## Related commands

- [`/spar`](./spar.md)
- [`/review`](./review.md)
- [`/research`](./research.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/rubber-duck`](../cli/rubber-duck.md)

## Official sources

- [Using the rubber duck agent](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#using-the-rubber-duck-agent)
- [About the rubber duck agent](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/rubber-duck)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/rubber-duck)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
