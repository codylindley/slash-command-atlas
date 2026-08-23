/* Claude Code Desktop — conservative first-party documented subset.
   Desktop runs the same underlying Claude Code engine, and Anthropic says its Slash
   commands menu includes built-ins plus user, project, and plugin skills. Anthropic
   does not publish a Desktop-only command table, so this register contains only the
   named prompt commands and the documented dynamic skill mechanism. */

(function () {
  var D = {
    desktop: ['Use Claude Code Desktop', 'https://code.claude.com/docs/en/desktop'],
    quick: ['Get started with Claude Code Desktop', 'https://code.claude.com/docs/en/desktop-quickstart'],
    skills: ['Extend Claude Code with skills', 'https://code.claude.com/docs/en/skills'],
    context: ['Explore the context window', 'https://code.claude.com/docs/en/context-window']
  };

  window.SLASH.register('claude-app', [
    {
      key: 'compact', cmd: '/compact', args: '[FOCUS-INSTRUCTIONS]', cat: 'context',
      summary: 'Compacts the Desktop conversation to free context-window space.',
      detail: 'Desktop compacts automatically as the window fills; invoke this earlier when a long session starts carrying more history than the current task needs.',
      examples: ['/compact preserve the approved plan and unresolved test failure'],
      related: ['btw'],
      docs: [D.desktop, D.context]
    },
    {
      key: 'btw', cmd: '/btw', args: 'QUESTION', cat: 'context',
      summary: 'Opens a side chat that does not change the main conversation.',
      detail: 'The side chat can read the main thread up to that point, making it useful for explanation or a quick assumption check without steering the agent. It is documented for local and SSH Desktop sessions.',
      examples: ['/btw what evidence do we have that this is a database race?'],
      related: ['compact'],
      docs: [D.desktop]
    },
    {
      key: 'custom-skill', cmd: '/<skill-name>', args: '[ARGUMENTS]', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Invokes a built-in, personal, project, or plugin skill from Desktop.',
      detail: 'Type <code>/</code> in the prompt box or choose <strong>+ &rarr; Slash commands</strong> to browse what this session actually has. The list is dynamic and shared with Claude Code configuration, so the Atlas does not invent a fixed Desktop inventory.',
      related: ['compact'],
      docs: [D.desktop, D.quick, D.skills]
    }
  ]);
})();
