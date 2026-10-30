# Using NVIDIA Nemotron Ultra as a Claude Code model backend

This wires Claude Code to NVIDIA's hosted Nemotron Ultra model instead of Claude,
via a local proxy (`claude-code-router`) that translates between Claude Code's
Anthropic-format API calls and NVIDIA's OpenAI-compatible API.

**Reality check first:** Claude Code's system prompt and tool-calling format are
tuned for Claude models. Routing it to a different model works for getting
responses, but expect tool-use reliability and coding quality to be noticeably
worse than using Claude Code normally.

## Model note

The originally-requested model, `nvidia/llama-3.1-nemotron-ultra-253b-v1`, has
its hosted "Free Endpoint" **deprecated** by NVIDIA (confirmed on its
build.nvidia.com page under Model Availability). Every API call to it returns
a 404 `Function ... Not found for account` error — this is NOT an account
permission problem, the endpoint is simply gone.

We switched to NVIDIA's current flagship instead:
**`nvidia/nemotron-3-ultra-550b-a55b`** — confirmed working.

If that one also gets deprecated someday, check `/v1/models` on your key to
see what's currently live:
```bash
curl -s https://integrate.api.nvidia.com/v1/models \
  -H "Authorization: Bearer $NVIDIA_API_KEY" | python3 -m json.tool
```

## One-time setup (per machine / fresh cloud session)

1. Get an API key from a model's page on build.nvidia.com (e.g.
   https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b), via its own
   "Get API Key" button — this also forces you through any terms-of-use
   acceptance for that model.

2. Save it somewhere **not committed to git**:
   ```bash
   mkdir -p ~/.local/bin
   cat > ~/.ccr_env <<'EOF'
   export NVIDIA_API_KEY="nvapi-...your-key..."
   EOF
   chmod 600 ~/.ccr_env
   ```

3. Install `claude-code-router` (the 1.0.x line, which uses a plain JSON
   config — the 2.x/3.x line requires a browser UI and doesn't work headless):
   ```bash
   mkdir -p ~/ccr-nemotron && cd ~/ccr-nemotron
   npm init -y
   npm install @musistudio/claude-code-router@1.0.73
   ln -sf ~/ccr-nemotron/node_modules/.bin/ccr ~/.local/bin/ccr
   ```

4. Copy the config from this folder:
   ```bash
   mkdir -p ~/.claude-code-router
   cp config.json ~/.claude-code-router/config.json
   ```

5. If you're in a sandboxed environment where outbound traffic goes through a
   local proxy (e.g. claude.ai cloud sessions), you may need to open network
   access to `integrate.api.nvidia.com` in that environment's network
   settings. You may also need `NODE_USE_ENV_PROXY=1` (already set by
   `use-nemotron.sh`) because Node's built-in `fetch` doesn't read
   `HTTPS_PROXY` by default on versions before this was addressed.

## Using it

Each new shell/session:
```bash
source use-nemotron.sh
claude
```

This starts the router (if not already running) and points Claude Code's
`ANTHROPIC_BASE_URL` / `ANTHROPIC_MODEL` env vars at it for that shell only.

To stop the router: `ccr stop`
To check status: `ccr status`
Logs: `~/.claude-code-router/logs/` and `~/.claude-code-router/claude-code-router.log`

## Security note

Never commit `~/.ccr_env` or any file containing the raw `nvapi-...` key.
`config.json` in this folder uses `$NVIDIA_API_KEY` interpolation precisely so
the real key never needs to be written into a tracked file.
