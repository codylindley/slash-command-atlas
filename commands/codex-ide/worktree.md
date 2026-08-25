# `/worktree`

> Runs the chat in a new Git worktree.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex IDE extension
- **Category:** CLI & environment
- **Data snapshot:** 2026-08-23

## What it does

Runs the chat in a new Git worktree.

Creates an isolated worktree for the chat so it can edit the same repository without sharing the current working directory.

## Reach for it when

- Parallel chats need filesystem isolation in the same repository
- Experimental work should live in a separate Git worktree

## Canonical example

`/worktree`

## Related commands

- [`/fork`](./fork.md)
- [`/local`](./local.md)
- [`/project`](./project.md)
- [`/review`](./review.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/worktree`](../cli/worktree.md)
- [OpenAI Codex in the ChatGPT desktop app — `/worktree`](../codex-app/worktree.md)

## Official sources

- [Codex IDE extension slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-ide/worktree)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
