/* Claude Code for VS Code — conservative first-party documented subset.
   Anthropic describes the extension as exposing only a subset of CLI commands.
   This file includes commands named in the VS Code and Remote Control guides; menu
   actions whose slash spelling is not documented are not inferred.
   Documentation checked on 2026-09-14. */

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
      detail: 'Shows account and plan, usage-limit bars, reset timing, and Day/Week attribution by skill, subagent, plugin, and MCP server. Attribution is approximate and local to this machine, excluding other devices and cloud usage. Behaviors responsible for at least 10% of recent use receive reduction tips.',
      requires: 'claude.ai sign-in; attribution requires Claude Code 2.1.174+',
      related: ['compact'],
      docs: [D.vscode]
    },
    {
      key: 'remote-control', cmd: '/remote-control', aliases: ['/rc'], cat: 'session',
      summary: 'Makes the VS Code session available through claude.ai or mobile.',
      detail: 'Execution stays on your machine. The extension displays a Remote Control indicator in the prompt footer and posts the connected session URL in the conversation. Click the connected indicator to open the browser view; run the command again to disconnect.',
      note: 'Unlike the CLI form, VS Code accepts no custom name argument and does not display a QR code.',
      requires: 'claude.ai subscription sign-in; direct Anthropic connection; Remote Control allowed',
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
      detail: 'Install plugins at user, project, or local scope; enable or disable installed plugins; and add, refresh, or remove marketplaces. Changes apply to open sessions in that VS Code window; if reloading fails, the dialog offers retry or restart. The extension shares the CLI&rsquo;s plugin configuration.',
      related: ['usage'],
      docs: [D.vscode, D.plugins]
    },
    {
      key: 'mcp', cmd: '/mcp', cat: 'config',
      summary: 'Adds and manages MCP server connections from the chat panel.',
      detail: 'The dialog can add servers, remove locally saved user/project/local-scope servers, enable or disable connections, reconnect, and manage OAuth authentication. It writes the same configuration as <code>claude mcp add</code>; server-configuration changes take effect in conversations started afterwards.',
      requires: 'Claude Code 2.1.261+ for adding or removing servers',
      related: ['plugins', 'usage'],
      docs: [D.vscode]
    },
    {
      key: 'login', cmd: '/login', cat: 'system',
      summary: 'Sign-in command named in the extension&rsquo;s authentication error.',
      detail: 'Anthropic documents the message <code>Not logged in &middot; Please run /login</code>, but says the extension normally reopens its sign-in screen automatically. If the screen is missing, use <strong>Developer: Reload Window</strong>; the guide does not separately describe the slash handler.',
      related: ['usage', 'remote-control'],
      docs: [D.vscode]
    }
  ]);
})();
