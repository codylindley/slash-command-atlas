# `/review`

> Reviews the changes made in the current session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Reviews the changes made in the current session.

Turns the agent on its own diff, looking for bugs, omissions and loose ends before the work goes anywhere. Distinct from `/security-review`, which only hunts vulnerabilities, and from `/rubber-duck`, which brings in a second model.

## Canonical example

`/review`

## Related commands

- [`/security-review`](./security-review.md)
- [`/rubber-duck`](./rubber-duck.md)
- [`/pr-open`](./pr-open.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/review`](../cli/review.md)
- [Claude Code CLI — `/code-review`](../claude-cli/code-review.md)
- [Claude Desktop — Code tab — `/code-review`](../claude-app/code-review.md)
- [OpenAI Codex in the ChatGPT desktop app — `/review`](../codex-app/review.md)
- [OpenAI Codex CLI — `/review`](../codex-cli/review.md)
- [OpenAI Codex IDE extension — `/review`](../codex-ide/review.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
