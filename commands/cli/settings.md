# `/settings [--repo|--local] [show KEY|KEY|KEY VALUE]`

> Opens the settings dialog, or reads and writes a setting inline.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-08-23
- **Aliases:** `/config`

## What it does

Opens the settings dialog, or reads and writes a setting inline.

The dialog has **User**, **Repo**, **Repo (local)** and **Problems** tabs; a setting overridden in another scope shows a badge naming which scope wins. `show KEY` masks secret-named values instead of printing them. Add `--repo` or `--local` to target the repository settings files instead of your user settings. Rows governed by an organization or MDM policy render read-only with a `(managed)` tag.

## Canonical example

`/settings --repo model gpt-5.2`

## Related commands

- [`/model`](./model.md)
- [`/instructions`](./instructions.md)
- [`/experimental`](./experimental.md)

## Also in other surfaces

- [Claude Code CLI — `/config`](../claude-cli/config.md)
- [Claude Desktop — Code tab — `/config`](../claude-app/config.md)
- [Claude Code on the web — `/config`](../claude-web/config.md)

## Official sources

- [Change settings](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/change-settings)
- [Config directory reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference)
- [GitHub Copilot CLI slash command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/settings)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
