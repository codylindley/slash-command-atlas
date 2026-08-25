# `/interactive [PROMPT]`

> Switches the session into Interactive mode, optionally seeded with a prompt.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Session modes
- **Data snapshot:** 2026-08-23

## What it does

Switches the session into Interactive mode, optionally seeded with a prompt.

The most hands-on mode: the agent proposes changes and waits for your input as it goes. This is what you drop back into when Autopilot has wandered somewhere you did not intend, or when you are working in code you want to inspect edit by edit.

## Reach for it when

- Working in unfamiliar or high-consequence code
- You want a tight feedback loop rather than a finished result
- Taking back control partway through an autonomous run

## Canonical example

`/interactive walk me through the auth middleware before we change anything`

## Related commands

- [`/plan`](./plan.md)
- [`/autopilot`](./autopilot.md)

## Official sources

- [Choosing a session mode](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/interactive)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
