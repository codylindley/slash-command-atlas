# `/personality`

> Chooses a communication style for responses.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Stable CLI 0.154.0; personality feature and model support

## What it does

Chooses a communication style for responses.

Opens a picker for `friendly`, `pragmatic`, or `none`. These are picker choices, not inline arguments. Unsupported models or disabled personality support hide the command.

> **Note:** Still documented and present in stable `0.154.0`, but removed from the checked `0.155.0-alpha.4` prerelease. This CLI removal does not establish a removal from the separately documented desktop or IDE menus.

## Canonical example

`/personality`

## Related commands

- [`/model`](./model.md)
- [`/memories`](./memories.md)
- [`/status`](./status.md)

## Also in other surfaces

- [OpenAI Codex in the ChatGPT desktop app — `/personality`](../codex-app/personality.md)
- [OpenAI Codex IDE extension — `/personality`](../codex-ide/personality.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)
- [Codex CLI command source (prerelease 0.155.0-alpha.4)](https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/slash_command.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/personality)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
