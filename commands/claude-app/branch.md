# `/branch [NAME]`

> Branches the conversation and switches you into the new branch.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Session lifecycle
- **Data snapshot:** 2026-08-23
- **Flags:** inherited

## What it does

Branches the conversation and switches you into the new branch.

Preserves the original conversation in the resume picker while the new branch diverges from this point. This is the interactive, stay-in-the-terminal cousin of `/fork`.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Reach for it when

- Trying a second implementation strategy without losing the first
- Exploring a risky idea while preserving a clean return point

## Canonical example

`/branch alternate-cache-design`

## Related commands

- [`/fork`](./fork.md)
- [`/resume`](./resume.md)
- [`/rewind`](./rewind.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/fork`](../cli/fork.md)
- [Claude Code CLI — `/branch`](../claude-cli/branch.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/branch)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
