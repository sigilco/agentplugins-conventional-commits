# agentplugins-conventional-commits

> **Draft a conventional commit message from staged changes with `/cc`.**

An [AgentPlugins](https://github.com/sigilco/agentplugins) slash-command plugin that works across Claude Code, Codex, OpenCode, and Pi Mono.

## Usage

Stage some changes and run:

```
/cc
```

The agent inspects `git diff --staged`, picks a type and scope, and proposes a `type(scope): subject` commit message. It never commits for you.

## Supported platforms

- Claude Code
- Codex
- OpenCode
- Pi Mono

## Development

```bash
# Install dependencies
pnpm install

# Validate the plugin manifest
pnpm run validate

# Build for all targets
pnpm run build
```

## Installation

After building, install the output for your agent harness:

### Claude Code
```bash
cp -r dist/claude ~/.claude/skills/conventional-commits
```

### Codex
```bash
cp -r dist/codex ~/.codex/plugins/
```

### OpenCode
```bash
cp dist/opencode/*.ts .opencode/plugins/
```

### Pi Mono
```bash
cp -r dist/pimono ~/.pi/agent/extensions/
```

## License

MIT
