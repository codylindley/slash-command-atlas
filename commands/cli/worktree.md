# `/worktree [branch|task]`

> Creates a new Git worktree and switches to it, leaving uncommitted changes behind.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** A Git repository
- **Flags:** experimental

## What it does

Creates a new Git worktree and switches to it, leaving uncommitted changes behind.

Pass a branch name, a task description used as the opening prompt in the new worktree, or nothing at all to have a branch name generated from the conversation. By default it branches off the current checkout; set `worktreeBaseRef` to `"defaultBranch"` to branch off the remote default instead. `/worktree new [PROMPT]` starts a fresh conversation in a new worktree and leaves the current one untouched.

## Subcommands

- `/worktree new [PROMPT]` — Start a new conversation in a new worktree, leaving this one alone

## Canonical example

`/worktree add rate limiting to the API`

## Related commands

- [`/move`](./move.md)
- [`/fork`](./fork.md)

## Also in other surfaces

- [OpenAI Codex in the ChatGPT desktop app — `/worktree`](../codex-app/worktree.md)
- [OpenAI Codex IDE extension — `/worktree`](../codex-ide/worktree.md)

## Official sources

- [Config directory reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/worktree)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
