# `/fleet [PROMPT]`

> Launches multiple agents in parallel on a single task.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Delegation & parallelism
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Launches multiple agents in parallel on a single task.

Splits one task across parallel subagents inside the current session. Where `/orchestrate` coordinates whole sessions across repositories, `/fleet` parallelizes within one — which suits naturally shardable work, like applying the same change to fifty files.

## Examples

- `/fleet add JSDoc comments to every exported function in src/lib`

## Related commands

- [`/orchestrate`](./orchestrate.md)
- [`/spawn`](./spawn.md)
- [`/autopilot`](./autopilot.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/fleet`](../cli/fleet.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/fleet)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
