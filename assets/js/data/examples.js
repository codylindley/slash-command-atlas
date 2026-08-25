/* Canonical example overrides.
   Records with a strong inline example keep it. Commands that are normally
   invoked bare fall back to their command token. These overrides cover
   argument-bearing, dynamic, and otherwise ambiguous common cases. */

window.SLASH.exampleOverrides = Object.freeze({
  /* GitHub Copilot app */
  'app/model': '/model auto',
  'app/skills': '/skills reload',

  /* GitHub Copilot CLI */
  'cli/autopilot': [
    '/autopilot get the integration tests green',
    '/autopilot refactor the auth module --max-ai-credits 5'
  ],
  'cli/clear': '/clear review the caching layer from scratch',
  'cli/fork': '/fork alternate-cache-design',
  'cli/rename': '/rename oauth-token-rotation',
  'cli/resume': '/resume',
  'cli/session': '/session info',
  'cli/remote': '/remote on',
  'cli/worktree': '/worktree add rate limiting to the API',
  'cli/move': '/move rate-limit-api',
  'cli/add-dir': '/add-dir ../shared-schema',
  'cli/cwd': '/cwd ../service-api',
  'cli/search': '/search websocket timeout',
  'cli/refine': '/refine add retries to the upload handler without changing its API',
  'cli/review': '/review focus on error handling and missing tests',
  'cli/security-review': '/security-review focus on authentication and input validation',
  'cli/rubber-duck': '/rubber-duck does this migration preserve backwards compatibility?',
  'cli/research': '/research zero-downtime Postgres major version upgrades',
  'cli/pr': '/pr create',
  'cli/delegate': '/delegate add OAuth login and open a pull request',
  'cli/fleet': '/fleet add tests for every parser in src/parsers',
  'cli/skills': '/skills list',
  'cli/plugins': '/plugins list',
  'cli/mcp': '/mcp list',
  'cli/extensions': '/extensions manage',
  'cli/lsp': '/lsp show',
  'cli/limits': '/limits set max-ai-credits 5',
  'cli/theme': '/theme github',
  'cli/voice': '/voice on',
  'cli/permissions': '/permissions show',
  'cli/allow-all': '/allow-all',
  'cli/sandbox': '/sandbox policy',
  'cli/chronicle': '/chronicle standup',
  'cli/share': '/share file session',
  'cli/clikit': '/clikit quota',
  'cli/tuikit': '/tuikit colors',
  'cli/user': '/user switch',
  'cli/downgrade': '/downgrade 1.0.70',
  'cli/experimental': '/experimental show',

  /* GitHub Copilot editor and web surfaces */
  'vscode/custom-skill': '/webapp-testing',
  'vscode/custom-prompt': '/create-release-notes',
  'jetbrains/chronicle': '/chronicle standup',
  'visualstudio/generate': '/generate an async method that retries transient HTTP failures',
  'visualstudio/savePrompt': '/savePrompt review-api-changes',

  /* Claude Code CLI; Desktop inherits these unless overridden below */
  'claude-cli/background': '/background finish the test run and summarize any failures',
  'claude-cli/clear': '/clear auth-cleanup',
  'claude-cli/branch': '/branch alternate-cache-design',
  'claude-cli/resume': '/resume oauth-token-rotation',
  'claude-cli/color': '/color blue',
  'claude-cli/context': '/context all',
  'claude-cli/simplify': '/simplify src/auth',
  'claude-cli/fast': '/fast on',
  'claude-cli/advisor': '/advisor opus',
  'claude-cli/custom-skill': '/review-api src/auth',
  'claude-cli/mcp-prompt': '/mcp__github__triage issue 1234',
  'claude-cli/plugin': '/plugin list',
  'claude-cli/reload-plugins': '/reload-plugins',
  'claude-cli/mcp': '/mcp',
  'claude-cli/tui': '/tui fullscreen',
  'claude-cli/voice': '/voice hold',
  'claude-cli/bug': '/bug MCP tools disappear after compaction',
  'claude-cli/feedback': '/feedback add keyboard navigation to the session picker',
  'claude-cli/claude-api': '/claude-api migrate',
  'claude-cli/design-sync': '/design-sync component-library',

  /* Claude Code surface-specific behavior */
  'claude-app/config': '/config',
  'claude-vscode/bug': '/bug MCP tools disappear after compaction',
  'claude-vscode/feedback': '/feedback add keyboard navigation to the session picker',
  'claude-web/fast': '/fast on',
  'claude-web/mcp': '/mcp',
  'claude-web/reload-plugins': '/reload-plugins',

  /* OpenAI Codex */
  'codex-app/custom-prompt': '/prompts:review-pr',
  'codex-cli/custom-prompt': '/prompts:review-pr focus=security',
  'codex-cli/personality': '/personality pragmatic',
  'codex-cli/raw': '/raw on',
  'codex-cli/pets': '/pets',
  'codex-ide/custom-prompt': '/prompts:review-pr focus=security'
});
