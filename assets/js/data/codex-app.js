/* ChatGPT desktop app (Codex) — composer slash commands.
   Built-in command names and concise behavior follow the official OpenAI reference.
   Longer explanations and examples are editorial, constrained to documented behavior. */

(function () {
  var D = {
    ref: ['ChatGPT desktop app slash commands',
      'https://learn.chatgpt.com/docs/reference/slash-commands#available-slash-commands'],
    share: ['Share a read-only snapshot of a Codex thread',
      'https://learn.chatgpt.com/docs/use-chatgpt#share-a-read-only-snapshot-of-a-codex-thread']
  };

  window.SLASH.register('codex-app', [
    {
      key: 'approve', cmd: '/approve', cat: 'perms',
      requires: 'Recent automatic-review denial',
      summary: 'Approves one retry of an action that automatic review recently denied.',
      detail: 'This is a narrowly scoped override: it retries the denied action once while automatic review is active. It does not disable automatic review or grant a standing approval for later actions.',
      when: [
        'You inspected a recent automatic-review denial and want Codex to try that action once',
        'The denial was a false positive rather than a signal to change the approach'
      ],
      related: ['review', 'status'], docs: [D.ref]
    },
    {
      key: 'cloud', cmd: '/cloud', cat: 'modes',
      requires: 'Cloud execution available',
      summary: 'Runs the chat in the cloud.',
      detail: 'Switches execution away from the selected local project and into an available cloud environment. Use <code>/cloud-environment</code> when you need to choose which configured environment backs the chat.',
      related: ['cloud-environment', 'local', 'worktree'], docs: [D.ref]
    },
    {
      key: 'cloud-environment', cmd: '/cloud-environment', cat: 'system',
      requires: 'Cloud execution available',
      summary: 'Chooses the cloud environment for the chat.',
      detail: 'Opens the environment chooser for cloud-backed work. This selects where a cloud chat runs; <code>/cloud</code> is the separate command that switches the chat to cloud execution.',
      when: [
        'The workspace has more than one cloud environment',
        'A task needs dependencies or configuration from a particular environment'
      ],
      related: ['cloud', 'local', 'project'], docs: [D.ref]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'context',
      summary: 'Compacts the current chat context.',
      detail: 'Reduces the accumulated conversation context so a long-running chat can keep going with more room for later work. It preserves the chat rather than starting a new one.',
      when: [
        'A long chat is approaching its context limit',
        'You want to continue the same task without carrying every earlier turn verbatim'
      ],
      related: ['status', 'fork', 'task'], docs: [D.ref]
    },
    {
      key: 'fast', cmd: '/fast', cat: 'config',
      requires: 'Fast tier available for the current model',
      summary: 'Turns the model catalog\'s Fast service tier on or off.',
      detail: 'This is a toggle, and availability comes from the current model catalog. If the selected model does not expose a Fast tier, the command may not appear.',
      related: ['model', 'reasoning', 'status'], docs: [D.ref]
    },
    {
      key: 'feedback', cmd: '/feedback', cat: 'diag',
      summary: 'Opens the feedback dialog, with an option to include logs.',
      detail: 'Starts the in-app feedback flow so you can describe a problem or share product feedback. Logs are optional and are included only through that dialog.',
      when: [
        'A Codex action behaved unexpectedly',
        'You want to report a reproducible app or agent issue and attach diagnostics'
      ],
      related: ['status', 'mcp'], docs: [D.ref]
    },
    {
      key: 'fork', cmd: '/fork', cat: 'session',
      summary: 'Copies a local chat into a new local chat or worktree.',
      detail: 'Branches from the current local chat so the original remains intact while the copy can take a different direction. Depending on the choice you make, the copy can stay in the same project or use a new worktree.',
      when: [
        'You want to explore an alternative approach without changing the original chat',
        'A line of work needs an isolated worktree but should retain the current conversation context'
      ],
      related: ['side', 'worktree', 'compact'], docs: [D.ref]
    },
    {
      key: 'goal', cmd: '/goal', cat: 'modes',
      summary: 'Sets a persistent goal for this Codex chat to work toward.',
      detail: 'Starts Goal mode for an objective that remains attached to the chat while work continues. The app shows progress above the composer and provides controls there to pause, resume, edit, or clear the goal.',
      note: 'The official guidance recommends using <code>/plan</code> first when you want to shape the objective with ChatGPT before making it persistent.',
      when: [
        'The objective will take multiple turns or a long-running agent loop',
        'You want progress to remain visible and resumable across follow-up messages'
      ],
      related: ['plan', 'status', 'task'], docs: [D.ref]
    },
    {
      key: 'ide-context', cmd: '/ide-context', cat: 'context',
      summary: 'Turns shared IDE context on or off.',
      detail: 'Controls whether context shared by a connected IDE is used automatically in the chat. Turn it off when the editor state is unrelated to the current request; turn it on when open files and selections are relevant.',
      related: ['project', 'local', 'status'], docs: [D.ref]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      summary: 'Generates an <code>AGENTS.md</code> scaffold for the current project.',
      detail: 'Creates a starting instructions file for the project. Review and refine the generated scaffold so future Codex sessions inherit accurate build commands, conventions, and repository guidance.',
      when: [
        'A repository does not yet have persistent agent instructions',
        'You want a generated starting point that the team can edit and commit'
      ],
      related: ['project', 'local', 'plan'], docs: [D.ref]
    },
    {
      key: 'local', cmd: '/local', cat: 'modes',
      summary: 'Runs the chat in the selected local project.',
      detail: 'Switches the chat to local execution in the project selected by the app. Use <code>/cloud</code> for the corresponding move to an available cloud environment.',
      related: ['cloud', 'project', 'worktree'], docs: [D.ref]
    },
    {
      key: 'mcp', cmd: '/mcp', cat: 'config',
      summary: 'Opens MCP status to show connected servers.',
      detail: 'Displays the Model Context Protocol connections available to the chat. It is the quickest way to confirm whether the server you expect Codex to use is connected.',
      when: [
        'A tool backed by an MCP server is missing or unavailable',
        'You want to inspect the chat\'s current external-tool connections'
      ],
      related: ['status', 'feedback'], docs: [D.ref]
    },
    {
      key: 'memories', cmd: '/memories', cat: 'context',
      requires: 'Memories available',
      summary: 'Configures whether the chat can use or generate memories.',
      detail: 'Opens the memory controls for the chat. Availability depends on whether Memories is enabled for the current account or environment.',
      related: ['status', 'personality', 'compact'], docs: [D.ref]
    },
    {
      key: 'model', cmd: '/model', cat: 'config',
      summary: 'Chooses the model for the current chat.',
      detail: 'Opens the model picker and applies the selection to this chat. Reasoning effort and Fast tier are controlled separately with <code>/reasoning</code> and <code>/fast</code>.',
      related: ['reasoning', 'fast', 'personality', 'status'], docs: [D.ref]
    },
    {
      key: 'pet', cmd: '/pet', cat: 'config',
      summary: 'Wakes or tucks away the desktop pet.',
      detail: 'Controls the ambient pet in the desktop app without changing the chat, model, or execution environment.',
      related: ['personality'], docs: [D.ref]
    },
    {
      key: 'personality', cmd: '/personality', cat: 'config',
      requires: 'A model that supports personalities',
      summary: 'Chooses how Codex responds.',
      detail: 'Changes the response style for the current chat without replacing your task instructions. The command is available only when the current model supports personalities.',
      related: ['model', 'reasoning', 'memories'], docs: [D.ref]
    },
    {
      key: 'plan', cmd: '/plan', cat: 'modes',
      summary: 'Toggles plan mode for multi-step planning.',
      detail: 'Moves the chat into or out of a planning workflow. Use it to work through the approach and important decisions before implementation, or before turning the result into a persistent <code>/goal</code>.',
      when: [
        'A change spans several files or has sequencing decisions',
        'You want to refine an objective before setting a long-running goal'
      ],
      related: ['goal', 'review', 'task'], docs: [D.ref]
    },
    {
      key: 'project', cmd: '/project', cat: 'context',
      summary: 'Chooses a project for new chats.',
      detail: 'Selects the project that newly created chats will use. The reference scopes this command to new chats rather than describing it as a move of the current chat.',
      related: ['task', 'local', 'worktree', 'cloud-environment'], docs: [D.ref]
    },
    {
      key: 'reasoning', cmd: '/reasoning', cat: 'config',
      summary: 'Chooses the reasoning effort for the current chat.',
      detail: 'Opens the reasoning-effort chooser for the active chat. The options available depend on the selected model.',
      related: ['model', 'fast', 'personality', 'status'], docs: [D.ref]
    },
    {
      key: 'review', cmd: '/review', cat: 'review',
      summary: 'Starts code review mode for uncommitted changes or a base-branch comparison.',
      detail: 'Switches the chat into a review workflow and lets you choose between inspecting local uncommitted work and comparing the branch against a base branch.',
      when: [
        'You want findings on the current working tree before committing',
        'You want to review the complete branch diff against its base'
      ],
      related: ['approve', 'worktree', 'plan'], docs: [D.ref]
    },
    {
      key: 'side', cmd: '/side', cat: 'session',
      summary: 'Starts a temporary side chat without interrupting the main chat.',
      detail: 'Opens an ephemeral detour for a focused question while leaving the main conversation in place. Use <code>/fork</code> when you want a durable branch instead.',
      when: [
        'You need a quick check that should not redirect the main task',
        'You want a temporary second line of reasoning rather than a saved fork'
      ],
      related: ['fork', 'plan', 'status'], docs: [D.ref]
    },
    {
      key: 'share', cmd: '/share', cat: 'session',
      requires: 'Local Codex thread in the macOS desktop app; sharing allowed by workspace policy',
      summary: 'Creates a read-only snapshot of the current local Codex thread.',
      detail: 'Opens the sharing dialog and prepares an uploaded snapshot. Personal accounts can create a link for anyone who has it; workspace accounts can restrict the audience to signed-in members or invited people when policy allows.',
      note: 'Review the snapshot before copying its link. OpenAI redacts detected secrets, but the snapshot can include messages, reasoning summaries, images, and diffs.',
      when: [
        'You want to share a reproducible thread without giving someone access to the live project',
        'A teammate needs the conversation and resulting diff, but not local tool or shell history'
      ],
      related: ['fork', 'status'], docs: [D.share]
    },
    {
      key: 'status', cmd: '/status', cat: 'diag',
      summary: 'Shows the chat ID, context usage, and rate limits.',
      detail: 'Displays the key runtime facts for the current chat. It is the quick diagnostic for identifying the chat and checking both context pressure and current rate-limit information.',
      related: ['compact', 'model', 'reasoning', 'mcp'], docs: [D.ref]
    },
    {
      key: 'task', cmd: '/task', cat: 'session',
      summary: 'Starts a chat without a project.',
      detail: 'Creates a new projectless chat. Use <code>/project</code> when the next chat should instead be tied to a selected project.',
      related: ['project', 'local', 'cloud'], docs: [D.ref]
    },
    {
      key: 'worktree', cmd: '/worktree', cat: 'system',
      summary: 'Runs the chat in a new Git worktree.',
      detail: 'Creates an isolated Git worktree for the chat so its file changes do not share the current working directory. This is useful for parallel or experimental work that should remain separate.',
      when: [
        'A second chat needs to edit the same repository in parallel',
        'You want filesystem isolation for an experimental branch of work'
      ],
      related: ['fork', 'local', 'project', 'review'], docs: [D.ref]
    },
    {
      key: 'custom-prompt', cmd: '/prompts:<name>', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Runs a custom prompt by its configured name.',
      detail: 'Custom prompts appear dynamically in the composer as <code>/prompts:&lt;name&gt;</code>. The concrete names depend on the prompts available in your setup, so this wildcard record is not a built-in command.',
      note: 'Enabled skills also appear in the slash list, but the documented explicit invocation syntax for a skill is <code>$skill-name</code>, not a slash command.',
      related: [], docs: [D.ref]
    }
  ]);
}());
