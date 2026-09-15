# `/new [CHAT NAME]`

> Starts a new chat in the same CLI session.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Starts a new chat in the same CLI session.

Creates a fresh chat without leaving the terminal. Optional text names it. With experimental worktrees enabled in a local Git repository, a picker offers the current checkout or a new worktree. Unlike `/clear`, it leaves the current terminal view in place.

## Canonical example

`/new bug bash`

## Related commands

- [`/clear`](./clear.md)
- [`/resume`](./resume.md)
- [`/fork`](./fork.md)
- [`/worktree`](./worktree.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/clear`](../cli/clear.md)
- [GitHub Copilot Chat in VS Code — `/new`](../vscode/new.md)
- [GitHub Copilot Chat on GitHub.com — `/new`](../web/new.md)
- [Claude Code CLI — `/clear`](../claude-cli/clear.md)
- [Claude Desktop — Code tab — `/clear`](../claude-app/clear.md)
- [Claude Code on the web — `/clear`](../claude-web/clear.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI worktree picker (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/worktree_picker.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/new)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
