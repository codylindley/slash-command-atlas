# `/<skill name>`

> Runs one of your own agent skills by name.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot Chat in VS Code
- **Category:** Customization authoring
- **Data snapshot:** 2026-08-23
- **Flags:** custom

## What it does

Runs one of your own agent skills by name.

Any skill file becomes a slash command. A skill saved as `webapp-testing.md` is invoked as `/webapp-testing`. This is the mechanism that makes VS Code’s command set effectively open-ended — and it is why your picker will not match anyone else’s.

## Related commands

- [`/skills`](./skills.md)
- [`/create-skill`](./create-skill.md)
- [`/<prompt name>`](./custom-prompt.md)

## Official sources

- [GitHub Copilot Chat in VS Code slash command reference](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/vscode/custom-skill)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
