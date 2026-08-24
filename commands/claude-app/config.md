# `/config`

> Opens Settings → Claude Code; any text after the command is ignored.

- **Product:** Claude Code
- **Surface:** Claude Desktop — Code tab
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Aliases:** `/settings`

## What it does

Opens Settings → Claude Code; any text after the command is ignored.

Unlike the CLI, Desktop accepts no `key=value` form: `/config theme=dark` does not set the theme. Change behavior through Settings or by editing the settings files Desktop shares with the CLI.

## Examples

- `/config theme=dark thinking=false`

## Related commands

- [`/theme`](./theme.md)
- [`/model`](./model.md)
- [`/permissions`](./permissions.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/settings`](../cli/settings.md)
- [Claude Code CLI — `/config`](../claude-cli/config.md)
- [Claude Code on the web — `/config`](../claude-web/config.md)

## Official sources

- [Desktop — what is not available](https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop)
- [Use Claude Code Desktop](https://code.claude.com/docs/en/desktop)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-app/config)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
