/* OpenAI confirms that ChatGPT web has its own composer command menu but does
   not publish an inventory for it. Keep the surface explicit and empty rather
   than copying commands from the desktop app, CLI, or IDE extension. */

window.SLASH.register('codex-web', []);
