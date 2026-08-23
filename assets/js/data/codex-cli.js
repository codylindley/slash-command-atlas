/* OpenAI Codex CLI — slash commands for the interactive terminal UI.
   This dataset intentionally excludes `codex` program subcommands and command-line flags.
   Names, aliases, arguments, availability notes and concise behavior follow OpenAI Docs. */

(function () {
  var D = {
    ref: ['Codex CLI built-in slash commands',
      'https://learn.chatgpt.com/docs/developer-commands?surface=cli#built-in-slash-commands']
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
      key: 'keymap', cmd: '/keymap', cat: 'system',
      summary: 'Inspects and remaps TUI keyboard shortcuts.',
      detail: 'Opens an interactive shortcut editor, applies the new binding immediately, and persists custom bindings under <code>tui.keymap</code> in <code>config.toml</code>. Context-specific bindings override global ones.',
      when: [
        'A default TUI shortcut conflicts with your terminal or editor',
        'You want to inspect which action a key currently triggers'
      ],
      related: ['vim', 'raw', 'statusline'], docs: [D.ref]
    },
    {
      key: 'vim', cmd: '/vim', cat: 'system',
      summary: 'Toggles Vim editing mode for the composer.',
      detail: 'Switches the current session between Vim-style composer behavior and the default editing mode. The persistent default is configured separately with <code>tui.vim_mode_default</code>.',
      related: ['keymap', 'raw'], docs: [D.ref]
    },
    {
      key: 'setup-default-sandbox', cmd: '/setup-default-sandbox', cat: 'perms',
      requires: 'Windows using the degraded sandbox',
      summary: 'Sets up the elevated agent sandbox on Windows.',
      detail: 'Appears only when native Windows Codex is using the degraded restricted-token sandbox. It starts the administrator setup flow, configures the elevated sandbox, and selects the corresponding automatic approval preset.',
      related: ['permissions', 'sandbox-add-read-dir', 'status'], docs: [D.ref]
    },
    {
      key: 'sandbox-add-read-dir', cmd: '/sandbox-add-read-dir', args: '<ABSOLUTE_PATH>', cat: 'perms',
      requires: 'Native Windows CLI',
      summary: 'Grants the sandbox read access to an additional directory.',
      detail: 'Validates an existing absolute directory, refreshes the Windows sandbox policy, and makes that directory readable to later sandboxed commands. This command is documented only for the CLI running natively on Windows.',
      examples: ['/sandbox-add-read-dir C:\\src\\shared'],
      related: ['permissions', 'setup-default-sandbox', 'status'], docs: [D.ref]
    },
    {
      key: 'agent', cmd: '/agent', aliases: ['/subagents'], cat: 'delegate',
      summary: 'Switches the active agent thread.',
      detail: 'Opens the agent-thread picker so you can inspect or continue work in a spawned subagent thread without leaving the TUI.',
      when: [
        'A subagent has results you want to inspect directly',
        'You need to continue a spawned thread rather than the parent chat'
      ],
      related: ['fork', 'side', 'status'], docs: [D.ref]
    },
    {
      key: 'apps', cmd: '/apps', cat: 'config',
      summary: 'Browses apps (connectors) and inserts one into the prompt.',
      detail: 'Opens the app picker. Selecting an app inserts its mention as <code>$app-slug</code> in the composer so the next request can ask Codex to use it.',
      related: ['plugins', 'mcp', 'skills'], docs: [D.ref]
    },
    {
      key: 'plugins', cmd: '/plugins', cat: 'config',
      summary: 'Browses installed and discoverable plugins.',
      detail: 'Opens the plugin browser across the marketplace sources allowed by your configuration. You can inspect capabilities and available actions, and toggle the enabled state of an installed plugin from the browser.',
      related: ['apps', 'skills', 'mcp', 'hooks'], docs: [D.ref]
    },
    {
      key: 'hooks', cmd: '/hooks', cat: 'config',
      summary: 'Views and manages lifecycle hooks.',
      detail: 'Opens the hook browser by event so you can inspect matching handlers and trust, disable, or re-enable non-managed hooks. Managed hooks are shown as managed and cannot be disabled from this browser.',
      related: ['plugins', 'experimental', 'debug-config'], docs: [D.ref]
    },
    {
      key: 'clear', cmd: '/clear', args: '[CHAT NAME]', cat: 'session',
      requires: 'No task in progress',
      summary: 'Clears the terminal and starts a fresh chat.',
      detail: 'Resets the visible transcript and creates a new chat in the same CLI session. Optional text names the new chat. Unlike <code>Ctrl+L</code>, this changes the chat rather than only clearing the terminal view.',
      examples: ['/clear release prep'],
      related: ['new', 'compact', 'fork'], docs: [D.ref]
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
      requires: 'No task in progress',
      summary: 'Archives the current session and exits Codex.',
      detail: 'Removes the session from active lists and closes the TUI while retaining the transcript locally. A saved session can later be restored with the separate <code>codex unarchive</code> program subcommand.',
      note: 'Archiving retains the transcript. Use <code>/delete</code> only when you intend permanent removal.',
      related: ['delete', 'resume', 'exit'], docs: [D.ref]
    },
    {
      key: 'delete', cmd: '/delete', cat: 'session',
      requires: 'Idle main chat',
      summary: 'Permanently deletes the current session and exits Codex.',
      detail: 'Deletes the local transcript, closes the TUI, and also removes spawned descendant sessions. It is unavailable while a chat is running or from inside a side chat.',
      note: '<strong>Permanent:</strong> unlike <code>/archive</code>, this does not retain a restorable transcript.',
      related: ['archive', 'exit', 'clear'], docs: [D.ref]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'context',
      summary: 'Summarizes the chat to free context-window space.',
      detail: 'Replaces earlier turns with a concise summary so a long session can continue while retaining critical details.',
      when: [
        'The context shown by <code>/status</code> is getting tight',
        'You need to continue the same task but no longer need every old turn verbatim'
      ],
      related: ['status', 'clear', 'new'], docs: [D.ref]
    },
    {
      key: 'copy', cmd: '/copy', cat: 'context',
      requires: 'At least one completed Codex output',
      summary: 'Copies the latest completed Codex output.',
      detail: 'Copies the most recent completed response or plan to the clipboard. If a turn is still running, Codex copies the last completed output instead; <code>Ctrl+O</code> is the default keyboard equivalent.',
      related: ['raw', 'diff', 'status'], docs: [D.ref]
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
      summary: 'Toggles experimental features.',
      detail: 'Opens the experimental-feature picker and saves the selected feature settings. Some changes require a Codex restart before they take effect.',
      when: [
        'You want to inspect which experimental features your build exposes',
        'Documentation asks you to enable a named experimental capability'
      ],
      related: ['debug-config', 'hooks', 'status'], docs: [D.ref]
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
      summary: 'Configures memory use and generation.',
      detail: 'Opens controls for using existing memories, generating new memories, or keeping memory behavior disabled. The updated choices apply to future sessions.',
      related: ['personality', 'status', 'compact'], docs: [D.ref]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'config',
      summary: 'Browses and selects skills for the next request.',
      detail: 'Opens the skill picker and inserts the selected skill context so the following request is handled under that skill\'s instructions.',
      related: ['plugins', 'apps', 'init'], docs: [D.ref]
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
      summary: 'Generates an <code>AGENTS.md</code> scaffold in the current directory.',
      detail: 'Creates a starting persistent-instructions file for the current repository or subdirectory. Review the generated file and edit it to match the project\'s real conventions before relying on it.',
      related: ['skills', 'mention', 'plan'], docs: [D.ref]
    },
    {
      key: 'logout', cmd: '/logout', cat: 'system',
      summary: 'Signs out of Codex.',
      detail: 'Clears the locally stored credentials for the current user session. Use it when switching accounts or leaving a shared machine.',
      related: ['usage', 'status', 'exit'], docs: [D.ref]
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
      requires: 'No task in progress',
      summary: 'Switches to plan mode and optionally sends a prompt.',
      detail: 'Moves the current chat into plan mode. Inline prompt text, pasted content, and images can seed the first planning request; the command is temporarily unavailable while Codex is already working.',
      examples: ['/plan Propose a migration plan for this service'],
      related: ['goal', 'review', 'side'], docs: [D.ref]
    },
    {
      key: 'goal', cmd: '/goal', args: '[OBJECTIVE|edit|pause|resume|clear]', cat: 'modes',
      summary: 'Sets, views, edits, pauses, resumes, or clears a task goal.',
      detail: 'Keeps a persistent objective attached to the active chat while work continues. The bare command shows the current goal; action arguments manage it. Objectives must be non-empty and no longer than 4,000 characters.',
      examples: [
        '/goal Finish the migration and keep tests green',
        '/goal pause',
        '/goal clear'
      ],
      related: ['plan', 'status', 'side'], docs: [D.ref]
    },
    {
      key: 'personality', cmd: '/personality', args: '[friendly|pragmatic|none]', cat: 'config',
      requires: 'A model that supports personalities',
      summary: 'Chooses a communication style for responses.',
      detail: 'Changes how Codex communicates without rewriting the task prompt. The documented choices are <code>friendly</code>, <code>pragmatic</code>, and <code>none</code>; unsupported models hide the command.',
      related: ['model', 'memories', 'status'], docs: [D.ref]
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
      key: 'fork', cmd: '/fork', cat: 'session',
      summary: 'Forks the current chat into a new chat.',
      detail: 'Clones the active transcript into a new chat with a fresh ID and leaves the original untouched. The separate <code>codex fork</code> program subcommand handles forking a saved session from the picker.',
      when: [
        'You want to test an alternative approach from the current context',
        'The experiment should be durable rather than an ephemeral side chat'
      ],
      related: ['side', 'new', 'agent'], docs: [D.ref]
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
      related: ['fork', 'plan', 'agent'], docs: [D.ref]
    },
    {
      key: 'raw', cmd: '/raw', args: '[on|off]', cat: 'system',
      summary: 'Toggles raw terminal scrollback mode.',
      detail: 'Makes terminal selection and copying more direct. Use the bare command to toggle or pass <code>on</code> or <code>off</code>; the default <code>Alt+R</code> shortcut controls the same mode.',
      related: ['copy', 'keymap', 'theme'], docs: [D.ref]
    },
    {
      key: 'resume', cmd: '/resume', cat: 'session',
      summary: 'Resumes a saved chat from the session list.',
      detail: 'Opens the saved-session picker and reloads the selected transcript so you can continue with its original history.',
      related: ['fork', 'new', 'rename', 'archive'], docs: [D.ref]
    },
    {
      key: 'new', cmd: '/new', args: '[CHAT NAME]', cat: 'session',
      summary: 'Starts a new chat in the same CLI session.',
      detail: 'Creates a fresh chat without leaving the terminal. Optional text names it. Unlike <code>/clear</code>, <code>/new</code> leaves the current terminal view in place.',
      examples: ['/new bug bash'],
      related: ['clear', 'resume', 'fork'], docs: [D.ref]
    },
    {
      key: 'review', cmd: '/review', cat: 'review',
      summary: 'Asks Codex to review the working tree.',
      detail: 'Starts a review focused on behavior changes and missing tests in the current working tree. It uses the current session model unless <code>review_model</code> is configured; use <code>/diff</code> to inspect the exact edits.',
      related: ['diff', 'plan', 'approve'], docs: [D.ref]
    },
    {
      key: 'status', cmd: '/status', cat: 'diag',
      summary: 'Displays session configuration and token usage.',
      detail: 'Shows the active model, approval policy, writable roots, and current token usage. Remote TUI sessions also show the remote address and server version.',
      when: [
        'You need to confirm the model or permission policy before a task',
        'You want to check context usage or verify the working roots'
      ],
      related: ['usage', 'permissions', 'model', 'debug-config'], docs: [D.ref]
    },
    {
      key: 'usage', cmd: '/usage', args: '[daily|weekly|cumulative]', cat: 'diag',
      summary: 'Views account token activity or redeems an available earned reset.',
      detail: 'Opens the account-usage menu. The documented arguments jump directly to daily, weekly, or cumulative token activity; accounts without Codex service authentication see a sign-in requirement.',
      examples: ['/usage weekly'],
      related: ['status', 'logout'], docs: [D.ref]
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
      summary: 'Previews and selects a syntax-highlighting theme.',
      detail: 'Opens the theme picker, previews choices, and persists the confirmed selection to <code>tui.theme</code> in <code>config.toml</code>.',
      related: ['raw', 'title', 'pets'], docs: [D.ref]
    },
    {
      key: 'pets', cmd: '/pets', aliases: ['/pet'], args: '[off]', cat: 'system',
      summary: 'Chooses or hides an ambient terminal pet.',
      detail: 'Opens the pet picker for built-in and custom pets and persists the selection in supported terminals. Pass <code>off</code> to hide the current pet.',
      related: ['theme', 'statusline'], docs: [D.ref]
    }
  ]);
}());
