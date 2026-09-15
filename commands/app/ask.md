# `/ask [QUESTION]`

> Asks a side question without interrupting the response; previously verified in app v1.1.12.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Context & input
- **Data snapshot:** 2026-09-14
- **Aliases:** `/btw`
- **Requires:** Active session

## What it does

Asks a side question without interrupting the response; previously verified in app v1.1.12.

Opens a *Side chat* beside the session instead of adding a prompt-and-response turn to the main conversation. The main agent keeps working — you do not have to wait for the current response to finish. The Side chat can pull in the main session’s recent transcript on demand, so you can ask about the work without re-explaining it.

> **Note:** This is a previously verified app entry, not a command listed in GitHub’s public table at the 2026-09-14 documentation review. Availability was not rechecked in a live picker for this review. In the observed version, side chats had their own saved history and did not support editing earlier messages.

## Reach for it when

- A clarifying question occurs to you mid-run and you do not want to stop the agent
- Understanding unfamiliar code without spending main-thread context on the detour
- Checking an assumption before deciding whether to interrupt and redirect the session

## Canonical example

`/ask why does this repo pin the Node version in two places?`

## Related commands

- [`/context`](./context.md)
- [`/compact`](./compact.md)
- [`/spawn`](./spawn.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/ask`](../cli/ask.md)
- [GitHub Copilot Chat in VS Code — `/btw`](../vscode/btw.md)
- [Claude Code CLI — `/btw`](../claude-cli/btw.md)
- [Claude Desktop — Code tab — `/btw`](../claude-app/btw.md)
- [Claude Code in VS Code — `/btw`](../claude-vscode/btw.md)
- [OpenAI Codex CLI — `/side`](../codex-cli/side.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/ask)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
