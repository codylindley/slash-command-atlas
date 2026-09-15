/* Claude Code on the web — commands documented for cloud sessions and for the
   claude.ai/code client while it drives a local session through Remote Control.
   Records name mode differences rather than pretending the two execution contexts
   expose identical behavior. First-party documentation and dated release notes
   checked on 2026-09-14. */

(function () {
  var D = {
    web: ['Claude Code on the web — manage context', 'https://code.claude.com/docs/en/claude-code-on-the-web#manage-context'],
    ref: ['Claude Code commands', 'https://code.claude.com/docs/en/commands'],
    ctx: ['Explore the context window', 'https://code.claude.com/docs/en/context-window'],
    advisor: ['Advisor command in non-terminal sessions', 'https://code.claude.com/docs/en/advisor'],
    reload: ['Direct versus remotely forwarded plugin reloads', 'https://code.claude.com/docs/en/discover-plugins#apply-plugin-changes-without-restarting'],
    skills: ['Skill usage reports and Remote Control limits', 'https://code.claude.com/docs/en/skills#find-unused-skills'],
    styles: ['Output styles', 'https://code.claude.com/docs/en/output-styles'],
    styleRelease: ['Claude Code 2.1.269 — output-style command restored', 'https://github.com/anthropics/claude-code/releases/tag/v2.1.269'],
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
      key: 'advisor', cmd: '/advisor', args: '[MODEL|off]', cat: 'config',
      summary: 'Reports or changes the advisor for a Remote Control session.',
      detail: 'Run bare for the current advisor and accepted model aliases, pass a model to select it, or use <code>off</code> to disable it. The remote text forms affect this session only and leave the saved default unchanged.',
      requires: 'Claude Code 2.1.260+; advisor-compatible model and provider',
      note: 'Explicitly documented for the web/mobile Remote Control client. The advisor guide also covers headless execution, but does not separately specify the cloud browser handler.',
      examples: ['/advisor opus', '/advisor off'],
      related: ['model', 'effort'],
      docs: [D.remote, D.advisor]
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
      detail: 'Pass red, blue, green, yellow, purple, orange, pink, cyan, or <code>default</code>. The cloud guide specifies an explicit value; the CLI&rsquo;s bare command chooses a random color rather than opening a picker.',
      examples: ['/color cyan'],
      requires: 'Claude Code 2.1.205+ in the session environment',
      related: ['rename'],
      docs: [D.web, D.ref]
    },
    {
      key: 'rename', cmd: '/rename', args: 'NAME', cat: 'session',
      summary: 'Renames the cloud session from the conversation.',
      detail: 'Supply an explicit name; the CLI&rsquo;s bare auto-naming form is not the documented cloud invocation. Claude replaces invisible and control characters with spaces, caps names at 200 characters, and rejects a name that is empty after normalization.',
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
      key: 'output-style', cmd: '/output-style', args: '[NAME]', cat: 'config',
      summary: 'Lists or switches output styles in cloud and Remote Control sessions.',
      detail: 'Use the restored command to select a built-in or installed response style without the terminal settings menu. Anthropic explicitly includes cloud, Remote Control, and other headless sessions in the 2.1.269 release announcement.',
      requires: 'Claude Code 2.1.269+ in the session environment',
      note: 'The output-styles guide still describes removal of the older command in 2.1.91; the dated 2.1.269 release notes document its return.',
      examples: ['/output-style Concise'],
      related: ['config', 'model'],
      docs: [D.styleRelease, D.styles]
    },
    {
      key: 'mcp', cmd: '/mcp', args: '[reconnect [SERVER]|enable [SERVER|all]|disable [SERVER|all]]', cat: 'config',
      summary: 'Opens web connector settings or manages a Remote Control session&rsquo;s MCP servers.',
      detail: 'Bare <code>/mcp</code> on the web opens the claude.ai connectors directory. Through Remote Control, <code>reconnect</code>, <code>enable</code>, and <code>disable</code> manage the host machine&rsquo;s servers. Unlike the local CLI form, <code>/mcp reconnect</code> without a server name retries every failed server or server awaiting authentication.',
      note: 'This behavior is documented for the claude.ai/code client under Remote Control limitations; Anthropic does not separately state the cloud-session behavior.',
      related: ['config', 'reload-plugins'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'usage', cmd: '/usage', aliases: ['/cost', '/stats'], cat: 'diag',
      summary: 'Prints local-session usage as text through Remote Control.',
      detail: 'Eligible subscription plans also break usage down by skill, subagent, plugin, and MCP server.',
      note: 'Explicitly listed for web/mobile Remote Control. The cloud guide gives a general text-output rule rather than separately enumerating this command.',
      related: ['usage-credits', 'context'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'usage-credits', cmd: '/usage-credits', cat: 'diag',
      summary: 'Prints the usage-credits billing URL through Remote Control.',
      detail: 'Team and Enterprise sessions cannot send an administrator credit request from web or mobile; the response directs you to run the command in the local terminal instead.',
      requires: 'Eligible account',
      note: 'Documented in the Remote Control limitations list for web and mobile.',
      related: ['usage'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'recap', cmd: '/recap', cat: 'context',
      summary: 'Prints a one-line summary of the current session.',
      note: 'Explicitly listed for web/mobile Remote Control; this does not separately establish the cloud-session handler.',
      related: ['context', 'compact'],
      docs: [D.remote, D.ref]
    },
    {
      key: 'reload-plugins', cmd: '/reload-plugins', args: '[--force]', cat: 'config',
      summary: 'Reloads plugins through Remote Control when the host is an interactive terminal.',
      detail: 'A Desktop, SDK, or other non-terminal host refuses a remotely forwarded reload. Direct input in Desktop or a headless session is a different path supported in 2.1.260+; that path leaves plugin MCP server changes for the next session.',
      note: 'Direct Desktop/headless support must not be treated as proof of cloud-browser support. The documented Remote Control form requires an interactive-terminal host.',
      related: ['mcp', 'plugin'],
      docs: [D.remote, D.reload, D.ref]
    },
    {
      key: 'skill-doctor', cmd: '/skill-doctor', cat: 'diag', flags: ['blocked'],
      summary: 'Is refused over Remote Control; run skill usage reports on the host machine.',
      detail: 'Anthropic documents a connection-specific refusal for this command from a phone or browser. In a local interactive terminal it opens the plugin manager&rsquo;s Stats tab; a directly invoked <code>-p</code> session prints text instead.',
      note: 'This is an explicit Remote Control restriction. The direct headless text form does not separately establish cloud-browser support.',
      related: ['usage', 'context'],
      docs: [D.skills, D.remote, D.ref]
    },
    {
      key: 'clear', cmd: '/clear', aliases: ['/reset', '/new'], cat: 'session', flags: ['blocked'],
      summary: 'Is unavailable in cloud sessions; start a new session from the sidebar instead.',
      note: 'Different mode, different answer: when claude.ai/code drives a local session through Remote Control, <code>/clear</code> works and resets the conversation on every connected device.',
      related: ['compact', 'context'],
      docs: [D.remote, D.web, D.ref]
    },
    {
      key: 'exit', cmd: '/exit', cat: 'session',
      summary: 'Runs the local CLI&rsquo;s exit action through Remote Control.',
      detail: 'This acts on the session running on your machine, not just the browser tab. An ordinary CLI session exits; an attached background session detaches and keeps running.',
      note: 'Explicitly listed for web/mobile Remote Control. Anthropic does not separately document it as a cloud-session exit command.',
      related: ['clear', 'resume'],
      docs: [D.remote, D.ref]
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
