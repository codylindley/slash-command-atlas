# `/skills [reload]`

> Manages skills. Use /skills reload to reload them mid-session.

- **Product:** GitHub Copilot
- **Surface:** GitHub Copilot app
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Manages skills. Use /skills reload to reload them mid-session.

Skills are packaged instructions that extend what the agent does well. Use the bare command to manage them, or `reload` to pick up edits mid-session. Skills configured for your repository or GitHub Copilot CLI are available in the app; you can also browse and manage them under **Customize &gt; Skills**.

## Subcommands

- `/skills reload` — Reload available skills during the session.

## Canonical example

`/skills`

## More examples

- `/skills reload`

## Related commands

- [`/agent`](./agent.md)
- [`/af`](./af.md)
- [`/init`](./init.md)

## Also in other surfaces

- [GitHub Copilot CLI — `/skills`](../cli/skills.md)
- [GitHub Copilot Chat in VS Code — `/skills`](../vscode/skills.md)
- [Claude Code CLI — `/skills`](../claude-cli/skills.md)
- [Claude Desktop — Code tab — `/skills`](../claude-app/skills.md)
- [OpenAI Codex CLI — `/skills`](../codex-cli/skills.md)
- [OpenAI Codex IDE extension — `/skills`](../codex-ide/skills.md)

## Official sources

- [About agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Built-in skills for the GitHub Copilot app](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills)
- [Customizing the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
- [GitHub Copilot app slash command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/app/skills)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
