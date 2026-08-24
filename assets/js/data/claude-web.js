/* Claude Code on the web — commands documented for cloud sessions and for the
   claude.ai/code client while it drives a local session through Remote Control.
   Records name mode differences rather than pretending the two execution contexts
   expose identical behavior. */

(function () {
  var D = {
    web: ['Claude Code on the web — manage context', 'https://code.claude.com/docs/en/claude-code-on-the-web#manage-context'],
    ref: ['Claude Code commands', 'https://code.claude.com/docs/en/commands'],
    ctx: ['Explore the context window', 'https://code.claude.com/docs/en/context-window'],
    remote: ['Remote Control limitations', 'https://code.claude.com/docs/en/remote-control#limitations']
  };

  window.SLASH.register('claude-web', [
    {
      key: 'compact', cmd: '/compact', args: '[FOCUS-INSTRUCTIONS]', cat: 'context',
      summary: 'Summarizes the cloud conversation to free context-window space.',
      detail: 'The web surface supports the same optional focus text as the CLI, so you can name what the summary must preserve instead of accepting a generic compression.',
      examples: ['/compact keep the test output'],
      related: ['context', 'autocompact'],
      docs: [D.web, D.ctx]
    },
    {
      key: 'context', cmd: '/context', cat: 'context',
      summary: 'Shows what currently occupies the cloud session’s context window.',
      detail: 'Use it before compacting to see whether conversation history, tool results, memory, or loaded instructions are the real source of pressure.',
      related: ['compact', 'autocompact'],
      docs: [D.web, D.ctx]
    },
    {
      key: 'autocompact', cmd: '/autocompact', args: '[auto|TOKENS]', cat: 'context',
      summary: 'Changes the auto-compact window for this cloud environment.',
      detail: 'Pass a token count, or <code>auto</code> to restore the model-tuned window. With no argument, web and mobile print the current window size instead of opening a terminal dialog. The command only takes effect when <code>CLAUDE_CODE_AUTO_COMPACT_WINDOW</code> is not already set in the cloud environment; the web-managed percentage override remains separate.',
      requires: 'Claude Code 2.1.221+',
      examples: ['/autocompact 500k'],
      related: ['compact', 'context'],
      docs: [D.web, D.ref]
    },
    {
      key: 'model', cmd: '/model', args: 'MODEL', cat: 'config',
      summary: 'Switches the cloud session to a named model.',
      detail: 'Pass the model directly instead of using the terminal picker.',
      examples: ['/model sonnet'],
      requires: 'Claude Code 2.1.205+ in the session environment',
      related: ['effort', 'fast'],
      docs: [D.web, D.ref]
    },
    {
      key: 'effort', cmd: '/effort', args: 'LEVEL|auto|status', cat: 'config',
      summary: 'Sets or reports reasoning effort without the terminal slider.',
      detail: 'Supply the value directly. Claude Code reports <code>Not applied</code> if the model is still inside a launch-default effort hold.',
      examples: ['/effort high', '/effort status'],
      requires: 'Claude Code 2.1.205+ in the session environment',
      related: ['model', 'fast'],
      docs: [D.web, D.ref]
    },
    {
      key: 'fast', cmd: '/fast', args: 'on|off', cat: 'config',
      summary: 'Toggles fast serving for an eligible cloud session.',
      detail: 'There is no picker on the web. The command only works when this session started with fast mode enabled.',
      requires: 'Session launched with fast mode; Claude Code 2.1.205+',
      related: ['model', 'effort'],
      docs: [D.web, D.ref]
    },
    {
      key: 'color', cmd: '/color', args: 'COLOR|default', cat: 'session',
      summary: 'Sets the cloud session’s identifying color.',
      detail: 'Pass the color explicitly because cloud sessions cannot open the terminal color picker.',
      examples: ['/color cyan'],
      requires: 'Claude Code 2.1.205+ in the session environment',
      related: ['rename'],
      docs: [D.web, D.ref]
    },
    {
      key: 'rename', cmd: '/rename', args: 'NAME', cat: 'session',
      summary: 'Renames the cloud session from the conversation.',
      detail: 'Pass the name directly instead of opening the terminal naming UI. Claude normalizes invisible and control characters, caps names at 200 characters, and rejects a name that is empty after normalization.',
      examples: ['/rename checkout-race-investigation'],
      requires: 'Claude Code 2.1.205+ in the session environment',
      related: ['color'],
      docs: [D.web, D.ref]
    },
    {
      key: 'config', cmd: '/config', cat: 'config',
      summary: 'Opens Claude Code settings for the web surface.',
      detail: 'Unlike the CLI, web <code>/config</code> does not accept direct <code>key=value</code> changes: any text after the command is ignored. Change cloud behavior through committed settings files or cloud-environment variables instead.',
      related: ['model', 'effort'],
      docs: [D.web, D.ref]
    },
    {
      key: 'mcp', cmd: '/mcp', args: '[reconnect SERVER|enable|disable [SERVER|all]]', cat: 'config',
      summary: 'Opens web connector settings or manages a Remote Control session&rsquo;s MCP servers.',
      detail: 'Bare <code>/mcp</code> on the web opens the claude.ai connectors directory. The <code>reconnect</code>, <code>enable</code>, and <code>disable</code> subcommands work from web and mobile; reconnecting without a server name retries every failed server or server awaiting authentication.',
      requires: 'Claude Code 2.1.166+',
      note: 'This behavior is documented for the claude.ai/code client under Remote Control limitations; Anthropic does not separately state the cloud-session behavior.',
      related: ['config', 'reload-plugins'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'usage', cmd: '/usage', aliases: ['/cost', '/stats'], cat: 'diag',
      summary: 'Prints session cost, plan limits, and activity statistics as text.',
      detail: 'Eligible subscription plans also break usage down by skill, subagent, plugin, and MCP server.',
      note: 'Anthropic lists this among text-output commands that work from web and mobile; cloud support also follows the general rule that text-producing built-ins work.',
      related: ['usage-credits', 'context'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'usage-credits', cmd: '/usage-credits', cat: 'diag',
      summary: 'Prints the usage-credits billing URL in the web conversation.',
      detail: 'Team and Enterprise sessions cannot send an administrator credit request from web or mobile; the response directs you to run the command in the local terminal instead.',
      requires: 'Eligible account',
      note: 'Documented in the Remote Control limitations list for web and mobile.',
      related: ['usage'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'recap', cmd: '/recap', cat: 'context',
      summary: 'Prints a one-line summary of the current session.',
      note: 'Listed among the text-output commands that work from web and mobile.',
      related: ['context', 'compact'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'reload-plugins', cmd: '/reload-plugins', args: '[--force]', cat: 'config',
      summary: 'Reloads active plugins and returns the result as text.',
      note: 'Listed among the text-output commands that work from web and mobile.',
      related: ['mcp', 'plugin'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'clear', cmd: '/clear', aliases: ['/reset', '/new'], cat: 'session', flags: ['blocked'],
      summary: 'Is unavailable in cloud sessions; start a new session from the sidebar instead.',
      note: 'Different mode, different answer: when claude.ai/code drives a local session through Remote Control, <code>/clear</code> works and resets the conversation on every connected device.',
      related: ['compact', 'context'],
      docs: [D.remote, D.web, D.ref]
    },
    {
      key: 'plugin', cmd: '/plugin', cat: 'config', flags: ['blocked'],
      summary: 'Is unavailable because plugin management runs only in the terminal interface.',
      detail: 'Cloud sessions can still load plugins declared in repository settings or enabled for the claude.ai account, but the interactive plugin manager is terminal-only.',
      related: ['reload-plugins', 'resume'],
      docs: [D.web, D.remote]
    },
    {
      key: 'resume', cmd: '/resume', aliases: ['/continue'], cat: 'session', flags: ['blocked'],
      summary: 'Is unavailable because browser session switching happens in the sidebar.',
      detail: 'Anthropic names <code>/resume</code> with <code>/plugin</code> as terminal-interface-only, whether or not an argument is supplied.',
      related: ['clear', 'teleport', 'plugin'],
      docs: [D.web, D.remote]
    },
    {
      key: 'teleport', cmd: '/teleport', cat: 'session',
      summary: 'Prints the exact CLI command for continuing this cloud session locally.',
      detail: 'From inside the cloud session, this returns a ready-to-run <code>claude --teleport &lt;session-id&gt;</code> command. The actual branch fetch and conversation handoff happen after you run that command in a matching local checkout.',
      requires: 'Cloud environment with Claude Code 2.1.223+',
      related: ['rename'],
      docs: [['Claude Code on the web — web to terminal', 'https://code.claude.com/docs/en/claude-code-on-the-web#from-web-to-terminal'], D.ref]
    }
  ]);
})();
