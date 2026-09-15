/* Claude Desktop — Code tab.
   Desktop runs the same Claude Code engine as the CLI, but Anthropic does not
   publish a Desktop-only command table. Mirror the documented engine inventory,
   mark rule-derived entries as inherited, mark known terminal-panel commands as
   blocked, and preserve entries from the earlier local Desktop picker audit.
   Documentation rechecked on 2026-09-14; runtime entries were not re-observed.

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
    advisor:   ['Advisor commands in Desktop and headless sessions', B + 'advisor'],
    reload:    ['Plugin reloads in Desktop and headless sessions', B + 'discover-plugins#apply-plugin-changes-without-restarting'],
    plugins:   ['Desktop — install plugins', B + 'desktop#install-plugins'],
    artifacts: ['Share session output as artifacts', B + 'artifacts'],
    workflows: ['Orchestrate subagents with dynamic workflows', B + 'workflows']
  };

  var blockedKeys = [
    'hooks', 'memory', 'skills', 'status', 'diff', 'rewind', 'tasks', 'artifacts',
    'workflows', 'release-notes', 'help', 'theme', 'tui', 'focus', 'scroll-speed',
    'terminal-setup', 'rate-limit-options'
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
        copy.detail = 'Desktop compacts automatically when context fills and continues working. Invoke this earlier when a long session starts carrying more history than the current task needs.';
        copy.note = 'Desktop explicitly documents the bare command. The optional focus argument shown here follows the shared CLI signature, not a separately published Desktop signature.';
        copy.docs = [D.desktop].concat(copy.docs || [D.commands]);
      } else if (copy.key === 'btw') {
        copy.summary = 'Opens a side chat that uses session context without adding to the conversation.';
        copy.detail = 'Equivalent to <strong>Cmd+;</strong> on macOS or <strong>Ctrl+;</strong> on Windows. The side chat can read everything in the main thread up to that point.';
        copy.note = 'Available in local, SSH, and WSL sessions only. Desktop does not save side chats to disk, so you cannot return to one after closing the app. Its guide documents bare <code>/btw</code>; the optional inline question follows the CLI signature.';
        copy.docs = [D.desktop, D.commands];
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
      } else if (copy.key === 'advisor') {
        copy.summary = 'Prints or changes the advisor model in a Desktop session.';
        copy.detail = 'Run bare to see the current advisor and accepted aliases, pass a model to select it, or pass <code>off</code> to disable it. Desktop uses the documented text form rather than the terminal picker.';
        copy.requires = 'Claude Code engine 2.1.260+; advisor-compatible model and provider';
        copy.docs = [D.advisor, D.commands, D.desktop];
      } else if (copy.key === 'reload-plugins') {
        copy.summary = 'Reloads Desktop plugin components without restarting the session.';
        copy.detail = 'Type the command directly in the Desktop prompt box. It reloads active plugin components and reports counts or errors, but does not connect or disconnect plugin MCP servers; those changes take effect in the next session.';
        copy.requires = 'Claude Code engine 2.1.260+; direct input in the Desktop prompt';
        copy.note = 'A remotely forwarded invocation, including one sent through Remote Control to a Desktop-hosted session, is refused.';
        copy.docs = [D.reload, D.commands];
      } else if (copy.key === 'desktop') {
        copy.flags.push('inherited');
        copy.summary = 'CLI entry point for opening a terminal conversation in Desktop.';
        copy.detail = 'Anthropic documents running this in the terminal, where it saves the conversation, opens the Code tab, and exits the CLI. Inside Desktop, the separate <strong>Continue in</strong> menu offers web or IDE handoff.';
        copy.note = '<strong>Desktop inheritance:</strong> this indexed engine entry is not evidence of a Code-tab slash handler. The CLI handoff remains limited to macOS and x64 Windows even though Desktop supports additional platforms.';
        copy.docs = [D.desktop, D.commands];
      } else if (copy.key === 'plugin') {
        copy.flags.push('inherited');
        copy.summary = 'Indexes the CLI plugin command; Desktop documents a native manager instead.';
        copy.detail = 'In local or SSH sessions, use <strong>+ &rarr; Plugins</strong> to add or manage plugins. The browser is absent in cloud sessions, which load repository-declared or account-synced plugins instead. Plugins are not available in WSL sessions.';
        copy.note = '<strong>Desktop inheritance:</strong> the CLI slash subcommands are not separately specified for Desktop. A native plugin manager does not establish the same slash-command behavior.';
        copy.docs = [D.plugins, D.useSkills, D.commands];
      } else if (copy.key === 'output-style') {
        copy.flags.push('inherited');
        copy.note = '<strong>Desktop inheritance:</strong> the 2.1.269 release restores this engine command for headless sessions but does not name Desktop separately. The Desktop output-style guide still directs you to a settings file. Verify the slash handler in your installed app.';
        copy.docs = [D.useSkills].concat(copy.docs || [D.commands]);
      } else if (copy.key === 'custom-skill') {
        copy.summary = 'Invokes a built-in, personal, project, synced, or plugin skill from Desktop.';
        copy.detail = 'Type <code>/</code> or choose <strong>+ &rarr; Slash commands</strong> to browse the current session. Local sessions read personal skills from your machine; SSH sessions read the remote host&rsquo;s home directory; cloud sessions load account-enabled skills. Project and plugin skills also vary by environment.';
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
      detail: 'Recorded in an earlier local Desktop picker audit, not in Anthropic&rsquo;s fixed command table. It was not re-observed during the 2026-09-14 documentation review; availability can vary with build, plan, and installed or synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-design', 'artifact-diagramming'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'artifact-design', cmd: '/artifact-design', cat: 'author',
      flags: ['skill'], noCompare: true,
      summary: 'Loads design guidance for creating polished visual artifacts.',
      detail: 'Recorded in an earlier local Desktop picker audit, not in Anthropic&rsquo;s fixed command table. It was not re-observed during the 2026-09-14 documentation review; availability can vary with build, plan, and installed or synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-capabilities', 'artifact-diagramming'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'artifact-diagramming', cmd: '/artifact-diagramming', cat: 'author',
      flags: ['skill'], noCompare: true,
      summary: 'Loads diagramming guidance for visual artifacts.',
      detail: 'Recorded in an earlier local Desktop picker audit, not in Anthropic&rsquo;s fixed command table. It was not re-observed during the 2026-09-14 documentation review; availability can vary with build, plan, and installed or synced skills.',
      requires: 'Desktop build with artifact skills enabled',
      related: ['artifacts', 'artifact-capabilities', 'artifact-design'],
      docs: [D.artifacts, D.skills, D.desktop]
    },
    {
      key: 'remote-workflow-internal', cmd: '/__remote-workflow', cat: 'delegate',
      flags: ['hidden'], noCompare: true,
      summary: 'Internal Desktop workflow entry exposed by some builds.',
      detail: 'This double-underscore entry was recorded in an earlier local picker audit and was not re-observed during the 2026-09-14 documentation review. It is not a published public command; treat it as implementation detail, not a stable workflow.',
      requires: 'Desktop build exposing the internal remote-workflow entry',
      related: ['workflows'],
      docs: [D.workflows, D.desktop]
    }
  ];

  window.SLASH.register('claude-app', shared.concat(observedDesktopEntries));
})();
