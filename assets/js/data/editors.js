/* Copilot Chat in the editors and on the web.
   VS Code follows Microsoft's own cheat sheet; the remaining IDEs and github.com follow
   GitHub's Copilot Chat cheat sheet. Longer explanations are editorial. */

(function () {
  var V = 'https://code.visualstudio.com/docs/copilot/';
  var G = 'https://docs.github.com/en/copilot/';
  var D = {
    vsRef:    ['VS Code Copilot cheat sheet', V + 'reference/copilot-vscode-features'],
    vsChat:   ['Chat in VS Code', V + 'chat/copilot-chat'],
    vsInline: ['Inline chat', V + 'chat/inline-chat'],
    vsAgent:  ['Agent mode', V + 'chat/chat-agent-mode'],
    vsCtx:    ['Adding context to chat', V + 'chat/copilot-chat-context'],
    vsInstr:  ['Custom instructions', V + 'customization/custom-instructions'],
    vsPrompt: ['Prompt files', V + 'customization/prompt-files'],
    vsAgents: ['Custom agents', V + 'customization/custom-agents'],
    ghIde:    ['Chat with Copilot in your IDE', G + 'how-tos/chat-with-copilot/chat-in-ide'],
    ghWeb:    ['Chat with Copilot on GitHub', G + 'how-tos/copilot-on-github/chat-with-copilot/chat-in-github'],
    ghSheet:  ['Copilot Chat cheat sheet', G + 'reference/chat-cheat-sheet']
  };

  /* ============================= VS CODE ============================= */
  window.SLASH.register('vscode', [

    /* editor actions */
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Explains a code block, a file, or a programming concept.',
      detail: 'The workhorse. With a selection it explains that code; with nothing selected it explains the active file; with neither it will happily explain a concept. Pairs well with a <code>#</code> reference when the thing you want explained is not what is currently on screen.',
      examples: ['/explain what does this reducer do when the action is unknown?'],
      related: ['fix', 'doc', 'tests'],
      docs: [D.vsChat]
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
      key: 'setupTests', cmd: '/setupTests', cat: 'editor',
      summary: 'Helps set up a testing framework for your project.',
      detail: 'Recommends a framework suited to the codebase, walks through configuring it, and suggests relevant VS Code testing extensions. The command to run before <code>/tests</code> in a project that has no test setup yet.',
      related: ['tests', 'fixTestFailure']
    },
    {
      key: 'fixTestFailure', cmd: '/fixTestFailure', cat: 'editor',
      summary: 'Finds and fixes a failing test.',
      note: 'Listed in GitHub’s Copilot Chat cheat sheet for VS Code. It does not appear in the current VS Code reference, so treat it as legacy &mdash; check the picker in your build.',
      related: ['tests', 'fix'],
      docs: [D.ghSheet]
    },
    {
      key: 'startDebugging', cmd: '/startDebugging', cat: 'editor',
      summary: 'Generates a launch.json configuration and starts a debugging session.',
      detail: 'Skips the part of debugging everyone dislikes: writing the launch configuration by hand.',
      related: ['fix', 'debug']
    },
    {
      key: 'search', cmd: '/search', cat: 'editor',
      summary: 'Generates a search query for the Search view from natural language.',
      detail: 'Describe what you are looking for and it composes the regex or glob for you, then hands it to the Search view rather than answering itself.',
      examples: ['/search every call to fetch that does not check response.ok'],
      related: ['explain']
    },
    {
      key: 'new', cmd: '/new', cat: 'editor',
      summary: 'Scaffolds a new VS Code workspace or file.',
      detail: 'Describe the project or file you want and preview the scaffolded content before anything is created.',
      examples: ['/new an Express API with TypeScript and Vitest'],
      related: ['newNotebook', 'init']
    },
    {
      key: 'newNotebook', cmd: '/newNotebook', cat: 'editor',
      summary: 'Scaffolds a new Jupyter notebook from your requirements.',
      related: ['new']
    },

    /* planning & context */
    {
      key: 'plan', cmd: '/plan', cat: 'context',
      summary: 'Creates a detailed implementation plan for a complex coding task.',
      detail: 'Researches the requirements, asks clarifying questions, and produces a structured plan with steps, verification and decisions. Equivalent to selecting the <strong>Plan</strong> agent from the agents dropdown.',
      related: ['init', 'agents'],
      docs: [D.vsAgent]
    },
    {
      key: 'init', cmd: '/init', cat: 'context',
      summary: 'Generates or updates workspace instructions from your project structure.',
      detail: 'Writes <code>copilot-instructions.md</code> or <code>AGENTS.md</code> based on the project’s structure and coding patterns, so every later chat starts with your conventions already in context.',
      related: ['instructions', 'plan'],
      docs: [D.vsInstr]
    },

    /* session */
    {
      key: 'clear', cmd: '/clear', cat: 'session',
      summary: 'Starts a new chat session in the Chat view.',
      related: ['compact', 'fork']
    },
    {
      key: 'compact', cmd: '/compact', cat: 'session',
      summary: 'Compacts the conversation context by summarizing it.',
      detail: 'For when a conversation has grown past what the model’s context window can hold comfortably.',
      related: ['clear', 'fork']
    },
    {
      key: 'fork', cmd: '/fork', cat: 'session',
      summary: 'Forks the chat session into a new independent session that inherits the full history.',
      detail: 'Lets you branch off to try something without losing the thread you were on.',
      related: ['clear', 'compact']
    },

    /* diagnostics */
    {
      key: 'debug', cmd: '/debug', cat: 'diag',
      summary: 'Opens the Chat Debug view to inspect chat logs.',
      related: ['troubleshoot', 'startDebugging']
    },
    {
      key: 'troubleshoot', cmd: '/troubleshoot', cat: 'diag',
      summary: 'Asks the AI to analyze the agent debug logs for this chat session.',
      detail: 'Optionally include <code>#session</code> to select and diagnose a previous session instead. Requires the agent debug log setting to be enabled.',
      examples: [
        '/troubleshoot how many tokens did I use?',
        '/troubleshoot list all paths you tried to load customizations in #session'
      ],
      related: ['debug']
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Quick reference and basics of using Copilot.',
      note: 'Listed in GitHub’s cheat sheet for VS Code, Visual Studio, JetBrains and Xcode. It is not in the current VS Code reference &mdash; check the picker in your build.',
      docs: [D.ghSheet]
    },

    /* customization authoring */
    {
      key: 'instructions', cmd: '/instructions', cat: 'author',
      summary: 'Configures your custom instructions.',
      detail: 'Custom instructions are the standing rules Copilot reads on every request in this workspace &mdash; conventions, stack, things never to do.',
      related: ['create-instruction', 'init', 'prompts'],
      docs: [D.vsInstr]
    },
    {
      key: 'prompts', cmd: '/prompts', cat: 'author',
      summary: 'Configures your reusable prompt files.',
      detail: 'Prompt files turn a prompt you keep retyping into a command. Once saved, a prompt file is invocable as <code>/its-name</code>.',
      related: ['create-prompt', 'custom-prompt', 'instructions'],
      docs: [D.vsPrompt]
    },
    {
      key: 'skills', cmd: '/skills', cat: 'author',
      summary: 'Configures your agent skills.',
      detail: 'Skills package instructions and supporting files into a capability the agent can invoke. A skill file also becomes a slash command of the same name.',
      related: ['create-skill', 'custom-skill', 'agents']
    },
    {
      key: 'agents', cmd: '/agents', cat: 'author',
      summary: 'Configures your custom agents.',
      detail: 'Custom agents define how the agent operates &mdash; its tools, its model, its instructions. A common use is a read-only planning agent that cannot edit anything.',
      related: ['create-agent', 'plan', 'skills'],
      docs: [D.vsAgents]
    },
    {
      key: 'hooks', cmd: '/hooks', cat: 'author',
      summary: 'Configures your hooks.',
      detail: 'Hooks run your own commands at defined points in the agent loop &mdash; formatting after an edit, blocking a tool call, logging what happened.',
      related: ['create-hook', 'agents']
    },
    {
      key: 'create-instruction', cmd: '/create-instruction', cat: 'author',
      summary: 'Generates an instructions file with AI assistance in Agent mode.',
      related: ['instructions', 'init'],
      docs: [D.vsInstr]
    },
    {
      key: 'create-prompt', cmd: '/create-prompt', cat: 'author',
      summary: 'Generates a prompt file with AI assistance in Agent mode.',
      related: ['prompts', 'custom-prompt'],
      docs: [D.vsPrompt]
    },
    {
      key: 'create-skill', cmd: '/create-skill', cat: 'author',
      summary: 'Generates an agent skill with AI assistance in Agent mode.',
      related: ['skills', 'custom-skill']
    },
    {
      key: 'create-agent', cmd: '/create-agent', cat: 'author',
      summary: 'Generates a custom agent with AI assistance in Agent mode.',
      related: ['agents'],
      docs: [D.vsAgents]
    },
    {
      key: 'create-hook', cmd: '/create-hook', cat: 'author',
      summary: 'Generates a hook configuration with AI assistance in Agent mode.',
      related: ['hooks']
    },
    {
      key: 'custom-skill', cmd: '/<skill name>', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Runs one of your own agent skills by name.',
      detail: 'Any skill file becomes a slash command. A skill saved as <code>webapp-testing.md</code> is invoked as <code>/webapp-testing</code>. This is the mechanism that makes VS Code’s command set effectively open-ended &mdash; and it is why your picker will not match anyone else’s.',
      related: ['skills', 'create-skill', 'custom-prompt']
    },
    {
      key: 'custom-prompt', cmd: '/<prompt name>', cat: 'author', flags: ['custom'], noCompare: true,
      summary: 'Runs one of your reusable prompt files by name.',
      related: ['prompts', 'create-prompt', 'custom-skill'],
      docs: [D.vsPrompt]
    },

    /* permissions */
    {
      key: 'yolo', cmd: '/yolo', aliases: ['/autoApprove'], cat: 'perms',
      summary: 'Enables global auto-approval of all tool calls.',
      detail: 'Shows a warning dialog the first time, and for good reason: it approves every tool call in every workspace, including terminal commands.',
      note: 'This is a global setting, not a per-session one. <code>/disableYolo</code> turns it back off.',
      related: ['disableYolo']
    },
    {
      key: 'disableYolo', cmd: '/disableYolo', aliases: ['/disableAutoApprove'], cat: 'perms',
      summary: 'Disables global auto-approval of tool calls.',
      related: ['yolo']
    }
  ]);

  /* ============================= JETBRAINS ============================= */
  window.SLASH.register('jetbrains', [
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Explains how the code in your active editor works.',
      related: ['fix', 'tests'], docs: [D.ghIde]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Proposes a fix for problems in the selected code.',
      related: ['explain', 'tests'], docs: [D.ghIde]
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Generates unit tests for the selected code.',
      related: ['explain', 'fix'], docs: [D.ghIde]
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Quick reference and basics of using Copilot.',
      related: ['explain']
    },
    {
      key: 'chronicle', cmd: '/chronicle', args: '<standup|tips|search|improve>', cat: 'history',
      requires: 'Copilot CLI session',
      summary: 'Reviews and analyzes your session history.',
      detail: 'Available because you are running a Copilot CLI session inside JetBrains, not because the JetBrains plugin provides it. The same subcommands as the CLI: <code>standup</code>, <code>tips</code>, <code>search</code> and <code>improve</code>.',
      related: ['compact', 'remote'],
      docs: [['Chronicle', G + 'how-tos/copilot-cli/use-copilot-cli/chronicle']]
    },
    {
      key: 'compact', cmd: '/compact', cat: 'session', requires: 'Copilot CLI session',
      summary: 'Compresses the current CLI session context to keep a long session manageable.',
      related: ['chronicle', 'remote']
    },
    {
      key: 'remote', cmd: '/remote', cat: 'session', requires: 'Copilot CLI session',
      summary: 'Enables or manages remote control of the current session.',
      detail: 'Lets you reach the session from GitHub.com or GitHub Mobile. CLI-session only.',
      related: ['chronicle', 'compact']
    }
  ]);

  /* ============================= VISUAL STUDIO ============================= */
  window.SLASH.register('visualstudio', [
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Explains how the code in your active editor works.',
      related: ['fix', 'doc', 'optimize'], docs: [D.ghIde]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Proposes a fix for problems in the selected code.',
      related: ['explain', 'optimize'], docs: [D.ghIde]
    },
    {
      key: 'doc', cmd: '/doc', cat: 'editor',
      summary: 'Adds a documentation comment for this symbol.',
      related: ['explain', 'tests']
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Generates unit tests for the selected code.',
      related: ['doc', 'fix']
    },
    {
      key: 'optimize', cmd: '/optimize', cat: 'editor',
      summary: 'Analyzes and improves the running time of the selected code.',
      detail: 'Unique to Visual Studio &mdash; no other Copilot surface exposes a performance command by this name.',
      related: ['explain', 'fix']
    },
    {
      key: 'help', cmd: '/help', cat: 'diag',
      summary: 'Quick reference and basics of using Copilot.',
      related: ['explain']
    }
  ]);

  /* ============================= XCODE ============================= */
  window.SLASH.register('xcode', [
    {
      key: 'explain', cmd: '/explain', cat: 'editor',
      summary: 'Provides an explanation for the selected code.',
      related: ['fix', 'simplify'], docs: [D.ghIde]
    },
    {
      key: 'fix', cmd: '/fix', cat: 'editor',
      summary: 'Suggests fixes for code errors and typos.',
      related: ['explain', 'simplify']
    },
    {
      key: 'doc', cmd: '/doc', cat: 'editor',
      summary: 'Generates documentation for this symbol.',
      related: ['explain', 'tests']
    },
    {
      key: 'tests', cmd: '/tests', cat: 'editor',
      summary: 'Creates a unit test for the current code selection.',
      related: ['doc', 'fix']
    },
    {
      key: 'simplify', cmd: '/simplify', cat: 'editor',
      summary: 'Simplifies the current code selection.',
      detail: 'Unique to Xcode. Closest in spirit to Visual Studio’s <code>/optimize</code>, but aimed at readability rather than running time.',
      related: ['explain', 'fix']
    }
  ]);

  /* ============================= GITHUB.COM ============================= */
  window.SLASH.register('web', [
    {
      key: 'new', cmd: '/new', cat: 'convo',
      summary: 'Starts a new conversation.',
      detail: 'Note the divergence: on github.com <code>/new</code> starts a conversation, while in VS Code the same command scaffolds a project. Same token, entirely different outcome.',
      related: ['clear', 'rename', 'delete'],
      docs: [D.ghWeb]
    },
    {
      key: 'clear', cmd: '/clear', cat: 'convo',
      summary: 'Clears the conversation.',
      related: ['new', 'delete']
    },
    {
      key: 'rename', cmd: '/rename', cat: 'convo',
      summary: 'Renames a conversation.',
      related: ['new', 'delete']
    },
    {
      key: 'delete', cmd: '/delete', cat: 'convo',
      summary: 'Deletes a conversation.',
      detail: 'The only Copilot surface with a delete command in the slash picker.',
      related: ['clear', 'rename']
    }
  ]);
})();
