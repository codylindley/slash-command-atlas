# `/effort [LEVEL|auto|status]`

> Sets or reports the model’s reasoning effort.

- **Product:** Claude Code
- **Surface:** Claude Code CLI
- **Category:** Models, agents & skills
- **Data snapshot:** 2026-09-14

## What it does

Sets or reports the model’s reasoning effort.

Available levels depend on the model. Run bare for a slider, use `status` to inspect the level, or `auto` for the default. Typed levels and `Enter` save a per-model choice; `s` applies it only to this session (2.1.257+). `max` is session-only when set here.

> **Note:** `ultracode` is a workflow-orchestration setting, not another model reasoning level. It uses `xhigh` and requires workflows, a compatible model, and an effort cap that permits it.

## Canonical example

`/effort high`

## More examples

- `/effort status`

## Related commands

- [`/model`](./model.md)
- [`/fast`](./fast.md)
- [`/advisor`](./advisor.md)

## Also in other surfaces

- [Claude Desktop — Code tab — `/effort`](../claude-app/effort.md)
- [Claude Code on the web — `/effort`](../claude-web/effort.md)

## Official sources

- [Model configuration](https://code.claude.com/docs/en/model-config)
- [Claude Code commands](https://code.claude.com/docs/en/commands)

## Atlas links

- [Interactive command view](https://codylindley.github.io/slash-command-atlas/#/claude-cli/effort)
- [All commands as JSON](https://codylindley.github.io/slash-command-atlas/data/commands.json)
- [AI-readable command index](https://codylindley.github.io/slash-command-atlas/llms.txt)

---

This page is generated from the Slash Command Atlas data files. Longer explanations and use-case guidance are editorial; linked vendor documentation is authoritative.
