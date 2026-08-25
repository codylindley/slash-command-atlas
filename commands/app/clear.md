# `/clear`

> Clears the current transcript and starts a fresh session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Aliases:** `/reset`
- **Requires:** Active session

## What it does

Clears the current transcript and starts a fresh session.

Wipes the conversation so the next prompt starts clean. Reach for it when you switch tasks inside the same repository — leftover context from the previous task is a common reason an agent starts helpfully editing files you were already done with.

> **Note:** `/compact` is usually the better move if the history still matters — it summarizes instead of discarding.

## Reach for it when

- Switching to an unrelated task in the same repo
- The context has been poisoned by a wrong turn
- A long session has drifted away from what you actually want

## Canonical example

`/clear`

## Related commands

- [`/restart-session`](./restart-session.md)
- [`/compact`](./compact.md)
- [`/fork`](./fork.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/clear`](../cli/clear.md)
- [GitHub Copilot Chat in VS Code — `/clear`](../vscode/clear.md)
- [GitHub Copilot Chat on GitHub.com — `/clear`](../web/clear.md)
- [Claude Code CLI — `/clear`](../claude-cli/clear.md)
- [Claude Desktop — Code tab — `/clear`](../claude-app/clear.md)
- [Claude Code on the web — `/clear`](../claude-web/clear.md)
- [OpenAI Codex CLI — `/clear`](../codex-cli/clear.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/clear)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
