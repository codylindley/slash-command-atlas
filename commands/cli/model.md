# `/model [--session|--global|--repo|--local] [MODEL]`

> Selects the AI model, reasoning effort, or context window — or chooses Auto.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Aliases:** `/models`

## What it does

Selects the AI model, reasoning effort, or context window — or chooses Auto.

By default (or with `--session`) the change applies to this session only and leaves saved settings alone. `--repo`/`--local` pins a default in repository settings; `--global` sets the default for future sessions. Press `Tab` on a model with a long-context variant to toggle its context window, and `Shift`+`Tab` to cycle how the picker groups models. It is usable mid-turn: a change requested while the agent is running is queued and applied once the turn finishes rather than swapping the model mid-request.

## Examples

- `/model --repo gpt-5.2`

## Related commands

- [`/subagents`](./subagents.md)
- [`/agent`](./agent.md)
- [`/limits`](./limits.md)

## Also in other surfaces

- [GitHub Copilot app — `/model`](../app/model.md)
- [Claude Code CLI — `/model`](../claude-cli/model.md)
- [Claude Desktop — Code tab — `/model`](../claude-app/model.md)
- [Claude Code on the web — `/model`](../claude-web/model.md)
- [OpenAI Codex in the ChatGPT desktop app — `/model`](../codex-app/model.md)
- [OpenAI Codex CLI — `/model`](../codex-cli/model.md)
- [OpenAI Codex IDE extension — `/model`](../codex-ide/model.md)

## Official sources

- [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/model)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
