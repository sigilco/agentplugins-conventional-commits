import { definePlugin } from '@agentplugins/core';

export default definePlugin({
  name: 'conventional-commits',
  version: '0.1.0',
  description:
    'Slash command for drafting conventional commit messages from staged diffs.',
  license: 'MIT',

  // Target all Tier-1 harnesses
  targets: ['claude', 'codex', 'opencode', 'pimono'] as const,

  // Slash command — emits natively on every supported harness
  commands: [
    {
      name: 'cc',
      description:
        'Draft a conventional commit message from the currently staged diff',
      argumentHint: '',
      prompt: `Draft a conventional commit message for the staged changes.

1. Run \`git diff --staged --stat\` to see what files changed.
2. Run \`git diff --staged\` to see the actual changes.
3. Determine the type: feat, fix, docs, style, refactor, perf, test, chore, ci, build.
4. Determine the scope: the affected package or area. Omit if multiple areas.
5. Subject: imperative, lowercase, no period, ≤72 chars. Format: \`type(scope): subject\`.
6. Body (optional, wrap at 100 chars): explain WHY, not what.
7. Footer (optional): \`BREAKING CHANGE: <description>\` or \`Refs: #123\`.

Output format:
Staged files:
  <list>

Proposed commit:
  <subject>

  <body>

Run: git commit -m "<message>"
  [-m "<body>"]

If nothing is staged: output "Nothing staged. Run \`git add\` first." and stop.

Never run \`git commit\` yourself. The user reviews and runs it.`,
    },
  ],
});
