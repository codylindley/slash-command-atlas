/* GitHub Copilot CLI — slash commands for the interactive session.
   Reviewed against first-party documentation and release notes on 2026-09-14.
   Subcommand-heavy commands are folded into one entry rather than listed separately. */

(function () {
  var B = 'https://docs.github.com/en/copilot/';
  var D = {
    ref:      ['CLI command reference', B + 'reference/copilot-cli-reference/cli-command-reference'],
    acp:      ['ACP server', B + 'reference/copilot-cli-reference/acp-server'],
    agents:   ['About custom agents (CLI)', B + 'concepts/agents/copilot-cli/about-custom-agents'],
    chron:    ['Chronicle', B + 'concepts/agents/copilot-cli/chronicle'],
    chronUse: ['Using CLI session data', B + 'how-tos/copilot-cli/use-copilot-cli/chronicle'],
    ctxComp:  ['Context management: compaction', B + 'concepts/agents/copilot-cli/context-management#compaction'],
    ctxUse:   ['Checking your context usage', B + 'concepts/agents/copilot-cli/context-management#checking-your-context-usage'],
    delegate: ['Delegate tasks to the coding agent', B + 'how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca'],
    fleet:    ['Fleet', B + 'concepts/agents/copilot-cli/fleet'],
    ide:      ['Connecting to VS Code', B + 'how-tos/copilot-cli/use-copilot-cli/connecting-vs-code#managing-the-connection-with-the-ide-slash-command'],
    limits:   ['Set a session limit', B + 'how-tos/copilot-cli/use-copilot-cli/set-session-limit'],
    mcp:      ['Managing MCP servers', B + 'how-tos/copilot-cli/customize-copilot/add-mcp-servers#managing-mcp-servers'],
    model:    ['Auto model selection', B + 'concepts/models/auto-model-selection'],
    autoTiers: ['Auto selection tiers (rollout, 2026-09-14)',
      'https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/'],
    hydra:    ['Project HydraFusion research preview',
      'https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/'],
    weekly:   ['Copilot weekly release update (2026-09-10)',
      'https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/'],
    managedPerms: ['Enterprise-managed permissions (GA, 2026-09-09)',
      'https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/'],
    contentExclusions: ['Content exclusions in Copilot CLI (GA, 2026-09-02)',
      'https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli'],
    pr:       ['Manage pull requests', B + 'how-tos/copilot-cli/use-copilot-cli/manage-pull-requests'],
    remote:   ['Steer remotely', B + 'how-tos/copilot-cli/use-copilot-cli/steer-remotely'],
    research: ['Research', B + 'concepts/agents/copilot-cli/research'],
    review:   ['Agentic code review', B + 'how-tos/copilot-cli/use-copilot-cli/agentic-code-review'],
    duck:     ['About the rubber duck agent', B + 'concepts/agents/copilot-cli/rubber-duck'],
    skills:   ['Add skills', B + 'how-tos/copilot-cli/customize-copilot/add-skills'],
    plugins:  ['About plugins', B + 'concepts/agents/about-plugins'],
    pluginRef: ['CLI plugin reference', B + 'reference/copilot-cli-reference/cli-plugin-reference'],
    config:   ['Config directory reference', B + 'reference/copilot-cli-reference/cli-config-dir-reference'],
    settings: ['Change settings', B + 'how-tos/copilot-cli/customize-copilot/change-settings'],
    release84: ['Copilot CLI 1.0.84-6 (prerelease, 2026-09-14)',
      'https://github.com/github/copilot-cli/releases/tag/v1.0.84-6'],
    vimRelease: ['Copilot CLI 1.0.84-2 (prerelease, 2026-09-08)',
      'https://github.com/github/copilot-cli/releases/tag/v1.0.84-2']
  };

  window.SLASH.register('cli', [

    /* ---------- modes ---------- */
    {
      key: 'plan', cmd: '/plan', args: '[PROMPT]', cat: 'modes',
      summary: 'Creates an implementation plan before coding.',
      detail: 'The agent researches your request and proposes an approach for review before implementation.',
      examples: ['/plan migrate the config loader from JSON to TOML'],
      related: ['autopilot', 'rubber-duck', 'research']
    },
    {
      key: 'autopilot', cmd: '/autopilot', aliases: ['/goal'], args: '[OBJECTIVE] [--max-ai-credits N]', cat: 'modes',
      summary: 'Starts or refocuses autopilot mode, optionally with an explicit objective.',
      detail: 'Without an objective, autopilot infers intent from context. <code>--max-ai-credits N</code> caps spending for the objective; reaching the cap pauses work. Enter a new amount in the pause panel, or run <code>/goal --max-ai-credits 5</code>, to resume with a fresh credit window rather than adding to the old cap. <code>/goal on</code> and <code>/goal off</code> toggle the mode without setting an objective and cannot be combined with the credit option.',
      note: 'Enterprise-managed deny and ask rules remain enforced in autopilot: automatic continuation cannot unblock a denied operation or replace required human approval.',
      examples: [
        '/goal Refactor the auth module --max-ai-credits 5',
        '/autopilot get the integration tests green'
      ],
      related: ['plan', 'limits', 'fleet'],
      docs: [D.ref, D.managedPerms]
    },

    /* ---------- session lifecycle ---------- */
    {
      key: 'clear', cmd: '/clear', aliases: ['/new', '/reset'], args: '[PROMPT]', cat: 'session',
      summary: 'Starts a new conversation.',
      detail: 'Begins a fresh conversation, optionally with the first prompt supplied inline.',
      related: ['compact', 'fork', 'restart']
    },
    {
      key: 'exit', cmd: '/exit', aliases: ['/quit'], args: '[print]', cat: 'session',
      summary: 'Closes the current session.',
      detail: 'If other sessions are running, this foregrounds the newest remaining one rather than quitting; the CLI only exits when this is the last open session. <code>/exit print</code> always tears the CLI down and offers to dump the transcript.',
      examples: ['/exit', '/exit print'],
      related: ['resume', 'session', 'share']
    },
    {
      key: 'fork', cmd: '/fork', aliases: ['/branch'], args: '[NAME]', cat: 'session',
      summary: 'Forks the current session into a new one, optionally named.',
      detail: 'Both sessions share history up to the fork point and then diverge &mdash; useful for trying a second approach without losing the context that got you here.',
      related: ['clear', 'worktree', 'resume']
    },
    {
      key: 'rename', cmd: '/rename', args: '[NAME]', cat: 'session',
      summary: 'Renames the current session, auto-generating a name if omitted.',
      detail: 'An alias for <code>/session rename</code>.',
      related: ['session']
    },
    {
      key: 'restart', cmd: '/restart', cat: 'session',
      summary: 'Restarts the CLI and restores its live sessions.',
      detail: 'Restores all live sessions in this process, not just the foreground session. If the target version cannot restore multiple sessions, the CLI asks whether to continue with only the foreground session or cancel.',
      related: ['clear', 'update']
    },
    {
      key: 'resume', cmd: '/resume', aliases: ['/continue'], args: '[SESSION-ID]', cat: 'session',
      summary: 'Switches to a different session, chosen from a list or by ID.',
      detail: 'The same idea as the <code>--resume</code> and <code>--continue</code> launch flags, but from inside a running session.',
      related: ['session', 'exit', 'fork']
    },
    {
      key: 'session', cmd: '/session', aliases: ['/sessions'], cat: 'session',
      args: '[info|checkpoints [n]|files|plan|rename [NAME]|cleanup|prune|delete [ID]|delete-all]',
      summary: 'Shows session information and manages saved sessions.',
      detail: '<code>info</code> shows session details, including a session link when available. Deleting a synced session can also offer to remove its remote copy; <code>delete-all</code> and <code>prune</code> remove local data only.',
      subs: [
        ['info', 'Session details, including the session link when available'],
        ['checkpoints [n]', 'List session checkpoints'],
        ['files', 'Files touched in this session'],
        ['plan', 'The session’s current plan'],
        ['rename [NAME]', 'Rename the session'],
        ['cleanup', 'Clean up session data'],
        ['prune --older-than DAYS [--dry-run]', 'Remove old local sessions, or preview the removal'],
        ['delete [ID] [--yes]', 'Delete a specified session; without an ID, replace the current session with a new one'],
        ['delete-all [--yes]', 'Delete local sessions except the current one; sessions in use by another process are skipped']
      ],
      related: ['resume', 'rename', 'undo'],
      docs: [D.ref, D.chron]
    },
    {
      key: 'remote', cmd: '/remote', args: '[on|off]', cat: 'session',
      summary: 'Shows, enables, or ends remote control of the session.',
      detail: 'With remote steering on you can drive the session from GitHub.com or GitHub Mobile using the same GitHub account. The local machine must stay online and the CLI session must keep running. Run bare to check status. A GitHub-hosted repository is not required; session syncing alone does not enable remote control.',
      related: ['ide', 'app'],
      docs: [D.remote]
    },
    {
      key: 'worktree', cmd: '/worktree', args: '[branch|task]', cat: 'session', flags: ['experimental'],
      requires: 'A Git repository',
      summary: 'Creates a new Git worktree and switches to it, leaving uncommitted changes behind.',
      detail: 'Pass a branch name, a task description used as the opening prompt in the new worktree, or nothing at all to have a branch name generated from the conversation. By default it branches off the current checkout; set <code>worktreeBaseRef</code> to <code>"defaultBranch"</code> to branch off the remote default instead. <code>/worktree new [PROMPT]</code> starts a fresh conversation in a new worktree and leaves the current one untouched.',
      note: 'The public reference still marks this experimental. The 1.0.84-6 prerelease (2026-09-14) removes the experimental gate for <code>/worktree</code> and <code>/move</code>; older builds may require <code>/experimental on</code>. <code>new</code> is a reserved subcommand, not a literal branch name.',
      subs: [['new [PROMPT]', 'Start a new conversation in a new worktree, leaving this one alone']],
      related: ['move', 'fork'],
      docs: [D.ref, D.config, D.release84]
    },
    {
      key: 'move', cmd: '/move', args: '[branch|task]', cat: 'session', flags: ['experimental'],
      requires: 'A Git repository',
      summary: 'Moves uncommitted changes into a new Git worktree and switches to it.',
      detail: 'The counterpart to <code>/worktree</code>: where that leaves your changes behind, this takes them with you. Useful when you realise the work you have started belongs on its own branch.',
      note: 'Experimental in the public reference, but the 1.0.84-6 prerelease (2026-09-14) no longer requires experimental mode.',
      related: ['worktree'],
      docs: [D.ref, D.release84]
    },
    {
      key: 'undo', cmd: '/undo', aliases: ['/rewind'], cat: 'session',
      summary: 'Opens the rewind picker to roll the session back to an earlier turn.',
      detail: 'Choose <strong>Conversation only</strong> to roll back the discussion while leaving files as they are, or <strong>Conversation + files</strong> to also restore the files Copilot changed in that turn and any later discarded turns &mdash; skipping any you have edited yourself since. File changes are tracked per turn across editing tools, shell commands and subagents, so this does not require Git.',
      related: ['session', 'diff']
    },

    /* ---------- context & input ---------- */
    {
      key: 'compact', cmd: '/compact', args: '[FOCUS-INSTRUCTIONS]', cat: 'context',
      summary: 'Summarizes conversation history to reduce context window usage.',
      detail: 'Optionally steer what the summary preserves by passing focus instructions.',
      examples: ['/compact focus on the auth module'],
      related: ['context', 'clear'],
      docs: [D.ctxComp]
    },
    {
      key: 'context', cmd: '/context', cat: 'context',
      summary: 'Shows context window token usage and a visualization of it.',
      related: ['compact', 'usage'],
      docs: [D.ctxUse]
    },
    {
      key: 'add-dir', cmd: '/add-dir', args: 'PATH', cat: 'context',
      summary: 'Adds a directory to the allowed list for file access.',
      detail: 'Also loads the directory’s <code>.github/skills</code> and <code>.github/agents</code> as trusted configuration. Review the directory before adding it: this grants access and makes its agent customizations available.',
      note: 'Adding a directory does not disable content exclusions. For Copilot Business and Enterprise, the CLI respects exclusion policies from enterprise, organization, and repository administrators and does not use excluded files as context; this became generally available on 2026-09-02.',
      related: ['list-dirs', 'cwd', 'permissions'],
      docs: [D.ref, D.contentExclusions]
    },
    {
      key: 'list-dirs', cmd: '/list-dirs', cat: 'context',
      summary: 'Displays every directory that file access has been allowed for.',
      related: ['add-dir', 'cwd']
    },
    {
      key: 'cwd', cmd: '/cwd', aliases: ['/cd'], args: '[PATH]', cat: 'context',
      summary: 'Changes the working directory, or displays the current one.',
      detail: 'Lets you move the session to a different part of the codebase without starting over.',
      related: ['add-dir', 'list-dirs']
    },
    {
      key: 'instructions', cmd: '/instructions', cat: 'context',
      summary: 'Views and toggles custom instruction files.',
      detail: 'Shows which instruction files are in play for this session and lets you switch them off &mdash; handy when you suspect an instruction file is the reason the agent keeps doing something odd.',
      related: ['init', 'env', 'settings']
    },
    {
      key: 'keep-alive', cmd: '/keep-alive', aliases: ['/caffeinate'],
      args: '[on|off|busy|DURATION]', cat: 'system',
      summary: 'Prevents the machine from sleeping while Copilot works.',
      detail: 'Use <code>on</code> to keep the machine awake while the CLI session is active, <code>busy</code> only while work is active, or pass a duration such as <code>30m</code>, <code>2h</code>, or <code>1d</code>. Bare numbers are minutes. Use <code>off</code> to restore normal sleep behavior.',
      examples: ['/keep-alive busy', '/caffeinate 2h'],
      related: ['tasks', 'every', 'after'],
      docs: [D.ref]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      summary: 'Initializes Copilot custom instructions and agentic features for the repository.',
      detail: 'Scaffolds the repository-level configuration the agent reads on every future session here.',
      related: ['instructions', 'skills'],
      docs: [D.config]
    },
    {
      key: 'search', cmd: '/search', aliases: ['/find'], args: '[QUERY]', cat: 'context',
      summary: 'Searches the conversation timeline.',
      related: ['chronicle', 'copy']
    },
    {
      key: 'copy', cmd: '/copy', cat: 'context',
      summary: 'Copies the last response to the clipboard.',
      related: ['share', 'context']
    },
    {
      key: 'ask', cmd: '/ask', aliases: ['/btw'], args: 'QUESTION', cat: 'context',
      summary: 'Asks a quick side question without adding it to the conversation history.',
      detail: 'Keeps a side question out of the main conversation history so it does not distract from the current task.',
      examples: ['/ask what does the -u flag do in git push?'],
      related: ['compact', 'context']
    },
    {
      key: 'refine', cmd: '/refine', args: '[TEXT]', cat: 'context',
      summary: 'Rewrites a roughly composed prompt into a clearer one for review.',
      detail: 'Run it with no arguments (via <kbd>Ctrl</kbd>+<kbd>X</kbd> then <code>/refine</code>) to clean up whatever is currently in the input box. Particularly useful for prompts entered by speaking.',
      related: ['voice', 'plan']
    },

    /* ---------- review ---------- */
    {
      key: 'review', cmd: '/review', args: '[PROMPT]', cat: 'review',
      summary: 'Runs the code review agent to analyze changes.',
      related: ['security-review', 'rubber-duck', 'diff'],
      docs: [D.review]
    },
    {
      key: 'security-review', cmd: '/security-review', args: '[PROMPT]', cat: 'review',
      summary: 'Runs a focused security review of active local changes.',
      detail: 'Returns prioritized vulnerability findings with remediation suggestions. This is explicitly not a full repository security audit &mdash; it looks at what you have changed.',
      related: ['review', 'rubber-duck']
    },
    {
      key: 'rubber-duck', cmd: '/rubber-duck', args: '[PROMPT]', cat: 'review',
      summary: 'Consults the rubber duck agent for a second opinion on plans, code and tests.',
      detail: 'Runs on a different model from the one driving your session, which is the whole point &mdash; a critic that does not share the main agent’s blind spots.',
      related: ['review', 'plan', 'subagents'],
      docs: [D.duck]
    },
    {
      key: 'research', cmd: '/research', args: 'TOPIC', cat: 'review',
      summary: 'Runs a deep research investigation using GitHub search and web sources.',
      detail: 'Produces a cited report. <code>/share research</code> exports it on its own.',
      related: ['share', 'plan'],
      docs: [D.research]
    },
    {
      key: 'diff', cmd: '/diff', cat: 'review', flags: ['experimental'],
      summary: 'Reviews changes in the current directory.',
      detail: 'Auto-switches to a branch diff when the working tree is clean.',
      related: ['review', 'undo', 'pr']
    },

    /* ---------- pull requests & delegation ---------- */
    {
      key: 'pr', cmd: '/pr', args: '[view|create|fix|auto|automerge]', cat: 'pr',
      summary: 'Manages pull requests for the current branch.',
      detail: '<code>auto</code> works through checks and feedback until the pull request is green, then stops. <code>automerge</code> (alias <code>agentmerge</code>) also merges the pull request.',
      subs: [
        ['view', 'Show the pull request for this branch'],
        ['create', 'Open a pull request'],
        ['fix', 'Work on failing checks and review feedback'],
        ['auto', 'Drive the pull request to green, then stop'],
        ['automerge', 'Drive it to green and merge it (alias: agentmerge)']
      ],
      related: ['delegate', 'diff', 'review'],
      docs: [D.pr]
    },
    {
      key: 'delegate', cmd: '/delegate', args: '[PROMPT]', cat: 'pr',
      summary: 'Delegates changes to a remote repository with an AI-generated pull request.',
      detail: 'Hands the task to the cloud coding agent rather than doing it locally, and the result arrives as a pull request.',
      related: ['pr', 'fleet'],
      docs: [D.delegate]
    },
    {
      key: 'fleet', cmd: '/fleet', args: '[PROMPT]', cat: 'delegate',
      summary: 'Enables parallel subagent execution of parts of a task.',
      related: ['subagents', 'tasks', 'delegate'],
      docs: [D.fleet]
    },
    {
      key: 'subagents', cmd: '/subagents', aliases: ['/agents'], cat: 'delegate',
      summary: 'Configures default and per-agent subagent models.',
      detail: 'Sets model preferences independently of the main session. A required model policy locks the model selection; a requirement from the agent’s own definition cannot be relaxed by the picker.',
      related: ['fleet', 'model', 'agent'],
      docs: [D.config]
    },
    {
      key: 'tasks', cmd: '/tasks', cat: 'delegate',
      summary: 'Views and manages tasks — subagents and shell commands.',
      related: ['fleet', 'every', 'after']
    },

    /* ---------- models, agents, extensibility ---------- */
    {
      key: 'model', cmd: '/model', aliases: ['/models'], args: '[--session|--global|--repo|--local] [MODEL]', cat: 'config',
      summary: 'Selects the AI model, reasoning effort, or context window — or chooses Auto.',
      detail: 'By default (or with <code>--session</code>) the change applies to this session only and leaves saved settings alone. <code>--repo</code>/<code>--local</code> pins a default in repository settings; <code>--global</code> sets the default for future sessions. Press <kbd>Tab</kbd> on a model with a long-context variant to toggle its context window, and <kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle how the picker groups models. It is usable mid-turn: a change requested while the agent is running is queued and applied once the turn finishes rather than swapping the model mid-request. Project HydraFusion is a separate research-preview model choice exposed through <code>/experimental</code>, not an Auto tier.',
      note: 'Auto’s Efficiency, Balance, and Intelligence tiers began rolling out on 2026-09-14, so availability can vary. They prioritize cost, balanced cost/quality/latency, and quality respectively. All three route each prompt using the same eligible model pool; even Intelligence can select a smaller model for a simple task. A tier changes routing preferences, not the model’s reasoning-effort setting.',
      examples: ['/model --repo gpt-5.2'],
      related: ['subagents', 'agent', 'limits', 'experimental'],
      docs: [D.model, D.autoTiers, D.hydra, D.weekly]
    },
    {
      key: 'agent', cmd: '/agent', cat: 'config',
      summary: 'Browses and selects from the available custom agents.',
      related: ['subagents', 'model', 'plugins'],
      docs: [D.agents]
    },
    {
      key: 'skills', cmd: '/skills', args: '[list|info NAME|add [--project] SOURCE|remove NAME-OR-DIRECTORY|reload]', cat: 'config',
      summary: 'Manages skills for enhanced capabilities.',
      detail: 'Run bare to open the Skills dashboard, where you can inspect, enable, and disable skills. <code>reload</code> picks up edits without restarting. Plugin-provided skills are removed by managing their plugin rather than deleting the skill separately.',
      subs: [
        ['list', 'List available skills'],
        ['info NAME', 'Show a skill’s details and source'],
        ['add [--project] SOURCE', 'Add a file, URL, or directory; --project makes file or URL installs repository-scoped'],
        ['remove NAME-OR-DIRECTORY', 'Remove a directly installed skill or unregister a skill directory'],
        ['reload', 'Reload skills from all configured directories']
      ],
      related: ['plugins', 'agent', 'init'],
      docs: [D.skills]
    },
    {
      key: 'plugins', cmd: '/plugin', cat: 'config',
      args: '[install SOURCE|update PLUGIN[@MARKETPLACE]|uninstall PLUGIN[@MARKETPLACE]|list|marketplace SUBCOMMAND]',
      summary: 'Opens the plugins dashboard or manages installed plugins and marketplaces.',
      detail: 'The dashboard’s Installed, Online, and Marketplace views cover plugins only. Select an installed plugin to enable, disable, update, or uninstall it. Use <code>/mcp</code> for servers and <code>/skills</code> for skills.',
      note: 'The experimental <code>/plugins</code> slash command was removed in 1.0.81. It is not an alias for <code>/plugin</code>. The terminal command <code>copilot plugins</code> is a separate, legacy alias for <code>copilot plugin</code>.',
      subs: [
        ['install SOURCE', 'Install from a marketplace, repo, git URL or local path'],
        ['update PLUGIN[@MARKETPLACE]', 'Update an installed plugin'],
        ['uninstall PLUGIN[@MARKETPLACE]', 'Remove a plugin (aliases: remove, rm)'],
        ['list', 'List installed plugins (alias: ls)'],
        ['marketplace add SOURCE', 'Register a marketplace'],
        ['marketplace remove NAME', 'Unregister a marketplace'],
        ['marketplace list', 'List registered marketplaces'],
        ['marketplace browse NAME', 'Browse a marketplace’s plugins'],
        ['marketplace update [NAME]', 'Refresh one marketplace catalog, or all of them (alias: refresh)']
      ],
      examples: ['/plugin list', '/plugin'],
      related: ['mcp', 'skills', 'extensions'],
      docs: [D.ref, D.plugins, D.pluginRef]
    },
    {
      key: 'mcp', cmd: '/mcp', cat: 'config',
      args: '[config|list|show|add|edit|delete|disable|enable|auth|reload|search] [SERVER-NAME]',
      summary: 'Manages MCP server configuration.',
      detail: 'Run bare or use <code>config</code> to open the MCP dashboard. <code>show SERVER-NAME</code> opens a server’s details and tools; <code>list</code> (alias <code>ls</code>) prints connection status. The command table permits bare, <code>config</code>, <code>show</code>, and <code>list</code> while the agent is busy; mutating subcommands wait until the turn finishes.',
      note: 'For servers defined in a repository’s <code>.mcp.json</code>, <code>edit</code> and <code>delete</code> direct you to that file instead of modifying a shadowed user-level entry.',
      subs: [
        ['config', 'Open the MCP dashboard (also the bare command)'],
        ['list', 'Plain-text list with connection status — safe to run mid-turn'],
        ['show [SERVER-NAME]', 'Show the server list or one server’s details and tools'],
        ['add / edit / delete', 'Manage server entries'],
        ['enable / disable', 'Turn a configured server on or off'],
        ['auth', 'Re-run authentication for a server'],
        ['reload', 'Reload server configuration'],
        ['search', 'Find servers to add']
      ],
      related: ['plugins', 'sandbox', 'env'],
      docs: [D.ref, D.mcp]
    },
    {
      key: 'extensions', cmd: '/extensions', aliases: ['/extension'], args: '[manage|mode]', cat: 'config', flags: ['experimental'],
      summary: 'Manages CLI extensions.',
      related: ['plugins', 'env']
    },
    {
      key: 'lsp', cmd: '/lsp', args: '[show|test|reload|logs|help] [SERVER-NAME]', cat: 'config',
      summary: 'Manages the language server configuration.',
      detail: 'Language servers give the agent real symbol information rather than guesses from text. <code>logs</code> opens a live log panel for the LSP services.',
      related: ['env', 'extensions']
    },
    {
      key: 'settings', cmd: '/settings', aliases: ['/config'], args: '[--repo|--local] [show KEY|KEY|KEY VALUE]', cat: 'config',
      summary: 'Opens the settings dialog, or reads and writes a setting inline.',
      detail: 'The dialog has <strong>User</strong>, <strong>Repo</strong>, <strong>Repo (local)</strong> and <strong>Problems</strong> tabs; a setting overridden in another scope shows a badge naming which scope wins. <code>show KEY</code> masks secret-named values instead of printing them. Add <code>--repo</code> or <code>--local</code> to target the repository settings files instead of your user settings. Rows governed by an organization or MDM policy render read-only with a <code>(managed)</code> tag.',
      note: 'The 1.0.84-6 prerelease describes <code>/config</code> as opening a sidebar configuration screen. The public reference still groups it with <code>/settings</code>; the presentation depends on your build.',
      examples: ['/settings --repo model gpt-5.2'],
      related: ['model', 'instructions', 'experimental'],
      docs: [D.settings, D.config, D.release84]
    },
    {
      key: 'limits', cmd: '/limits', args: '[set max-ai-credits VALUE|unset [max-ai-credits|all]]', cat: 'config',
      summary: 'Opens the response limits dialog, or sets and clears a per-response credit cap.',
      detail: 'Response limits are soft limits that reset for each user message &mdash; a guard against one runaway turn, not a session budget.',
      subs: [
        ['set max-ai-credits VALUE', 'Soft maximum of AI Credits per response'],
        ['unset [max-ai-credits|all]', 'Remove one limit, or all of them']
      ],
      related: ['usage', 'autopilot', 'model'],
      docs: [D.limits]
    },
    {
      key: 'statusline', cmd: '/statusline', aliases: ['/footer'], cat: 'config',
      summary: 'Configures which items appear in the status line.',
      related: ['theme', 'tuikit']
    },
    {
      key: 'theme', cmd: '/theme', args: '[default|github|dim|high-contrast|colorblind]', cat: 'config',
      summary: 'Views or sets the color mode.',
      related: ['statusline', 'tuikit']
    },
    {
      key: 'voice', cmd: '/voice', args: '[on|off|models|devices]', cat: 'config',
      summary: 'Toggles voice mode, browses voice models, or chooses the input device.',
      detail: 'Pairs naturally with <code>/refine</code>, which cleans up a spoken prompt before you send it.',
      related: ['refine']
    },

    /* ---------- permissions & sandboxing ---------- */
    {
      key: 'permissions', cmd: '/permissions', args: '[default|assisted|allow-all|show|reset]', cat: 'perms',
      summary: 'Switches permission mode, shows the current one, or resets in-session approvals.',
      detail: 'This is the canonical command for permission changes; <code>/allow-all</code> and <code>/yolo</code> remain supported as aliases for <code>/permissions allow-all</code>. <code>reset</code> clears in-memory tool and path approvals without changing managed rules.',
      note: 'Enterprise-managed deny/ask/allow controls are generally available for Copilot Business and Enterprise as of 2026-09-09. User or workspace settings, auto-approval, and saved approvals cannot weaken managed restrictions: denied operations stay blocked and ask rules still require human approval.',
      subs: [
        ['default', 'Prompt for tool and path access as normal'],
        ['assisted', 'An intermediate mode between prompting and allow-all'],
        ['allow-all', 'Skip ordinary tool, path, and URL prompts while preserving managed deny and ask rules'],
        ['show', 'Report the current mode'],
        ['reset', 'Clear in-memory approvals for this session, not managed permission rules']
      ],
      related: ['allow-all', 'reset-allowed-tools', 'sandbox'],
      docs: [D.ref, D.managedPerms]
    },
    {
      key: 'allow-all', cmd: '/allow-all', aliases: ['/yolo'], args: '[off|auto|show]', cat: 'perms',
      summary: 'Skips ordinary permission prompts within managed policy.',
      detail: 'An alias for <code>/permissions allow-all</code> covering tools, paths, and URLs. Managed deny rules still block operations and ask rules still require human approval; user settings, auto-approval, and previously saved approvals cannot override those restrictions.',
      note: 'An enabled sandbox and configured content exclusions still apply. For Business and Enterprise, excluded files are not used as Copilot context. A worktree separates Git changes, not access to your machine; sandboxing provides OS-level restrictions.',
      related: ['permissions', 'sandbox', 'reset-allowed-tools'],
      docs: [D.ref, D.managedPerms, D.contentExclusions]
    },
    {
      key: 'reset-allowed-tools', cmd: '/reset-allowed-tools', cat: 'perms',
      summary: 'Resets the list of allowed tools.',
      note: 'Resetting session allowances does not remove enterprise-managed permission rules.',
      related: ['permissions', 'allow-all'],
      docs: [D.ref, D.managedPerms]
    },
    {
      key: 'sandbox', cmd: '/sandbox', args: '[config|status|policy|enable|disable]', cat: 'perms', flags: ['experimental'],
      summary: 'Manages OS-level sandboxing of filesystem and network access.',
      detail: 'Sandboxing restricts what shell commands, MCP and LSP servers, and the built-in file and web tools can reach. <code>policy</code> shows the effective policy including path grants, denials and network access &mdash; the thing to read before you trust a permissive session.',
      note: 'Managed policy can limit changes. In the 1.0.84-6 prerelease, <code>disable</code> can opt the current session out only when the organization’s policy permits bypass. Read-only <code>status</code> and <code>policy</code> work mid-turn; configuration changes wait for the turn to finish.',
      subs: [
        ['config', 'Open the sandbox settings dialog (also the bare command)'],
        ['status', 'Whether sandboxing is on'],
        ['policy', 'The effective policy: path grants, denials, network access'],
        ['enable / disable', 'Turn sandboxing on or off']
      ],
      related: ['permissions', 'allow-all', 'add-dir'],
      docs: [D.ref, D.release84]
    },

    /* ---------- history ---------- */
    {
      key: 'chronicle', cmd: '/chronicle', cat: 'history',
      args: '[standup|tips|cost-tips|search QUERY|improve|reindex|skills create|skills review|skills status]',
      summary: 'Session history tools and insights.',
      detail: 'Run bare to choose an action from a picker. The session-data guide documents reports, cost advice, and full-content history search; the command reference also lists skill-proposal actions. Append context to reports or tips to focus them, such as <code>/chronicle standup for the last 3 days</code>.',
      note: 'GitHub’s command table and session-data guide list different subsets of subcommands. This entry combines their documented actions; use your build’s picker to check availability.',
      subs: [
        ['standup [CONTEXT]', 'Summarize recent work, optionally for a different time period'],
        ['tips [CONTEXT]', 'Personalized workflow tips, optionally focused on a topic'],
        ['cost-tips', 'Analyze token spending and suggest ways to reduce it'],
        ['search QUERY', 'Search the full content of past sessions'],
        ['improve', 'Suggest improvements to your instructions file'],
        ['reindex', 'Rebuild the local session index and sync session data'],
        ['skills create', 'Draft a repository skill from observed usage'],
        ['skills review', 'Review a drafted skill proposal'],
        ['skills status', 'Track the status of skill proposals']
      ],
      related: ['search', 'skills', 'usage'],
      docs: [D.chron, D.chronUse, D.ref]
    },

    /* ---------- diagnostics ---------- */
    {
      key: 'diagnose', cmd: '/diagnose', args: '[PROMPT]', cat: 'diag',
      summary: 'Analyzes the current session log for errors or unexpected behavior.',
      detail: 'Optionally describe the problem to focus the diagnosis.',
      examples: ['/diagnose why did the last tool call fail?'],
      related: ['env', 'feedback'],
      docs: [D.ref]
    },
    {
      key: 'collect-debug-logs', cmd: '/collect-debug-logs', cat: 'diag', flags: ['preview'],
      requires: 'CLI 1.0.84-6 prerelease or a build exposing this command',
      summary: 'Collects debug logs for troubleshooting.',
      note: 'The 2026-09-14 prerelease makes this command available to all users, but the public command table has not yet documented its options. Check <code>/help</code> in your build and review collected logs for sensitive data before sharing.',
      related: ['diagnose', 'feedback'],
      docs: [D.release84]
    },
    {
      key: 'usage', cmd: '/usage', cat: 'diag',
      summary: 'Displays session usage metrics, including per-model token totals.',
      related: ['context', 'limits', 'chronicle']
    },
    {
      key: 'share', cmd: '/share', aliases: ['/export'], cat: 'diag',
      args: '[link|off|file|html|gist|research] [...]',
      summary: 'Shares or exports the current session.',
      detail: 'With no subcommand it generates a shareable GitHub link when you are logged in and synced, falling back to Markdown file export otherwise. Exports can cover the session transcript or a research report specifically.',
      subs: [
        ['link / link off', 'Explicit link sharing, and stopping it'],
        ['off', 'Stop sharing'],
        ['file [session|research] [PATH]', 'Export to Markdown'],
        ['html [session|research] [PATH]', 'Export to HTML'],
        ['gist [session|research]', 'Create a GitHub gist'],
        ['research [PATH]', 'Export the research report']
      ],
      related: ['research', 'copy', 'exit']
    },
    {
      key: 'env', cmd: '/env', cat: 'diag',
      summary: 'Shows loaded environment details.',
      detail: 'Instructions, MCP servers, skills, agents, hooks, plugins, LSPs and extensions &mdash; everything currently influencing the agent, in one place. The first command to run when the agent behaves in a way you cannot explain.',
      related: ['instructions', 'mcp', 'plugins', 'lsp']
    },
    {
      key: 'version', cmd: '/version', cat: 'diag',
      summary: 'Displays version information and checks for updates.',
      related: ['update', 'downgrade', 'changelog']
    },
    {
      key: 'feedback', cmd: '/feedback', aliases: ['/bug'], cat: 'diag',
      summary: 'Provides feedback about the CLI.',
      related: ['version', 'env']
    },
    {
      key: 'changelog', cmd: '/changelog', aliases: ['/release-notes'], cat: 'diag',
      args: '[summarize] [VERSION|last N|since VERSION]',
      summary: 'Displays the CLI changelog, optionally summarized.',
      detail: 'Add the keyword <code>summarize</code> for an AI-generated summary rather than raw release notes &mdash; a quick way to catch up on what changed since you last updated.',
      examples: ['/changelog summarize last 5'],
      related: ['version', 'update']
    },
    {
      key: 'clikit', cmd: '/clikit', args: '[COMPONENT]', cat: 'diag',
      summary: 'Previews CLI business components, such as quota info.',
      related: ['tuikit']
    },
    {
      key: 'tuikit', cmd: '/tuikit', args: '[colors|icons|select|tabbar]', cat: 'diag',
      summary: 'Previews TUIkit design-system components and color tokens.',
      related: ['clikit', 'theme']
    },

    /* ---------- environment & account ---------- */
    {
      key: 'login', cmd: '/login', cat: 'system',
      summary: 'Logs in to Copilot.',
      detail: 'You will be prompted for this if you start the CLI unauthenticated.',
      related: ['logout', 'user']
    },
    {
      key: 'logout', cmd: '/logout', cat: 'system',
      summary: 'Logs out of Copilot.',
      related: ['login', 'user']
    },
    {
      key: 'user', cmd: '/user', args: '[show|list|switch]', cat: 'system',
      summary: 'Manages the current GitHub user.',
      detail: 'Use <code>switch</code> when your personal and work accounts have different Copilot access or organizational policies.',
      related: ['login', 'logout']
    },
    {
      key: 'update', cmd: '/update', aliases: ['/upgrade'], cat: 'system',
      summary: 'Updates the CLI to the latest version.',
      related: ['version', 'downgrade', 'changelog']
    },
    {
      key: 'downgrade', cmd: '/downgrade', args: 'VERSION', cat: 'system',
      summary: 'Downloads and restarts into a specific CLI version.',
      note: 'Available for team accounts.',
      related: ['update', 'version']
    },
    {
      key: 'terminal-setup', cmd: '/terminal-setup', cat: 'system',
      summary: 'Configures the terminal for multiline input.',
      detail: 'Enables <kbd>Shift</kbd>+<kbd>Enter</kbd> and <kbd>Ctrl</kbd>+<kbd>Enter</kbd> for newlines, so a long prompt does not submit halfway through. Worth running on day one.',
      related: ['theme', 'statusline']
    },
    {
      key: 'vim', cmd: '/vim', cat: 'system',
      summary: 'Toggles Vim-style modal editing in the input composer.',
      detail: 'Enables normal and insert modes, motions, operators, yank and put, undo, redo, and repeat. The same choice can be saved with the <code>editorMode</code> setting.',
      note: 'The 1.0.84-2 prerelease (2026-09-08) makes Vim mode available to everyone. Earlier builds can differ.',
      related: ['terminal-setup', 'settings'],
      docs: [D.ref, D.vimRelease]
    },
    {
      key: 'experimental', cmd: '/experimental', args: '[on|off|show]', cat: 'system',
      summary: 'Toggles, sets, or shows experimental features.',
      detail: 'The current reference marks scheduling, extensions, sandboxing, and the diff viewer as experimental. Worktrees remain marked experimental there, but the 1.0.84-6 prerelease removes that gate for <code>/worktree</code> and <code>/move</code>.',
      note: 'GitHub’s 2026-09-10 update also places Project HydraFusion here. Select that research-preview option from the model picker when available; it can choose a single-model, draft-and-escalate, or draft/critic/revise workflow. It is distinct from Auto’s tiers, and preview availability and behavior can change.',
      related: ['settings', 'version', 'model'],
      docs: [D.ref, D.weekly, D.hydra]
    },
    {
      key: 'help', cmd: '/help', cat: 'system',
      summary: 'Shows the help for interactive commands.',
      detail: 'The authoritative list for your build. Any reference, this one included, is a snapshot; <code>/help</code> is current.',
      related: ['version', 'changelog']
    },
    {
      key: 'ide', cmd: '/ide', cat: 'system',
      summary: 'Connects to an IDE workspace.',
      detail: 'Links the CLI session to an open editor so the two share context &mdash; your selection and open files become available to the agent.',
      related: ['app', 'remote'],
      docs: [D.ide]
    },
    {
      key: 'app', cmd: '/app', cat: 'system',
      summary: 'Opens the current session in the GitHub Copilot desktop app.',
      detail: 'Hands a terminal session over to the desktop app, or shows the download URL if the app is not installed. Requires app version 1.1.3 or later.',
      related: ['ide', 'remote']
    },
    {
      key: 'every', cmd: '/every', args: '[INTERVAL PROMPT]', cat: 'system', flags: ['experimental'],
      summary: 'Schedules a recurring prompt, skill, or schedulable slash command.',
      detail: 'With no arguments it opens the schedule manager. In that manager, <kbd>↑</kbd>/<kbd>↓</kbd> selects an entry and <kbd>x</kbd> removes it &mdash; schedules can only be added from the prompt input, not from the dialog.',
      examples: ['/every 1h run tests', '/every 1d /chronicle standup'],
      related: ['after', 'tasks']
    },
    {
      key: 'after', cmd: '/after', args: '[DELAY PROMPT]', cat: 'system', flags: ['experimental'],
      summary: 'Schedules a one-off prompt, skill, or schedulable slash command.',
      detail: 'The non-recurring counterpart to <code>/every</code>. With no arguments it opens the same schedule manager.',
      examples: ['/after 30m remind me the time', '/after 1h /chronicle standup'],
      related: ['every', 'tasks']
    }
  ]);
})();
