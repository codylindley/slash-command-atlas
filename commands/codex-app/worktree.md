# `/worktree`

> Runs the chat in a new Git worktree.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex in the ChatGPT desktop app
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23

## What it does

Runs the chat in a new Git worktree.

Creates an isolated Git worktree for the chat so its file changes do not share the current working directory. This is useful for parallel or experimental work that should remain separate.

## Reach for it when

- A second chat needs to edit the same repository in parallel
- You want filesystem isolation for an experimental branch of work

## Related commands

- [`/fork`](./fork.md)
- [`/local`](./local.md)
- [`/project`](./project.md)
- [`/review`](./review.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/worktree`](../cli/worktree.md)
- [OpenAI Codex IDE extension — `/worktree`](../codex-ide/worktree.md)

## Official sources

- [ChatGPT desktop app slash commands](https://learn.chatgpt.com/docs/reference/slash-commands#available-slash-commands)
- [OpenAI Codex in the ChatGPT desktop app slash command reference](https://learn.chatgpt.com/docs/reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-app/worktree)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
