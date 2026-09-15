/* OpenAI Codex CLI — slash commands for the interactive terminal UI.
   This dataset intentionally excludes `codex` program subcommands and command-line flags.
   Official docs are checked against stable 0.154.0 and prerelease 0.155.0-alpha.4 source.
   Source-backed additions and stable/prerelease differences are identified explicitly. */

(function () {
  var stableSource = 'https://github.com/openai/codex/blob/6b9826e3aa83b1a5947db50f4332cb9c65f1b340/codex-rs/tui/src/';
  var previewSource = 'https://github.com/openai/codex/blob/66eab8ece44141ff92707868269e1d53b40c4ac5/codex-rs/tui/src/';
  var D = {
    ref: ['Codex CLI built-in slash commands',
      'https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands'],
    source: ['Codex CLI command source (stable 0.154.0)',
      stableSource + 'slash_command.rs'],
    dispatch: ['Codex CLI argument handling (stable 0.154.0)',
      stableSource + 'chatwidget/slash_dispatch.rs'],
    gates: ['Codex CLI command availability (stable 0.154.0)',
      stableSource + 'bottom_pane/slash_commands.rs'],
    copy: ['Codex CLI copy picker (stable 0.154.0)',
      stableSource + 'chatwidget/interaction.rs'],
    recap: ['Codex CLI conversation recaps (stable 0.154.0)',
      stableSource + 'app/recap.rs'],
    worktrees: ['Codex CLI worktree picker (stable 0.154.0)',
      stableSource + 'chatwidget/worktree_picker.rs'],
    review: ['Codex CLI review presets (stable 0.154.0)',
      stableSource + 'chatwidget/review_popups.rs'],
    preview: ['Codex CLI command source (prerelease 0.155.0-alpha.4)',
      previewSource + 'slash_command.rs'],
    previewDispatch: ['Codex CLI argument handling (prerelease 0.155.0-alpha.4)',
      previewSource + 'chatwidget/slash_dispatch.rs'],
    voice: ['Codex CLI voice requirements (prerelease 0.155.0-alpha.4)',
      previewSource + 'chatwidget/realtime.rs'],
    release: ['Codex CLI 0.154.0 release notes',
      'https://github.com/openai/codex/releases/tag/rust-v0.154.0'],
    prompts: ['Custom prompts in Codex',
      'https://learn.chatgpt.com/docs/custom-prompts']
  };

  window.SLASH.register('codex-cli', [
    {
      key: 'permissions', cmd: '/permissions', cat: 'perms',
      summary: 'Sets what Codex can do without asking first.',
      detail: 'Opens the approval-policy picker so you can relax or tighten permissions during the current session. Documented presets include Auto and Read Only; configured named permission profiles also appear when they are active.',
      when: [
        'You want to inspect changes before Codex edits or runs commands',
        'A well-scoped task is pausing for approvals more often than you want'
      ],
      related: ['approve', 'status', 'sandbox-add-read-dir'], docs: [D.ref]
    },
    {
      key: 'ide', cmd: '/ide', args: '[PROMPT]', cat: 'context',
      summary: 'Includes open files, the current selection, and other IDE context.',
      detail: 'Pulls available editor state into the next prompt. Optional inline text can tell Codex what to do with the selected code or open files.',
      examples: ['/ide explain how the selected handler reaches the database'],
      related: ['mention', 'app', 'status'], docs: [D.ref]
    },
    {
      key: 'keymap', cmd: '/keymap', args: '[debug]', cat: 'system',
      requires: 'Idle main chat',
      summary: 'Inspects and remaps TUI keyboard shortcuts.',
      detail: 'Opens an interactive shortcut editor, applies the new binding immediately, and persists custom bindings under <code>tui.keymap</code> in <code>config.toml</code>. Context-specific bindings override global ones. Add <code>debug</code> to open the keypress inspector instead.',
      examples: ['/keymap', '/keymap debug'],
      when: [
        'A default TUI shortcut conflicts with your terminal or editor',
        'You want to inspect which action a key currently triggers'
      ],
      related: ['vim', 'raw', 'statusline'], docs: [D.ref, D.dispatch]
    },
    {
      key: 'vim', cmd: '/vim', cat: 'system',
      requires: 'Idle main chat',
      summary: 'Toggles Vim editing mode for the composer.',
      detail: 'Switches the current session between Vim-style composer behavior and the default editing mode. The persistent default is configured separately with <code>tui.vim_mode_default</code>.',
      related: ['keymap', 'raw'], docs: [D.ref, D.source]
    },
    {
      key: 'setup-default-sandbox', cmd: '/setup-default-sandbox', cat: 'perms',
      requires: 'Idle Windows main chat using the degraded sandbox',
      summary: 'Sets up the elevated agent sandbox on Windows.',
      detail: 'Appears only when native Windows Codex is using the degraded restricted-token sandbox. It starts the administrator setup flow, configures the elevated sandbox, and selects the corresponding automatic approval preset.',
      related: ['permissions', 'sandbox-add-read-dir', 'status'], docs: [D.ref, D.source]
    },
    {
      key: 'sandbox-add-read-dir', cmd: '/sandbox-add-read-dir', args: '<ABSOLUTE_PATH>', cat: 'perms',
      requires: 'Idle native Windows main chat in stable CLI 0.154.0',
      summary: 'Grants the sandbox read access to an additional directory.',
      detail: 'Validates an existing absolute directory, refreshes the Windows sandbox policy, and makes that directory readable to later sandboxed commands. This command is documented only for the CLI running natively on Windows.',
      note: 'Still documented and present in stable <code>0.154.0</code>, but removed from the checked <code>0.155.0-alpha.4</code> prerelease. Keep this distinction in mind when following the prose reference with a newer build.',
      examples: ['/sandbox-add-read-dir C:\\src\\shared'],
      related: ['permissions', 'setup-default-sandbox', 'status'], docs: [D.ref, D.source, D.preview]
    },
    {
      key: 'subagents', cmd: '/subagents', cat: 'delegate',
      summary: 'Switches the active subagent thread.',
      detail: 'Opens the subagent-thread picker so you can inspect or continue work spawned inside the current session without leaving the TUI.',
      note: 'The prose command table still lists <code>/agent</code> as an alias, but neither stable <code>0.154.0</code> nor the checked <code>0.155.0-alpha.4</code> prerelease recognizes it. Use <code>/subagents</code>.',
      when: [
        'A subagent has results you want to inspect directly',
        'You need to continue a spawned thread rather than the parent chat'
      ],
      related: ['agents', 'fork', 'side', 'status'], docs: [D.ref, D.source, D.preview]
    },
    {
      key: 'agents', cmd: '/agents', cat: 'delegate',
      summary: 'Opens a dashboard of active root agent sessions.',
      detail: 'Shows loaded top-level sessions from the shared app server and lets you inspect or switch between them. This is broader than <code>/subagents</code>, which stays within the current session&rsquo;s spawned threads.',
      requires: 'Shared app-server session dashboard available',
      related: ['subagents', 'resume', 'status'], docs: [D.source]
    },
    {
      key: 'apps', cmd: '/apps', cat: 'config',
      requires: 'Apps/connectors available',
      summary: 'Browses apps (connectors) and inserts one into the prompt.',
      detail: 'Opens the app picker. Selecting an app inserts its mention as <code>$app-slug</code> in the composer so the next request can ask Codex to use it.',
      related: ['plugins', 'mcp', 'skills'], docs: [D.ref, D.gates]
    },
    {
      key: 'plugins', cmd: '/plugins', cat: 'config',
      requires: 'Plugins feature enabled',
      summary: 'Browses installed and discoverable plugins.',
      detail: 'Opens the plugin browser across the marketplace sources allowed by your configuration. You can inspect capabilities and available actions, and toggle the enabled state of an installed plugin from the browser.',
      related: ['apps', 'skills', 'mcp', 'hooks'], docs: [D.ref, D.gates]
    },
    {
      key: 'hooks', cmd: '/hooks', cat: 'config',
      summary: 'Views and manages lifecycle hooks.',
      detail: 'Opens the hook browser by event so you can inspect matching handlers and trust, disable, or re-enable non-managed hooks. Managed hooks are shown as managed and cannot be disabled from this browser.',
      related: ['plugins', 'experimental', 'debug-config'], docs: [D.ref]
    },
    {
      key: 'clear', cmd: '/clear', args: '[CHAT NAME]', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Clears the terminal and starts a fresh chat.',
      detail: 'Resets the visible transcript and creates a new chat in the same CLI session. Optional text names the new chat. Unlike <code>Ctrl+L</code>, this changes the chat rather than only clearing the terminal view.',
      examples: ['/clear release prep'],
      related: ['new', 'compact', 'fork'], docs: [D.ref, D.source]
    },
    {
      key: 'rename', cmd: '/rename', args: '[NAME]', cat: 'session',
      summary: 'Renames the current chat.',
      detail: 'Updates the saved chat name without changing its transcript. Provide the name inline or invoke the bare command to open the naming prompt.',
      examples: ['/rename auth migration'],
      related: ['new', 'resume', 'archive'], docs: [D.ref]
    },
    {
      key: 'archive', cmd: '/archive', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Archives the current session while retaining its transcript.',
      detail: 'Removes the session from active lists. Stable <code>0.154.0</code> exits the TUI; the checked <code>0.155.0-alpha.4</code> prerelease can return to the agent command center on a shared server instead. Restore the saved session with the separate <code>codex unarchive</code> program subcommand.',
      note: 'Archiving retains the transcript. Use <code>/delete</code> only when you intend permanent removal.',
      related: ['delete', 'resume', 'exit'], docs: [D.ref, D.previewDispatch]
    },
    {
      key: 'delete', cmd: '/delete', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Permanently deletes the current session and its descendants.',
      detail: 'Deletes the local transcript and spawned descendant sessions. Stable <code>0.154.0</code> exits the TUI; the checked <code>0.155.0-alpha.4</code> prerelease can return to the agent command center on a shared server instead. It is unavailable while a chat is running or from inside a side chat.',
      note: '<strong>Permanent:</strong> unlike <code>/archive</code>, this does not retain a restorable transcript.',
      related: ['archive', 'exit', 'clear'], docs: [D.ref, D.previewDispatch]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'context',
      requires: 'Idle main chat',
      summary: 'Summarizes the chat to free context-window space.',
      detail: 'Replaces earlier turns with a concise summary so a long session can continue while retaining critical details.',
      when: [
        'The context shown by <code>/status</code> is getting tight',
        'You need to continue the same task but no longer need every old turn verbatim'
      ],
      related: ['status', 'recap', 'clear', 'new'], docs: [D.ref, D.source]
    },
    {
      key: 'recap', cmd: '/recap', cat: 'context',
      requires: 'Idle main chat with conversation history',
      summary: 'Generates a short catch-up on the current conversation.',
      detail: 'Summarizes the recent objective, progress, and next step or blocker for someone returning to the chat. Unlike <code>/compact</code>, it displays a catch-up rather than replacing the conversation context to free tokens.',
      note: 'Source-backed in stable <code>0.154.0</code>, although absent from the prose slash-command table. Manual recaps remain available when automatic recaps are disabled.',
      related: ['compact', 'status', 'resume'], docs: [D.source, D.recap]
    },
    {
      key: 'cd', cmd: '/cd', args: '[PATH]', cat: 'context',
      requires: 'Idle, trusted local session with no background terminals',
      summary: 'Changes the working directory without losing the conversation.',
      detail: 'Moves an idle local session to a trusted directory while preserving its transcript. Relative paths resolve from the current directory; omitting the path selects your home directory. Codex rejects unsafe transitions, remote environments, active work, and incompatible permission profiles.',
      examples: ['/cd ../service-api', '/cd'],
      related: ['pwd', 'mention', 'permissions'], docs: [D.source]
    },
    {
      key: 'pwd', cmd: '/pwd', aliases: ['/cwd'], cat: 'context',
      summary: 'Shows the current working directory.',
      detail: 'Prints the active directory for the session. Unlike <code>/cd</code>, this read-only command remains available while a task is running and from side conversations.',
      related: ['cd', 'status'], docs: [D.source]
    },
    {
      key: 'copy', cmd: '/copy', cat: 'context',
      requires: 'Completed response or recent /status output; non-Android TUI',
      summary: 'Copies a whole response, code block, quote, or status field.',
      detail: 'Opens a target picker for the latest completed response, including its code blocks and quotes. Immediately after <code>/status</code>, it instead offers the whole status output or individual fields. Whole-response copying preserves Markdown and rich-text formatting.',
      note: 'The stable <code>0.154.0</code> implementation is broader than the prose reference. The picker takes no inline arguments and does not copy an unfinished response.',
      related: ['raw', 'diff', 'status', 'export'], docs: [D.ref, D.copy, D.release]
    },
    {
      key: 'export', cmd: '/export', args: '[PATH]', cat: 'context',
      requires: 'No task in progress',
      summary: 'Exports the conversation as Markdown.',
      detail: 'Without a path, opens the destination flow for copying or saving the transcript. A path can be absolute, relative to the current directory, or home-relative; Codex refuses to overwrite an existing file.',
      examples: ['/export notes/auth-investigation.md'],
      related: ['copy', 'status'], docs: [D.source]
    },
    {
      key: 'diff', cmd: '/diff', cat: 'review',
      summary: 'Shows the Git diff, including untracked files.',
      detail: 'Displays staged changes, unstaged changes, and files Git has not started tracking, all inside the CLI. It is the direct inspection companion to <code>/review</code>.',
      when: [
        'You want to inspect the exact edits before committing',
        'A review finding needs to be checked against the underlying patch'
      ],
      related: ['review', 'copy', 'status'], docs: [D.ref]
    },
    {
      key: 'exit', cmd: '/exit', aliases: ['/quit'], cat: 'session',
      summary: 'Exits the Codex CLI immediately.',
      detail: 'Closes the interactive session. The two documented spellings behave the same; save or commit any important work first.',
      related: ['archive', 'delete'], docs: [D.ref]
    },
    {
      key: 'experimental', cmd: '/experimental', cat: 'config',
      requires: 'Idle main chat',
      summary: 'Toggles experimental features.',
      detail: 'Opens the experimental-feature picker and saves the selected feature settings. Some changes require a Codex restart before they take effect.',
      when: [
        'You want to inspect which experimental features your build exposes',
        'Documentation asks you to enable a named experimental capability'
      ],
      related: ['worktree', 'debug-config', 'hooks', 'status'], docs: [D.ref, D.source]
    },
    {
      key: 'approve', cmd: '/approve', cat: 'perms',
      requires: 'Recent automatic-review denial',
      summary: 'Approves one retry of an action denied by automatic review.',
      detail: 'Shows the relevant recent denial and retries that action once under the current session policy. It does not turn off automatic review or broadly change permissions.',
      related: ['permissions', 'status'], docs: [D.ref]
    },
    {
      key: 'memories', cmd: '/memories', cat: 'context',
      requires: 'Idle main chat',
      summary: 'Configures memory use and generation.',
      detail: 'Opens controls for using existing memories, generating new memories, or keeping memory behavior disabled. The updated choices apply to future sessions.',
      related: ['personality', 'status', 'compact'], docs: [D.ref, D.source]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'config',
      summary: 'Browses and selects skills for the next request.',
      detail: 'Opens the skill picker and inserts the selected skill context so the following request is handled under that skill\'s instructions.',
      related: ['plugins', 'apps', 'init'], docs: [D.ref]
    },
    {
      key: 'custom-prompt', cmd: '/prompts:<name>', args: '[ARGUMENTS]', cat: 'author',
      flags: ['custom'], noCompare: true,
      requires: 'A local custom-prompt file',
      summary: 'Runs a legacy custom prompt by its configured name.',
      detail: 'Markdown files directly under <code>~/.codex/prompts/</code> appear dynamically as slash commands. They can accept positional placeholders, <code>$ARGUMENTS</code>, and uppercase named placeholders supplied as <code>KEY=value</code>, such as <code>FOCUS=security</code> when the prompt defines <code>$FOCUS</code>.',
      note: 'OpenAI has deprecated custom prompts in favor of skills, but existing prompt files remain supported after restarting Codex.',
      related: ['skills', 'init'], docs: [D.prompts]
    },
    {
      key: 'import', cmd: '/import', cat: 'system',
      requires: 'Idle local TUI session',
      summary: 'Imports supported Claude Code or Cursor setup, projects, and chats.',
      detail: 'Opens the external-agent import picker and migrates the selected supported artifacts into Codex configuration and local files. Session discovery is documented as up to 50 chats from the previous 30 days.',
      note: 'Unavailable while a task is running, in remote sessions, and while connected to the local app-server daemon.',
      related: ['init', 'skills', 'plugins'], docs: [D.ref]
    },
    {
      key: 'feedback', cmd: '/feedback', cat: 'diag',
      summary: 'Sends feedback and optional diagnostics to the Codex maintainers.',
      detail: 'Starts the feedback flow, where you can describe the issue and choose whether to include logs or other diagnostics.',
      related: ['status', 'debug-config', 'mcp'], docs: [D.ref]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      requires: 'Idle main chat',
      summary: 'Generates an <code>AGENTS.md</code> scaffold in the current directory.',
      detail: 'Creates a starting persistent-instructions file for the current repository or subdirectory. Review the generated file and edit it to match the project\'s real conventions before relying on it.',
      related: ['skills', 'mention', 'plan'], docs: [D.ref, D.source]
    },
    {
      key: 'logout', cmd: '/logout', cat: 'system',
      requires: 'Idle main chat',
      summary: 'Signs out of Codex.',
      detail: 'Clears the locally stored credentials for the current user session. Use it when switching accounts or leaving a shared machine.',
      related: ['usage', 'status', 'exit'], docs: [D.ref, D.source]
    },
    {
      key: 'mcp', cmd: '/mcp', args: '[verbose]', cat: 'config',
      summary: 'Lists configured MCP servers and tools.',
      detail: 'Shows the Model Context Protocol tools available in the session. Add <code>verbose</code> for detailed server diagnostics; other arguments display command usage.',
      examples: ['/mcp', '/mcp verbose'],
      related: ['apps', 'plugins', 'feedback'], docs: [D.ref]
    },
    {
      key: 'mention', cmd: '/mention', args: '<PATH>', cat: 'context',
      summary: 'Finds and attaches a file to the chat.',
      detail: 'Searches workspace paths, lets you choose a match, and adds that file to the conversation so later turns reference it directly.',
      examples: ['/mention src/lib/api.ts'],
      related: ['ide', 'init', 'diff'], docs: [D.ref]
    },
    {
      key: 'model', cmd: '/model', cat: 'config',
      summary: 'Chooses the active model and, when available, reasoning effort.',
      detail: 'Opens the model picker for the current session. The selected model can determine whether commands such as <code>/fast</code> and <code>/personality</code> are available.',
      related: ['fast', 'personality', 'status'], docs: [D.ref]
    },
    {
      key: 'fast', cmd: '/fast', cat: 'config',
      requires: 'Fast tier available for the current model',
      summary: 'Toggles the model catalog\'s Fast service tier.',
      detail: 'Turns the current model\'s catalog-provided Fast tier on or off and persists the selection. Codex hides the command when the model does not advertise a Fast tier.',
      related: ['model', 'status', 'statusline'], docs: [D.ref]
    },
    {
      key: 'plan', cmd: '/plan', args: '[PROMPT]', cat: 'modes',
      requires: 'Idle main chat with planning available',
      summary: 'Switches to plan mode and optionally sends a prompt.',
      detail: 'Moves the current chat into plan mode. Inline prompt text, pasted content, and images can seed the first planning request; the command is temporarily unavailable while Codex is already working.',
      examples: ['/plan Propose a migration plan for this service'],
      related: ['goal', 'review', 'side'], docs: [D.ref, D.gates]
    },
    {
      key: 'goal', cmd: '/goal', args: '[OBJECTIVE|edit|pause|resume|clear]', cat: 'modes',
      requires: 'Goals feature enabled',
      summary: 'Sets, views, edits, pauses, resumes, or clears a task goal.',
      detail: 'Keeps a persistent objective attached to the active chat while work continues. The bare command shows the current goal; action arguments manage it. Objectives must be non-empty and no longer than 4,000 characters.',
      examples: [
        '/goal Finish the migration and keep tests green',
        '/goal pause',
        '/goal clear'
      ],
      related: ['plan', 'status', 'side'], docs: [D.ref, D.gates]
    },
    {
      key: 'voice', cmd: '/voice', args: '[settings|mute|stop]', cat: 'modes', flags: ['preview'],
      requires: '0.155.0-alpha.4 prerelease; voice-enabled main chat',
      summary: 'Starts or stops a live voice conversation in a supported preview build.',
      detail: 'The bare command toggles live voice. Use <code>settings</code> to choose the voice for future voice conversations, <code>mute</code> to toggle the microphone, or <code>stop</code> to end voice without starting it again.',
      note: 'Source-backed prerelease behavior, not a stable <code>0.154.0</code> command or an entry in the prose reference. It also requires realtime conversation support and macOS, an MSVC-based Windows build, or a glibc-based Linux build.',
      examples: ['/voice', '/voice settings', '/voice mute', '/voice stop'],
      related: ['status', 'model'], docs: [D.preview, D.previewDispatch, D.voice]
    },
    {
      key: 'personality', cmd: '/personality', cat: 'config',
      requires: 'Stable CLI 0.154.0; personality feature and model support',
      summary: 'Chooses a communication style for responses.',
      detail: 'Opens a picker for <code>friendly</code>, <code>pragmatic</code>, or <code>none</code>. These are picker choices, not inline arguments. Unsupported models or disabled personality support hide the command.',
      note: 'Still documented and present in stable <code>0.154.0</code>, but removed from the checked <code>0.155.0-alpha.4</code> prerelease. This CLI removal does not establish a removal from the separately documented desktop or IDE menus.',
      examples: ['/personality'],
      related: ['model', 'memories', 'status'], docs: [D.ref, D.source, D.preview]
    },
    {
      key: 'ps', cmd: '/ps', cat: 'diag',
      summary: 'Shows background terminals and their recent output.',
      detail: 'Lists background terminal commands, their state, and up to three recent non-empty output lines. The list can be empty when no background terminals exist or unified execution is not in use.',
      related: ['stop', 'status'], docs: [D.ref]
    },
    {
      key: 'stop', cmd: '/stop', aliases: ['/clean'], cat: 'system',
      summary: 'Stops all background terminals for the current session.',
      detail: 'Cancels the background terminal work shown by <code>/ps</code>, asking for confirmation when applicable. <code>/clean</code> remains a documented alias.',
      related: ['ps', 'status'], docs: [D.ref]
    },
    {
      key: 'fork', cmd: '/fork', args: '[CHAT NAME]', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Forks the current chat into a new chat.',
      detail: 'Clones the active transcript into a new chat with a fresh ID and leaves the original untouched. Optional inline text names the fork. With experimental worktrees enabled in a local Git repository, a picker offers the current checkout or a new worktree.',
      note: 'The separate <code>codex fork</code> program subcommand handles forking a saved session from its picker.',
      examples: ['/fork', '/fork alternate-parser'],
      when: [
        'You want to test an alternative approach from the current context',
        'The experiment should be durable rather than an ephemeral side chat'
      ],
      related: ['side', 'new', 'worktree', 'subagents'], docs: [D.ref, D.dispatch, D.worktrees]
    },
    {
      key: 'worktree', cmd: '/worktree', cat: 'system', flags: ['preview'],
      requires: 'Idle main chat in a local Git repository; worktrees enabled',
      summary: 'Creates or browses isolated worktrees for Codex conversations.',
      detail: 'Opens a picker to continue the current conversation in a new worktree, start a fresh conversation there, or browse managed worktrees and resume their owning conversations. It takes no inline path or branch argument.',
      note: 'Shipped as experimental in stable <code>0.154.0</code>. Enable worktrees through <code>/experimental</code>; this does not enable worktree operations in remote sessions.',
      related: ['new', 'fork', 'resume', 'experimental'], docs: [D.release, D.worktrees, D.source]
    },
    {
      key: 'app', cmd: '/app', cat: 'session',
      requires: 'macOS or Windows with the desktop app available',
      summary: 'Continues the current session in the ChatGPT desktop app.',
      detail: 'Opens the same saved chat in the desktop app. If the app is not installed or running, Codex reports that it must be installed or launched.',
      related: ['ide', 'resume', 'status'], docs: [D.ref]
    },
    {
      key: 'side', cmd: '/side', aliases: ['/btw'], args: '[PROMPT]', cat: 'session',
      requires: 'Main chat outside review mode',
      summary: 'Starts an ephemeral side chat.',
      detail: 'Creates a temporary fork for a focused detour without switching the main chat away from its work. The side transcript stays separate, and the command is unavailable inside another side chat or during review mode.',
      examples: ['/side Check whether this plan has an obvious risk'],
      related: ['fork', 'plan', 'subagents'], docs: [D.ref]
    },
    {
      key: 'raw', cmd: '/raw', args: '[on|off]', cat: 'system',
      summary: 'Toggles raw terminal scrollback mode.',
      detail: 'Makes terminal selection and copying more direct. Use the bare command to toggle or pass <code>on</code> or <code>off</code>; the default <code>Alt+R</code> shortcut controls the same mode.',
      related: ['copy', 'keymap', 'theme'], docs: [D.ref]
    },
    {
      key: 'resume', cmd: '/resume', args: '[SESSION_ID|NAME]', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Resumes a saved chat from the picker or by ID or name.',
      detail: 'The bare command opens the saved-session picker. Supply a session ID or name to select a saved chat directly and continue with its original history.',
      examples: ['/resume', '/resume auth migration'],
      related: ['fork', 'new', 'rename', 'archive'], docs: [D.ref, D.dispatch]
    },
    {
      key: 'new', cmd: '/new', args: '[CHAT NAME]', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Starts a new chat in the same CLI session.',
      detail: 'Creates a fresh chat without leaving the terminal. Optional text names it. With experimental worktrees enabled in a local Git repository, a picker offers the current checkout or a new worktree. Unlike <code>/clear</code>, it leaves the current terminal view in place.',
      examples: ['/new bug bash'],
      related: ['clear', 'resume', 'fork', 'worktree'], docs: [D.ref, D.worktrees]
    },
    {
      key: 'review', cmd: '/review', args: '[INSTRUCTIONS]', cat: 'review',
      requires: 'Idle main chat',
      summary: 'Reviews local changes, a base-branch diff, a commit, or a custom target.',
      detail: 'The bare command opens a preset picker for uncommitted changes, a base-branch comparison, a commit, or custom review instructions. Inline text submits custom instructions directly. It uses the current session model unless <code>review_model</code> is configured.',
      examples: ['/review', '/review Check the retry changes for behavior regressions'],
      related: ['diff', 'plan', 'approve'], docs: [D.ref, D.dispatch, D.review]
    },
    {
      key: 'status', cmd: '/status', cat: 'diag',
      summary: 'Displays session configuration and token usage.',
      detail: 'Shows the active model, approval policy, writable roots, and current token usage. Remote TUI sessions also show the remote address and server version. In stable <code>0.154.0</code>, run <code>/copy</code> immediately afterward to copy the whole status or an individual field.',
      when: [
        'You need to confirm the model or permission policy before a task',
        'You want to check context usage or verify the working roots'
      ],
      related: ['usage', 'permissions', 'model', 'debug-config', 'copy'], docs: [D.ref, D.copy]
    },
    {
      key: 'usage', cmd: '/usage', args: '[daily|weekly|cumulative]', cat: 'diag',
      requires: 'Signed in with ChatGPT',
      summary: 'Views account token activity or redeems an available earned reset.',
      detail: 'Opens the account-usage menu. The documented arguments jump directly to daily, weekly, or cumulative token activity; accounts without Codex service authentication see a sign-in requirement.',
      examples: ['/usage weekly'],
      related: ['status', 'logout'], docs: [D.ref, D.gates]
    },
    {
      key: 'debug-config', cmd: '/debug-config', cat: 'diag',
      summary: 'Prints configuration layers and policy-requirement diagnostics.',
      detail: 'Shows config layers in precedence order, whether each is active, and policy sources and requirements. Use it when effective behavior differs from the value you expected in <code>config.toml</code>.',
      related: ['status', 'experimental', 'hooks', 'permissions'], docs: [D.ref]
    },
    {
      key: 'statusline', cmd: '/statusline', cat: 'system',
      summary: 'Configures the TUI footer fields.',
      detail: 'Opens an interactive picker to toggle and reorder status-line items, updates the footer immediately, and persists the result to <code>tui.status_line</code>.',
      when: [
        'You want model, context, rate-limit, Git, token, session, or path information always visible',
        'The default footer is too sparse or too crowded'
      ],
      related: ['title', 'status', 'keymap'], docs: [D.ref]
    },
    {
      key: 'title', cmd: '/title', cat: 'system',
      summary: 'Configures terminal window or tab title fields.',
      detail: 'Chooses and reorders title components such as the app name, project, status, thread, Git branch, model, and task progress, then persists them to <code>tui.terminal_title</code>.',
      related: ['statusline', 'theme', 'rename'], docs: [D.ref]
    },
    {
      key: 'theme', cmd: '/theme', cat: 'system',
      requires: 'Idle main chat',
      summary: 'Previews and selects a syntax-highlighting theme.',
      detail: 'Opens the theme picker, previews choices, and persists the confirmed selection to <code>tui.theme</code> in <code>config.toml</code>.',
      related: ['raw', 'title', 'pets'], docs: [D.ref, D.source]
    },
    {
      key: 'pets', cmd: '/pets', aliases: ['/pet'], args: '[PET_ID|off]', cat: 'system',
      requires: 'Idle main chat in a supported terminal',
      summary: 'Chooses or hides an ambient terminal pet.',
      detail: 'Opens the pet picker for built-in and custom pets and persists the selection in supported terminals. Pass a pet ID to select it directly, or <code>off</code> to hide the current pet.',
      note: 'Stable source also accepts <code>disable</code>, <code>disabled</code>, <code>hide</code>, <code>hidden</code>, and <code>none</code> as hide arguments.',
      related: ['theme', 'statusline'], docs: [D.ref, D.dispatch]
    }
  ]);
}());
