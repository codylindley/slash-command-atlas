/* Shared metadata: surfaces, categories, sources.
   Command records are registered by the files that follow. */

window.SLASH = {
  commands: [],
  register(surface, list) {
    list.forEach((c, i) => {
      c.surface = surface;
      c.id = surface + '-' + c.key;
      c.order = i;
      this.commands.push(c);
    });
  }
};

window.SLASH.products = [
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    vendor: 'GitHub',
    blurb: 'GitHub&rsquo;s coding agent. Note the full name: &ldquo;Copilot&rdquo; alone is ambiguous, ' +
           'since Microsoft ships several unrelated products under that word.'
  },
  {
    id: 'claude',
    name: 'Claude Code',
    vendor: 'Anthropic',
    blurb: 'Anthropic&rsquo;s coding agent, available in the terminal and through dedicated desktop, ' +
           'web, and editor experiences.'
  },
  {
    id: 'codex',
    name: 'OpenAI Codex',
    vendor: 'OpenAI',
    blurb: 'OpenAI&rsquo;s coding agent, available in the ChatGPT desktop app, the terminal, and ' +
           'supported editor extensions, with cloud tasks available in the browser.'
  }
];

window.SLASH.surfaces = [
  {
    id: 'app',
    product: 'copilot',
    name: 'GitHub Copilot app',
    label: 'Desktop app',
    where: 'macOS, Linux, Windows',
    color: 'var(--c-app)',
    note:
      '<p><strong>The desktop app is the richest surface.</strong> It is built on top of the GitHub Copilot CLI, ' +
      'so it inherits CLI vocabulary like <code>/chronicle</code>, <code>/compact</code> and <code>/model</code> — ' +
      'then adds app-only workflows: <code>/orchestrate</code>, <code>/create-canvas</code>, <code>/inbox</code>, ' +
      'and the <code>/pr-*</code> family.</p>' +
      '<p>Many commands are context-gated. If a command is missing from the picker, check its ' +
      '<em>Requires</em> badge — most need an active session, and the pull request commands need a real PR.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands'
  },
  {
    id: 'cli',
    product: 'copilot',
    name: 'GitHub Copilot CLI',
    label: 'CLI',
    where: 'Terminal — interactive session',
    color: 'var(--c-cli)',
    note:
      '<p><strong>The largest command set by far.</strong> The CLI exposes everything the app does plus the ' +
      'machinery underneath it: authentication, sandboxing, plugins and marketplaces, MCP server management, ' +
      'worktrees, scheduling, and terminal ergonomics.</p>' +
      '<p>Several commands are marked experimental and may be hidden until you run <code>/experimental on</code>. ' +
      'The definitive list for <em>your</em> build is always <code>/help</code>.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference'
  },
  {
    id: 'vscode',
    product: 'copilot',
    name: 'GitHub Copilot Chat in VS Code',
    label: 'VS Code',
    where: 'Chat view, inline chat, editor',
    color: 'var(--c-vscode)',
    note:
      '<p><strong>A different lineage entirely.</strong> VS Code\'s slash commands are editor actions — ' +
      '<code>/fix</code>, <code>/tests</code>, <code>/explain</code>, <code>/doc</code> — joined by a set of ' +
      'authoring commands for customizing GitHub Copilot itself (<code>/create-skill</code>, <code>/create-agent</code>, ' +
      '<code>/instructions</code>).</p>' +
      '<p>VS Code also lets you invoke <em>your own</em> skills and prompt files as slash commands: a skill file named ' +
      '<code>webapp-testing.md</code> becomes <code>/webapp-testing</code>. Alongside slash commands it has ' +
      '<code>@</code> chat participants and <code>#</code> context references, which the other surfaces do not.</p>',
    docs: 'https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features'
  },
  {
    id: 'jetbrains',
    product: 'copilot',
    name: 'GitHub Copilot Chat in JetBrains',
    label: 'JetBrains',
    coverage: 'documented-subset',
    where: 'IntelliJ, PyCharm, GoLand, WebStorm…',
    color: 'var(--c-jb)',
    note:
      '<p><strong>The published list is not exhaustive.</strong> GitHub&rsquo;s cheat sheet names the classic editor ' +
      'actions shown here. JetBrains 2026.2 also ships an Agent, Plan, and Autopilot integration and says it supports ' +
      'a subset of GitHub Copilot CLI commands, but does not enumerate that subset.</p><p>If you run an interactive ' +
      '<strong>GitHub Copilot CLI session inside JetBrains</strong>, documented CLI commands such as ' +
      '<code>/chronicle</code>, <code>/compact</code>, and <code>/remote</code> are available from that session too. ' +
      'Type <code>/</code> in your installed IDE for the definitive current set.</p>',
    docs: 'https://www.jetbrains.com/help/ai-assistant/copilot-agent.html'
  },
  {
    id: 'visualstudio',
    product: 'copilot',
    name: 'GitHub Copilot Chat in Visual Studio',
    label: 'Visual Studio',
    coverage: 'documented-subset',
    where: 'Visual Studio 2022 on Windows',
    color: 'var(--c-vs)',
    note:
      '<p><strong>Visual Studio now documents a broader set than GitHub&rsquo;s generic cheat sheet.</strong> Current ' +
      'Microsoft guidance adds <code>/generate</code>, <code>/generateInstructions</code>, and ' +
      '<code>/savePrompt</code> to the familiar editor actions. Visual Studio is also the only surface with ' +
      '<code>/optimize</code> as a first-class command.</p><p>The new Copilot SDK-powered Agent mode remains in ' +
      'preview and may expose more agent-style commands than Microsoft has enumerated. Type <code>/</code> in your ' +
      'installed build for the definitive list.</p>',
    docs: 'https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio'
  },
  {
    id: 'xcode',
    product: 'copilot',
    name: 'GitHub Copilot Chat in Xcode',
    label: 'Xcode',
    coverage: 'documented-subset',
    where: 'Xcode on macOS',
    color: 'var(--c-xcode)',
    note:
      '<p>The smallest set — five editor actions. Note that <code>/simplify</code> is unique to Xcode, and that ' +
      '<code>/doc</code>, <code>/explain</code> and <code>/fix</code> are worded slightly differently here than ' +
      'in the other editors.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=xcode'
  },
  {
    id: 'web',
    product: 'copilot',
    name: 'GitHub Copilot Chat on GitHub.com',
    label: 'GitHub.com',
    coverage: 'documented-subset',
    where: 'Browser — github.com and mobile',
    color: 'var(--c-web)',
    note:
      '<p>Conversation management only. There are no code-action commands here, because the browser chat has no ' +
      '&ldquo;active editor&rdquo;. Context comes from <code>@</code> mentions of repositories, issues, pull ' +
      'requests, discussions and files instead, and actions are performed through MCP skills you invoke in plain ' +
      'English rather than with a slash.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet'
  },
  {
    id: 'claude-app',
    product: 'claude',
    name: 'Claude Code Desktop',
    label: 'Desktop app',
    coverage: 'documented-subset',
    where: 'Claude Desktop Code tab — macOS, Windows',
    color: 'var(--c-claude-app)',
    note:
      '<p><strong>Desktop inherits the Claude Code built-in command set.</strong> Anthropic documents that typing ' +
      '<code>/</code> in the Code tab lists built-ins alongside custom, project, and plugin skills because Desktop ' +
      'runs the same engine as the CLI. It also documents the limit: commands that open an interactive terminal ' +
      'panel and take no arguments reply <code>isn&rsquo;t available in this environment</code>, while ' +
      '<code>/config</code> opens Settings and ignores arguments.</p><p>Anthropic publishes no Desktop-only command ' +
      'table. Commands named directly for Desktop are shown normally; conservative rule-derived entries carry an ' +
      '<strong>Inherited built-in</strong> badge. Unsettled commands are omitted rather than guessed, so your ' +
      'session&rsquo;s picker remains definitive.</p>',
    docs: 'https://code.claude.com/docs/en/desktop'
  },
  {
    id: 'claude-cli',
    product: 'claude',
    name: 'Claude Code CLI',
    label: 'CLI',
    where: 'Terminal — interactive session',
    color: 'var(--c-claude-cli)',
    note:
      '<p><strong>The complete current Claude Code command reference.</strong> It includes fixed built-ins, bundled ' +
      'skills and dynamic workflows, with aliases folded into their canonical records. Removed commands are not ' +
      'counted.</p><p>Availability still depends on platform, plan, provider, feature rollout and environment. Type ' +
      '<code>/</code> in your session to see the definitive set for your installation.</p>',
    docs: 'https://code.claude.com/docs/en/commands'
  },
  {
    id: 'claude-vscode',
    product: 'claude',
    name: 'Claude Code in VS Code',
    label: 'IDE extension',
    coverage: 'documented-subset',
    where: 'VS Code, Cursor and compatible forks',
    color: 'var(--c-claude-vscode)',
    note:
      '<p><strong>A documented extension subset.</strong> Anthropic explicitly says the graphical VS Code ' +
      'extension exposes only part of the CLI command set. Its <code>/</code> menu also mixes slash commands with ' +
      'menu actions: switching models, toggling extended thinking, Focus view, and General Config have no published ' +
      'slash spelling, so the Atlas does not invent one.</p><p>The entries here are limited to tokens Anthropic ' +
      'spells with a leading slash. The JetBrains integration is not separate because it launches or connects the ' +
      'terminal CLI.</p>',
    docs: 'https://code.claude.com/docs/en/vs-code'
  },
  {
    id: 'claude-web',
    product: 'claude',
    name: 'Claude Code on the web',
    label: 'Web',
    coverage: 'documented-subset',
    where: 'Browser — claude.ai/code',
    color: 'var(--c-claude-web)',
    note:
      '<p><strong>A documented web-compatible subset.</strong> Cloud sessions support text-producing built-ins, ' +
      'but terminal-only commands are unavailable and picker commands take arguments instead. Anthropic does not ' +
      'publish one complete cloud table, so this surface uses both its cloud guide and its explicit Remote Control ' +
      'web list.</p><p>Two modes share <code>claude.ai/code</code>: a <strong>cloud session</strong> runs on remote ' +
      'infrastructure, while <strong>Remote Control</strong> steers Claude Code on your own machine. Support can ' +
      'differ &mdash; for example, <code>/clear</code> works through Remote Control but not in a cloud session. ' +
      'Records name the relevant mode when behavior diverges. This is not the general Claude chat composer.</p>',
    docs: 'https://code.claude.com/docs/en/claude-code-on-the-web#manage-context'
  },
  {
    id: 'codex-app',
    product: 'codex',
    name: 'OpenAI Codex in the ChatGPT desktop app',
    label: 'Desktop app',
    coverage: 'documented-subset',
    where: 'ChatGPT desktop app — Codex workspace',
    color: 'var(--c-codex-app)',
    note:
      '<p><strong>The graphical Codex command set.</strong> Its 24-row command table covers local and cloud ' +
      'execution, projects and worktrees, model and reasoning controls, review, goals and side chats. Custom ' +
      'prompts appear as <code>/prompts:&lt;name&gt;</code> entries, enabled skills are injected into the picker, ' +
      'and OpenAI documents <code>/share</code> separately from the table.</p><p>ChatGPT web has a separate ' +
      'contextual composer menu; OpenAI explicitly says the desktop and CLI command sets do not apply there.</p>',
    docs: 'https://learn.chatgpt.com/docs/reference/slash-commands'
  },
  {
    id: 'codex-cli',
    product: 'codex',
    name: 'OpenAI Codex CLI',
    label: 'CLI',
    where: 'Terminal — interactive TUI',
    color: 'var(--c-codex-cli)',
    note:
      '<p><strong>The interactive terminal command set.</strong> This surface includes slash commands typed inside ' +
      'an active Codex session; launch-time <code>codex</code> subcommands and flags are deliberately outside the ' +
      'Atlas.</p><p>Several entries are contextual or experimental, so the popup in your installed build remains ' +
      'the definitive source for availability.</p>',
    docs: 'https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands'
  },
  {
    id: 'codex-ide',
    product: 'codex',
    name: 'OpenAI Codex IDE extension',
    label: 'IDE extension',
    coverage: 'documented-subset',
    where: 'VS Code, Cursor and Windsurf',
    color: 'var(--c-codex-ide)',
    note:
      '<p><strong>An explicit 22-command table plus prose-documented additions.</strong> It largely matches the desktop ' +
      'composer, but Desktop additionally documents <code>/pet</code> and <code>/task</code>, and <code>/fork</code> ' +
      'has a narrower documented behavior here. OpenAI documents <code>/skills</code> and dynamic ' +
      '<code>/prompts:&lt;name&gt;</code> for the extension outside that table, proving the table is not exhaustive.</p>' +
      '<p>Xcode and JetBrains integrations are not folded into this surface because OpenAI does not publish ' +
      'separate slash-command tables for them.</p>',
    docs: 'https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands'
  },
  {
    id: 'codex-web',
    product: 'codex',
    name: 'OpenAI Codex on the web',
    label: 'Web',
    coverage: 'unpublished-inventory',
    where: 'Browser — chatgpt.com/codex',
    color: 'var(--c-codex-web)',
    note:
      '<p><strong>A slash menu exists, but OpenAI publishes no inventory for it.</strong> The developer commands ' +
      'reference says ChatGPT web &ldquo;has its own composer command menu&rdquo; and that the Codex desktop, CLI, ' +
      'and IDE command sets do not apply there. No first-party page enumerates that menu, so the Atlas leaves this ' +
      'surface empty rather than copying commands from another product surface.</p>' +
      '<p>Codex cloud work is still fully supported in the browser: connect a repository, create an environment, ' +
      'start a task, review the diff, and open a pull request. Those workflows are driven through the interface, ' +
      'prose, and contextual mentions rather than a published slash-command reference.</p>',
    docs: 'https://learn.chatgpt.com/docs/developer-commands?surface=web'
  }
];

window.SLASH.categories = {
  modes:    'Session modes',
  session:  'Session lifecycle',
  context:  'Context & input',
  review:   'Review & critique',
  pr:       'Pull requests',
  delegate: 'Delegation & parallelism',
  config:   'Models, agents & skills',
  perms:    'Tools & permissions',
  history:  'History & chronicle',
  diag:     'Diagnostics & usage',
  editor:   'Editor actions',
  author:   'Customization authoring',
  convo:    'Conversation management',
  system:   'CLI & environment'
};

window.SLASH.sources = [
  ['Slash commands for the GitHub Copilot app', 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands'],
  ['Built-in skills for the GitHub Copilot app', 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills'],
  ['Working with agent sessions in the GitHub Copilot app', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions'],
  ['GitHub Copilot CLI command reference', 'https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference'],
  ['GitHub Copilot Chat cheat sheet (all IDEs and the web)', 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet'],
  ['VS Code AI features cheat sheet', 'https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet'],
  ['Visual Studio: customize chat responses', 'https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio'],
  ['GitHub Copilot agent in JetBrains IDEs', 'https://www.jetbrains.com/help/ai-assistant/copilot-agent.html'],
  ['A guide to slash commands in the GitHub Copilot app (GitHub Blog)', 'https://github.blog/ai-and-ml/github-copilot/a-guide-to-slash-commands-in-the-github-copilot-app/'],
  ['Claude Code command reference', 'https://code.claude.com/docs/en/commands'],
  ['Claude Code Desktop', 'https://code.claude.com/docs/en/desktop'],
  ['Claude Code on the web', 'https://code.claude.com/docs/en/claude-code-on-the-web'],
  ['Claude Code Remote Control limitations', 'https://code.claude.com/docs/en/remote-control#limitations'],
  ['Claude Code in VS Code', 'https://code.claude.com/docs/en/vs-code'],
  ['Slash commands in the ChatGPT desktop app', 'https://learn.chatgpt.com/docs/reference/slash-commands'],
  ['Share a read-only Codex thread', 'https://learn.chatgpt.com/docs/use-chatgpt#share-a-read-only-snapshot-of-a-codex-thread'],
  ['OpenAI Codex CLI developer commands', 'https://learn.chatgpt.com/docs/developer-commands?surface=cli'],
  ['OpenAI Codex CLI slash-command source', 'https://github.com/openai/codex/blob/main/codex-rs/tui/src/slash_command.rs'],
  ['OpenAI Codex IDE developer commands', 'https://learn.chatgpt.com/docs/developer-commands?surface=ide'],
  ['Build skills in Codex', 'https://learn.chatgpt.com/docs/build-skills'],
  ['Custom prompts in Codex', 'https://learn.chatgpt.com/docs/custom-prompts'],
  ['OpenAI Codex commands on the web', 'https://learn.chatgpt.com/docs/developer-commands?surface=web'],
  ['OpenAI Codex cloud', 'https://learn.chatgpt.com/docs/cloud']
];

window.SLASH.built = '2026-08-23';
