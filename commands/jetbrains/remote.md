# `/remote [on|off]`

> Enables or manages remote control of the current session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in JetBrains
- **Category:** Session lifecycle
- **Data snapshot:** 2026-09-14
- **Requires:** Copilot CLI session

## What it does

Enables or manages remote control of the current session.

Run bare to show status and access details, `on` to enable remote steering, or `off` to end it. The CLI must remain running on an online machine, and remote access uses the same GitHub account. GitHub also documents an Enable Copilot CLI Remote setting in the JetBrains plugin.

## Canonical example

`/remote`

## More examples

- `/remote on`

## Related commands

- [`/chronicle`](./chronicle.md)
- [`/compact`](./compact.md)

## Also in other surfaces

- [GitHub Copilot app — `/remote`](../app/remote.md)
- [GitHub Copilot CLI — `/remote`](../cli/remote.md)

## Official sources

- [Copilot Chat cheat sheet (JetBrains)](https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=jetbrains)
- [Steer a CLI session remotely](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely)
- [GitHub Copilot Chat in JetBrains slash command reference](https://www.jetbrains.com/help/ai-assistant/copilot-agent.html)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/jetbrains/remote)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
