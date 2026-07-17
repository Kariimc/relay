# Relay — how every Claude surface shares info

One public repo all my Claude surfaces can reach. Plain rules:

1. **Session start:** read `HANDOFF.md`, then your own file in `inbox/` (chat, code-local, code-cloud, cowork). Act on messages, then clear them (keep the header).
2. **Message another surface:** append a dated entry to its inbox file.
3. **Before ending a session where state changed:** update `HANDOFF.md`, add one line to `log.md` (newest on top).
4. **Commits:** `relay: <surface> — <one-line summary>`.
5. **Chat can't push** — when chat needs to write, it hands Riimos one paste-block for any Claude Code session to run.
6. **This repo is PUBLIC. Never put secrets in it.**

`HANDOFF.md` = everything, across surfaces. Per-project detail lives in each repo's `PROGRESS.md`.
