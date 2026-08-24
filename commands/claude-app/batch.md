# `/batch <INSTRUCTION>`

> Decomposes a large codebase change into parallel worktree tasks.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Requires:** A Git repository
- **Flags:** skill, inherited

## What it does

Decomposes a large codebase change into parallel worktree tasks.

Researches the repository, proposes 5–30 independent units, then after approval launches one background subagent per unit in an isolated worktree. Each unit implements, tests, and opens a pull request.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/batch migrate src/ from Solid to React`

## Related commands

- [`/subtask`](./subtask.md)
- [`/workflows`](./workflows.md)
- [`/code-review`](./code-review.md)

## Also in other surfaces

- [Claude Code CLI — `/batch`](../claude-cli/batch.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Extend Claude Code with skills](https://code.claude.com/docs/en/skills)
- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/batch)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
