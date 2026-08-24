# `/limits [set max-ai-credits VALUE|unset [max-ai-credits|all]]`

> Opens the response limits dialog, or sets and clears a per-response credit cap.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23

## What it does

Opens the response limits dialog, or sets and clears a per-response credit cap.

Response limits are soft limits that reset for each user message — a guard against one runaway turn, not a session budget.

## Subcommands

- `/limits set max-ai-credits VALUE` — Soft maximum of AI Credits per response
- `/limits unset [max-ai-credits|all]` — Remove one limit, or all of them

## Related commands

- [`/usage`](./usage.md)
- [`/autopilot`](./autopilot.md)
- [`/model`](./model.md)

## Official sources

- [Set a session limit](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/set-session-limit)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/limits)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
