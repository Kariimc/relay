# HANDOFF — global state (read me first)
Updated: 2026-07-08 from code-local (Windows). Paste this into any Claude session (chat, Claude Code, Cowork) and it has full context. Read the LATEST block first; sections 2-6 below are older context, corrected by LATEST where they conflict.

## LATEST -- where we left off (2026-07-08)
The Fable-5 extraction deadline has passed. The standing mission is now **sell the workshop, don't keep building it**: ship a first paying customer for neon-forge-ui (a paid dark-mode React component library, $39 launch), then productized Claude-Code control-plane setups ($99-199). 12-month target $50k. Advisor plan v1 with real numbers: `~/.claude/advisor/goals.md`. The full ranked plan + a live STATUS-tracked queue is `xavier-agentic-os/data/roadmap-2026-07-consultant-audit.md`, mirrored into that repo's `PROGRESS.md` "Business queue".

Done this session (all verified): Higgsfield token rotated + verified live; the brain, `~/.claude`, and XAVIER `data/` are backed up off-machine (private `Kariimc/brain` repo + a thumbdrive labeled `XAVIER-BAK`, hourly auto-backup task + Desktop launcher); XAVIER loaded with the real flagship workload (`data/projects/flagship.json` + a human-gated inbox); and the 9PM `evening-debrief` was hardened (detached-HEAD guard + a shared git lock + honest success/failure logging + UTF-8 logs).

Only-Kariim next steps (nothing agent-actionable is open): run "advisor, interview me"; then review and send the offer one-pager (`xavier-agentic-os/data/offer-neon-forge.md`) to 10 people.

Corrections to the older notes below: the second brain is `C:\Users\Kariim\Dev\brain` (NOT `C:\Dev\brain`) and now HAS a git remote + backup; the Relay is already built (this repo); in `xavier-agentic-os` every git WRITE goes through `scripts\git-lock.ps1` (see that repo's CLAUDE.md "Named Mistakes" #16 -- two sessions writing git at once left the repo tangled once). Authoritative per-repo handoffs: xavier-agentic-os -> `PROGRESS.md`; brain -> `wiki/user-primer.md`.

## 1. Who you're working for and how
Riimos (GitHub: Kariimc), solo developer. Communicates by voice-to-text — silently fix speech artifacts ("table five" = "Fable 5"). Rules of engagement: answer first, zero preamble; plain everyday language, every technical term explained in the same breath; act by default, stop only for credentials, genuinely unclear intent, or design/project-breaking risk; every deliverable is ONE copy-paste artifact, never a checklist; do all legwork yourself — the only hard wall is writing to his local machine or pushing to his GitHub (name it in one line); "done" means 100% working, zero bugs; never bring up other projects unprompted; all Kariimc repos are public — fetch them directly, never ask for paths or screenshots.

## 2. The mission right now
Deadline: **July 7, 2026** — bank maximum durable value from Claude Fable 5 before usage-based pricing. Strategy: lasting artifacts, portable skills files, and automation infrastructure that keeps working after the deadline.

**Current task: build the Relay** — a cross-surface communication system so Claude in the desktop app, claude.ai chat, local Claude Code (Windows), cloud Claude Code, and Steam Deck can all share state and message each other. Full build spec is in `relay-build-prompt.md` (delivered alongside this file). If you are a Claude Code session: execute that prompt. If you are chat: the repo is `Kariimc/relay`; read `HANDOFF.md` there for live state once it exists.

### Relay design in one paragraph
GitHub is the only store every surface can reach, so the Relay is a small **public** repo `Kariimc/relay`: `HANDOFF.md` (single source of truth for global state), `inbox/<surface>.md` (per-surface mailboxes: chat, code-local, code-cloud, cowork, steamdeck), `log.md` (append-only one-liners). Protocol: read HANDOFF + your inbox at session start; act and clear your inbox; write to another surface's inbox to message it; update HANDOFF + log before ending a session where state changed. Chat can't push, so when chat needs to write it hands Riimos one paste-block for any Claude Code session to run. Rule `rules/08-relay.md` in `Kariimc/my-skills` makes every Claude Code session do this automatically via the existing SessionStart hook. Public repo = never put secrets in it.

## 3. Infrastructure that ALREADY EXISTS — do not rebuild any of it
- **`Kariimc/my-skills`** — 398+ skills repo, deploys to `~/.claude/` via SessionStart hook + `install-global.sh`. Rules concatenate into global CLAUDE.md: `rules/00-communication-style.md` (plain-language voice), `rules/idp-control-plane.md` (engineering process), `rules/07-progress-file.md` (auto-read PROGRESS.md), and — once the Relay build runs — `rules/08-relay.md`.
- **PROGRESS.md system** — per-repo handoff file auto-read each session (rule 07), owned by the `project-context-loader` skill. Relay is the layer above it: PROGRESS.md = one project's state; Relay = everything, across surfaces.
- **`cloud-setup-prompt.md`** — pattern for one-paste GitHub-side setup via cloud Claude Code (proven; reuse the pattern).
- **claude-eyes** — screen-capture toolkit (`eyes_watch.py` clipboard watcher + `eyes_video.py` frame extractor), deployed on the Windows machine with autostart.
- **Second brain** — six skills (`add-new-resource`, `sync-sessions`, `sync-ecosystem-data`, `sync-curated-content`, `data-ingestion`, `improve-system`) merged via PR #18; private store at `C:\Dev\brain`.
- **Higgsfield** — default asset source, MCP-connected in Claude Code. Discipline: small sequential batches; `soul_location` for environments, `nano_banana_2` for stylized characters; download CloudFront URLs same session; free-unlimited models on the Higgsfield site as fallback.

## 4. Active projects
| Project | Location | State | Next step |
|---|---|---|---|
| Relay (this task) | `Kariimc/relay` (to be created) | Spec complete, not yet built | Run `relay-build-prompt.md` in Claude Code |
| HoopClone (NBA sim, Godot) | `C:\Dev\hoopclone` (outside OneDrive — path corruption history; keep it there) | Sprints 1–4 done: arena, court, player movement, crowd shader bowl, broadcast camera. `PROGRESS.md` + `CLAUDE.md` in repo | Sprint 5: Ball node, box score, crowd reactions |
| my-skills / rules | `Kariimc/my-skills` | Live on all machines | Add rule 08 + relay skill (part of Relay build) |
| Second brain | `C:\Dev\brain` + skills in my-skills | Live | — |
| claude-eyes | Windows machine, autostarted | Live | — |

## 5. Open decisions / things only Riimos can provide
- Pushing to Kariimc repos and writing to his local disk require his machine or credentials — deliver one paste-block when you hit that wall.
- Nothing else is blocked. Execute.

## 6. How to hand off when YOU finish
Update `HANDOFF.md` in `Kariimc/relay` (once it exists), add one line to `log.md`, and if the next step belongs to a different surface, drop a message in that surface's inbox. Until the relay exists, regenerate this file with your changes and give it to Riimos as the handoff.
