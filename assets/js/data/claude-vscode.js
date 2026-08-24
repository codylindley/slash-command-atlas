/* Claude Code for VS Code — conservative first-party documented subset.
   Anthropic describes the extension as exposing only a subset of CLI commands.
   This file includes commands named in the VS Code and Remote Control guides; menu
   actions whose slash spelling is not documented are not inferred. */

(function () {
  var D = {
    vscode: ['Use Claude Code in VS Code', 'https://code.claude.com/docs/en/vs-code'],
    remote: ['Remote Control from VS Code', 'https://code.claude.com/docs/en/remote-control#start-a-remote-control-session'],
    context: ['Explore the context window', 'https://code.claude.com/docs/en/context-window'],
    plugins: ['Claude Code plugins', 'https://code.claude.com/docs/en/plugins']
  };

  window.SLASH.register('claude-vscode', [
    {
      key: 'compact', cmd: '/compact', cat: 'context',
      summary: 'Manually compacts the VS Code conversation context.',
      detail: 'Claude compacts automatically when the context indicator approaches its limit; this triggers the same cleanup earlier from the editor prompt.',
      when: [
        'The context indicator is nearly full',
        'A long debugging trail is crowding out the code that now matters'
      ],
      related: ['btw', 'usage'],
      docs: [D.vscode, D.context]
    },
    {
      key: 'btw', cmd: '/btw', args: 'QUESTION', cat: 'context',
      summary: 'Opens a side question without adding it to the main conversation.',
      detail: 'The answer appears in a panel beside chat, supports follow-ups, and survives window reloads. VS Code retains the newest 20 exchanges and cleans old threads on the configured retention schedule.',
      examples: ['/btw why did we choose a write-through cache here?'],
      requires: 'Claude Code 2.1.227+',
      related: ['compact'],
      docs: [D.vscode]
    },
    {
      key: 'usage', cmd: '/usage', cat: 'diag',
      summary: 'Opens the extension’s Account & usage dialog.',
      detail: 'Shows account and plan, session and weekly usage bars, reset timing, and local Day/Week attribution by skill, subagent, plugin, and MCP server. It also highlights behaviors responsible for at least 10% of recent use.',
      requires: 'Claude Code 2.1.174+',
      related: ['compact'],
      docs: [D.vscode]
    },
    {
      key: 'remote-control', cmd: '/remote-control', aliases: ['/rc'], cat: 'session',
      summary: 'Makes the VS Code session available through claude.ai or mobile.',
      detail: 'The extension shows connection status above the prompt and can open the remote browser view. Run the command again or close the banner to disconnect.',
      note: 'Unlike the CLI form, VS Code accepts no custom name argument and does not display a QR code.',
      requires: 'Claude subscription and Remote Control policy',
      related: ['usage'],
      docs: [D.remote, D.vscode]
    },
    {
      key: 'bug', cmd: '/bug', args: '[DESCRIPTION]', cat: 'diag',
      summary: 'Opens the VS Code problem-report dialog with an optional prefilled description.',
      detail: 'A first-party Anthropic connection can submit the confirmed report directly. On a third-party provider or without Anthropic credentials the dialog still opens, but the extension sends nothing and does not create the local archive the CLI would.',
      note: 'Review the selected report context for secrets before submitting.',
      requires: 'Claude Code 2.1.229+',
      related: ['feedback'],
      docs: [D.vscode]
    },
    {
      key: 'feedback', cmd: '/feedback', args: '[DESCRIPTION]', cat: 'diag',
      summary: 'Opens the extension’s feedback and problem-report dialog.',
      detail: 'The optional text prefills the report. Submission rules match <code>/bug</code>: direct on a first-party Anthropic connection, unavailable through a third-party provider, and no fallback local archive.',
      requires: 'Claude Code 2.1.229+',
      related: ['bug'],
      docs: [D.vscode]
    },
    {
      key: 'plugins', cmd: '/plugins', cat: 'config',
      summary: 'Opens VS Code’s graphical plugin and marketplace manager.',
      detail: 'Install plugins at user, project, or local scope; enable or disable installed plugins; and add, refresh, or remove marketplaces. The extension uses Claude Code&rsquo;s shared plugin configuration underneath.',
      related: ['usage'],
      docs: [D.vscode, D.plugins]
    },
    {
      key: 'mcp', cmd: '/mcp', cat: 'config',
      summary: 'Opens VS Code&rsquo;s MCP server manager.',
      detail: 'Shows configured Model Context Protocol servers and lets you enable or disable them, reconnect, and manage OAuth authentication without leaving the chat panel. Adding a new server still requires the CLI.',
      related: ['plugins', 'usage'],
      docs: [D.vscode]
    },
    {
      key: 'login', cmd: '/login', cat: 'system',
      summary: 'Starts account sign-in when the extension is not authenticated.',
      detail: 'The extension normally opens its sign-in screen automatically; this command is the documented recovery path when the panel reports that you are not logged in.',
      related: ['usage', 'remote-control'],
      docs: [D.vscode]
    }
  ]);
})();
