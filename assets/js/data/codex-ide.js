/* OpenAI Codex IDE extension — slash commands from the Codex composer.
   Ordinary VS Code Command Palette actions are intentionally excluded; only the explicit
   slash-command inventory in the official OpenAI Developer commands reference is included. */

(function () {
  var D = {
    ref: ['Codex IDE extension slash commands',
      'https://learn.chatgpt.com/docs/developer-commands?surface=ide#available-slash-commands'],
    prompts: ['Custom prompts in Codex',
      'https://learn.chatgpt.com/docs/custom-prompts']
  };

  window.SLASH.register('codex-ide', [
    {
      key: 'approve', cmd: '/approve', cat: 'perms',
      requires: 'Recent automatic-review denial',
      summary: 'Approves one retry of an action that automatic review recently denied.',
      detail: 'Retries the denied action once while automatic review is active. This is a one-action override, not a standing permission change.',
      related: ['review', 'status'], docs: [D.ref]
    },
    {
      key: 'cloud', cmd: '/cloud', cat: 'modes',
      requires: 'Cloud execution available',
      summary: 'Runs the chat in the cloud.',
      detail: 'Switches the Codex chat from the local workspace to available cloud execution. Use <code>/cloud-environment</code> to choose the backing environment.',
      related: ['cloud-environment', 'local', 'worktree'], docs: [D.ref]
    },
    {
      key: 'cloud-environment', cmd: '/cloud-environment', cat: 'system',
      requires: 'Cloud execution available',
      summary: 'Chooses the cloud environment for the chat.',
      detail: 'Opens the cloud-environment chooser. It selects where cloud work runs; <code>/cloud</code> is the separate command that switches execution mode.',
      related: ['cloud', 'local', 'project'], docs: [D.ref]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'context',
      summary: 'Compacts the current chat context.',
      detail: 'Reduces accumulated context so a long chat has room to continue without starting a new conversation.',
      when: [
        'The context figure shown by <code>/status</code> is getting tight',
        'You want to retain the task while reducing earlier conversational detail'
      ],
      related: ['status', 'fork', 'side'], docs: [D.ref]
    },
    {
      key: 'fast', cmd: '/fast', cat: 'config',
      requires: 'Fast tier available for the current model',
      summary: 'Turns a catalog-provided Fast service tier on or off.',
      detail: 'Toggles Fast for the current model when that service tier is exposed by the model catalog. Availability is model-dependent.',
      related: ['model', 'reasoning', 'status'], docs: [D.ref]
    },
    {
      key: 'feedback', cmd: '/feedback', cat: 'diag',
      summary: 'Opens the feedback dialog, with an option to include logs.',
      detail: 'Starts the extension feedback flow so you can report a problem or share product feedback and optionally attach diagnostics.',
      related: ['status', 'mcp'], docs: [D.ref]
    },
    {
      key: 'fork', cmd: '/fork', cat: 'session',
      summary: 'Copies a local chat into a new local chat.',
      detail: 'Branches the current local conversation into a durable new chat while keeping the original unchanged. The IDE reference does not describe this command as creating a worktree; <code>/worktree</code> handles that explicitly.',
      when: [
        'You want to explore an alternative approach from the current context',
        'The branch should be saved rather than temporary like <code>/side</code>'
      ],
      related: ['side', 'worktree', 'compact'], docs: [D.ref]
    },
    {
      key: 'goal', cmd: '/goal', cat: 'modes',
      summary: 'Sets a persistent goal for Codex to work toward.',
      detail: 'Attaches a durable objective to the current chat so Codex can keep working toward it across later turns.',
      when: [
        'A task spans multiple turns or a long-running workflow',
        'You want the objective to remain attached while you continue steering the chat'
      ],
      related: ['plan', 'status', 'side'], docs: [D.ref]
    },
    {
      key: 'ide-context', cmd: '/ide-context', cat: 'context',
      summary: 'Turns automatic IDE context on or off.',
      detail: 'Controls whether Codex automatically receives relevant editor context such as what is open or selected. Disable it when that state is unrelated to the current task.',
      related: ['project', 'local', 'status'], docs: [D.ref]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      summary: 'Generates an <code>AGENTS.md</code> scaffold for the current project.',
      detail: 'Creates a starting persistent-instructions file for the project. Review and refine it so later Codex chats receive accurate repository conventions and commands.',
      related: ['project', 'local', 'plan'], docs: [D.ref]
    },
    {
      key: 'local', cmd: '/local', cat: 'modes',
      summary: 'Runs the chat in the local workspace.',
      detail: 'Switches execution to the workspace open in the IDE. Use <code>/cloud</code> to move the chat to an available cloud environment.',
      related: ['cloud', 'project', 'worktree'], docs: [D.ref]
    },
    {
      key: 'mcp', cmd: '/mcp', cat: 'config',
      summary: 'Opens MCP status to show connected servers.',
      detail: 'Displays the Model Context Protocol connections available to the chat, making it the quickest check when an expected external tool is missing.',
      related: ['status', 'feedback'], docs: [D.ref]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'config',
      summary: 'Browses available skills and applies one to the next request.',
      detail: 'Opens the skill picker so the next request follows that skill&rsquo;s instructions. You can also type <code>$</code> to mention a skill explicitly, or let Codex select one when the request matches its description.',
      note: 'OpenAI&rsquo;s Build skills guide names this command for the IDE extension, although it is absent from the extension&rsquo;s 22-row slash-command table. The popup in your installed extension remains definitive.',
      related: ['mcp', 'model'],
      docs: [['Build skills in Codex',
        'https://learn.chatgpt.com/docs/build-skills#how-chatgpt-and-codex-use-skills']]
    },
    {
      key: 'memories', cmd: '/memories', cat: 'context',
      requires: 'Memories available',
      summary: 'Configures whether the chat can use or generate memories.',
      detail: 'Opens memory controls for the current environment. The command appears only when Memories is available.',
      related: ['status', 'personality', 'compact'], docs: [D.ref]
    },
    {
      key: 'model', cmd: '/model', cat: 'config',
      summary: 'Chooses the model for the current chat.',
      detail: 'Opens the model picker. Reasoning effort and a catalog-provided Fast tier are controlled separately with <code>/reasoning</code> and <code>/fast</code>.',
      related: ['reasoning', 'fast', 'personality', 'status'], docs: [D.ref]
    },
    {
      key: 'personality', cmd: '/personality', cat: 'config',
      requires: 'A model that supports personalities',
      summary: 'Chooses how Codex responds.',
      detail: 'Changes the response style without replacing the task instructions. Unsupported models do not expose the command.',
      related: ['model', 'reasoning', 'memories'], docs: [D.ref]
    },
    {
      key: 'plan', cmd: '/plan', cat: 'modes',
      summary: 'Toggles plan mode for multi-step planning.',
      detail: 'Switches the chat into or out of a planning workflow so you can work through the approach before implementation.',
      when: [
        'A task spans several files or contains unresolved design choices',
        'You want to review an approach before Codex starts editing'
      ],
      related: ['goal', 'review', 'side'], docs: [D.ref]
    },
    {
      key: 'project', cmd: '/project', cat: 'context',
      summary: 'Chooses a project for new chats.',
      detail: 'Selects the project that future chats will use. The reference scopes the selection to new chats rather than moving the active one.',
      related: ['local', 'worktree', 'cloud-environment'], docs: [D.ref]
    },
    {
      key: 'reasoning', cmd: '/reasoning', cat: 'config',
      summary: 'Chooses the reasoning effort for the current chat.',
      detail: 'Opens the reasoning-effort picker for the active model. The available choices depend on that model.',
      related: ['model', 'fast', 'personality', 'status'], docs: [D.ref]
    },
    {
      key: 'review', cmd: '/review', cat: 'review',
      summary: 'Starts code review mode for uncommitted changes or a base-branch comparison.',
      detail: 'Opens the review workflow and lets you inspect either local uncommitted work or the branch difference from a selected base branch.',
      related: ['approve', 'worktree', 'plan'], docs: [D.ref]
    },
    {
      key: 'side', cmd: '/side', cat: 'session',
      summary: 'Starts a temporary side chat without interrupting the main chat.',
      detail: 'Creates an ephemeral detour for a focused question while leaving the main conversation in place. Use <code>/fork</code> when you want a durable branch.',
      related: ['fork', 'plan', 'status'], docs: [D.ref]
    },
    {
      key: 'status', cmd: '/status', cat: 'diag',
      summary: 'Shows the chat ID, context usage, and rate limits.',
      detail: 'Displays the core runtime facts for the active Codex chat and is the fastest way to check context pressure or identify the conversation.',
      related: ['compact', 'model', 'reasoning', 'mcp'], docs: [D.ref]
    },
    {
      key: 'worktree', cmd: '/worktree', cat: 'system',
      summary: 'Runs the chat in a new Git worktree.',
      detail: 'Creates an isolated worktree for the chat so it can edit the same repository without sharing the current working directory.',
      when: [
        'Parallel chats need filesystem isolation in the same repository',
        'Experimental work should live in a separate Git worktree'
      ],
      related: ['fork', 'local', 'project', 'review'], docs: [D.ref]
    },
    {
      key: 'custom-prompt', cmd: '/prompts:<name>', args: '[ARGUMENTS]', cat: 'author',
      flags: ['custom'], noCompare: true,
      summary: 'Runs a legacy custom prompt by its configured name.',
      detail: 'Markdown files directly under <code>~/.codex/prompts/</code> appear dynamically in the IDE slash menu and can accept positional, free-form, or named arguments.',
      note: 'OpenAI has deprecated custom prompts in favor of skills, but existing prompt files remain supported after restarting the extension.',
      related: ['init'], docs: [D.prompts]
    }
  ]);
}());
