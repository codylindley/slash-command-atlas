# `/add-dir PATH`

> Adds a directory to the allowed list for file access.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot CLI
- **Category:** Context & input
- **Data snapshot:** 2026-09-14

## What it does

Adds a directory to the allowed list for file access.

Also loads the directory’s `.github/skills` and `.github/agents` as trusted configuration. Review the directory before adding it: this grants access and makes its agent customizations available.

> **Note:** Adding a directory does not disable content exclusions. For Copilot Business and Enterprise, the CLI respects exclusion policies from enterprise, organization, and repository administrators and does not use excluded files as context; this became generally available on 2026-09-02.

## Canonical example

`/add-dir ../shared-schema`

## Related commands

- [`/list-dirs`](./list-dirs.md)
- [`/cwd`](./cwd.md)
- [`/permissions`](./permissions.md)

## Also in other surfaces

- [Claude Code CLI — `/add-dir`](../claude-cli/add-dir.md)
- [Claude Desktop — Code tab — `/add-dir`](../claude-app/add-dir.md)

## Official sources

- [CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)
- [Content exclusions in Copilot CLI (GA, 2026-09-02)](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/cli/add-dir)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
