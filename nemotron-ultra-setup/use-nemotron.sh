#!/bin/bash
# Source this file (do not execute it): `source use-nemotron.sh`
# Requires NVIDIA_API_KEY to already be exported in your shell, or set in ~/.ccr_env.
#
# One-time setup per fresh machine/session:
#   mkdir -p ~/.claude-code-router
#   cp config.json ~/.claude-code-router/config.json
#   mkdir -p ~/ccr-nemotron && cd ~/ccr-nemotron && npm init -y && npm install @musistudio/claude-code-router@1.0.73
#   ln -sf ~/ccr-nemotron/node_modules/.bin/ccr ~/.local/bin/ccr   # or anywhere on PATH

if [ -z "$NVIDIA_API_KEY" ]; then
  if [ -f "$HOME/.ccr_env" ]; then
    source "$HOME/.ccr_env"
  else
    echo "Set NVIDIA_API_KEY first (export NVIDIA_API_KEY=nvapi-...) or create ~/.ccr_env with it."
    return 1 2>/dev/null || exit 1
  fi
fi

export NVIDIA_API_KEY
export NODE_USE_ENV_PROXY=1   # needed if you're behind a proxy-only sandbox (e.g. claude.ai cloud sessions)

if ! ccr status 2>/dev/null | grep -q "Running"; then
  ccr start
fi

export ANTHROPIC_BASE_URL="http://127.0.0.1:3456"
export ANTHROPIC_AUTH_TOKEN="test"
export ANTHROPIC_MODEL="nvidia/nemotron-3-ultra-550b-a55b"
export API_TIMEOUT_MS=600000
echo "Claude Code is now pointed at Nemotron Ultra via the local router."
