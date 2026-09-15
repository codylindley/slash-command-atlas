# `/model [MODEL]`

> Opens model selection, or selects a model by name or ID.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Aliases:** `/models`

## What it does

Opens model selection, or selects a model by name or ID.

Chooses a named model or **Auto**, which routes prompts using task complexity and model availability. Auto now offers **Efficiency** for cost, **Balance** for cost, quality and latency, and **Intelligence** for quality. All tiers draw from the same eligible model set; they change routing preferences, not the model inventory. Configured bring-your-own-provider models also appear in the picker.

> **Note:** Auto tiers began rolling out to the app on 2026-09-14. They are separate from reasoning effort and remain subject to plan and policy restrictions. The picker shows which model handled a response; Intelligence does not guarantee the largest model for every prompt.

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
- [GitHub Copilot Chat in VS Code — `/models`](../vscode/models.md)

## Official sources

- [Auto model selection](https://docs.github.com/en/copilot/concepts/models/auto-model-selection)
- [Auto routing tiers (September 14, 2026)](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/)
- [Use your own model provider](https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/model)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
