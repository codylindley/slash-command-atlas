# `/code-review [low|medium|high|xhigh|max|ultra] [--fix] [--comment] [PR|BRANCH|PATH]`

> Reviews a diff or target for correctness bugs and cleanup opportunities.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Review & critique
- **Data snapshot:** 2026-08-23
- **Aliases:** `/review`, `/ultrareview`
- **Flags:** skill, inherited

## What it does

Reviews a diff or target for correctness bugs and cleanup opportunities.

Target the current diff, a pull request number, branch, or path. `--fix` applies findings; `--comment` posts inline GitHub comments. `ultra` runs a deep cloud review, and the legacy `/ultrareview` spelling remains available for that path.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Subcommands

- `/code-review low … max` — Choose local review effort
- `/code-review ultra` — Run the deep cloud review
- `/code-review --fix` — Apply accepted findings
- `/code-review --comment` — Post findings as inline PR comments

## Examples

- `/code-review high --fix src/auth`
- `/review medium 1234`
- `/code-review ultra --post 1234`

## Related commands

- [`/security-review`](./security-review.md)
- [`/simplify`](./simplify.md)
- [`/diff`](./diff.md)

## Also in other surfaces

- [Claude Code CLI — `/code-review`](../claude-cli/code-review.md)
- [GitHub Copilot app — `/review`](../app/review.md)
- [GitHub Copilot CLI — `/review`](../cli/review.md)
- [OpenAI Codex in the ChatGPT desktop app — `/review`](../codex-app/review.md)
- [OpenAI Codex CLI — `/review`](../codex-cli/review.md)
- [OpenAI Codex IDE extension — `/review`](../codex-ide/review.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code review](https://code.claude.com/docs/en/code-review)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/code-review)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
