# `/review [INSTRUCTIONS]`

> Reviews local changes, a base-branch diff, a commit, or a custom target.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Reviews local changes, a base-branch diff, a commit, or a custom target.

The bare command opens a preset picker for uncommitted changes, a base-branch comparison, a commit, or custom review instructions. Inline text submits custom instructions directly. It uses the current session model unless `review_model` is configured.

## Canonical example

`/review`

## More examples

- `/review Check the retry changes for behavior regressions`

## Related commands

- [`/diff`](./diff.md)
- [`/plan`](./plan.md)
- [`/approve`](./approve.md)

## Also in other surfaces

- [GitHub Copilot app — `/review`](../app/review.md)
- [GitHub Copilot CLI — `/review`](../cli/review.md)
- [Claude Code CLI — `/code-review`](../claude-cli/code-review.md)
- [Claude Desktop — Code tab — `/code-review`](../claude-app/code-review.md)
- [OpenAI Codex in the ChatGPT desktop app — `/review`](../codex-app/review.md)
- [OpenAI Codex IDE extension — `/review`](../codex-ide/review.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/slash_dispatch.rs)
- [Codex CLI review presets (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/review_popups.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
