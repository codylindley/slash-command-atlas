# `/worktree`

> Creates or browses isolated worktrees for Codex conversations.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** CLI & environment
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat in a local Git repository; worktrees enabled
- **Flags:** preview

## What it does

Creates or browses isolated worktrees for Codex conversations.

Opens a picker to continue the current conversation in a new worktree, start a fresh conversation there, or browse managed worktrees and resume their owning conversations. It takes no inline path or branch argument.

> **Note:** Shipped as experimental in stable `0.154.0`. Enable worktrees through `/experimental`; this does not enable worktree operations in remote sessions.

## Canonical example

`/worktree`

## Related commands

- [`/new`](./new.md)
- [`/fork`](./fork.md)
- [`/resume`](./resume.md)
- [`/experimental`](./experimental.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/worktree`](../cli/worktree.md)
- [OpenAI Codex in the ChatGPT desktop app — `/worktree`](../codex-app/worktree.md)
- [OpenAI Codex IDE extension — `/worktree`](../codex-ide/worktree.md)

## Official sources

- [Codex CLI 0.154.0 release notes](https://github.com/openai/codex/releases/tag/rust-v0.154.0)
- [Codex CLI worktree picker (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/worktree_picker.rs)
- [Codex CLI command source (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs)
- [OpenAI Codex CLI slash command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/worktree)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
