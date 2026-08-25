# `/collect-debug-logs`

> Creates a debug log archive, or uploads one as a secret gist.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Diagnostics & usage
- **Data snapshot:** 2026-08-23
- **Requires:** Active session

## What it does

Creates a debug log archive, or uploads one as a secret gist.

Packages the logs for a bug report. The gist is secret rather than public, but it is still leaving your machine, and logs can carry file paths, prompts and repository contents.

> **Note:** Secret gists are unlisted, not private — anyone with the URL can read one. Check what you are uploading before you share the link.

## Canonical example

`/collect-debug-logs`

## Related commands

- [`/debug`](./debug.md)
- [`/export-gist`](./export-gist.md)

## Official sources

- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/collect-debug-logs)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
