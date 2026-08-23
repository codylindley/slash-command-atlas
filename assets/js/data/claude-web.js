/* Claude Code on the web — the subset Anthropic explicitly documents for cloud
   sessions. The web guide says text-producing built-ins work generally, but it
   enumerates only the commands below and their web-specific behavior. Terminal-only
   commands and undocumented assumptions are deliberately excluded. */

(function () {
  var D = {
    web: ['Claude Code on the web — manage context', 'https://code.claude.com/docs/en/claude-code-on-the-web#manage-context'],
    ref: ['Claude Code commands', 'https://code.claude.com/docs/en/commands'],
    ctx: ['Explore the context window', 'https://code.claude.com/docs/en/context-window']
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
      key: 'autocompact', cmd: '/autocompact', args: 'auto|TOKENS', cat: 'context',
      summary: 'Changes the auto-compact window for this cloud environment.',
      detail: 'Pass a token count, or <code>auto</code> to restore the model-tuned window. The command only takes effect when <code>CLAUDE_CODE_AUTO_COMPACT_WINDOW</code> is not already set in the cloud environment; the web-managed percentage override remains separate.',
      examples: ['/autocompact 500k'],
      related: ['compact', 'context'],
      docs: [D.web, D.ref]
    },
    {
      key: 'model', cmd: '/model', args: 'MODEL', cat: 'config',
      summary: 'Switches the cloud session to a named model.',
      detail: 'Cloud sessions cannot open the terminal model picker, so the model argument is required here.',
      examples: ['/model sonnet'],
      related: ['effort', 'fast'],
      docs: [D.web, D.ref]
    },
    {
      key: 'effort', cmd: '/effort', args: 'LEVEL|auto|status', cat: 'config',
      summary: 'Sets or reports reasoning effort without the terminal slider.',
      detail: 'Supply the value directly. Claude Code reports <code>Not applied</code> if the model is still inside a launch-default effort hold.',
      examples: ['/effort high', '/effort status'],
      related: ['model', 'fast'],
      docs: [D.web, D.ref]
    },
    {
      key: 'fast', cmd: '/fast', args: 'on|off', cat: 'config',
      summary: 'Toggles fast serving for an eligible cloud session.',
      detail: 'There is no picker on the web. The command only works when this session started with fast mode enabled.',
      requires: 'Session launched with fast mode',
      related: ['model', 'effort'],
      docs: [D.web, D.ref]
    },
    {
      key: 'color', cmd: '/color', args: 'COLOR|default', cat: 'session',
      summary: 'Sets the cloud session’s identifying color.',
      detail: 'Pass the color explicitly because cloud sessions cannot open the terminal color picker.',
      examples: ['/color cyan'],
      related: ['rename'],
      docs: [D.web, D.ref]
    },
    {
      key: 'rename', cmd: '/rename', args: 'NAME', cat: 'session',
      summary: 'Renames the cloud session from the conversation.',
      detail: 'The web form requires a name argument rather than opening the terminal naming UI.',
      examples: ['/rename checkout-race-investigation'],
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
      key: 'teleport', cmd: '/teleport', cat: 'session',
      summary: 'Prints the exact CLI command for continuing this cloud session locally.',
      detail: 'From inside the cloud session, this returns a ready-to-run <code>claude --teleport &lt;session-id&gt;</code> command. The actual branch fetch and conversation handoff happen after you run that command in a matching local checkout.',
      requires: 'Cloud environment with Claude Code 2.1.223+',
      related: ['rename'],
      docs: [['Claude Code on the web — web to terminal', 'https://code.claude.com/docs/en/claude-code-on-the-web#from-web-to-terminal'], D.ref]
    }
  ]);
})();
