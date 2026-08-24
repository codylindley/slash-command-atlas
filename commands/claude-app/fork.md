# `/fork [PROMPT]`

> Copies this conversation into a separate background session.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Agent view enabled; Claude Code 2.1.212+
- **Flags:** inherited

## What it does

Copies this conversation into a separate background session.

The copy inherits the conversation and can start immediately with an optional prompt while you keep working here. Where possible Claude asks the copy to isolate edits in its own worktree. Use `/subtask` when the result should return to this conversation instead.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/fork investigate the flaky Windows test and report the cause`

## Related commands

- [`/branch`](./branch.md)
- [`/background`](./background.md)
- [`/subtask`](./subtask.md)

## Also in other surfaces

- [GitHub Copilot app — `/fork`](../app/fork.md)
- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [GitHub Copilot Chat in VS Code — `/fork`](../vscode/fork.md)
- [Claude Code CLI — `/fork`](../claude-cli/fork.md)
- [OpenAI Codex in the ChatGPT desktop app — `/fork`](../codex-app/fork.md)
- [OpenAI Codex CLI — `/fork`](../codex-cli/fork.md)
- [OpenAI Codex IDE extension — `/fork`](../codex-ide/fork.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Manage multiple agents with agent view](https://code.claude.com/docs/en/agent-view)
- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/fork)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
