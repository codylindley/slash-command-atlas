# `/chronicle [standup|tips|cost-tips|search QUERY|improve|reindex|skills create|skills review|skills status]`

> Session history tools and insights.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** History & chronicle
- **Data snapshot:** 2026-09-14

## What it does

Session history tools and insights.

Run bare to choose an action from a picker. The session-data guide documents reports, cost advice, and full-content history search; the command reference also lists skill-proposal actions. Append context to reports or tips to focus them, such as `/chronicle standup for the last 3 days`.

> **Note:** GitHub’s command table and session-data guide list different subsets of subcommands. This entry combines their documented actions; use your build’s picker to check availability.

## Subcommands

- `/chronicle standup [CONTEXT]` — Summarize recent work, optionally for a different time period
- `/chronicle tips [CONTEXT]` — Personalized workflow tips, optionally focused on a topic
- `/chronicle cost-tips` — Analyze token spending and suggest ways to reduce it
- `/chronicle search QUERY` — Search the full content of past sessions
- `/chronicle improve` — Suggest improvements to your instructions file
- `/chronicle reindex` — Rebuild the local session index and sync session data
- `/chronicle skills create` — Draft a repository skill from observed usage
- `/chronicle skills review` — Review a drafted skill proposal
- `/chronicle skills status` — Track the status of skill proposals

## Canonical example

`/chronicle standup`

## Related commands

- [`/search`](./search.md)
- [`/skills`](./skills.md)
- [`/usage`](./usage.md)

## Also in other surfaces

- [GitHub Copilot app — `/chronicle`](../app/chronicle.md)
- [GitHub Copilot Chat in JetBrains — `/chronicle`](../jetbrains/chronicle.md)

## Official sources

- [Chronicle](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/chronicle)
- [Using CLI session data](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle)
- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/chronicle)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
