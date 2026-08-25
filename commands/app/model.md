# `/model [MODEL]`

> Opens model selection, or selects a model by name or ID.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Aliases:** `/models`

## What it does

Opens model selection, or selects a model by name or ID.

Switches the model driving the session. Choosing **Auto** lets the app pick per task based on complexity, and after a turn the picker shows which model actually answered. Reasoning effort is a separate dial: more effort buys more thinking time on hard problems at the cost of latency. If you have configured your own model provider, those models appear here too.

## Reach for it when

- Moving to a stronger model for a problem the current one is fumbling
- Dropping to a cheaper model for mechanical work
- A task that suits a particular vendor’s strengths

## Canonical example

`/model auto`

## Related commands

- [`/agent`](./agent.md)
- [`/usage`](./usage.md)
- [`/rubber-duck`](./rubber-duck.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/model`](../cli/model.md)
- [Claude Code CLI — `/model`](../claude-cli/model.md)
- [Claude Desktop — Code tab — `/model`](../claude-app/model.md)
- [Claude Code on the web — `/model`](../claude-web/model.md)
- [OpenAI Codex in the ChatGPT desktop app — `/model`](../codex-app/model.md)
- [OpenAI Codex CLI — `/model`](../codex-cli/model.md)
- [OpenAI Codex IDE extension — `/model`](../codex-ide/model.md)

## Official sources

- [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection)
- [Use your own model provider](https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/model)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
