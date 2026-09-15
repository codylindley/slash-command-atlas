/* Shared metadata: surfaces, categories, sources.
   Command records are registered by the files that follow. */

window.SLASH = {
  commands: [],
  register(surface, list) {
    list.forEach((c, i) => {
      var route = surface + '/' + c.key;
      var authoredExamples = Array.isArray(c.examples) ? c.examples.slice() : [];
      var hasExplicitMarker = Object.prototype.hasOwnProperty.call(c, '_exampleExplicit');
      var hasOverride = this.exampleOverrides &&
        Object.prototype.hasOwnProperty.call(this.exampleOverrides, route);
      var examples = hasOverride
        ? [].concat(this.exampleOverrides[route])
        : (authoredExamples.length ? authoredExamples : [c.cmd]);

      c.surface = surface;
      c.id = surface + '-' + c.key;
      c.order = i;
      c.examples = examples.filter((example, index) => examples.indexOf(example) === index);
      c.canonicalExample = c.examples[0];
      Object.defineProperty(c, '_exampleExplicit', {
        value: Boolean(hasOverride ||
          (hasExplicitMarker ? c._exampleExplicit : authoredExamples.length)),
        enumerable: false,
        configurable: true
      });
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
           'supported editor extensions. ChatGPT web has its own contextual composer menu; the ' +
           'desktop and CLI command reference does not apply there.'
  }
];

window.SLASH.surfaces = [
  {
    id: 'app',
    product: 'copilot',
    name: 'GitHub Copilot app',
    label: 'Desktop app',
    coverage: 'runtime-variable',
    where: 'macOS, Linux, Windows',
    color: 'var(--c-app)',
    note:
      '<p><strong>A desktop-specific menu, not the whole CLI command set.</strong> The app shares the GitHub Copilot ' +
      'CLI engine and some command names, but adds workflows such as <code>/orchestrate</code>, ' +
      '<code>/create-canvas</code>, <code>/inbox</code>, and the <code>/pr-*</code> family.</p>' +
      '<p>The 2026-09-14 review covers all 46 rows in GitHub&rsquo;s published app table, plus the separately ' +
      'documented <code>/pr-stack</code> skill and the previously verified <code>/ask</code>/<code>/btw</code> ' +
      'side-chat entry. That live picker was not rechecked. Session context, client version, policies, and ' +
      'installed customizations can change what appears; absence here is not proof of unavailability.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands'
  },
  {
    id: 'cli',
    product: 'copilot',
    name: 'GitHub Copilot CLI',
    label: 'CLI',
    coverage: 'runtime-variable',
    where: 'Terminal — interactive session',
    color: 'var(--c-cli)',
    note:
      '<p><strong>A terminal-first command set.</strong> It includes authentication, sandboxing, plugins and ' +
      'marketplaces, MCP server management, worktrees, scheduling, and terminal ergonomics. It overlaps with ' +
      'the app but does not include all of the app&rsquo;s session, canvas, or pull-request UI actions.</p>' +
      '<p>The public reference is supplemented with version-qualified release evidence: stable ' +
      '<strong>1.0.83</strong> and prerelease <strong>1.0.84-6</strong> at the 2026-09-14 review. Experimental ' +
      'or prerelease entries are not a promise of availability in every build. The latter release also mentions ' +
      '<code>/computer</code>, but its invocation and gating are not established by that note, so no command ' +
      'record is inferred. Use <code>/help</code> for your installed command list.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference'
  },
  {
    id: 'vscode',
    product: 'copilot',
    name: 'GitHub Copilot Chat in VS Code',
    label: 'VS Code',
    coverage: 'runtime-variable',
    where: 'Editor chat and Agent Host sessions',
    color: 'var(--c-vscode)',
    note:
      '<p><strong>Editor actions and agent workflows.</strong> VS Code\'s classic chat commands include ' +
      '<code>/fix</code>, <code>/tests</code>, <code>/explain</code>, <code>/doc</code> — joined by a set of ' +
      'authoring commands for customizing GitHub Copilot itself (<code>/create-skill</code>, <code>/create-agent</code>, ' +
      '<code>/instructions</code>). Agent Host sessions expose additional workflows; context badges distinguish ' +
      'them rather than promising that this combined inventory is one universal picker.</p>' +
      '<p>Installed skills can add their own slash commands; a skill named ' +
      '<code>webapp-testing</code> can appear as <code>/webapp-testing</code>. Skills use a folder containing ' +
      '<code>SKILL.md</code>, not an ordinary Markdown file named after the command. Legacy prompt files are ' +
      'deprecated: the Local agent still supports them, but Agent Host does not load them. ' +
      '<code>@</code> participants and <code>#</code> context references are separate from slash commands, ' +
      'and are not exclusive to this surface.</p>',
    docs: 'https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet'
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
    where: 'Visual Studio on Windows',
    color: 'var(--c-vs)',
    note:
      '<p><strong>Visual Studio now documents a broader set than GitHub&rsquo;s generic cheat sheet.</strong> Current ' +
      'Microsoft guidance adds <code>/generate</code>, <code>/generateInstructions</code>, and ' +
      '<code>/savePrompt</code> to familiar editor actions such as <code>/optimize</code>.</p><p>The GitHub Copilot ' +
      'SDK-powered Agent mode remains in ' +
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
      '<p>A published subset of editor actions, including <code>/simplify</code> for selected code. The same ' +
      'token in another product can describe a different workflow. Commands such as <code>/doc</code>, ' +
      '<code>/explain</code>, and <code>/fix</code> also have surface-specific descriptions; this is not a ' +
      'claim that every current Xcode integration exposes only these entries.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet?tool=xcode'
  },
  {
    id: 'web',
    product: 'copilot',
    name: 'GitHub Copilot Chat on GitHub.com',
    label: 'GitHub.com',
    coverage: 'documented-subset',
    where: 'Browser — GitHub.com Chat',
    color: 'var(--c-web)',
    note:
      '<p>The published slash-command subset covers conversation management, not the editor actions documented ' +
      'for IDEs. You can still ask about code and provide repository, issue, pull-request, or file context; ' +
      'that does not make an IDE command available here.</p><p>This surface is GitHub.com Chat, not the browser ' +
      'remote-control view of an app or CLI session. Those interfaces have different command support.</p>',
    docs: 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet'
  },
  {
    id: 'claude-app',
    product: 'claude',
    name: 'Claude Desktop — Code tab',
    label: 'Desktop app',
    coverage: 'runtime-variable',
    where: 'Claude Desktop Code tab — macOS, Windows, Linux (beta)',
    color: 'var(--c-claude-app)',
    note:
      '<p><strong>The Code tab runs the same underlying engine as the CLI.</strong> This surface indexes ' +
      'Anthropic&rsquo;s command reference and release-note additions, and retains four bundled entries from ' +
      'earlier Desktop picker observations. Those observations were not rechecked in a live app for this review. ' +
      'Commands without separately published Desktop behavior carry an <strong>Inherited built-in</strong> badge; ' +
      'known terminal-panel commands are marked <strong>Not available here</strong>.</p>' +
      '<p>Your actual menu can still be larger or smaller because platform, plan, environment, synced skills, ' +
      'project skills, custom commands and plugins all change what appears. Type <code>/</code> for the authoritative ' +
      'list in your installation.</p>',
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
      '<p><strong>The command reference plus release-note additions.</strong> It includes fixed built-ins, bundled ' +
      'skills and dynamic workflows, with aliases folded into their canonical records. For example, ' +
      '<code>/output-style</code> returned in 2.1.269 even though its older guide still describes its removal.</p>' +
      '<p>Availability still depends on version, platform, plan, provider, feature rollout and environment. Type ' +
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
      '<p><strong>A documented web and Remote Control subset.</strong> Explicitly unsupported entries retain ' +
      '<strong>Not available here</strong> badges rather than being presented as working commands. Cloud sessions support text-producing built-ins, ' +
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
    coverage: 'runtime-variable',
    where: 'Terminal — interactive TUI',
    color: 'var(--c-codex-cli)',
    note:
      '<p><strong>A version-qualified terminal inventory.</strong> The 2026-09-14 review checks stable ' +
      '<strong>0.154.0</strong> and separately labels changes observed in <strong>0.155.0-alpha.4</strong>. ' +
      'Prerelease, feature-gated, and stable-only entries are not promises that every listed command appears ' +
      'in one installation.</p><p>These are commands inside an interactive Codex session, not launch-time ' +
      '<code>codex</code> subcommands or flags. The popup in your installed build remains authoritative.</p>',
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
  ['Customizing the GitHub Copilot app', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app'],
  ['Auto routing tiers (September 14, 2026)', 'https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/'],
  ['Enterprise-managed agent permissions (September 9, 2026)', 'https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/'],
  ['Content exclusions in the app and CLI (September 2, 2026)', 'https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/'],
  ['GitHub Copilot CLI command reference', 'https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference'],
  ['GitHub Copilot CLI stable 1.0.83 release notes', 'https://github.com/github/copilot-cli/releases/tag/v1.0.83'],
  ['GitHub Copilot CLI prerelease 1.0.84-6 release notes', 'https://github.com/github/copilot-cli/releases/tag/v1.0.84-6'],
  ['GitHub Copilot Chat cheat sheet (all IDEs and the web)', 'https://docs.github.com/en/copilot/reference/chat-cheat-sheet'],
  ['VS Code AI features cheat sheet', 'https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet'],
  ['GitHub Copilot in VS Code: August 2026 releases', 'https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/'],
  ['Visual Studio: customize chat responses', 'https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio'],
  ['GitHub Copilot agent in JetBrains IDEs', 'https://www.jetbrains.com/help/ai-assistant/copilot-agent.html'],
  ['A guide to slash commands in the GitHub Copilot app (GitHub Blog)', 'https://github.blog/ai-and-ml/github-copilot/a-guide-to-slash-commands-in-the-github-copilot-app/'],
  ['Claude Code command reference', 'https://code.claude.com/docs/en/commands'],
  ['Claude Code 2.1.269 release notes: restored /output-style', 'https://github.com/anthropics/claude-code/releases/tag/v2.1.269'],
  ['Claude Code 2.1.270 release notes', 'https://github.com/anthropics/claude-code/releases/tag/v2.1.270'],
  ['Claude Code Desktop', 'https://code.claude.com/docs/en/desktop'],
  ['Claude Code on the web', 'https://code.claude.com/docs/en/claude-code-on-the-web'],
  ['Claude Code Remote Control limitations', 'https://code.claude.com/docs/en/remote-control#limitations'],
  ['Claude Code in VS Code', 'https://code.claude.com/docs/en/vs-code'],
  ['Slash commands in the ChatGPT desktop app', 'https://learn.chatgpt.com/docs/reference/slash-commands'],
  ['Share a read-only Codex thread', 'https://learn.chatgpt.com/docs/use-chatgpt#share-a-read-only-snapshot-of-a-codex-thread'],
  ['OpenAI Codex CLI developer commands', 'https://learn.chatgpt.com/docs/developer-commands?surface=cli'],
  ['OpenAI Codex CLI stable 0.154.0 source', 'https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/slash_command.rs'],
  ['OpenAI Codex CLI prerelease 0.155.0-alpha.4 source', 'https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/slash_command.rs'],
  ['OpenAI Codex CLI 0.154.0 release notes', 'https://github.com/openai/codex/releases/tag/rust-v0.154.0'],
  ['OpenAI Codex IDE developer commands', 'https://learn.chatgpt.com/docs/developer-commands?surface=ide'],
  ['Build skills in Codex', 'https://learn.chatgpt.com/docs/build-skills'],
  ['Custom prompts in Codex', 'https://learn.chatgpt.com/docs/custom-prompts'],
  ['ChatGPT web command-menu scope', 'https://learn.chatgpt.com/docs/developer-commands?surface=web'],
  ['OpenAI Codex cloud', 'https://learn.chatgpt.com/docs/cloud']
];

window.SLASH.built = '2026-09-14';
window.SLASH.siteUrl = 'https://codylindley.github.io/slash-command-atlas/';
