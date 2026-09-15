/* Copilot Chat in the editors and on the web.
   Reviewed against first-party references on 2026-09-14.
   Editor chat, CLI-backed sessions, and version-specific features are distinguished below. */

(function () {
  var V = 'https://code.visualstudio.com/docs/';
  var G = 'https://docs.github.com/en/copilot/';
  var D = {
    vsRef:    ['VS Code AI features cheat sheet',
      V + 'agents/reference/ai-features-cheat-sheet'],
    vsAugust: ['VS Code August releases: 1.132–1.135 (2026-08-31)',
      'https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/'],
    vsChat:   ['Chat in VS Code', V + 'chat/chat-overview'],
    vsInline: ['Inline chat', V + 'chat/inline-chat'],
    vsAgent:  ['Agents in VS Code', V + 'agents/overview'],
    vsCtx:    ['Adding context to chat', V + 'chat/copilot-chat-context'],
    vsInstr:  ['Custom instructions', V + 'agent-customization/custom-instructions'],
    vsPrompt: ['Prompt files', V + 'agent-customization/prompt-files'],
    vsAgents: ['Custom agents', V + 'agent-customization/custom-agents'],
    vsSkills: ['Agent skills', V + 'agent-customization/agent-skills'],
    vsHooks:  ['Agent hooks (Preview)', V + 'agent-customization/hooks'],
    vsPerms:  ['Approvals and permissions', V + 'agents/run/approvals'],
    vsDebug:  ['Debug chat interactions', V + 'agents/agent-troubleshooting/chat-debug-view'],
    autoModel: ['Auto model selection', G + 'concepts/models/auto-model-selection'],
    autoTiers: ['Auto selection tiers (rollout, 2026-09-14)',
      'https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/'],
    managedPerms: ['Enterprise-managed permissions (GA, 2026-09-09)',
      'https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/'],
    vsDebug94: ['VS Code 1.94 release notes: startDebugging',
      'https://code.visualstudio.com/updates/v1_94#_start-debugging-from-chat-experimental'],
    ghWeb:    ['Chat with Copilot on GitHub', G + 'how-tos/copilot-on-github/chat-with-copilot/chat-in-github'],
    ghVsCode: ['Copilot Chat cheat sheet (VS Code)', G + 'reference/chat-cheat-sheet?tool=vscode'],
    ghJb:     ['Copilot Chat cheat sheet (JetBrains)', G + 'reference/chat-cheat-sheet?tool=jetbrains'],
    ghXcode:  ['Copilot Chat cheat sheet (Xcode)', G + 'reference/chat-cheat-sheet?tool=xcode'],
    ghWebSheet: ['Copilot Chat cheat sheet (GitHub.com)', G + 'reference/chat-cheat-sheet?tool=webui'],
    cliChron: ['Using CLI session data', G + 'how-tos/copilot-cli/use-copilot-cli/chronicle'],
    cliRemote: ['Steer a CLI session remotely', G + 'how-tos/copilot-cli/use-copilot-cli/steer-remotely'],
    msVs:     ['Customize chat responses in Visual Studio',
      'https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=visualstudio'],
    jbAgent:  ['GitHub Copilot agent in JetBrains IDEs',
      'https://www.jetbrains.com/help/ai-assistant/copilot-agent.html']
  };

  /* ============================= VS CODE ============================= */
  window.SLASH.register('vscode', [

    /* editor actions */
    {
      key: 'explain', cmd: '/explain', args: '[QUESTION]', cat: 'editor',
      summary: 'Explains a code block, a file, or a programming concept.',
      detail: 'The workhorse. With a selection it explains that code; with nothing selected it explains the active file; with neither it will happily explain a concept. Pairs well with a <code>#</code> reference when the thing you want explained is not what is currently on screen.',
      examples: ['/explain what does this reducer do when the action is unknown?'],
      related: ['fix', 'doc', 'tests'],
      docs: [D.vsRef, D.vsChat, D.vsCtx]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Proposes a fix for a code block, or resolves compiler and linting errors.',
      detail: 'Most effective from inline chat with the problem selected, or straight off the lightbulb Code Action when the editor is already showing you a squiggle.',
      related: ['explain', 'fixTestFailure', 'startDebugging'],
      docs: [D.vsInline]
    },
    {
      key: 'doc', cmd: '/doc', cat: 'editor',
      summary: 'Generates documentation comments from editor inline chat.',
      detail: 'Writes a doc comment in the language’s conventional style for the selected symbol &mdash; JSDoc, docstrings, XML docs and so on.',
      related: ['explain', 'tests'],
      docs: [D.vsInline]
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Generates tests for all, or only the selected, methods and functions.',
      detail: 'Select first to scope it. Generated tests are a starting point rather than a deliverable &mdash; they tend to cover the happy path thoroughly and the interesting cases less so.',
      related: ['setupTests', 'fixTestFailure', 'doc']
    },
    {
      key: 'setupTests', cmd: '/setupTests', cat: 'editor', flags: ['experimental'],
      summary: 'Helps set up a testing framework for your project.',
      detail: 'Recommends a framework suited to the codebase, walks through configuring it, and suggests relevant VS Code testing extensions. The command to run before <code>/tests</code> in a project that has no test setup yet.',
      related: ['tests', 'fixTestFailure'],
      docs: [D.vsRef]
    },
    {
      key: 'fixTestFailure', cmd: '/fixTestFailure', cat: 'editor',
      summary: 'Finds and fixes a failing test.',
      note: 'GitHub’s VS Code cheat sheet lists this command, while Microsoft’s current cheat sheet does not enumerate it. That difference does not establish removal; check the picker for your installed build and session type.',
      related: ['tests', 'fix'],
      docs: [D.ghVsCode, D.vsRef]
    },
    {
      key: 'startDebugging', cmd: '/startDebugging', cat: 'editor',
      requires: '@vscode participant in a build that exposes this command',
      summary: 'Generates a launch.json configuration and starts a debugging session.',
      detail: 'VS Code 1.94 documented this as an experimental <code>@vscode</code> command for finding or creating a launch configuration and starting the debugger.',
      note: 'Retained with its release-note evidence; it is not enumerated in the current cheat sheet. Check your installed picker rather than assuming availability or removal.',
      related: ['fix', 'debug'],
      docs: [D.vsDebug94, D.vsRef]
    },
    {
      key: 'search', cmd: '/search', args: 'QUERY', cat: 'editor',
      requires: '@vscode chat participant',
      summary: 'Generates a search query for the Search view from natural language.',
      detail: 'Microsoft documents the full invocation as <code>@vscode /search</code> followed by a description of what to find. The example below assumes <code>@vscode</code> is already selected; the command sends its generated query to the Search view.',
      examples: ['/search every call to fetch that does not check response.ok'],
      related: ['explain'],
      docs: [D.vsRef]
    },
    {
      key: 'new', cmd: '/new', args: '[DESCRIPTION]', cat: 'editor',
      summary: 'Scaffolds a new VS Code workspace or file.',
      detail: 'Describe the project or file you want and preview the scaffolded content before anything is created.',
      examples: ['/new an Express API with TypeScript and Vitest'],
      related: ['newNotebook', 'init']
    },
    {
      key: 'newNotebook', cmd: '/newNotebook', args: '[DESCRIPTION]', cat: 'editor',
      summary: 'Scaffolds a new Jupyter notebook from your requirements.',
      examples: ['/newNotebook load a CSV and chart monthly revenue'],
      related: ['new'],
      docs: [D.vsRef]
    },

    /* planning & context */
    {
      key: 'plan', cmd: '/plan', cat: 'context',
      requires: 'Supported agent session',
      summary: 'Creates a detailed implementation plan for a complex coding task.',
      detail: 'Researches the requirements, asks clarifying questions, and produces a structured plan with steps, verification and decisions. Equivalent to selecting the <strong>Plan</strong> agent from the agents dropdown.',
      related: ['init', 'agents'],
      docs: [D.vsAgent]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      requires: 'Local agent session',
      summary: 'Generates or updates workspace instructions from your project structure.',
      detail: 'Writes <code>copilot-instructions.md</code> or <code>AGENTS.md</code> based on the project’s structure and coding patterns, so every later chat starts with your conventions already in context.',
      related: ['instructions', 'plan'],
      docs: [D.vsInstr]
    },

    /* agent review */
    {
      key: 'rubber-duck', cmd: '/rubber-duck', cat: 'review', flags: ['experimental'],
      requires: 'Copilot Agent Host session',
      summary: 'Asks a complementary model for a second opinion.',
      detail: 'Checks the current approach for missed details and edge cases. GitHub documents this as an experimental command for Copilot Agent Host sessions in the August 2026 release update.',
      note: 'This is not a claim of support in classic Ask or inline editor chat. Check the picker for your session and build.',
      examples: ['/rubber-duck'],
      related: ['plan', 'models'],
      docs: [D.vsAugust]
    },

    /* session */
    {
      key: 'btw', cmd: '/btw', cat: 'session',
      requires: 'A primary chat in the Agents window',
      summary: 'Opens a side conversation while the primary chat continues.',
      detail: 'The side chat shares the primary chat’s context and prompt cache. Use it to branch into a side discussion without stopping the primary chat’s work.',
      note: 'This is the Agents window’s side-chat action, not the terminal CLI’s <code>/btw QUESTION</code> helper. No CLI-style question argument or alias is assumed here.',
      examples: ['/btw'],
      related: ['fork', 'compact'],
      docs: [D.vsAugust]
    },
    {
      key: 'clear', cmd: '/clear', cat: 'session',
      summary: 'Starts a new chat and archives or marks the current chat as done.',
      related: ['compact', 'fork']
    },
    {
      key: 'rename', cmd: '/rename', args: 'NAME', cat: 'session',
      requires: 'Local chat',
      summary: 'Renames the current local chat.',
      examples: ['/rename investigate retry failures'],
      related: ['clear', 'fork'],
      docs: [D.vsRef]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'session',
      requires: 'Supported agent session',
      summary: 'Compacts the conversation context by summarizing it.',
      detail: 'For when a conversation has grown past what the model’s context window can hold comfortably.',
      related: ['clear', 'fork']
    },
    {
      key: 'fork', cmd: '/fork', cat: 'session',
      summary: 'Forks the chat session into a new independent session that inherits the full history.',
      detail: 'Lets you branch off to try something without losing the thread you were on.',
      related: ['clear', 'compact', 'btw']
    },

    /* diagnostics */
    {
      key: 'debug', cmd: '/debug', cat: 'diag',
      requires: 'Chat view in the main VS Code window',
      summary: 'Opens the Chat Debug view to inspect chat logs.',
      note: 'Not available in the Agents window.',
      related: ['troubleshoot', 'startDebugging'],
      docs: [D.vsRef, D.vsDebug]
    },
    {
      key: 'troubleshoot', cmd: '/troubleshoot', args: '[QUESTION] [#session]', cat: 'diag',
      requires: 'Agent debug logging enabled before reproducing the issue',
      summary: 'Asks the AI to analyze the agent debug logs for this chat session.',
      detail: 'Supported in local and Copilot CLI sessions. Add <code>#session</code> to choose another session. For local chat, enable <code>github.copilot.chat.agentDebugLog.fileLogging.enabled</code> and reload the window. For Agent Host, enable <code>chat.agentHost.agentDebugLog.enabled</code> before the activity you want to inspect; log capture is not retroactive.',
      note: 'Agent Debug Logs are in preview. Logs can contain prompts, code, paths, and tool data; review them before sharing.',
      examples: [
        '/troubleshoot how many tokens did I use?',
        '/troubleshoot list all paths you tried to load customizations in #session'
      ],
      related: ['debug'],
      docs: [D.vsRef, D.vsDebug]
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      requires: 'Local Ask chat',
      summary: 'Lists the agents and slash commands available in local Ask chat.',
      docs: [D.vsRef]
    },

    /* session configuration */
    {
      key: 'models', cmd: '/models', cat: 'config',
      summary: 'Opens the model picker.',
      detail: 'Auto can route each prompt with an Efficiency, Balance, or Intelligence preference. These prioritize cost, balanced cost/quality/latency, and quality respectively, while using the same model pool eligible for your plan and policies. The tier controls model routing, not a model’s reasoning-effort level.',
      note: 'The three Auto tiers began rolling out to VS Code on 2026-09-14 and may not yet appear in your installation. Intelligence can still choose a smaller model for a straightforward prompt.',
      related: ['tools', 'agents'],
      docs: [D.vsRef, D.autoModel, D.autoTiers]
    },
    {
      key: 'tools', cmd: '/tools', cat: 'config',
      requires: 'Local chat session',
      summary: 'Configures the tools available to the current local chat session.',
      related: ['models', 'agents'],
      docs: [D.vsRef]
    },
    {
      key: 'vscode-pet', cmd: '/vscode-pet', cat: 'config',
      summary: 'Shows or hides the interactive VS Code pet above chat.',
      detail: 'One pet is shown in the active chat surface at a time. Its position and size are shared across chats and windows and persist across restarts.',
      docs: [D.vsChat]
    },

    /* customization authoring */
    {
      key: 'instructions', cmd: '/instructions', cat: 'author',
      summary: 'Configures your custom instructions.',
      detail: 'Opens the instructions configuration menu. Always-on files apply across chat requests; targeted <code>.instructions.md</code> files apply according to their matching rules or when attached explicitly.',
      related: ['create-instruction', 'init', 'prompts'],
      docs: [D.vsInstr]
    },
    {
      key: 'prompts', cmd: '/prompts', cat: 'author',
      summary: 'Configures your reusable prompt files.',
      detail: 'Opens the prompt-file configuration menu. A <code>.prompt.md</code> file can define a reusable command for the Local agent.',
      note: 'Prompt files are deprecated for Agent Host and are not loaded there. They still work with the Local agent; use the prompt-to-skill migration for Agent Host workflows.',
      related: ['create-prompt', 'custom-prompt', 'instructions'],
      docs: [D.vsPrompt]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'author',
      summary: 'Configures your agent skills.',
      detail: 'Skills package a <code>SKILL.md</code> file and supporting resources in a named directory. User-invocable skills also appear in the slash-command menu.',
      related: ['create-skill', 'custom-skill', 'agents'],
      docs: [D.vsSkills]
    },
    {
      key: 'agents', cmd: '/agents', cat: 'author',
      summary: 'Configures your custom agents.',
      detail: 'Custom agents define how the agent operates &mdash; its tools, its model, its instructions. A common use is a read-only planning agent that cannot edit anything.',
      related: ['create-agent', 'plan', 'skills'],
      docs: [D.vsAgents]
    },
    {
      key: 'hooks', cmd: '/hooks', cat: 'author', flags: ['preview'],
      summary: 'Configures your hooks.',
      detail: 'Hooks run your own commands at defined points in the agent loop &mdash; formatting after an edit, blocking a tool call, logging what happened.',
      note: 'Hooks are in preview and can be disabled by organization policy.',
      related: ['create-hook', 'agents'],
      docs: [D.vsHooks]
    },
    {
      key: 'create-instruction', cmd: '/create-instructions', args: '[DESCRIPTION]', cat: 'author',
      requires: 'Local agent session',
      summary: 'Generates a targeted instructions file with AI assistance.',
      detail: 'Describe a convention to create an <code>.instructions.md</code> file with a suitable <code>applyTo</code> pattern. Use <code>/init</code> for workspace-wide always-on instructions.',
      examples: ['/create-instructions use single quotes in TypeScript files'],
      related: ['instructions', 'init'],
      docs: [D.vsInstr]
    },
    {
      key: 'create-prompt', cmd: '/create-prompt', args: '[DESCRIPTION]', cat: 'author',
      requires: 'Local agent session',
      summary: 'Generates a prompt file with AI assistance in Agent mode.',
      detail: 'Describe the task to capture as a <code>.prompt.md</code> file. The agent asks clarifying questions and offers workspace or user storage.',
      note: 'Agent Host does not load prompt files; use a skill for workflows that need to run there.',
      examples: ['/create-prompt summarize the API changes before a release'],
      related: ['prompts', 'custom-prompt'],
      docs: [D.vsPrompt]
    },
    {
      key: 'create-skill', cmd: '/create-skill', args: '[DESCRIPTION]', cat: 'author',
      requires: 'Local agent session',
      summary: 'Generates an agent skill with AI assistance in Agent mode.',
      examples: ['/create-skill run and diagnose integration tests'],
      related: ['skills', 'custom-skill'],
      docs: [D.vsSkills]
    },
    {
      key: 'create-agent', cmd: '/create-agent', args: '[DESCRIPTION]', cat: 'author',
      requires: 'Local agent session',
      summary: 'Generates a custom agent with AI assistance in Agent mode.',
      examples: ['/create-agent a read-only API design reviewer'],
      related: ['agents'],
      docs: [D.vsAgents]
    },
    {
      key: 'create-hook', cmd: '/create-hook', args: '[DESCRIPTION]', cat: 'author', flags: ['preview'],
      requires: 'Local agent session with hooks allowed by policy',
      summary: 'Generates a hook configuration with AI assistance in Agent mode.',
      examples: ['/create-hook run the formatter after each file edit'],
      related: ['hooks'],
      docs: [D.vsHooks]
    },
    {
      key: 'custom-skill', cmd: '/<skill name>', args: '[CONTEXT]', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Runs one of your own agent skills by name.',
      detail: 'For example, <code>.github/skills/webapp-testing/SKILL.md</code> with <code>name: webapp-testing</code> exposes <code>/webapp-testing</code>. The name must match the directory. <code>user-invocable: false</code> hides it from the menu; plugin-distributed skills receive a plugin-name prefix automatically. Optional text after the command provides task context.',
      related: ['skills', 'create-skill', 'custom-prompt'],
      docs: [D.vsSkills]
    },
    {
      key: 'custom-prompt', cmd: '/<prompt name>', args: '[CONTEXT]', cat: 'author', flags: ['custom'], noCompare: true,
      requires: 'Local agent session with a saved prompt file',
      summary: 'Runs one of your reusable prompt files by name.',
      detail: 'The command name comes from the prompt’s <code>name</code> frontmatter or its <code>.prompt.md</code> filename. Add optional instructions or inputs after the command.',
      note: 'Prompt files still work with the Local agent but are deprecated and not loaded in Agent Host sessions. Migrate them to skills for Agent Host.',
      related: ['prompts', 'create-prompt', 'custom-skill'],
      docs: [D.vsPrompt]
    },

    /* permissions */
    {
      key: 'yolo', cmd: '/yolo', aliases: ['/autoApprove'], cat: 'perms',
      requires: 'Supported local or Copilot CLI session',
      summary: 'Skips ordinary approvals for the current session, subject to policy.',
      detail: 'Selects the session-scoped Allow all level for edits, terminal commands, and external tools. An enabled terminal sandbox still applies. In Agent Host sessions, enterprise-managed deny and ask rules remain enforced; user or workspace settings, auto-approval, and saved approvals cannot weaken them.',
      note: 'This does not enable global auto-approval across every workspace. The global setting is <code>chat.tools.global.autoApprove</code>. Use <code>/disableYolo</code> to restore the session’s default permissions.',
      related: ['disableYolo', 'autopilot'],
      docs: [D.vsRef, D.vsPerms, D.managedPerms]
    },
    {
      key: 'disableYolo', cmd: '/disableYolo', aliases: ['/disableAutoApprove'], cat: 'perms',
      requires: 'Supported local or Copilot CLI session',
      summary: 'Restores the current session’s default permission level.',
      detail: 'In Agent Host sessions, this leaves enterprise-managed permission rules unchanged.',
      related: ['yolo', 'exitAutopilot'],
      docs: [D.vsRef, D.vsPerms, D.managedPerms]
    },
    {
      key: 'autopilot', cmd: '/autopilot', cat: 'modes',
      requires: 'Supported local or Copilot CLI session',
      summary: 'Enables Autopilot for the current session.',
      detail: 'Lets the agent continue until it considers the task complete, retrying errors and answering task questions that would otherwise block it. It skips ordinary tool approvals but does not disable an enabled terminal sandbox. In Agent Host sessions, enterprise-managed deny rules still block operations and ask rules still require human approval.',
      note: 'This is the VS Code session control, not a promise that the terminal CLI’s objective arguments or credit-cap options work here.',
      related: ['exitAutopilot', 'yolo', 'plan'],
      docs: [D.vsRef, D.vsPerms, D.managedPerms]
    },
    {
      key: 'exitAutopilot', cmd: '/exitAutopilot', cat: 'modes',
      requires: 'Supported local or Copilot CLI session',
      summary: 'Exits Autopilot and restores the session’s default permissions.',
      detail: 'In Agent Host sessions, this leaves enterprise-managed permission rules unchanged.',
      related: ['autopilot', 'disableYolo'],
      docs: [D.vsRef, D.vsPerms, D.managedPerms]
    }
  ]);

  /* ============================= JETBRAINS ============================= */
  window.SLASH.register('jetbrains', [
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Explains how the code in your active editor works.',
      related: ['fix', 'tests'], docs: [D.ghJb]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Proposes a fix for problems in the selected code.',
      related: ['explain', 'tests'], docs: [D.ghJb]
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Generates unit tests for the selected code.',
      related: ['explain', 'fix'], docs: [D.ghJb]
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Quick reference and basics of using Copilot.',
      related: ['explain'],
      docs: [D.ghJb]
    },
    {
      key: 'chronicle', cmd: '/chronicle', args: '[standup|tips|search QUERY|improve]', cat: 'history',
      requires: 'Copilot CLI session',
      summary: 'Reviews and analyzes your session history.',
      detail: 'GitHub documents <code>standup</code>, <code>tips</code>, <code>search</code>, and <code>improve</code> for interactive Copilot CLI sessions in JetBrains. The CLI guide also describes a bare-command picker and additional actions; this IDE entry does not assume the full CLI inventory is exposed in every integration.',
      note: 'This is not a classic editor-chat command. JetBrains AI Assistant’s separate Copilot agent supports a session-dependent subset of CLI commands; inspect its own picker rather than assuming parity.',
      related: ['compact', 'remote'],
      docs: [D.ghJb, D.cliChron, D.jbAgent]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'session', requires: 'Copilot CLI session',
      summary: 'Compresses the current CLI session context to keep a long session manageable.',
      note: 'Documented for an interactive Copilot CLI session in JetBrains, not as a classic editor-chat action.',
      related: ['chronicle', 'remote'],
      docs: [D.ghJb]
    },
    {
      key: 'remote', cmd: '/remote', args: '[on|off]', cat: 'session', requires: 'Copilot CLI session',
      summary: 'Enables or manages remote control of the current session.',
      detail: 'Run bare to show status and access details, <code>on</code> to enable remote steering, or <code>off</code> to end it. The CLI must remain running on an online machine, and remote access uses the same GitHub account. GitHub also documents an Enable Copilot CLI Remote setting in the JetBrains plugin.',
      examples: ['/remote', '/remote on'],
      related: ['chronicle', 'compact'],
      docs: [D.ghJb, D.cliRemote]
    }
  ]);

  /* ============================= VISUAL STUDIO ============================= */
  window.SLASH.register('visualstudio', [
    {
      key: 'explain', cmd: '/explain', args: '[QUESTION]', cat: 'editor',
      summary: 'Explains how the code in your active editor works.',
      detail: 'Use the current selection or name the code you want explained in the prompt. Available in the Chat window and inline chat.',
      examples: ['/explain the RetryRequestAsync method in HttpClientService.cs'],
      related: ['fix', 'doc', 'optimize'], docs: [D.msVs]
    },
    {
      key: 'fix', cmd: '/fix', args: '[CODE]', cat: 'editor',
      summary: 'Proposes a fix for problems in the selected code.',
      detail: 'Select the code first, or name the method and file after the command.',
      examples: ['/fix the RetryRequestAsync method in HttpClientService.cs'],
      related: ['explain', 'optimize'], docs: [D.msVs]
    },
    {
      key: 'doc', cmd: '/doc', args: '[CODE]', cat: 'editor',
      summary: 'Adds comments for selected or specified code.',
      examples: ['/doc the RetryRequestAsync method in HttpClientService.cs'],
      related: ['explain', 'tests'],
      docs: [D.msVs]
    },
    {
      key: 'tests', cmd: '/tests', args: '[INSTRUCTIONS]', cat: 'editor',
      summary: 'Generates unit tests for the selected code.',
      detail: 'You can add instructions such as the testing framework to use after the command.',
      examples: ['/tests using xUnit'],
      related: ['doc', 'fix'],
      docs: [D.msVs]
    },
    {
      key: 'optimize', cmd: '/optimize', args: '[CODE]', cat: 'editor',
      summary: 'Analyzes and improves the running time of the selected code.',
      detail: 'Use the current selection or identify a method and file in your prompt.',
      examples: ['/optimize the RetryRequestAsync method in HttpClientService.cs'],
      related: ['explain', 'fix'],
      docs: [D.msVs]
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Quick reference and basics of using Copilot.',
      related: ['explain'],
      docs: [D.msVs]
    },
    {
      key: 'generate', cmd: '/generate', args: 'QUESTION', cat: 'editor',
      summary: 'Generates code to answer a specified question.',
      detail: 'Use it when the desired outcome is new implementation rather than an explanation, fix, optimization, or test.',
      related: ['explain', 'fix', 'generateInstructions'],
      docs: [D.msVs]
    },
    {
      key: 'generateInstructions', cmd: '/generateInstructions', cat: 'author',
      requires: 'Chat window in a supporting Visual Studio release',
      summary: 'Generates a repository-wide Copilot instructions file.',
      detail: 'Creates a starting <code>.github/copilot-instructions.md</code> from the current solution so future chat requests inherit the project&rsquo;s conventions.',
      note: 'Microsoft documents this for its current Visual Studio release, not in the Visual Studio 2022 command table. It is not an inline-chat command.',
      related: ['generate', 'savePrompt'],
      docs: [D.msVs]
    },
    {
      key: 'savePrompt', cmd: '/savePrompt', cat: 'author',
      requires: 'An existing conversation in a supporting Visual Studio Chat window',
      summary: 'Extracts a reusable prompt from the current conversation.',
      detail: 'After Copilot responds, run the command without arguments, then choose the prompt file’s name. It saves <code>.github/prompts/[name].prompt.md</code> for reuse from the slash picker.',
      note: 'Documented in the current-release guidance, not the Visual Studio 2022 command table. This runs in the Chat window, not inline chat.',
      examples: ['/savePrompt'],
      related: ['generateInstructions', 'generate'],
      docs: [D.msVs]
    },
    {
      key: 'custom-prompt', cmd: '/<prompt name>', cat: 'author', flags: ['custom'], noCompare: true,
      requires: 'Saved prompt file and a supporting Visual Studio release',
      summary: 'Invokes a saved custom prompt from the Chat window.',
      detail: 'Save reusable prompts as <code>.github/prompts/*.prompt.md</code>. In current Visual Studio, type <code>/</code> to choose them from the top of the completion list, marked with a bookmark icon.',
      note: 'Microsoft’s Visual Studio 2022 guidance uses <code>#prompt:</code> or Add context to attach prompt files instead of documenting slash invocation.',
      examples: ['/review-api-changes'],
      related: ['savePrompt', 'generateInstructions'],
      docs: [D.msVs]
    }
  ]);

  /* ============================= XCODE ============================= */
  window.SLASH.register('xcode', [
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Provides an explanation for the selected code.',
      related: ['fix', 'simplify'], docs: [D.ghXcode]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Suggests fixes for code errors and typos.',
      related: ['explain', 'simplify'],
      docs: [D.ghXcode]
    },
    {
      key: 'doc', cmd: '/doc', cat: 'editor',
      summary: 'Generates documentation for this symbol.',
      related: ['explain', 'tests'],
      docs: [D.ghXcode]
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Creates a unit test for the current code selection.',
      related: ['doc', 'fix'],
      docs: [D.ghXcode]
    },
    {
      key: 'simplify', cmd: '/simplify', cat: 'editor',
      summary: 'Simplifies the current code selection.',
      detail: 'Requests a simpler version of the selected code. This is distinct from Visual Studio’s running-time-focused <code>/optimize</code>.',
      related: ['explain', 'fix'],
      docs: [D.ghXcode]
    }
  ]);

  /* ============================= GITHUB.COM ============================= */
  window.SLASH.register('web', [
    {
      key: 'new', cmd: '/new', cat: 'convo',
      summary: 'Starts a new conversation.',
      detail: 'Note the divergence: on github.com <code>/new</code> starts a conversation, while in VS Code the same command scaffolds a project. Same token, entirely different outcome.',
      related: ['clear', 'rename', 'delete'],
      docs: [D.ghWebSheet, D.ghWeb]
    },
    {
      key: 'clear', cmd: '/clear', cat: 'convo',
      summary: 'Clears the conversation.',
      related: ['new', 'delete'],
      docs: [D.ghWebSheet]
    },
    {
      key: 'rename', cmd: '/rename', cat: 'convo',
      summary: 'Renames a conversation.',
      related: ['new', 'delete'],
      docs: [D.ghWebSheet]
    },
    {
      key: 'delete', cmd: '/delete', cat: 'convo',
      summary: 'Deletes a conversation.',
      detail: 'A GitHub.com conversation-management command; it is not a source-code deletion action.',
      related: ['clear', 'rename'],
      docs: [D.ghWebSheet]
    }
  ]);
})();
