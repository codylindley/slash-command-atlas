# `/review`

> Asks Codex to review the working tree.

- **Product:** OpenAI Codex
- **Surface:** OpenAI Codex CLI
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23

## What it does

Asks Codex to review the working tree.

Starts a review focused on behavior changes and missing tests in the current working tree. It uses the current session model unless `review_model` is configured; use `/diff` to inspect the exact edits.

## Related commands

- [`/diff`](./diff.md)
- [`/plan`](./plan.md)
- [`/approve`](./approve.md)

## Also in other surfaces

- [GitHub Copilot app — `/review`](../app/review.md)
- [GitHub Copilot CLI — `/review`](../cli/review.md)
- [Claude Code CLI — `/code-review`](../claude-cli/code-review.md)
- [Claude Desktop — Code tab — `/code-review`](../claude-app/code-review.md)
- [OpenAI Codex in the ChatGPT desktop app — `/review`](../codex-app/review.md)
- [OpenAI Codex IDE extension — `/review`](../codex-ide/review.md)

## Official sources

- [Codex CLI built-in slash commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/codex-cli/review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
