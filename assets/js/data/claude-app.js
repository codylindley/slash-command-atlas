/* Claude Desktop — Code tab.
   Anthropic documents that Desktop runs the same Claude Code engine as the CLI
   and that its slash browser includes built-in commands, custom and project
   skills, and plugin skills. This file therefore mirrors the documented engine
   inventory registered by claude-cli.js, then adds Desktop-observed entries
   that are not part of the published command table.

   Loader requirement: claude-cli.js must run before this file. */

(function () {
  var B = 'https://code.claude.com/docs/en/';
  var D = {
    commands:  ['Claude Code commands', B + 'commands'],
    desktop:   ['Use Claude Code Desktop', B + 'desktop'],
    quick:     ['Get started with Claude Code Desktop', B + 'desktop-quickstart'],
    skills:    ['Extend Claude Code with skills', B + 'skills'],
    artifacts: ['Share session output as artifacts', B + 'artifacts'],
    workflows: ['Orchestrate subagents with dynamic workflows', B + 'workflows']
  };

  var shared = window.SLASH.commands
    .filter(function (c) { return c.surface === 'claude-cli'; })
    .map(function (c) {
      var copy = JSON.parse(JSON.stringify(c));
      delete copy.surface;
      delete copy.id;
      delete copy.order;

      if (copy.key === 'compact') {
        copy.summary = 'Compacts the Desktop conversation to free context-window space.';
        copy.detail = 'Desktop compacts automatically as the window fills; invoke this earlier when a long session starts carrying more history than the current task needs.';
      } else if (copy.key === 'btw') {
        copy.summary = 'Opens a side chat that does not change the main conversation.';
        copy.detail = 'The side chat can read the main thread up to that point, making it useful for explanation or a quick assumption check without steering the agent. It is documented for local and SSH Desktop sessions.';
      } else if (copy.key === 'custom-skill') {
        copy.summary = 'Invokes a built-in, personal, project, synced, or plugin skill from Desktop.';
        copy.detail = 'Type <code>/</code> in the prompt box or choose <strong>+ &rarr; Slash commands</strong> to browse what this session actually has. Desktop combines the shared Claude Code command inventory with skills from your account, machine, project, and installed plugins, so the runtime list can be larger than this fixed reference.';
      }
      return copy;
    });

  if (!shared.length) {
    throw new Error('claude-app.js requires claude-cli.js to load first');
  }

  var observedDesktopEntries = [
    {
      key: 'artifact-capabilities', cmd: '/artifact-capabilities', cat: 'author',
      flags: ['skill'], noCompare: true,
      summary: 'Loads guidance about the artifact formats and capabilities available in Desktop.',
      detail: 'This bundled skill appears in the live Desktop Code picker but is not listed in Anthropic&rsquo;s fixed command table. Its availability can vary with Desktop build, plan, and synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-design', 'artifact-diagramming'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'artifact-design', cmd: '/artifact-design', cat: 'author',
      flags: ['skill'], noCompare: true,
      summary: 'Loads design guidance for creating polished visual artifacts.',
      detail: 'This bundled skill appears in the live Desktop Code picker but is not listed in Anthropic&rsquo;s fixed command table. Its availability can vary with Desktop build, plan, and synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-capabilities', 'artifact-diagramming'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'artifact-diagramming', cmd: '/artifact-diagramming', cat: 'author',
      flags: ['skill'], noCompare: true,
      summary: 'Loads diagramming guidance for visual artifacts.',
      detail: 'This bundled skill appears in the live Desktop Code picker but is not listed in Anthropic&rsquo;s fixed command table. Its availability can vary with Desktop build, plan, and synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-capabilities', 'artifact-design'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'remote-workflow-internal', cmd: '/__remote-workflow', cat: 'delegate',
      flags: ['hidden'], noCompare: true,
      summary: 'Internal Desktop workflow entry exposed by some builds.',
      detail: 'This double-underscore command is visible in the live Desktop Code picker but is not documented as a public command. Treat it as implementation detail rather than a stable user-facing workflow.',
      requires: 'Desktop build exposing the internal remote-workflow entry',
      related: ['workflows'],
      docs: [D.workflows, D.desktop]
    }
  ];

  window.SLASH.register('claude-app', shared.concat(observedDesktopEntries));
})();
