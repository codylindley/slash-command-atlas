# `/fork`

> Forks the session at the latest turn into a new independent session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Forks the session at the latest turn into a new independent session.

Branches the conversation. Both sessions keep everything up to the fork point and then diverge, so you can try a second approach without re-explaining the problem from scratch. `/merge-to-parent` brings the work back if the experiment pays off.

## Reach for it when

- Trying two competing implementations from the same starting point
- Running a risky experiment you might want to throw away
- Chasing a tangent without losing the main thread

## Canonical example

`/fork`

## Related commands

- [`/merge-to-parent`](./merge-to-parent.md)
- [`/spawn`](./spawn.md)
- [`/orchestrate`](./orchestrate.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [GitHub Copilot Chat in VS Code — `/fork`](../vscode/fork.md)
- [Claude Code CLI — `/fork`](../claude-cli/fork.md)
- [Claude Desktop — Code tab — `/fork`](../claude-app/fork.md)
- [OpenAI Codex in the ChatGPT desktop app — `/fork`](../codex-app/fork.md)
- [OpenAI Codex CLI — `/fork`](../codex-cli/fork.md)
- [OpenAI Codex IDE extension — `/fork`](../codex-ide/fork.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/fork)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
