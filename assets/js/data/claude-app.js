/* Claude Desktop — Code tab.
   Desktop runs the same Claude Code engine as the CLI, but Anthropic does not
   publish a Desktop-only command table. Mirror the documented engine inventory,
   mark rule-derived entries as inherited, mark known terminal-panel commands as
   blocked, and add entries observed directly in the live Desktop picker.

   Loader requirement: claude-cli.js must run before this file. */

(function () {
  var B = 'https://code.claude.com/docs/en/';
  var D = {
    commands:  ['Claude Code commands', B + 'commands'],
    desktop:   ['Use Claude Code Desktop', B + 'desktop'],
    useSkills: ['Desktop — use skills', B + 'desktop#use-skills'],
    notAvail:  ['Desktop — what is not available', B + 'desktop#whats-not-available-in-desktop'],
    quick:     ['Get started with Claude Code Desktop', B + 'desktop-quickstart'],
    skills:    ['Extend Claude Code with skills', B + 'skills'],
    artifacts: ['Share session output as artifacts', B + 'artifacts'],
    workflows: ['Orchestrate subagents with dynamic workflows', B + 'workflows']
  };

  var blockedKeys = [
    'hooks', 'memory', 'skills', 'status', 'diff', 'rewind', 'tasks', 'artifacts',
    'workflows', 'release-notes', 'help', 'theme', 'tui', 'focus', 'scroll-speed',
    'terminal-setup'
  ];

  var shared = window.SLASH.commands
    .filter(function (c) { return c.surface === 'claude-cli'; })
    .map(function (c) {
      var copy = JSON.parse(JSON.stringify(c));
      /* JSON cloning preserves resolved examples but not their non-enumerable
         provenance marker, so carry that marker across explicitly. */
      Object.defineProperty(copy, '_exampleExplicit', {
        value: c._exampleExplicit,
        enumerable: false,
        configurable: true
      });
      delete copy.surface;
      delete copy.id;
      delete copy.order;
      copy.flags = (copy.flags || []).slice();

      if (copy.key === 'compact') {
        copy.summary = 'Compacts the Desktop conversation to free context-window space.';
        copy.detail = 'Desktop compacts automatically when context fills and continues working. Invoke this earlier when a long session starts carrying more history than the current task needs; optional focus text names what the summary must preserve.';
      } else if (copy.key === 'btw') {
        copy.summary = 'Opens a side chat that uses session context without adding to the conversation.';
        copy.detail = 'Equivalent to <strong>Cmd+;</strong> on macOS or <strong>Ctrl+;</strong> on Windows. The side chat can read everything in the main thread up to that point.';
        copy.note = 'Available in local, SSH, and WSL sessions only. Desktop does not save side chats to disk, so you cannot return to one after closing the app.';
      } else if (copy.key === 'config') {
        delete copy.args;
        copy.summary = 'Opens Settings &rarr; Claude Code; any text after the command is ignored.';
        copy.detail = 'Unlike the CLI, Desktop accepts no <code>key=value</code> form: <code>/config theme=dark</code> does not set the theme. Change behavior through Settings or by editing the settings files Desktop shares with the CLI.';
        copy.docs = [D.notAvail, D.desktop];
      } else if (copy.key === 'permissions') {
        copy.flags.push('blocked');
        copy.summary = 'Replies <code>isn&rsquo;t available in this environment</code> in Desktop.';
        copy.detail = 'Anthropic names <code>/permissions</code> as the example of its general rule: built-ins that open an interactive terminal panel and take no arguments are refused in the Code tab. Manage rules by editing settings files or run the command from the standalone CLI.';
        copy.note = 'Use the mode selector next to the send button for per-session permission modes.';
        copy.docs = [D.notAvail, D.desktop];
      } else if (copy.key === 'custom-skill') {
        copy.summary = 'Invokes a built-in, personal, project, synced, or plugin skill from Desktop.';
        copy.detail = 'Type <code>/</code> in the prompt box or choose <strong>+ &rarr; Slash commands</strong> to browse what this session actually has. Desktop combines the shared Claude Code command inventory with skills from your account, machine, project, and installed plugins, so the runtime list can be larger than this fixed reference.';
        copy.docs = [D.useSkills, D.skills, D.quick];
      } else if (blockedKeys.indexOf(copy.key) > -1) {
        copy.flags.push('blocked');
        copy.note = (copy.note ? copy.note + '<br><br>' : '') +
          '<strong>Desktop limitation:</strong> this command opens a terminal panel or controls the terminal renderer, so Desktop refuses it or replaces it with native UI.';
        copy.docs = [D.notAvail].concat(copy.docs || [D.commands]);
      } else {
        copy.flags.push('inherited');
        copy.note = (copy.note ? copy.note + '<br><br>' : '') +
          '<strong>Desktop inheritance:</strong> Anthropic says the Code tab includes built-in commands, but does not publish this command&rsquo;s Desktop behavior separately. Terminal and native-app behavior can differ.';
        copy.docs = [D.useSkills].concat(copy.docs || [D.commands]);
      }

      copy.flags = copy.flags.filter(function (flag, index, flags) {
        return flags.indexOf(flag) === index;
      });
      if (copy.flags.indexOf('blocked') > -1) {
        copy.examples = [copy.cmd];
        copy.canonicalExample = copy.cmd;
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
