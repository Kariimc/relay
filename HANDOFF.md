# HANDOFF — global state (read me first)
Updated: 2026-07-09 from code-local (Windows). Paste this into any Claude session (chat, Claude Code, Cowork) and it has full context. Read the LATEST block first; sections 2-6 below are older context, corrected by LATEST where they conflict.

## LATEST -- where we left off (2026-07-09)
**Flow State performance mission active 2026-07-11 on `perf/reliability-baseline`.** The sharpened goal is measurable competitor-leading responsiveness, verified control reliability, and ten evidence-backed differentiators; never claim faster or exclusive without matching proof. First two slices: `deliver_text()` inserts before history persistence and survives ordinary storage errors; overlay polling dropped from 100 ms to 20 ms; `sounddevice` is lazy-loaded in parallel with the speech model. Clean-process import+engine-warm raw samples: old 10048.0/4232.6/4413.4 ms, new 3476.3/3416.2/3046.1 ms; median improved 4413.4 to 3416.2 ms (22.6%). Full desktop suite is 17 tests OK in 15.657s, covering all 9 Hub pages and all 11 page-specific command buttons; 6 files compile. Tk tests must run outside the sandbox (real Tcl/Tk is 8.6.12). Wargame: `wargames/flow-state-performance.md`. Next: live Notepad stop-to-insert median/p95, repo benchmark command, then rank/spec the ten differentiators from refreshed community/competitor evidence.

**The advisor interview ran and REORDERED the mission.** Authoritative plan is `~/.claude/advisor/goals.md` **v2**: **income-first, products-as-proof.** Reality that drove it: income $0, ~3-month runway, $3k/month floor. Belief ranking of income streams: 1) freelance, 2) a stable tech job, 3) products, 4) content. So it is NO LONGER "sell neon-forge first" — the mission is **land paid freelance work and/or a tech job fast** (goal 1: first paid client OR job offer by ~Aug 20), and ship neon-forge + Just-a-pinch as *portfolio proof* that makes him hireable/findable. The gap the interview named is **proof + distribution**, not skill. 12-month target still $50k (~$3k/mo floor + growth). The live STATUS-tracked queue is `xavier-agentic-os/data/roadmap-2026-07-consultant-audit.md` (see its STRATEGY UPDATE banner) + that repo's `PROGRESS.md` "Business queue" — both updated to v2 this session.

Done + verified across sessions: Higgsfield token rotated + verified live; brain, `~/.claude`, and XAVIER `data/` backed up off-machine (private `Kariimc/brain` repo + `XAVIER-BAK` thumbdrive, hourly task + Desktop launcher); XAVIER loaded with the real workload; the 9PM `evening-debrief` hardened (detached-HEAD guard + shared git lock + honest logging + UTF-8); and now the **advisor interview is DONE (goals v2)**.

Backup state: the temporary Desktop evacuation folder `C:\Users\Kariim\Desktop\backup` was moved back to the thumbdrive as `E:\backup` on 2026-07-09; verified 239 files / 1,807,658 bytes and Desktop source removed. Keep using the `XAVIER-BAK` thumbdrive backup flow, but note this drive may currently be unlabeled after repair.

Claude Eyes desktop launcher finished on 2026-07-09: `C:\Users\Kariim\Desktop\Claude Eyes.lnk` targets `C:\Users\Kariim\Dev\claude-eyes\start-eyes.bat` and uses the revised all-seeing-eye `eye.ico` (smaller eye seated at the pyramid peak). Target and icon verified.


Flow State icon polish shipped on 2026-07-09: commit `2fb2649` replaced the cheap icon pass with antialiased Desktop/tray artwork. Desktop `models\flow.ico` now has the red F in front of the waveform and graph-paper background. Tray `models\flow-tray.ico` is a shaded grey microphone with the red F centered in the mic head. Commit `de4e596` centers the floating waveform bar's mic badge inside the 26px pill. Verification: `python -m py_compile flow.py` passed; generated preview PNGs and size sheets in Codex outputs; GUI screenshot helper could not reliably capture the transparent overlay, so geometry was verified by the centered coordinates in code.

Flow State rename + roadmap shipped on 2026-07-09: local repo is `C:\Users\Kariim\flow-state`, GitHub remote is `https://github.com/Kariimc/Flow-State.git`, commit `fd854a7` (`Add full Flow State hub options roadmap`) is pushed to `main`. Treat old "Whisper clone" wording as stale. Shipped: modern Hub in `flow_hub.py` with graph-paper light mode, charcoal graph-paper dark mode, heavy red F brand, red toggle knobs on neutral tracks, aligned sidebar icons, and pages for History, Dictionary, General, Dictation, Audio & mic, Appearance, Privacy, Files & meetings, and Statistics. Added `flow_features.py` + `test_flow_features.py` for local polish/profiles, vocabulary casing, selected-text commands, WAV read/transcription helper, JSONL history with owned audio retention, stats, and guarded deletion. Desktop shortcut now targets `C:\Users\Kariim\flow-state\.venv\Scripts\pythonw.exe` with `"C:\Users\Kariim\flow-state\flow.py" --hub`, working dir `C:\Users\Kariim\flow-state`, icon `models\flow.ico,0`; tray uses the same icon. Verification: real repo `py_compile` passed, `C:\Users\Kariim\flow-state\.venv\Scripts\python.exe -m unittest -v test_flow_features.py` ran 13 tests OK, Tk smoke captured 9 light pages + 2 dark pages, shortcut target/icon verified. Remaining manual follow-up: restart Flow State and run one live Notepad dictation; optional future scope is local-LLM deep clean.

Only-Kariim next step (nothing agent-actionable is open): review + send the offer one-pager (`xavier-agentic-os/data/offer-neon-forge.md`) — under v2 it doubles as proof/distribution. Everything else on the queue is DONE, BLOCKED-SCOPE (needs the Windows box), or a Kariim decision.

MCP note: most claude.ai connector / plugin MCP servers (Notion, Figma, Supabase, Asana, Linear, etc.) are unauthenticated and unusable until Kariim connects them. Deliberately NOT bulk-connecting them (control-plane freeze / Stop-2): authenticate a server only when a paying task actually needs it, via `/mcp` in an interactive Claude Code session or claude.ai → Settings → Connectors.

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
