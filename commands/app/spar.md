# `/spar [PROMPT]`

> Runs adversarial reasoning that challenges your approach.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23

## What it does

Runs adversarial reasoning that challenges your approach.

Where `/rubber-duck` reviews, `/spar` argues. It plays devil’s advocate against your idea — probing assumptions, naming failure modes, pushing back on the design rather than the code. Point it at decisions, not diffs.

## Reach for it when

- Choosing between two architectures
- Sanity-checking a migration before you commit to it
- You suspect you have talked yourself into something

## Canonical example

`/spar we want to cache sessions in Redis with a 24h TTL — what breaks?`

## Related commands

- [`/rubber-duck`](./rubber-duck.md)
- [`/plan`](./plan.md)
- [`/research`](./research.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/spar)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
