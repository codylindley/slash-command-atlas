# `/fork [CHAT NAME]`

> Forks the current chat into a new chat.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Idle main chat

## What it does

Forks the current chat into a new chat.

Clones the active transcript into a new chat with a fresh ID and leaves the original untouched. Optional inline text names the fork. With experimental worktrees enabled in a local Git repository, a picker offers the current checkout or a new worktree.

> **Note:** The separate `codex fork` program subcommand handles forking a saved session from its picker.

## Reach for it when

- You want to test an alternative approach from the current context
- The experiment should be durable rather than an ephemeral side chat

## Canonical example

`/fork`

## More examples

- `/fork alternate-parser`

## Related commands

- [`/side`](./side.md)
- [`/new`](./new.md)
- [`/worktree`](./worktree.md)
- [`/subagents`](./subagents.md)

## Also in other surfaces

- [GitHub Copilot app — `/fork`](../app/fork.md)
- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [GitHub Copilot Chat in VS Code — `/fork`](../vscode/fork.md)
- [Claude Code CLI — `/fork`](../claude-cli/fork.md)
- [Claude Desktop — Code tab — `/fork`](../claude-app/fork.md)
- [OpenAI Codex in the ChatGPT desktop app — `/fork`](../codex-app/fork.md)
- [OpenAI Codex IDE extension — `/fork`](../codex-ide/fork.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)
- [Codex CLI argument handling (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/slash_dispatch.rs)
- [Codex CLI worktree picker (stable 0.154.0)](https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/chatwidget/worktree_picker.rs)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/fork)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
