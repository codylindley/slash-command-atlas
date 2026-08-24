# `/subtask <TASK>`

> Spawns a forked subagent whose result returns to this conversation.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Requires:** Agent view enabled; Claude Code 2.1.212+

## What it does

Spawns a forked subagent whose result returns to this conversation.

The subagent inherits the full conversation and works in the background while you continue. Unlike `/fork`, it reports its result back here instead of becoming an independent session.

## Examples

- `/subtask trace where the legacy header is still emitted`

## Related commands

- [`/fork`](./fork.md)
- [`/tasks`](./tasks.md)
- [`/agents`](./agents.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/subtask`](../claude-app/subtask.md)

## Official sources

- [Create custom subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/subtask)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
