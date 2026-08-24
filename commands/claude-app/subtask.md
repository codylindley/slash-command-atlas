# `/subtask <TASK>`

> Spawns a forked subagent whose result returns to this conversation.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Requires:** Agent view enabled; Claude Code 2.1.212+
- **Flags:** inherited

## What it does

Spawns a forked subagent whose result returns to this conversation.

The subagent inherits the full conversation and works in the background while you continue. Unlike `/fork`, it reports its result back here instead of becoming an independent session.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Examples

- `/subtask trace where the legacy header is still emitted`

## Related commands

- [`/fork`](./fork.md)
- [`/tasks`](./tasks.md)
- [`/agents`](./agents.md)

## Also in other surfaces

- [Claude Code CLI — `/subtask`](../claude-cli/subtask.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/subtask)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
