# `/troubleshoot [QUESTION] [#session]`

> Asks the AI to analyze the agent debug logs for this chat session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-09-14
- **Requires:** Agent debug logging enabled before reproducing the issue

## What it does

Asks the AI to analyze the agent debug logs for this chat session.

Supported in local and Copilot CLI sessions. Add `#session` to choose another session. For local chat, enable `github.copilot.chat.agentDebugLog.fileLogging.enabled` and reload the window. For Agent Host, enable `chat.agentHost.agentDebugLog.enabled` before the activity you want to inspect; log capture is not retroactive.

> **Note:** Agent Debug Logs are in preview. Logs can contain prompts, code, paths, and tool data; review them before sharing.

## Canonical example

`/troubleshoot how many tokens did I use?`

## More examples

- `/troubleshoot list all paths you tried to load customizations in #session`

## Related commands

- [`/debug`](./debug.md)

## Official sources

- [VS Code AI features cheat sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)
- [Debug chat interactions](https://code.visualstudio.com/docs/agents/agent-troubleshooting/chat-debug-view)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/troubleshoot)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
