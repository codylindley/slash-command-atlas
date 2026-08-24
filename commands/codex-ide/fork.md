# `/fork`

> Copies a local chat into a new local chat.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex IDE extension
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23

## What it does

Copies a local chat into a new local chat.

Branches the current local conversation into a durable new chat while keeping the original unchanged. The IDE reference does not describe this command as creating a worktree; `/worktree` handles that explicitly.

## Reach for it when

- You want to explore an alternative approach from the current context
- The branch should be saved rather than temporary like `/side`

## Related commands

- [`/side`](./side.md)
- [`/worktree`](./worktree.md)
- [`/compact`](./compact.md)

## Also in other surfaces

- [GitHub Copilot app — `/fork`](../app/fork.md)
- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [GitHub Copilot Chat in VS Code — `/fork`](../vscode/fork.md)
- [Claude Code CLI — `/fork`](../claude-cli/fork.md)
- [Claude Desktop — Code tab — `/fork`](../claude-app/fork.md)
- [OpenAI Codex in the ChatGPT desktop app — `/fork`](../codex-app/fork.md)
- [OpenAI Codex CLI — `/fork`](../codex-cli/fork.md)

## Official sources

- [Codex IDE extension slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-ide/fork)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
