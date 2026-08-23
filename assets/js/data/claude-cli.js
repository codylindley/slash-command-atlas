/* Claude Code — commands available inside an interactive terminal session.
   The inventory follows Anthropic's current Commands reference. Aliases are folded
   into their canonical record; removed commands are omitted. Bundled skills and
   workflows remain slash-invocable, but are labelled so they are not mistaken for
   fixed built-in UI commands. */

(function () {
  var B = 'https://code.claude.com/docs/en/';
  var D = {
    commands:    ['Claude Code commands', B + 'commands'],
    agents:      ['Manage multiple agents with agent view', B + 'agent-view'],
    subagents:   ['Create custom subagents', B + 'sub-agents'],
    worktrees:   ['Run parallel sessions with worktrees', B + 'worktrees'],
    workflows:   ['Orchestrate subagents with dynamic workflows', B + 'workflows'],
    skills:      ['Extend Claude Code with skills', B + 'skills'],
    model:       ['Model configuration', B + 'model-config'],
    context:     ['Explore the context window', B + 'context-window'],
    review:      ['Claude Code review', B + 'code-review'],
    remote:      ['Remote Control', B + 'remote-control'],
    checkpoints: ['Checkpointing', B + 'checkpointing'],
    hooks:       ['Hooks reference', B + 'hooks'],
    schedule:    ['Run prompts on a schedule', B + 'scheduled-tasks'],
    memory:      ['How Claude remembers your project', B + 'memory'],
    auto:        ['Configure auto mode', B + 'auto-mode-config'],
    plugins:     ['Create plugins', B + 'plugins'],
    sandbox:     ['Configure the sandboxed Bash tool', B + 'sandboxing'],
    routines:    ['Automate work with routines', B + 'routines'],
    statusline:  ['Customize your status line', B + 'statusline'],
    costs:       ['Manage costs effectively', B + 'costs'],
    desktop:     ['Use Claude Code Desktop', B + 'desktop'],
    changelog:   ['Claude Code changelog', 'https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md']
  };

  window.SLASH.register('claude-cli', [

    /* ---------- session modes & persistent objectives ---------- */
    {
      key: 'plan', cmd: '/plan', args: '[DESCRIPTION]', cat: 'modes',
      summary: 'Enters plan mode, optionally starting with a task description.',
      detail: 'Plan mode lets Claude inspect the codebase and propose an approach without editing source files. Supplying a description starts that planning turn immediately.',
      when: [
        'A change spans several files or has sequencing risk',
        'You want to approve an approach before Claude starts editing'
      ],
      examples: ['/plan replace the session store without changing the public API'],
      related: ['goal', 'effort', 'code-review'],
      docs: [D.commands]
    },
    {
      key: 'goal', cmd: '/goal', args: '[CONDITION|clear]', cat: 'modes',
      summary: 'Keeps Claude working across turns until a stated condition is met.',
      detail: 'Run bare to inspect the active or most recently achieved goal. <code>clear</code>, <code>stop</code>, <code>off</code>, <code>reset</code>, <code>none</code>, and <code>cancel</code> all end an active goal early.',
      examples: [
        '/goal all unit and integration tests pass',
        '/goal clear'
      ],
      related: ['plan', 'loop', 'tasks'],
      docs: [D.commands]
    },

    /* ---------- conversations & session movement ---------- */
    {
      key: 'clear', cmd: '/clear', aliases: ['/reset', '/new'], args: '[NAME]', cat: 'session',
      summary: 'Starts a new conversation with empty context.',
      detail: 'An optional name labels the conversation you are leaving in the <code>/resume</code> picker. The previous conversation remains resumable; use <code>/compact</code> when you want space without starting over.',
      when: [
        'Starting an unrelated task in the same repository',
        'Old assumptions are actively confusing the current work'
      ],
      related: ['compact', 'resume', 'rewind'],
      docs: [D.commands, D.checkpoints]
    },
    {
      key: 'branch', cmd: '/branch', args: '[NAME]', cat: 'session',
      summary: 'Branches the conversation and switches you into the new branch.',
      detail: 'Preserves the original conversation in the resume picker while the new branch diverges from this point. This is the interactive, stay-in-the-terminal cousin of <code>/fork</code>.',
      when: [
        'Trying a second implementation strategy without losing the first',
        'Exploring a risky idea while preserving a clean return point'
      ],
      related: ['fork', 'resume', 'rewind'],
      docs: [D.commands]
    },
    {
      key: 'fork', cmd: '/fork', args: '[PROMPT]', cat: 'session',
      summary: 'Copies this conversation into a separate background session.',
      detail: 'The copy inherits the conversation and can start immediately with an optional prompt while you keep working here. Where possible Claude asks the copy to isolate edits in its own worktree. Use <code>/subtask</code> when the result should return to this conversation instead.',
      requires: 'Agent view enabled; Claude Code 2.1.212+',
      examples: ['/fork investigate the flaky Windows test and report the cause'],
      related: ['branch', 'background', 'subtask'],
      docs: [D.commands, D.agents, D.worktrees]
    },
    {
      key: 'background', cmd: '/background', aliases: ['/bg'], args: '[PROMPT]', cat: 'session',
      summary: 'Detaches this whole session so it can keep running in the background.',
      detail: 'Frees the terminal and moves the conversation into agent view. An optional prompt sends one final instruction before detaching; monitor or reattach with <code>claude agents</code>.',
      examples: ['/bg finish the test run and summarize any failures'],
      related: ['fork', 'stop', 'tasks'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'stop', cmd: '/stop', cat: 'session',
      summary: 'Stops the background session you are currently attached to.',
      detail: 'The transcript and any worktree are kept. To detach without stopping the work, use <code>/exit</code> or the left-arrow shortcut instead.',
      requires: 'Attached background session',
      related: ['background', 'exit', 'tasks'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'resume', cmd: '/resume', aliases: ['/continue'], args: '[SESSION]', cat: 'session',
      summary: 'Resumes a saved conversation by ID or name, or opens the picker.',
      detail: 'Background sessions appear with a <code>bg</code> marker. A background session that is still running must be attached from agent view or stopped before it can be resumed here.',
      related: ['clear', 'branch', 'rename'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'rename', cmd: '/rename', args: '[NAME]', cat: 'session',
      summary: 'Renames the current session, or generates a name from its history.',
      detail: 'Names appear in the prompt bar and session lists. Claude Code removes invisible control characters, caps names at 200 characters, and disambiguates a name already used by another live session.',
      examples: ['/rename oauth-token-rotation'],
      related: ['color', 'resume'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'rewind', cmd: '/rewind', aliases: ['/checkpoint', '/undo'], cat: 'session',
      summary: 'Restores code and/or conversation to an earlier checkpoint.',
      detail: 'The picker can restore both code and conversation, either one alone, or summarize messages before or after a selected point. Only changes made through Claude&rsquo;s file-editing tools are reliably tracked; Bash, external, symlinked, and most background-subagent edits are outside that guarantee.',
      note: 'Checkpointing is a session safety net, not a replacement for version control.',
      related: ['branch', 'clear', 'diff'],
      docs: [D.checkpoints, D.commands]
    },
    {
      key: 'exit', cmd: '/exit', aliases: ['/quit'], cat: 'session',
      summary: 'Exits the CLI, or detaches from an attached background session.',
      detail: 'Detaching leaves a background session running. Use <code>/stop</code> when you intend to end that work rather than simply leave its terminal view.',
      related: ['stop', 'background', 'export'],
      docs: [D.commands]
    },
    {
      key: 'desktop', cmd: '/desktop', aliases: ['/app'], cat: 'session',
      summary: 'Continues this session in the Claude Code Desktop app.',
      detail: 'Saves the conversation, opens it in the Code tab of Claude Desktop, and exits the terminal CLI.',
      requires: 'macOS or x64 Windows; Claude subscription',
      related: ['teleport', 'exit'],
      docs: [D.desktop, D.commands]
    },
    {
      key: 'color', cmd: '/color', args: '[COLOR|default]', cat: 'session',
      summary: 'Sets the prompt-bar color for this session.',
      detail: 'Choose red, blue, green, yellow, purple, orange, pink, or cyan; use <code>default</code> to reset. With no argument Claude Code picks a random color. The color also identifies the session in agent view and syncs to Remote Control.',
      related: ['rename', 'theme', 'background'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'focus', cmd: '/focus', cat: 'session',
      summary: 'Toggles a compact view of the current turn.',
      detail: 'Focus view keeps only your last prompt, a one-line tool summary with edit counts, and the final response visible. The choice persists across sessions through the <code>viewMode</code> setting.',
      requires: 'Fullscreen renderer',
      related: ['tui', 'statusline'],
      docs: [D.commands]
    },

    /* ---------- context, input & memory ---------- */
    {
      key: 'compact', cmd: '/compact', args: '[FOCUS-INSTRUCTIONS]', cat: 'context',
      summary: 'Summarizes the conversation to free context-window space.',
      detail: 'Optional instructions tell the summary what to preserve. Project instructions and memory reload from disk; details supplied only in conversation can be compressed away, so state the focus when it matters.',
      examples: ['/compact keep the migration decisions and the latest failing test output'],
      related: ['context', 'autocompact', 'clear'],
      docs: [D.context, D.commands]
    },
    {
      key: 'autocompact', cmd: '/autocompact', args: '[auto|TOKENS]', cat: 'context',
      summary: 'Sets how full the context window gets before automatic compaction.',
      detail: 'Pass a window such as <code>500k</code>, or <code>auto</code> to return to the model-tuned default. Without an argument the command opens a dialog showing the current value and saves changes to user settings.',
      requires: 'Claude Code 2.1.221+',
      examples: ['/autocompact 500k', '/autocompact auto'],
      related: ['compact', 'context'],
      docs: [D.commands, D.context]
    },
    {
      key: 'context', cmd: '/context', args: '[all]', cat: 'context',
      summary: 'Visualizes what is consuming the current context window.',
      detail: 'Shows a colored usage grid, heavy contributors, capacity warnings, and optimization suggestions. In fullscreen mode the per-item breakdown starts collapsed; pass <code>all</code> to expand it.',
      related: ['compact', 'autocompact', 'usage'],
      docs: [D.context, D.commands]
    },
    {
      key: 'btw', cmd: '/btw', args: '[QUESTION]', cat: 'context',
      summary: 'Asks a side question without adding it to the main conversation.',
      detail: 'A side answer can use the current session context but does not steer or enlarge the main transcript. Run bare to revisit recent side questions and answers.',
      examples: ['/btw which layer currently owns retry policy?'],
      related: ['context', 'compact', 'copy'],
      docs: [D.commands, D.desktop]
    },
    {
      key: 'add-dir', cmd: '/add-dir', args: '<PATH>', cat: 'context',
      summary: 'Adds another working directory for this session to access.',
      detail: 'Grants file access for the current session and fires <code>DirectoryAdded</code> hooks. Most <code>.claude/</code> configuration is not discovered from an added directory; skills are the notable exception.',
      examples: ['/add-dir ../shared-schema'],
      related: ['cd', 'permissions', 'skills'],
      docs: [D.commands, D.hooks]
    },
    {
      key: 'cd', cmd: '/cd', args: '<PATH>', cat: 'context',
      summary: 'Moves this session to another working directory without losing context.',
      detail: 'Keeps the conversation and prompt cache, asks for workspace trust when needed, and makes the moved session discoverable by later resume commands from the new directory. <code>Cd</code> permission rules can restrict targets.',
      requires: 'Claude Code 2.1.169+',
      examples: ['/cd ../service-api'],
      related: ['add-dir', 'permissions', 'resume'],
      docs: [D.commands]
    },
    {
      key: 'memory', cmd: '/memory', cat: 'context',
      summary: 'Manages project instructions and automatic memory.',
      detail: 'Opens the memory interface to edit <code>CLAUDE.md</code> files, enable or disable auto memory, and inspect the entries Claude has accumulated.',
      when: [
        'Claude keeps missing a stable project convention',
        'You want to inspect or prune what auto memory has retained'
      ],
      related: ['init', 'skills', 'context'],
      docs: [D.memory, D.commands]
    },
    {
      key: 'copy', cmd: '/copy', args: '[N]', cat: 'context',
      summary: 'Copies a recent assistant response or one of its code blocks.',
      detail: 'Pass <code>N</code> to select the Nth-latest answer. When the response contains code blocks, an interactive picker lets you copy one block or the whole answer; press <kbd>w</kbd> to write the selection to a file.',
      examples: ['/copy 2'],
      related: ['export', 'btw'],
      docs: [D.commands]
    },
    {
      key: 'recap', cmd: '/recap', cat: 'context',
      summary: 'Generates a one-line summary of the current session.',
      detail: 'Useful for quickly reorienting yourself or naming what the session has become without compacting or changing its context.',
      related: ['rename', 'context', 'export'],
      docs: [D.commands]
    },

    /* ---------- delegation, agents & parallel work ---------- */
    {
      key: 'agents', cmd: '/agents', cat: 'delegate',
      summary: 'Explains how to create or manage custom subagents.',
      detail: 'Current builds direct you to ask Claude to create an agent or edit <code>.claude/agents/</code> or <code>~/.claude/agents/</code> directly. Builds through 2.1.197 opened an interactive agent manager instead.',
      related: ['list-agents', 'subtask', 'skills'],
      docs: [D.subagents, D.commands]
    },
    {
      key: 'list-agents', cmd: '/list-agents', aliases: ['/peers'], cat: 'delegate',
      summary: 'Lists subagents, teammates, and sessions this session can message.',
      detail: 'Prints the addressable name for each peer. The command only exists when cross-session messaging is enabled; recent builds also show this session&rsquo;s own name.',
      requires: 'Cross-session messaging; Claude Code 2.1.224+',
      related: ['agents', 'tasks', 'subtask'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'subtask', cmd: '/subtask', args: '<TASK>', cat: 'delegate',
      summary: 'Spawns a forked subagent whose result returns to this conversation.',
      detail: 'The subagent inherits the full conversation and works in the background while you continue. Unlike <code>/fork</code>, it reports its result back here instead of becoming an independent session.',
      requires: 'Agent view enabled; Claude Code 2.1.212+',
      examples: ['/subtask trace where the legacy header is still emitted'],
      related: ['fork', 'tasks', 'agents'],
      docs: [D.subagents, D.commands]
    },
    {
      key: 'tasks', cmd: '/tasks', aliases: ['/bashes'], cat: 'delegate',
      summary: 'Lists and manages background work inside the current session.',
      detail: 'Includes running and completed subagents as well as background shell commands. This is session-local work; use agent view for whole background conversations.',
      related: ['subtask', 'background', 'workflows'],
      docs: [D.commands, D.agents]
    },
    {
      key: 'batch', cmd: '/batch', args: '<INSTRUCTION>', cat: 'delegate', flags: ['skill'],
      summary: 'Decomposes a large codebase change into parallel worktree tasks.',
      detail: 'Researches the repository, proposes 5&ndash;30 independent units, then after approval launches one background subagent per unit in an isolated worktree. Each unit implements, tests, and opens a pull request.',
      requires: 'A Git repository',
      examples: ['/batch migrate src/ from Solid to React'],
      related: ['subtask', 'workflows', 'code-review'],
      docs: [D.skills, D.worktrees, D.commands]
    },
    {
      key: 'deep-research', cmd: '/deep-research', args: '<QUESTION>', cat: 'delegate', flags: ['workflow'],
      summary: 'Fans a research question out across web-searching agents.',
      detail: 'A bundled dynamic workflow that fetches and cross-checks sources, then synthesizes a cited report. It runs only when you invoke it.',
      examples: ['/deep-research compare current browser isolation models for local coding agents'],
      related: ['workflows', 'subtask', 'artifacts'],
      docs: [D.workflows, D.commands]
    },
    {
      key: 'workflows', cmd: '/workflows', cat: 'delegate',
      summary: 'Opens the progress view for dynamic workflows.',
      detail: 'Watch running and completed workflows, pause or resume work, and save useful workflow definitions for reuse.',
      related: ['deep-research', 'tasks', 'batch'],
      docs: [D.workflows, D.commands]
    },
    {
      key: 'artifacts', cmd: '/artifacts', cat: 'delegate',
      summary: 'Browses artifacts you own or that others shared with you.',
      detail: 'Attach an artifact to the session, open it in a browser, or copy its link from the picker.',
      requires: 'Artifact availability; Claude Code 2.1.208+',
      related: ['deep-research', 'export'],
      docs: [D.commands]
    },
    {
      key: 'team-onboarding', cmd: '/team-onboarding', cat: 'delegate',
      summary: 'Builds a teammate onboarding guide from 30 days of local usage.',
      detail: 'Analyzes sessions, commands, and MCP usage, then produces a guide a teammate can paste as a first prompt. Eligible Claude subscriptions also receive a shareable Claude Code link.',
      requires: 'Pro, Max, Team, or Enterprise subscription',
      related: ['insights', 'memory', 'export'],
      docs: [D.commands]
    },

    /* ---------- review, verification & running software ---------- */
    {
      key: 'code-review', cmd: '/code-review', aliases: ['/review', '/ultrareview'],
      args: '[low|medium|high|xhigh|max|ultra] [--fix] [--comment] [PR|BRANCH|PATH]',
      cat: 'review', flags: ['skill'],
      summary: 'Reviews a diff or target for correctness bugs and cleanup opportunities.',
      detail: 'Target the current diff, a pull request number, branch, or path. <code>--fix</code> applies findings; <code>--comment</code> posts inline GitHub comments. <code>ultra</code> runs a deep cloud review, and the legacy <code>/ultrareview</code> spelling remains available for that path.',
      subs: [
        ['low … max', 'Choose local review effort'],
        ['ultra', 'Run the deep cloud review'],
        ['--fix', 'Apply accepted findings'],
        ['--comment', 'Post findings as inline PR comments']
      ],
      examples: [
        '/code-review high --fix src/auth',
        '/review medium 1234',
        '/code-review ultra --post 1234'
      ],
      related: ['security-review', 'simplify', 'diff'],
      docs: [D.review, D.commands]
    },
    {
      key: 'security-review', cmd: '/security-review', cat: 'review',
      summary: 'Checks the current branch changes for security vulnerabilities.',
      detail: 'Reviews the diff against the origin default branch for risks such as injection, authorization failures, and data exposure.',
      requires: 'Git repository with an origin remote',
      related: ['code-review', 'simplify', 'diff'],
      docs: [D.commands]
    },
    {
      key: 'simplify', cmd: '/simplify', args: '[TARGET]', cat: 'review', flags: ['skill'],
      summary: 'Finds cleanup opportunities in changed code and applies them.',
      detail: 'Four agents inspect reuse, clarity, efficiency, and abstraction level in parallel. Current versions deliberately do not look for correctness bugs; pair it with <code>/code-review</code> for that.',
      when: [
        'A feature works but the implementation feels more complicated than necessary',
        'You want a focused cleanup pass before review'
      ],
      related: ['code-review', 'security-review', 'verify'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'diff', cmd: '/diff', cat: 'review',
      summary: 'Opens an interactive viewer for Git and per-turn diffs.',
      detail: 'Move left and right between the working-tree diff and individual Claude turns, then browse changed files. The viewer reads raw Git blobs, so configured diff drivers and <code>textconv</code> filters do not rewrite what you see.',
      requires: 'A Git repository',
      related: ['code-review', 'rewind', 'export'],
      docs: [D.commands]
    },
    {
      key: 'run', cmd: '/run', cat: 'review', flags: ['skill'],
      summary: 'Launches and drives the project so you can see a change working.',
      detail: 'Verifies behavior in the running application instead of stopping at tests or type checks. A project-specific generated skill can teach it how to build, launch, and interact with your app.',
      related: ['verify', 'run-skill-generator', 'simplify'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'verify', cmd: '/verify', cat: 'review', flags: ['skill'],
      summary: 'Builds, runs, and observes the app to confirm a change works.',
      detail: 'A manual-only bundled skill for experiential verification. It is useful when passing tests cannot prove the UI, server, or end-to-end behavior is actually correct.',
      related: ['run', 'run-skill-generator', 'code-review'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'run-skill-generator', cmd: '/run-skill-generator', cat: 'review', flags: ['skill'],
      summary: 'Teaches /run and /verify how to operate this project.',
      detail: 'Creates a project skill describing the clean-environment setup, build, launch, and interaction steps needed to exercise the application.',
      related: ['run', 'verify', 'skills'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'debug', cmd: '/debug', args: '[DESCRIPTION]', cat: 'diag', flags: ['skill'],
      summary: 'Enables session debug logging and investigates the resulting log.',
      detail: 'If logging was not already enabled at launch, it starts at invocation time. An optional issue description focuses the diagnosis on the behavior you are seeing.',
      examples: ['/debug MCP tools disappear after compaction'],
      related: ['doctor', 'heapdump', 'bug'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'doctor', cmd: '/doctor', aliases: ['/checkup'], cat: 'diag', flags: ['skill'],
      summary: 'Diagnoses installation, configuration, and context-cost problems.',
      detail: 'Checks install health, settings, updates, slow hooks, and unused extensions, then can propose fixes. It also finds bloated or duplicated <code>CLAUDE.md</code> guidance and reports changes before asking to apply them.',
      related: ['debug', 'status', 'fewer-permission-prompts'],
      docs: [D.skills, D.commands]
    },

    /* ---------- pull requests & cloud handoff ---------- */
    {
      key: 'autofix-pr', cmd: '/autofix-pr', args: '[PROMPT]', cat: 'pr',
      summary: 'Starts a cloud session that watches this branch’s pull request.',
      detail: 'The cloud agent reacts to CI failures and review comments and pushes clear fixes. By default it handles every failure and comment; an optional prompt narrows its remit.',
      requires: 'gh CLI, open PR, and Claude Code on the web',
      examples: ['/autofix-pr only fix lint and type errors'],
      related: ['code-review', 'teleport', 'web-setup'],
      docs: [D.commands]
    },
    {
      key: 'teleport', cmd: '/teleport', aliases: ['/tp'], cat: 'session',
      summary: 'Pulls a Claude Code on the web session into this terminal.',
      detail: 'Opens a cloud-session picker, fetches the session branch, and loads a local copy of the conversation. The local and cloud copies diverge after teleporting.',
      requires: 'Claude subscription and matching repository checkout',
      related: ['remote-control', 'web-setup', 'resume'],
      docs: [D.commands]
    },
    {
      key: 'remote-control', cmd: '/remote-control', aliases: ['/rc'], cat: 'session',
      summary: 'Makes this local session steerable from claude.ai or mobile.',
      detail: 'Remote Control exposes the running terminal session without moving its execution off your machine. It requires Claude subscription sign-in and organization policy support.',
      requires: 'Claude subscription; Remote Control allowed',
      related: ['teleport', 'background', 'color'],
      docs: [D.remote, D.commands]
    },
    {
      key: 'remote-env', cmd: '/remote-env', cat: 'config',
      summary: 'Chooses the default environment used by cloud agents.',
      detail: 'Sets which saved cloud environment Claude uses when it launches remote work.',
      requires: 'Claude Code cloud environments',
      related: ['autofix-pr', 'teleport', 'web-setup'],
      docs: [D.commands]
    },
    {
      key: 'web-setup', cmd: '/web-setup', cat: 'config',
      summary: 'Connects GitHub to Claude Code on the web using local gh credentials.',
      detail: 'Synchronizes your authenticated GitHub CLI identity so cloud sessions can clone repositories and push branches. <code>/schedule</code> offers this setup automatically when needed.',
      requires: 'Authenticated gh CLI; cloud sessions allowed',
      related: ['autofix-pr', 'schedule', 'teleport'],
      docs: [D.commands]
    },

    /* ---------- models, permissions & execution environment ---------- */
    {
      key: 'model', cmd: '/model', args: '[MODEL]', cat: 'config',
      summary: 'Switches models and saves the choice as the default for new sessions.',
      detail: 'Without an argument, opens the model picker; press <kbd>s</kbd> to make a session-only choice. Models that support effort expose it with the left and right arrows.',
      examples: ['/model sonnet'],
      related: ['effort', 'fast', 'advisor'],
      docs: [D.model, D.commands]
    },
    {
      key: 'effort', cmd: '/effort', args: '[LEVEL|auto|status]', cat: 'config',
      summary: 'Sets or reports the model’s reasoning effort.',
      detail: 'Supports levels from <code>low</code> through <code>xhigh</code>, plus session-only <code>max</code> and <code>ultracode</code> where available. <code>auto</code> returns to the model default; bare invocation opens a slider.',
      examples: ['/effort high', '/effort status'],
      related: ['model', 'fast', 'advisor'],
      docs: [D.model, D.commands]
    },
    {
      key: 'fast', cmd: '/fast', args: '[on|off]', cat: 'config',
      summary: 'Toggles fast mode for lower-latency model responses.',
      detail: 'Switches supported sessions between ordinary and fast serving. Non-interactive availability is more limited than the in-session command.',
      requires: 'Fast mode eligibility; Claude Code 2.1.205+',
      related: ['model', 'effort'],
      docs: [D.model, D.commands]
    },
    {
      key: 'advisor', cmd: '/advisor', args: '[MODEL|off]', cat: 'config',
      summary: 'Lets Claude consult a second model for guidance during a task.',
      detail: 'Choose <code>fable</code>, <code>opus</code>, <code>sonnet</code>, or a full model ID, or pass <code>off</code>. Without an argument the command opens a picker.',
      related: ['model', 'effort', 'plan'],
      docs: [D.commands]
    },
    {
      key: 'config', cmd: '/config', aliases: ['/settings'], args: '[KEY=VALUE ...]', cat: 'config',
      summary: 'Opens settings or changes one or more settings directly.',
      detail: 'The interactive view covers theme, model, output style, editor behavior, and other preferences. Direct <code>key=value</code> assignments avoid the picker; <code>/config --help</code> lists supported keys and values.',
      examples: ['/config theme=dark thinking=false'],
      related: ['theme', 'model', 'permissions'],
      docs: [D.commands]
    },
    {
      key: 'permissions', cmd: '/permissions', aliases: ['/allowed-tools'], cat: 'perms',
      summary: 'Manages allow, ask, and deny rules for tool use.',
      detail: 'The dialog shows rules by scope, lets you add or remove patterns and working directories, and surfaces recent denials from auto mode. Changes made while Claude is responding apply to its next tool call.',
      related: ['sandbox', 'fewer-permission-prompts', 'add-dir'],
      docs: [D.commands, D.auto]
    },
    {
      key: 'fewer-permission-prompts', cmd: '/fewer-permission-prompts', cat: 'perms', flags: ['skill'],
      summary: 'Builds a conservative allowlist from repeated read-only tool calls.',
      detail: 'Scans transcripts for common Bash and MCP calls, prioritizes safe read-only patterns, and proposes additions to project <code>.claude/settings.json</code>.',
      note: 'Review the proposed rules before accepting them; repetition does not make a command harmless.',
      related: ['permissions', 'doctor', 'sandbox'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'sandbox', cmd: '/sandbox', cat: 'perms',
      summary: 'Toggles sandbox mode for shell execution.',
      detail: 'Uses supported operating-system isolation to constrain Bash filesystem and network access while reducing repeated permission prompts.',
      requires: 'Supported platform',
      related: ['permissions', 'fewer-permission-prompts'],
      docs: [D.sandbox, D.commands]
    },
    {
      key: 'auto-mode-setup', cmd: '/auto-mode-setup', cat: 'perms',
      summary: 'Drafts an auto-mode environment policy from this project and recent work.',
      detail: 'Proposes <code>autoMode.environment</code> entries, shows the draft for review, and saves accepted changes to user settings.',
      requires: 'Pro, Max, or Team; Claude Code 2.1.228+',
      related: ['permissions', 'sandbox', 'config'],
      docs: [D.auto, D.commands]
    },

    /* ---------- extensions, integrations & project setup ---------- */
    {
      key: 'init', cmd: '/init', cat: 'config',
      summary: 'Initializes the repository with a CLAUDE.md project guide.',
      detail: 'Generates standing project context for future sessions. With <code>CLAUDE_CODE_NEW_INIT=1</code>, an interactive flow also covers skills, hooks, and personal memory; supported configuration from Codex or Gemini can be carried over through <code>/import</code>.',
      related: ['memory', 'import', 'skills'],
      docs: [D.memory, D.commands]
    },
    {
      key: 'import', cmd: '/import', args: '[codex|gemini] [--dry-run] [--yes]', cat: 'config',
      summary: 'Imports configuration from OpenAI Codex or Gemini CLI.',
      detail: 'Brings over instruction files, MCP servers, commands, subagents, and skills. <code>--dry-run</code> previews changes and <code>--yes</code> skips the interactive picker.',
      requires: 'First-party Anthropic connection; Claude Code 2.1.213+',
      examples: ['/import codex --dry-run'],
      related: ['init', 'mcp', 'skills'],
      docs: [D.commands]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'author',
      summary: 'Lists skills and controls their visibility to you and Claude.',
      detail: 'Filter by name, press <kbd>t</kbd> to sort by token count, and use <kbd>Space</kbd> to cycle whether a skill appears to the model and in the slash menu before saving.',
      related: ['reload-skills', 'plugin', 'custom-skill'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'custom-skill', cmd: '/<skill-name>', args: '[ARGUMENTS]', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Invokes a user, project, or plugin skill by its discovered name.',
      detail: 'Skills in <code>~/.claude/skills/</code> and <code>.claude/skills/</code> become commands. Legacy Markdown files in <code>.claude/commands/</code> still work, and plugins use namespaced commands. Current builds can chain as many as six skills at the start of one prompt. These are dynamic, so the Atlas does not pretend to enumerate your installation.',
      related: ['skills', 'reload-skills', 'plugin', 'mcp-prompt'],
      docs: [D.skills]
    },
    {
      key: 'mcp-prompt', cmd: '/mcp__<server>__<prompt>', args: '[ARGUMENTS]', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Invokes a prompt dynamically exposed by a connected MCP server.',
      detail: 'Claude Code discovers MCP prompts at runtime and namespaces them with the server name. The exact commands therefore depend on your active connections and cannot be enumerated as a fixed built-in set.',
      related: ['mcp', 'custom-skill'],
      docs: [D.commands]
    },
    {
      key: 'reload-skills', cmd: '/reload-skills', cat: 'author',
      summary: 'Re-scans skill and legacy command directories without restarting.',
      detail: 'Reports the new total plus how many skills were added or removed, making newly created or edited skills available in the running session.',
      related: ['skills', 'custom-skill', 'reload-plugins'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'plugin', cmd: '/plugin', args: '[SUBCOMMAND]', cat: 'config',
      summary: 'Browses and manages Claude Code plugins.',
      detail: 'Run bare for the plugin menu or use direct subcommands such as <code>list</code>, <code>install</code>, <code>enable</code>, and <code>disable</code>. The install summary tells you whether activation was immediate or needs a reload.',
      subs: [
        ['list', 'List installed plugins'],
        ['install', 'Install from a configured marketplace'],
        ['enable / disable', 'Change plugin activation']
      ],
      related: ['reload-plugins', 'skills', 'mcp'],
      docs: [D.plugins, D.commands]
    },
    {
      key: 'reload-plugins', cmd: '/reload-plugins', args: '[--force]', cat: 'config',
      summary: 'Reloads active plugins and reports component or load errors.',
      detail: 'Applies plugin changes without restarting. If changed MCP tools would invalidate the prompt cache, the command warns and skips that reload unless you pass <code>--force</code>.',
      related: ['plugin', 'reload-skills', 'mcp'],
      docs: [D.plugins, D.commands]
    },
    {
      key: 'mcp', cmd: '/mcp', args: '[reconnect SERVER|enable|disable [SERVER|all]]', cat: 'config',
      summary: 'Manages MCP connections, state, and OAuth authentication.',
      detail: 'Run bare for the interactive server list. Direct subcommands reconnect a server or enable and disable one or all servers without entering the dialog.',
      subs: [
        ['reconnect SERVER', 'Reconnect a disconnected server'],
        ['enable [SERVER|all]', 'Enable one or all configured servers'],
        ['disable [SERVER|all]', 'Disable one or all configured servers']
      ],
      related: ['plugin', 'hooks', 'permissions'],
      docs: [D.commands]
    },
    {
      key: 'hooks', cmd: '/hooks', cat: 'config',
      summary: 'Shows configured lifecycle hooks and their tool-event matchers.',
      detail: 'Use it to inspect what runs before and after tool calls, prompts, compaction, session changes, and other Claude Code events.',
      related: ['plugin', 'mcp', 'debug'],
      docs: [D.hooks, D.commands]
    },
    {
      key: 'ide', cmd: '/ide', cat: 'config',
      summary: 'Manages IDE integrations and shows their connection status.',
      detail: 'Connects the terminal session to supported editors so Claude can use editor context and integration features.',
      related: ['terminal-setup', 'keybindings'],
      docs: [D.commands]
    },
    {
      key: 'keybindings', cmd: '/keybindings', cat: 'config',
      summary: 'Opens or creates the Claude Code keybindings configuration.',
      detail: 'Use the generated configuration file to remap terminal actions without confusing keyboard shortcuts with slash commands.',
      related: ['terminal-setup', 'tui'],
      docs: [D.commands]
    },
    {
      key: 'terminal-setup', cmd: '/terminal-setup', cat: 'config',
      summary: 'Configures terminal keybindings such as Shift+Enter.',
      detail: 'Appears only in terminals that need extra setup, including VS Code, Cursor, Devin Desktop, Alacritty, and Zed.',
      requires: 'Terminal requiring keybinding setup',
      related: ['keybindings', 'ide'],
      docs: [D.commands]
    },
    {
      key: 'chrome', cmd: '/chrome', cat: 'config',
      summary: 'Configures Claude in Chrome integration settings.',
      related: ['mcp', 'ide'],
      docs: [D.commands]
    },
    {
      key: 'statusline', cmd: '/statusline', cat: 'config',
      summary: 'Configures the information shown in the terminal status line.',
      detail: 'Describe the status line you want, or run bare to derive one from the current shell prompt.',
      examples: ['/statusline show model, context percent, branch, and elapsed time'],
      related: ['config', 'theme', 'status'],
      docs: [D.statusline, D.commands]
    },
    {
      key: 'theme', cmd: '/theme', cat: 'config',
      summary: 'Changes the terminal color theme.',
      detail: 'Includes automatic light/dark matching, colorblind-accessible variants, ANSI-palette themes, and custom themes supplied from your user directory or plugins.',
      related: ['color', 'tui', 'config'],
      docs: [D.commands]
    },
    {
      key: 'tui', cmd: '/tui', args: '[default|fullscreen]', cat: 'config',
      summary: 'Selects the terminal renderer and relaunches the current conversation.',
      detail: '<code>fullscreen</code> uses the alternate-screen flicker-free UI; <code>default</code> returns to ordinary terminal rendering. Run bare to print the active renderer.',
      related: ['focus', 'scroll-speed', 'theme'],
      docs: [D.commands]
    },
    {
      key: 'scroll-speed', cmd: '/scroll-speed', cat: 'config',
      summary: 'Adjusts mouse-wheel speed with an interactive preview ruler.',
      requires: 'Fullscreen renderer; not JetBrains terminal',
      related: ['tui', 'focus'],
      docs: [D.commands]
    },
    {
      key: 'voice', cmd: '/voice', args: '[hold|tap|off]', cat: 'config',
      summary: 'Enables, configures, or disables voice dictation.',
      detail: 'Choose push-and-hold or tap-to-toggle dictation behavior, or turn it off.',
      requires: 'Claude.ai account',
      related: ['keybindings', 'btw'],
      docs: [D.commands]
    },

    /* ---------- automation ---------- */
    {
      key: 'loop', cmd: '/loop', aliases: ['/proactive'], args: '[INTERVAL] [PROMPT]', cat: 'system', flags: ['skill'],
      summary: 'Repeats a prompt while the session remains open.',
      detail: 'Specify an interval such as <code>5m</code>, or let Claude self-pace where supported. With no prompt it runs an autonomous maintenance check, or the instructions in <code>.claude/loop.md</code> when present.',
      examples: ['/loop 5m check whether the deploy finished and report only changes'],
      related: ['schedule', 'goal', 'tasks'],
      docs: [D.schedule, D.skills, D.commands]
    },
    {
      key: 'schedule', cmd: '/schedule', aliases: ['/routines'], args: '[DESCRIPTION]', cat: 'system',
      summary: 'Creates, updates, lists, or runs cloud routines conversationally.',
      detail: 'Describe the recurring automation you want and Claude walks through schedule, environment, and task setup. You can also ask about recent routine runs.',
      requires: 'Claude cloud routines',
      examples: ['/schedule review dependency updates every Monday at 9am'],
      related: ['loop', 'web-setup', 'remote-env'],
      docs: [D.routines, D.commands]
    },

    /* ---------- diagnostics, account & product ---------- */
    {
      key: 'status', cmd: '/status', cat: 'diag',
      summary: 'Opens Settings on version, model, account, and connectivity status.',
      detail: 'Also identifies whether the session is ordinary interactive work or an attached or unattended background job. The panel can open while Claude is responding.',
      related: ['usage', 'doctor', 'model'],
      docs: [D.commands]
    },
    {
      key: 'usage', cmd: '/usage', aliases: ['/cost', '/stats'], cat: 'diag',
      summary: 'Shows session cost, plan limits, and activity statistics.',
      detail: 'Eligible subscription plans also break usage down by skill, subagent, plugin, and MCP server. The <code>/stats</code> alias opens directly on the Stats tab.',
      related: ['usage-credits', 'context', 'status'],
      docs: [D.costs, D.commands]
    },
    {
      key: 'usage-credits', cmd: '/usage-credits', cat: 'diag',
      summary: 'Configures usage credits or requests them from an administrator.',
      detail: 'Opens billing settings for users with access. Team and Enterprise members without billing access can confirm an administrator notification instead; headless sessions print the URL when a browser cannot open.',
      related: ['usage', 'upgrade'],
      docs: [D.costs, D.commands]
    },
    {
      key: 'insights', cmd: '/insights', cat: 'diag',
      summary: 'Generates an HTML report about recent local Claude Code usage.',
      detail: 'Analyzes projects, interaction patterns, friction points, and underused features from sessions on this machine.',
      requires: 'Local session',
      related: ['team-onboarding', 'usage', 'doctor'],
      docs: [D.commands]
    },
    {
      key: 'export', cmd: '/export', args: '[FILENAME]', cat: 'diag',
      summary: 'Exports the current conversation as plain text.',
      detail: 'With a filename it writes directly; without one it opens a dialog to copy the transcript or save it to a file.',
      examples: ['/export auth-investigation.txt'],
      related: ['copy', 'bug', 'recap'],
      docs: [D.commands]
    },
    {
      key: 'bug', cmd: '/bug', aliases: ['/share'], args: '[REPORT]', cat: 'diag',
      summary: 'Reports a bug or shares a conversation with explicit consent.',
      detail: 'A dialog lets you choose how much session history to include and confirm before sending. First-party Anthropic connections submit directly; third-party or unauthenticated setups write a local feedback bundle you can forward.',
      note: 'Review the selected session history for secrets before confirming.',
      related: ['feedback', 'debug', 'export'],
      docs: [D.commands]
    },
    {
      key: 'feedback', cmd: '/feedback', args: '[REPORT]', cat: 'diag',
      summary: 'Sends product feedback through the same consent flow as /bug.',
      detail: 'Opens immediately when supported, even during a response, and applies the same first-party submission versus local-bundle rules as <code>/bug</code>.',
      related: ['bug', 'release-notes'],
      docs: [D.commands]
    },
    {
      key: 'heapdump', cmd: '/heapdump', cat: 'diag', flags: ['hidden'],
      summary: 'Writes a heap snapshot and memory diagnostics for troubleshooting.',
      detail: 'The diagnostics JSON is intended for bug reports. The full <code>.heapsnapshot</code> contains conversation content and credentials and must not be shared.',
      note: 'Hidden from the command menu; type the complete command. Never upload the .heapsnapshot.',
      related: ['debug', 'doctor', 'bug'],
      docs: [D.commands]
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Shows help and the commands available in this session.',
      detail: 'Because availability depends on version, platform, plan, provider, and installed extensions, this is the definitive local inventory.',
      related: ['release-notes', 'status'],
      docs: [D.commands]
    },
    {
      key: 'release-notes', cmd: '/release-notes', cat: 'diag',
      summary: 'Browses the Claude Code changelog by version.',
      detail: 'Release notes appear in the transcript but are not added to the conversation Claude sees.',
      related: ['status', 'help', 'upgrade'],
      docs: [D.commands, D.changelog]
    },
    {
      key: 'powerup', cmd: '/powerup', cat: 'diag',
      summary: 'Teaches Claude Code features through short interactive demos.',
      related: ['help', 'release-notes'],
      docs: [D.commands]
    },
    {
      key: 'login', cmd: '/login', cat: 'system',
      summary: 'Signs in to an Anthropic or Claude account.',
      related: ['logout', 'status', 'teleport'],
      docs: [D.commands]
    },
    {
      key: 'logout', cmd: '/logout', cat: 'system',
      summary: 'Signs out of the current Anthropic account.',
      related: ['login', 'status'],
      docs: [D.commands]
    },
    {
      key: 'upgrade', cmd: '/upgrade', cat: 'system',
      summary: 'Opens the page for moving to a higher Claude plan.',
      detail: 'When a browser cannot open, Claude Code shows a sign-in prompt instead. The command is hidden on plans where upgrading here does not apply.',
      related: ['usage-credits', 'usage', 'passes'],
      docs: [D.commands]
    },
    {
      key: 'privacy-settings', cmd: '/privacy-settings', cat: 'system',
      summary: 'Views and updates Claude Code privacy settings.',
      requires: 'Pro or Max subscription',
      related: ['bug', 'status'],
      docs: [D.commands]
    },
    {
      key: 'passes', cmd: '/passes', cat: 'system',
      summary: 'Shares an eligible free week of Claude Code with friends.',
      requires: 'Eligible account',
      related: ['upgrade'],
      docs: [D.commands]
    },
    {
      key: 'mobile', cmd: '/mobile', aliases: ['/ios', '/android'], cat: 'system',
      summary: 'Shows a QR code for downloading the Claude mobile app.',
      related: ['remote-control', 'desktop'],
      docs: [D.commands]
    },
    {
      key: 'radio', cmd: '/radio', cat: 'system',
      summary: 'Opens Claude FM lo-fi radio, or prints its stream URL.',
      requires: 'First-party Anthropic connection',
      related: ['powerup'],
      docs: [D.commands]
    },
    {
      key: 'stickers', cmd: '/stickers', cat: 'system',
      summary: 'Opens the flow for ordering Claude Code stickers.',
      related: ['passes'],
      docs: [D.commands]
    },
    {
      key: 'install-github-app', cmd: '/install-github-app', cat: 'system',
      summary: 'Installs the Claude GitHub App for a repository.',
      detail: 'Walks through repository selection and optionally sets up GitHub Actions workflows and secrets.',
      requires: 'GitHub repository and interactive terminal',
      related: ['web-setup', 'autofix-pr', 'install-slack-app'],
      docs: [D.commands]
    },
    {
      key: 'install-slack-app', cmd: '/install-slack-app', cat: 'system',
      summary: 'Installs the Claude Slack app through browser OAuth.',
      requires: 'Browser access',
      related: ['install-github-app'],
      docs: [D.commands]
    },
    {
      key: 'claude-api', cmd: '/claude-api',
      args: '[migrate|upgrade|managed-agents-onboard|prompt-audit]', cat: 'author', flags: ['skill'],
      summary: 'Loads current Claude API guidance and runs migration workflows.',
      detail: 'Activates automatically for Anthropic SDK imports, or invoke a focused workflow: update model usage, upgrade the SDK, onboard a Managed Agent, or audit prompts for instructions written for older models.',
      subs: [
        ['migrate', 'Update Claude API code to a newer model'],
        ['upgrade', 'Upgrade a supported Anthropic SDK major version'],
        ['managed-agents-onboard', 'Create and configure a Managed Agent'],
        ['prompt-audit', 'Find model-era assumptions in prompts and tool descriptions']
      ],
      related: ['skills', 'init', 'import'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'dataviz', cmd: '/dataviz', args: '[REQUEST]', cat: 'author', flags: ['skill'],
      summary: 'Applies structured design guidance to charts and dashboards.',
      detail: 'Chooses an appropriate chart form, assigns color by semantic role, validates palette contrast and colorblind safety, and applies interaction and accessibility rules.',
      requires: 'Claude Code 2.1.198+',
      examples: ['/dataviz redesign the retention dashboard for weekly cohorts'],
      related: ['skills', 'artifacts'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'design-login', cmd: '/design-login', cat: 'config',
      summary: 'Authorizes Claude Design access for design-system synchronization.',
      requires: 'Claude Design availability',
      related: ['design-sync'],
      docs: [D.commands]
    },
    {
      key: 'design-sync', cmd: '/design-sync', args: '[NAME-HINT]', cat: 'config', flags: ['skill'],
      summary: 'Uploads a React design system so Claude Design uses real components.',
      detail: 'Verifies and converts the repository&rsquo;s component library before synchronization. A first upload can take hours for a large design system.',
      requires: 'Anthropic API connection and Claude Design access',
      related: ['design-login', 'dataviz'],
      docs: [D.skills, D.commands]
    },
    {
      key: 'setup-bedrock', cmd: '/setup-bedrock', cat: 'config', flags: ['hidden'],
      summary: 'Configures Amazon Bedrock authentication, region, and model pins.',
      detail: 'An interactive wizard hidden from autocomplete until Bedrock mode is enabled; type the full command to invoke it.',
      requires: 'CLAUDE_CODE_USE_BEDROCK=1',
      related: ['setup-vertex', 'model'],
      docs: [D.commands]
    },
    {
      key: 'setup-vertex', cmd: '/setup-vertex', cat: 'config', flags: ['hidden'],
      summary: 'Configures Google Cloud authentication, project, region, and model pins.',
      detail: 'An interactive wizard hidden from autocomplete until the Google Cloud provider mode is enabled; type the full command to invoke it.',
      requires: 'CLAUDE_CODE_USE_VERTEX=1',
      related: ['setup-bedrock', 'model'],
      docs: [D.commands]
    }
  ]);
})();
