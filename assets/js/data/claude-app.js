/* Claude Code Desktop.
   Anthropic documents that the Code tab inherits built-in Claude Code commands and
   skills, but does not publish a Desktop-only table. Individually documented records
   live here; conservative inherited records are copied from the CLI registry and
   visibly marked so rule-derived coverage is not mistaken for per-command evidence. */

(function () {
  var D = {
    desktop:  ['Claude Code Desktop', 'https://code.claude.com/docs/en/desktop'],
    useSkills:['Desktop — use skills', 'https://code.claude.com/docs/en/desktop#use-skills'],
    notAvail: ['Desktop — what is not available', 'https://code.claude.com/docs/en/desktop#whats-not-available-in-desktop'],
    quick:    ['Get started with Claude Code Desktop', 'https://code.claude.com/docs/en/desktop-quickstart'],
    ref:      ['Claude Code commands', 'https://code.claude.com/docs/en/commands'],
    skills:   ['Extend Claude Code with skills', 'https://code.claude.com/docs/en/skills'],
    context:  ['Explore the context window', 'https://code.claude.com/docs/en/context-window']
  };

  var direct = [
    {
      key: 'compact', cmd: '/compact', args: '[FOCUS-INSTRUCTIONS]', cat: 'context',
      summary: 'Compacts the Desktop conversation to free context-window space.',
      detail: 'Desktop compacts automatically when context fills and continues working. Invoke this earlier when a long session starts carrying more history than the current task needs; optional focus text names what the summary must preserve.',
      examples: ['/compact preserve the approved plan and unresolved test failure'],
      related: ['btw', 'context'],
      docs: [D.desktop, D.context]
    },
    {
      key: 'btw', cmd: '/btw', args: '[QUESTION]', cat: 'context',
      summary: 'Opens a side chat that uses session context without adding to the conversation.',
      detail: 'Equivalent to <strong>Cmd+;</strong> on macOS or <strong>Ctrl+;</strong> on Windows. The side chat can read everything in the main thread up to that point.',
      note: 'Available in local, SSH, and WSL sessions only. Desktop does not save side chats to disk, so you cannot return to one after closing the app.',
      examples: ['/btw what evidence do we have that this is a database race?'],
      related: ['compact'], docs: [D.desktop]
    },
    {
      key: 'config', cmd: '/config', cat: 'config',
      summary: 'Opens Settings &rarr; Claude Code; any text after the command is ignored.',
      detail: 'Unlike the CLI, Desktop accepts no <code>key=value</code> form: <code>/config theme=dark</code> does not set the theme. Change behavior through Settings or by editing the settings files Desktop shares with the CLI.',
      related: ['permissions'],
      docs: [D.notAvail, D.desktop]
    },
    {
      key: 'permissions', cmd: '/permissions', cat: 'perms', flags: ['blocked'],
      summary: 'Replies <code>isn&rsquo;t available in this environment</code> in Desktop.',
      detail: 'Anthropic names <code>/permissions</code> as the example of its general rule: built-ins that open an interactive terminal panel and take no arguments are refused in the Code tab. Manage rules by editing settings files or run the command from the standalone CLI.',
      note: 'Use the mode selector next to the send button (Cmd+Shift+M) for per-session permission modes.',
      related: ['config', 'terminal-dialog'],
      docs: [D.notAvail]
    },
    {
      key: 'custom-skill', cmd: '/<skill-name>', args: '[ARGUMENTS]', cat: 'author',
      flags: ['custom'], noCompare: true,
      summary: 'Invokes a built-in, personal, project, or plugin skill from Desktop.',
      detail: 'Type <code>/</code> in the prompt box or choose <strong>+ &rarr; Slash commands</strong> to browse this session&rsquo;s actual list. Personal skills apply to local sessions, SSH reads the remote home directory, and cloud sessions load skills enabled for your claude.ai account.',
      note: 'Sending a command mid-turn works like any other message from Claude Code 2.1.206 onward.',
      related: ['compact'],
      docs: [D.useSkills, D.skills, D.quick]
    }
  ];

  var inheritedKeys = [
    'context', 'clear', 'recap', 'usage', 'usage-credits', 'reload-plugins',
    'model', 'effort', 'fast', 'color', 'rename', 'autocompact', 'mcp',
    'batch', 'claude-api', 'code-review', 'dataviz', 'debug', 'deep-research',
    'design-sync', 'doctor', 'fewer-permission-prompts', 'loop', 'run',
    'run-skill-generator', 'simplify', 'verify'
  ];
  var included = {};
  direct.forEach(function (c) { included[c.key] = true; });
  inheritedKeys.forEach(function (key) { included[key] = true; });
  included['terminal-dialog'] = true;

  var inherited = window.SLASH.commands
    .filter(function (c) {
      return c.surface === 'claude-cli' && inheritedKeys.indexOf(c.key) > -1;
    })
    .map(function (base) {
      var c = Object.assign({}, base);
      delete c.id;
      delete c.surface;
      delete c.order;
      c.flags = (c.flags || []).slice();
      if (c.flags.indexOf('inherited') === -1) c.flags.push('inherited');
      c.related = (c.related || []).filter(function (key) { return included[key]; });
      c.docs = [D.useSkills].concat(c.docs || [D.ref]);
      c.note = (c.note ? c.note + '<br><br>' : '') +
        '<strong>Desktop inheritance:</strong> Anthropic says the Code tab includes built-in commands, but ' +
        'does not publish this command&rsquo;s Desktop behavior separately. Terminal UI and native app behavior may differ.';

      if (c.key === 'mcp') {
        c.args = 'reconnect [SERVER]|enable|disable [SERVER|all]';
        c.summary = 'Runs text-based MCP management subcommands inherited from Claude Code.';
        c.detail = 'Direct <code>reconnect</code>, <code>enable</code>, and <code>disable</code> forms avoid the terminal-only interactive panel. Bare <code>/mcp</code> is not claimed here because Desktop has native integration controls.';
      }
      return c;
    });

  var terminalDialog = {
    key: 'terminal-dialog', cmd: '/<terminal-dialog-command>', cat: 'system',
    flags: ['blocked'], noCompare: true,
    summary: 'Terminal-panel commands are refused or replaced by native Desktop controls.',
    detail: 'Commands such as <code>/hooks</code>, <code>/memory</code>, <code>/skills</code>, <code>/status</code>, <code>/diff</code>, <code>/rewind</code>, <code>/tasks</code>, <code>/artifacts</code>, <code>/workflows</code>, <code>/release-notes</code>, and <code>/help</code> open interactive terminal panels. Renderer commands such as <code>/theme</code>, <code>/tui</code>, <code>/focus</code>, <code>/scroll-speed</code>, and <code>/terminal-setup</code> have no Desktop equivalent.',
    note: 'Anthropic publishes the rule and names <code>/permissions</code> as its example, but does not enumerate every refused token. The examples here are conservatively derived from the command reference.',
    related: ['config', 'permissions'],
    docs: [D.notAvail, D.ref]
  };

  window.SLASH.register('claude-app', direct.concat(inherited, [terminalDialog]));
})();
