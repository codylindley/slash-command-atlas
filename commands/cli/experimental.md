# `/experimental [on|off|show]`

> Toggles, sets, or shows experimental features.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-09-14

## What it does

Toggles, sets, or shows experimental features.

The current reference marks scheduling, extensions, sandboxing, and the diff viewer as experimental. Worktrees remain marked experimental there, but the 1.0.84-6 prerelease removes that gate for `/worktree` and `/move`.

> **Note:** GitHub’s 2026-09-10 update also places Project HydraFusion here. Select that research-preview option from the model picker when available; it can choose a single-model, draft-and-escalate, or draft/critic/revise workflow. It is distinct from Auto’s tiers, and preview availability and behavior can change.

## Canonical example

`/experimental show`

## Related commands

- [`/settings`](./settings.md)
- [`/version`](./version.md)
- [`/model`](./model.md)

## Also in other surfaces

- [OpenAI Codex CLI — `/experimental`](../codex-cli/experimental.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Copilot weekly release update (2026-09-10)](https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/)
- [Project HydraFusion research preview](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/experimental)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
