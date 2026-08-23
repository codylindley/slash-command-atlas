/* GitHub Copilot app (desktop) — slash commands.
   Command names, arguments, gating conditions and one-line summaries follow the official
   reference. Longer explanations, use cases and examples are editorial. */

(function () {
  var D = {
    modes:    ['Choosing a session mode', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#choosing-a-session-mode'],
    sessions: ['Working with agent sessions', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions'],
    remote:   ['About remote control', 'https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-control'],
    duckC:    ['About the rubber duck agent', 'https://docs.github.com/en/copilot/concepts/agents/copilot-cli/rubber-duck'],
    duckH:    ['Using the rubber duck agent', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#using-the-rubber-duck-agent'],
    sec:      ['Using /security-review in app sessions', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#using-security-review-in-app-sessions'],
    chronA:   ['Using /chronicle with app sessions', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions#using-chronicle-with-app-sessions'],
    chronC:   ['Chronicle (Copilot CLI)', 'https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle'],
    skills:   ['Built-in skills for the Copilot app', 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/built-in-skills'],
    agents:   ['About custom agents', 'https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents'],
    agentSk:  ['About agent skills', 'https://docs.github.com/en/copilot/concepts/agents/about-agent-skills'],
    mcp:      ['MCP and Agent Finder', 'https://docs.github.com/en/copilot/concepts/context/mcp#agent-finder'],
    canvas:   ['Working with canvas extensions', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-canvas-extensions'],
    repoCfg:  ['Repository configuration', 'https://docs.github.com/en/copilot/reference/github-copilot-app-reference/repository-configuration'],
    stacked:  ['About stacked pull requests', 'https://docs.github.com/en/pull-requests/get-started/about-stacked-prs'],
    prs:      ['Managing issues and pull requests', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests'],
    auto:     ['Auto model selection', 'https://docs.github.com/en/copilot/concepts/models/auto-model-selection'],
    byok:     ['Use your own model provider', 'https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models']
  };

  window.SLASH.register('app', [

    /* ---------- session modes ---------- */
    {
      key: 'plan', cmd: '/plan', args: '[PROMPT]', cat: 'modes',
      summary: 'Switches the session into Plan mode, optionally seeded with a prompt.',
      detail: 'Plan mode is the middle setting on the autonomy dial. Copilot investigates the codebase and writes out an approach &mdash; which files it intends to touch, in what order, and what it is unsure about &mdash; then waits for you to approve before editing anything. Passing a prompt starts the planning immediately instead of only flipping the mode.',
      when: [
        'Starting a feature that spans more than a couple of files',
        'A refactor where the sequencing matters more than any individual edit',
        'You want to check the agent understood the task before it spends tokens implementing the wrong thing'
      ],
      examples: ['/plan add rate limiting to the public API, 100 requests per minute per token'],
      related: ['interactive', 'autopilot', 'spar', 'research'],
      docs: [D.modes]
    },
    {
      key: 'interactive', cmd: '/interactive', args: '[PROMPT]', cat: 'modes',
      summary: 'Switches the session into Interactive mode, optionally seeded with a prompt.',
      detail: 'The most hands-on mode: the agent proposes changes and waits for your input as it goes. This is what you drop back into when Autopilot has wandered somewhere you did not intend, or when you are working in code you want to inspect edit by edit.',
      when: [
        'Working in unfamiliar or high-consequence code',
        'You want a tight feedback loop rather than a finished result',
        'Taking back control partway through an autonomous run'
      ],
      examples: ['/interactive walk me through the auth middleware before we change anything'],
      related: ['plan', 'autopilot'],
      docs: [D.modes]
    },
    {
      key: 'autopilot', cmd: '/autopilot', args: '[PROMPT]', cat: 'modes',
      summary: 'Switches into Autopilot mode and optionally starts execution.',
      detail: 'Full autonomy &mdash; the agent writes code, runs tests and iterates without pausing for approval. It works best on well-specified work with a clear pass/fail signal, because a test suite is what tells it whether it is finished. A common pattern is to run <code>/plan</code> first, approve the plan, then hand execution to Autopilot.',
      when: [
        'Dependency upgrades and other mechanical migrations',
        'Tasks with an unambiguous success check, like a green test suite',
        'Long-running chores you do not want to babysit'
      ],
      note: 'Autopilot does not ask before acting. Think about tool approvals deliberately here rather than reaching for <code>/allow-all-tools</code> out of habit.',
      examples: ['/autopilot upgrade to React 19 and get the test suite passing'],
      related: ['plan', 'interactive', 'allow-all-tools', 'fleet'],
      docs: [D.modes]
    },

    /* ---------- session lifecycle ---------- */
    {
      key: 'clear', cmd: '/clear', aliases: ['/reset'], cat: 'session', requires: 'Active session',
      summary: 'Clears the current transcript and starts a fresh session.',
      detail: 'Wipes the conversation so the next prompt starts clean. Reach for it when you switch tasks inside the same repository &mdash; leftover context from the previous task is a common reason an agent starts helpfully editing files you were already done with.',
      when: [
        'Switching to an unrelated task in the same repo',
        'The context has been poisoned by a wrong turn',
        'A long session has drifted away from what you actually want'
      ],
      note: '<code>/compact</code> is usually the better move if the history still matters &mdash; it summarizes instead of discarding.',
      related: ['restart-session', 'compact', 'fork']
    },
    {
      key: 'fork', cmd: '/fork', cat: 'session', requires: 'Active session',
      summary: 'Forks the session at the latest turn into a new independent session.',
      detail: 'Branches the conversation. Both sessions keep everything up to the fork point and then diverge, so you can try a second approach without re-explaining the problem from scratch. <code>/merge-to-parent</code> brings the work back if the experiment pays off.',
      when: [
        'Trying two competing implementations from the same starting point',
        'Running a risky experiment you might want to throw away',
        'Chasing a tangent without losing the main thread'
      ],
      related: ['merge-to-parent', 'spawn', 'orchestrate']
    },
    {
      key: 'merge-to-parent', cmd: '/merge-to-parent', cat: 'session', requires: 'Forked session',
      summary: 'Merges a forked session’s work back into the session it came from.',
      detail: 'The other half of <code>/fork</code>. Once the experiment in the fork has worked out, this folds it back into the parent so you can carry on in one place instead of maintaining two.',
      related: ['fork', 'spawn']
    },
    {
      key: 'restart-session', cmd: '/restart-session', cat: 'session', requires: 'Active session',
      summary: 'Restarts the current session and keeps its history.',
      detail: 'Reinitializes the session without throwing away the transcript. This is the fix for a session that has gone unresponsive, is holding stale tool state, or has picked up configuration changes that only take effect on restart.',
      related: ['clear', 'skills']
    },
    {
      key: 'rename', cmd: '/rename', cat: 'session', requires: 'Active session',
      summary: 'Renames the current chat or session.',
      detail: 'Sessions appear in the sidebar grouped by repository, and with several running in parallel the auto-generated names become hard to tell apart quickly. Renaming is cosmetic, but it is the difference between a usable sidebar and a wall of near-identical titles.',
      related: ['fork', 'inbox']
    },
    {
      key: 'remote', cmd: '/remote', cat: 'session', requires: 'Active session',
      summary: 'Enables or manages remote control, so you can reach the session from GitHub.com or GitHub Mobile.',
      detail: 'Turns a desktop session into something you can steer from a browser or your phone. The obvious use is starting a long Autopilot run at your desk and checking on it from somewhere else.',
      note: 'Remote control is policy-gated. If the command is missing, your organization or enterprise has likely disabled it.',
      related: ['terminal', 'inbox'],
      docs: [D.remote]
    },
    {
      key: 'terminal', cmd: '/terminal', args: '[COMMAND]', cat: 'session', requires: 'Active session',
      summary: 'Opens a terminal in the right panel, optionally running a command.',
      detail: 'Gives you a shell next to the agent, scoped to the session’s own worktree. Useful for checking the agent’s work yourself &mdash; running the tests, reading <code>git status</code> &mdash; without leaving the app or competing with the agent over the same working tree.',
      examples: ['/terminal npm test'],
      related: ['review', 'debug']
    },

    /* ---------- context & input ---------- */
    {
      key: 'attach-files', cmd: '/attach-files', cat: 'context',
      summary: 'Opens a file picker and attaches files to your message.',
      detail: 'Pins specific files into the prompt instead of hoping the agent finds them. Attaching the two or three files that actually matter is usually faster, cheaper and more reliable than describing where to look.',
      related: ['attach-folder', 'context', 'init']
    },
    {
      key: 'attach-folder', cmd: '/attach-folder', cat: 'context',
      summary: 'Opens a folder picker and attaches a folder to your message.',
      detail: 'The same idea as <code>/attach-files</code> at directory granularity, for when the relevant unit is a module or package rather than a handful of files. Be deliberate: a large folder is a large number of tokens.',
      related: ['attach-files', 'context', 'compact']
    },
    {
      key: 'compact', cmd: '/compact', cat: 'context', requires: 'Active session',
      summary: 'Summarizes earlier parts of the conversation to reduce token pressure.',
      detail: 'Replaces older turns with a condensed summary, freeing up context window while keeping the thread of what happened. Preferable to <code>/clear</code> when the session still matters: you lose detail, but not continuity.',
      when: [
        'A long session has started slowing down or losing the plot',
        '<code>/context</code> shows you are close to the limit',
        'Starting a substantial new subtask inside the same session'
      ],
      related: ['context', 'clear', 'chronicle-cost-tips']
    },
    {
      key: 'context', cmd: '/context', cat: 'context',
      summary: 'Shows the current session’s context usage.',
      detail: 'A breakdown of what is filling the context window: instructions, attached files, conversation history, tool output. This is the diagnostic you run before choosing between <code>/compact</code>, <code>/clear</code>, and detaching something you no longer need.',
      related: ['compact', 'usage', 'clear']
    },
    {
      key: 'init', cmd: '/init', cat: 'context', requires: 'A repository',
      summary: 'Generates or improves repository instructions.',
      detail: 'Inspects the project and writes &mdash; or upgrades &mdash; the custom instructions file that Copilot reads at the start of every session in that repository: conventions, build and test commands, architectural notes. A one-time investment that quietly improves every later session in the repo.',
      when: [
        'Onboarding a repository to Copilot for the first time',
        'The agent keeps getting your conventions wrong',
        'After a significant architectural change'
      ],
      related: ['skills', 'chronicle-improve'],
      docs: [D.repoCfg]
    },

    /* ---------- review & critique ---------- */
    {
      key: 'review', cmd: '/review', cat: 'review', requires: 'Active session',
      summary: 'Reviews the changes made in the current session.',
      detail: 'Turns the agent on its own diff, looking for bugs, omissions and loose ends before the work goes anywhere. Distinct from <code>/security-review</code>, which only hunts vulnerabilities, and from <code>/rubber-duck</code>, which brings in a second model.',
      related: ['security-review', 'rubber-duck', 'pr-open']
    },
    {
      key: 'security-review', cmd: '/security-review', cat: 'review',
      requires: 'Active session with changes', flags: ['preview'],
      summary: 'Runs a security-focused review against the current diff.',
      detail: 'Scans your in-progress changes for high-confidence vulnerabilities and returns prioritized findings with severity and confidence scores, plus suggested fixes you can apply and verify in the same session. It is an on-demand check on local changes, not a repository-wide audit &mdash; it complements code scanning, Dependabot and secret scanning rather than replacing them.',
      when: [
        'Before opening a PR that touches authentication, input handling or crypto',
        'After accepting a large agent-written diff you have not read line by line'
      ],
      related: ['review', 'pr-open', 'rubber-duck'],
      docs: [D.sec]
    },
    {
      key: 'rubber-duck', cmd: '/rubber-duck', args: '[PROMPT]', cat: 'review',
      summary: 'Asks a different model to critique your plan, implementation or tests.',
      detail: 'The rubber duck is a built-in critic that deliberately runs on a <em>different</em> model from the one driving your session, so it is less likely to share the main agent’s blind spots. When it is enabled, Copilot can also consult it automatically at key moments, take the critique, and decide what to do with it before continuing.',
      note: 'Currently available only when the main agent is running a Claude or GPT model.',
      when: [
        'A plan feels right but you cannot articulate why',
        'Before committing to a large refactor',
        'A second opinion on whether your tests actually cover the risk'
      ],
      examples: ['/rubber-duck is this migration plan safe to run against production data?'],
      related: ['spar', 'review', 'research'],
      docs: [D.duckH, D.duckC]
    },
    {
      key: 'spar', cmd: '/spar', args: '[PROMPT]', cat: 'review',
      summary: 'Runs adversarial reasoning that challenges your approach.',
      detail: 'Where <code>/rubber-duck</code> reviews, <code>/spar</code> argues. It plays devil’s advocate against your idea &mdash; probing assumptions, naming failure modes, pushing back on the design rather than the code. Point it at decisions, not diffs.',
      when: [
        'Choosing between two architectures',
        'Sanity-checking a migration before you commit to it',
        'You suspect you have talked yourself into something'
      ],
      examples: ['/spar we want to cache sessions in Redis with a 24h TTL — what breaks?'],
      related: ['rubber-duck', 'plan', 'research']
    },
    {
      key: 'research', cmd: '/research', args: '[PROMPT]', cat: 'review',
      summary: 'Runs a research workflow and produces a cited report.',
      detail: 'A deeper investigation than an ordinary answer: the agent gathers sources, cross-checks them, and returns a written report with citations you can follow yourself. This is for the questions you would otherwise answer by opening fifteen browser tabs.',
      examples: ['/research how do teams handle zero-downtime Postgres major version upgrades?'],
      related: ['spar', 'plan', 'af']
    },

    /* ---------- pull requests ---------- */
    {
      key: 'pr-open', cmd: '/pr-open', cat: 'pr', requires: 'Active session with changes',
      summary: 'Opens a pull request from the current session’s changes.',
      detail: 'Takes the work sitting in the session’s branch and worktree and turns it into a pull request, with a description drawn from what actually happened in the session. The natural next step once <code>/review</code> comes back clean.',
      related: ['pr-fix-checks', 'pr-resolve-comments', 'pr-merge', 'review'],
      docs: [D.prs]
    },
    {
      key: 'pr-fix-checks', cmd: '/pr-fix-checks', cat: 'pr', requires: 'Open PR with failing checks',
      summary: 'Runs a prompt to address failing pull request checks.',
      detail: 'Reads the failing CI checks, reproduces locally what it can, and pushes fixes &mdash; the loop you would otherwise run by hand between the pull request page and your editor.',
      related: ['pr-open', 'pr-resolve-comments', 'pr-merge'],
      docs: [D.prs]
    },
    {
      key: 'pr-resolve-comments', cmd: '/pr-resolve-comments', cat: 'pr', requires: 'Open PR with unresolved comments',
      summary: 'Runs a prompt to resolve pull request review comments.',
      detail: 'Pulls the outstanding review threads and works through them one at a time. Good for mechanical feedback; still worth reading its replies before they land on a colleague’s thread.',
      related: ['pr-fix-checks', 'pr-open', 'pr-merge'],
      docs: [D.prs]
    },
    {
      key: 'pr-merge', cmd: '/pr-merge', cat: 'pr', requires: 'Mergeable pull request',
      summary: 'Merges the current pull request into its target branch.',
      detail: 'The end of the pipeline: open, fix the checks, resolve the comments, merge. It requires the pull request to actually be mergeable, so failing checks or conflicts have to be dealt with first.',
      related: ['pr-open', 'pr-fix-checks', 'pr-resolve-comments', 'pr-stack'],
      docs: [D.prs]
    },
    {
      key: 'pr-stack', cmd: '/pr-stack', cat: 'pr', flags: ['skill'],
      summary: 'Creates and manages a stack of dependent pull requests, with one child session per layer.',
      detail: 'For work too large to review as a single pull request. It splits the change into a stack of dependent PRs and drives a child session for each layer, so every PR stays small and reviewable while the stack as a whole delivers the feature.',
      note: 'This is a built-in skill rather than an entry on the app’s slash command reference page. It appears in the picker when it applies.',
      related: ['pr-open', 'orchestrate', 'spawn'],
      docs: [D.skills, D.stacked]
    },

    /* ---------- delegation ---------- */
    {
      key: 'orchestrate', cmd: '/orchestrate', args: '[PROMPT]', cat: 'delegate', flags: ['skill'],
      summary: 'Coordinates work across sessions and repositories by creating and guiding child sessions.',
      detail: 'The conductor. Rather than doing the work itself, it decomposes a goal, spins up child sessions for the pieces &mdash; potentially in different repositories &mdash; and steers them. This is the command for a change that has to land in a frontend, a backend and a shared library at the same time.',
      when: [
        'A feature that crosses repository boundaries',
        'Parallelizable work that still needs a shared goal',
        'Coordinating a migration across several services'
      ],
      examples: ['/orchestrate rename User.email to primaryEmail across the API, the web client and the SDK'],
      related: ['fleet', 'spawn', 'pr-stack'],
      docs: [D.skills]
    },
    {
      key: 'fleet', cmd: '/fleet', args: '[PROMPT]', cat: 'delegate', requires: 'Active session',
      summary: 'Launches multiple agents in parallel on a single task.',
      detail: 'Splits one task across parallel subagents inside the current session. Where <code>/orchestrate</code> coordinates whole sessions across repositories, <code>/fleet</code> parallelizes within one &mdash; which suits naturally shardable work, like applying the same change to fifty files.',
      examples: ['/fleet add JSDoc comments to every exported function in src/lib'],
      related: ['orchestrate', 'spawn', 'autopilot']
    },
    {
      key: 'spawn', cmd: '/spawn', args: '[PROMPT]', cat: 'delegate',
      summary: 'Creates a focused child session for delegated work.',
      detail: 'Hands one well-defined subtask to its own session with its own context, keeping the parent’s context clean. It is the lightest of the three delegation commands: <code>/spawn</code> is one child, <code>/fleet</code> is many parallel workers, <code>/orchestrate</code> is a managed programme of work.',
      examples: ['/spawn write integration tests for the new webhook endpoint'],
      related: ['fleet', 'orchestrate', 'fork']
    },

    /* ---------- models, agents & skills ---------- */
    {
      key: 'model', cmd: '/model', aliases: ['/models'], args: '[MODEL]', cat: 'config',
      summary: 'Opens model selection, or selects a model by name or ID.',
      detail: 'Switches the model driving the session. Choosing <strong>Auto</strong> lets the app pick per task based on complexity, and after a turn the picker shows which model actually answered. Reasoning effort is a separate dial: more effort buys more thinking time on hard problems at the cost of latency. If you have configured your own model provider, those models appear here too.',
      when: [
        'Moving to a stronger model for a problem the current one is fumbling',
        'Dropping to a cheaper model for mechanical work',
        'A task that suits a particular vendor’s strengths'
      ],
      related: ['agent', 'usage', 'rubber-duck'],
      docs: [D.auto, D.byok]
    },
    {
      key: 'agent', cmd: '/agent', cat: 'config',
      summary: 'Selects a custom agent for the session.',
      detail: 'Custom agents bundle instructions, tools and model settings under a name, so a repository can define something like a read-only reviewer or a documentation writer. This command chooses which one drives the session.',
      related: ['model', 'skills', 'af'],
      docs: [D.agents]
    },
    {
      key: 'skills', cmd: '/skills', args: 'reload', cat: 'config',
      summary: 'Manages skills. Use /skills reload to reload them mid-session.',
      detail: 'Skills are packaged instructions that extend what the agent does well. This command lists and manages what is available, and the <code>reload</code> subcommand picks up edits without a restart &mdash; which is exactly what you want while you are authoring one.',
      related: ['agent', 'af', 'init'],
      docs: [D.agentSk, D.skills]
    },
    {
      key: 'af', cmd: '/af', cat: 'config', flags: ['skill'],
      summary: 'Finds installable MCP servers, tools, skills and agents by searching Agent Finder.',
      detail: 'A search front end for the ecosystem: describe a capability you wish you had and it surfaces MCP servers, skills and agents you can install. This is the path from &ldquo;I wish Copilot could talk to our issue tracker&rdquo; to actually having that connector installed.',
      examples: ['/af something that can query a Postgres database'],
      related: ['skills', 'agent'],
      docs: [D.mcp, D.skills]
    },
    {
      key: 'create-canvas', cmd: '/create-canvas', args: '[PROMPT]', cat: 'config', flags: ['skill'],
      summary: 'Invokes the canvas-authoring skill.',
      detail: 'Canvases are custom, agent-driven interfaces in the app’s side panel &mdash; dashboards, diagrams, triage boards &mdash; that you and the agent can both act on. This command builds one out of the conversation, turning a discussion into a small purpose-built tool.',
      examples: ['/create-canvas a board of the open PRs in this repo grouped by review state'],
      related: ['inbox', 'orchestrate'],
      docs: [D.canvas, D.skills]
    },

    /* ---------- tools & permissions ---------- */
    {
      key: 'allow-all-tools', cmd: '/allow-all-tools', aliases: ['/yolo'], cat: 'perms', requires: 'Active session',
      summary: 'Turns tool auto-approval on, or shows its current state.',
      detail: 'Stops the agent asking permission for each tool call. Genuinely useful in a throwaway worktree or a cloud sandbox where the blast radius is contained, and considerably less so pointed at a repository you care about with shell access enabled.',
      note: 'This switches off the approval prompts that are your main guardrail. Prefer it in disposable or sandboxed environments, and use <code>/reset-allowed-tools</code> to turn it back off when you are done.',
      related: ['reset-allowed-tools', 'autopilot']
    },
    {
      key: 'reset-allowed-tools', cmd: '/reset-allowed-tools', cat: 'perms', requires: 'Active session',
      summary: 'Clears session-level tool approvals and turns auto-approval off.',
      detail: 'The undo for approvals you granted in the moment, including <code>/yolo</code>. The agent goes back to asking. Worth running after a demo, or once you have finished whatever justified opening things up.',
      related: ['allow-all-tools']
    },

    /* ---------- history ---------- */
    {
      key: 'chronicle', cmd: '/chronicle', cat: 'history',
      summary: 'Opens session history and analysis features.',
      detail: 'Chronicle is memory across sessions. Because the app is built on the Copilot CLI, it reads history from both app sessions and other CLI sessions, so a week of work is queryable in one place. Run it bare to open the interface, or go straight to a subcommand.',
      related: ['chronicle-standup', 'chronicle-search', 'context'],
      docs: [D.chronA, D.chronC]
    },
    {
      key: 'chronicle-standup', cmd: '/chronicle standup', cat: 'history',
      summary: 'Summarizes your work from the last day.',
      detail: 'Reads recent sessions and writes the summary you would otherwise reconstruct from memory each morning. It is also the fastest way to work out which of five parallel sessions actually did what.',
      examples: ['/chronicle standup'],
      related: ['chronicle', 'chronicle-search'],
      docs: [D.chronC]
    },
    {
      key: 'chronicle-search', cmd: '/chronicle search', cat: 'history',
      summary: 'Searches session history by keyword or topic.',
      detail: 'Finds the session where you solved this before. Given how much agentic work turns out to be re-solving something you half-remember, this is the subcommand that earns chronicle its place.',
      examples: ['/chronicle search flaky websocket test'],
      related: ['chronicle', 'chronicle-standup'],
      docs: [D.chronC]
    },
    {
      key: 'chronicle-tips', cmd: '/chronicle tips', cat: 'history',
      summary: 'Returns personalized workflow tips.',
      detail: 'Looks at how you have actually been using the agent and suggests changes: commands you are not reaching for, habits that are costing you time.',
      related: ['chronicle', 'chronicle-cost-tips', 'chronicle-improve'],
      docs: [D.chronC]
    },
    {
      key: 'chronicle-cost-tips', cmd: '/chronicle cost-tips', cat: 'history',
      summary: 'Shows suggestions to reduce token usage and cost.',
      detail: 'The same idea as <code>/chronicle tips</code>, pointed at spend: where your sessions burn context, and which habits are expensive.',
      related: ['chronicle-tips', 'usage', 'context', 'compact'],
      docs: [D.chronC]
    },
    {
      key: 'chronicle-improve', cmd: '/chronicle improve', cat: 'history',
      summary: 'Suggests improvements for your instructions file.',
      detail: 'Reads your history for the places the agent repeatedly needed correcting, then proposes edits to your custom instructions so it stops needing them. The natural follow-up to <code>/init</code> after a few weeks of real use.',
      related: ['init', 'chronicle-tips'],
      docs: [D.chronC]
    },
    {
      key: 'chronicle-reindex', cmd: '/chronicle reindex', cat: 'history',
      summary: 'Rebuilds the chronicle session index.',
      detail: 'Maintenance. Run it when search results look stale or incomplete, or after sessions have been moved around.',
      related: ['chronicle', 'chronicle-search'],
      docs: [D.chronC]
    },

    /* ---------- diagnostics ---------- */
    {
      key: 'debug', cmd: '/debug', cat: 'diag', requires: 'Active session',
      summary: 'Copies session debug JSON to your clipboard.',
      detail: 'A structured dump of the session’s state, for pasting into a bug report or reading yourself. Lighter than <code>/collect-debug-logs</code>, which packages the full logs.',
      related: ['collect-debug-logs', 'export-gist']
    },
    {
      key: 'collect-debug-logs', cmd: '/collect-debug-logs', cat: 'diag', requires: 'Active session',
      summary: 'Creates a debug log archive, or uploads one as a secret gist.',
      detail: 'Packages the logs for a bug report. The gist is secret rather than public, but it is still leaving your machine, and logs can carry file paths, prompts and repository contents.',
      note: 'Secret gists are unlisted, not private &mdash; anyone with the URL can read one. Check what you are uploading before you share the link.',
      related: ['debug', 'export-gist']
    },
    {
      key: 'export-gist', cmd: '/export-gist', cat: 'diag', requires: 'Active session',
      summary: 'Exports the transcript to a secret gist.',
      detail: 'Turns the conversation into a shareable link, for a colleague, a write-up, or your own records. The same caveat as debug logs applies: secret gists are reachable by anyone holding the URL.',
      related: ['collect-debug-logs', 'debug']
    },
    {
      key: 'usage', cmd: '/usage', cat: 'diag',
      summary: 'Opens usage and rate-limit details for your plan.',
      detail: 'What you have spent and what is left. Worth checking before starting something expensive, and the first thing to look at when the agent suddenly starts refusing work.',
      related: ['context', 'chronicle-cost-tips', 'model']
    },
    {
      key: 'inbox', cmd: '/inbox', cat: 'diag',
      summary: 'Renders an interactive inbox widget for work items.',
      detail: 'A single view of what is waiting on you across GitHub: review requests, assigned issues, pull requests that need attention. It renders empty if you have nothing pending, which is the good outcome.',
      related: ['pr-open', 'create-canvas', 'remote']
    }
  ]);
})();
