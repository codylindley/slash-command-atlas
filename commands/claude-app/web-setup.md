# `/web-setup`

> Connects GitHub to Claude Code on the web using local gh credentials.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14
- **Requires:** Authenticated gh CLI; eligible cloud account and organization policy
- **Flags:** inherited

## What it does

Connects GitHub to Claude Code on the web using local gh credentials.

Sends your local `gh` token to your Claude account, giving cloud sessions access to repositories that token can reach. This is separate from installing the Claude GitHub App. Team and Enterprise owners must enable Quick web setup; Zero Data Retention organizations cannot use it.

> **Note:** **Desktop inheritance:** Anthropic says the Code tab includes built-in commands, but does not publish this command’s Desktop behavior separately. Terminal and native-app behavior can differ.

## Canonical example

`/web-setup`

## Related commands

- [`/autofix-pr`](./autofix-pr.md)
- [`/schedule`](./schedule.md)
- [`/teleport`](./teleport.md)

## Also in other surfaces

- [Claude Code CLI — `/web-setup`](../claude-cli/web-setup.md)

## Official sources

- [Desktop — use skills](https://code.claude.com/docs/en/desktop#use-skills)
- [Claude Code commands](https://code.claude.com/docs/en/commands)
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web)
- [Claude Desktop — Code tab slash command reference](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/web-setup)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
