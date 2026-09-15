# `/advisor [MODEL|off]`

> Reports or changes the advisor for a Remote Control session.

- **Product:** Claude Code
- **Surface:** Claude Code on the web
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Claude Code 2.1.260+; advisor-compatible model and provider

## What it does

Reports or changes the advisor for a Remote Control session.

Run bare for the current advisor and accepted model aliases, pass a model to select it, or use `off` to disable it. The remote text forms affect this session only and leave the saved default unchanged.

> **Note:** Explicitly documented for the web/mobile Remote Control client. The advisor guide also covers headless execution, but does not separately specify the cloud browser handler.

## Canonical example

`/advisor opus`

## More examples

- `/advisor off`

## Related commands

- [`/model`](./model.md)
- [`/effort`](./effort.md)

## Also in other surfaces

- [Claude Code CLI — `/advisor`](../claude-cli/advisor.md)
- [Claude Desktop — Code tab — `/advisor`](../claude-app/advisor.md)

## Official sources

- [Remote Control limitations](https://code.claude.com/docs/en/remote-control#limitations)
- [Advisor command in non-terminal sessions](https://code.claude.com/docs/en/advisor)
- [Claude Code on the web slash command reference](https://code.claude.com/docs/en/claude-code-on-the-web#manage-context)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-web/advisor)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
