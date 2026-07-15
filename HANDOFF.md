# HANDOFF — global state (read me first)
Updated: 2026-07-14 by code-local (Windows). Paste this into any Claude session (chat, Claude Code, Cowork) and it has full context. Read the LATEST block first; sections 2-6 below are older context, corrected by LATEST where they conflict.

## LATEST -- where we left off (2026-07-14)
**FLOW STATE ACCURACY LEARNING LANDED ON MAIN (2026-07-14).** Kariim approved
"land it on main it's good." Feature commit 3ce2439 and docs commit a91437e
merged at 3a80d55; exact merged-state handoff is d425e3e. Local and origin main
match at d425e3e. The exact merge passed 120 tests in 89.931s, including 19
native Tk Hub tests; all eight Python/test/benchmark files compiled and diff
checks were clean. Accuracy now has explicit pending/approved/rejected correction
memory, corrected History labels that preserve original and delivered text,
approved Moonshine post-correction plus Whisper hotwords, three approval modes,
a private 12-corrected-audio benchmark gate, and an independent Privacy clear.
The automatic watcher is read-only, limited to the exact inserted range in
standard Windows Edit/RichEdit fields, excludes password controls, stops on
focus/control change, and never auto-approves. Reviews also fixed Unicode case
crashes, hidden first-match notices, oversized observations, History and
Delivery Queue races, malformed-store preservation, and Tk callback cleanup.
No candidate engine was downloaded or ranked. Old PID 12844 closed through
Flow State's own IPC quit command; the merged build is resident as PID 23372,
and a separate IPC hub request returned True. Three untracked local review
artifacts were deliberately excluded from every commit:
accuracy-native-smoke.png, flow-state-accuracy-lab-preview.html, and
ui_accuracy_smoke_temp.py.
**CLAUDE-EYES GLOBAL HANDS-FREE DELIVERY LANDED (2026-07-14).** Alt+X now
delivers a boxed still to the last active Claude, Claude Code terminal, or Codex
task even when another app is focused. Alt+C does the same for a silent 10-second
boxed video, and copying a video file in Explorer now extracts its timestamped
contact sheet and automatically asks the task to look. The live watcher stayed
running; the hotkey listener was cleanly restarted as PID 29468 and owns Alt+X.
Real ffmpeg extraction produced four frames and a 1920x780 nonblank contact
sheet; compile, target-selection, watcher-argument, and delivery tests passed.
claude-eyes local/remote main match at 75204da. The durable screen-eyes skill is
live in both Claude and Codex and landed in my-skills canonical master at
9140fcf after all apex pre-commit and pre-push gates passed.
**my-skills control-plane docs/gates landed (2026-07-14).** Kariim asked to get everything current and landed. `C:\Users\Kariim\Dev\my-skills` is clean on `master` and matches `origin/master` at `9af3ee5` (`docs: reconcile skill control-plane state`). Current default branch is `master` (not `main`). Live count is 419 skills / 67 agents. Updated active docs and annotated historical handoffs so old 399/411/416 counts are not mistaken for current state. Fixed `hooks/harness-router.sh` for Git Bash on Windows by converting Windows Python paths with `cygpath` and falling back to Codex runtime Python. Verification: bounded structural scan `skills=419 agents=67 hard=0 soft=0`; staged apex gates green; pre-commit gates green; pre-push gates green; push `f7f8d73..9af3ee5 master -> master`.
**Flow State documentation audit MERGED TO MAIN (2026-07-14).** Kariim gave
fresh approval and the documentation branch was merged and pushed as
`9891347`. Branch commits were `0b64e92` and final status correction `1544f2b`.
All tracked project documents were checked against the shipped modules, Hub
navigation, icons, current Windows settings, feature status, and test suite.
The corrections remove obsolete active-branch/isolated-build claims, update
the engineering and migration guides for the three-module app, mark completed
wargames and original research as historical, correct the suite from 96 to 97
tests, preserve the browser-only competitor caveat, and state that autostart is
optional (the current Windows registry check returned `False`). Runtime code
and user history/settings/dictionary/vocabulary/data were untouched. The exact
merged `main` passed all 97 tests in 86.220s, compiled all eight Python/test/
benchmark files using a separate writable bytecode cache, passed `git diff
--check`, and has no broken tracked Markdown file references. Local and remote
`main` match at `9891347`. The live PID `12844` remains running and did not need
a restart because only documentation changed.

**Flow State reliability work MERGED TO MAIN (2026-07-14).** Kariim gave
fresh explicit merge approval with "have everything land on main." The full
reliability branch, current competitor-gap audit, and waveform status-text fix
are now on remote and local `main`. Merge commit: `f13ab0a`; final handoff
commit: `30f0607`; waveform fix commit: `ed685f5`. The laptop checkout is clean
on `main` and matches `origin/main`. The waveform no longer gives Tk a wrapping
width: it measures real Segoe UI pixels, keeps one line, and trims the leading
text with an ellipsis when needed. The regression test failed before the method
existed, then the exact merge passed all 97 tests in 47.347s and all 8 Python /
benchmark files compiled. Native Tk bounds were text `(30, 7, 176, 20)` inside
background `(24, 3, 186, 23)`. Local `flow.py` SHA-256 is
`4010552386AE46DAEEF81B807A709A9CFB719BA614ED188698E11BF5F7AC46FB`,
matching the tested merge. A no-install browser comparison also completed on
the same laptop: Wispr demo median 991ms/p95 1176ms; Superwhisper browser tool
median 2601ms/p95 3114ms; Flow State's already-verified native Notepad value is
293.7ms. This is browser-only evidence, not a desktop-app superiority claim.
Aqua was excluded because its web sandbox requires holding Space and the
available browser control could not reproduce that fairly. No competitor app
was installed. Temporary Stereo Mix was disabled and Microphone Array restored
as Windows default. Flow State was restarted from merged `main` as PID `12844`;
a second `--hub` launch reached its IPC server and opened the existing Hub.
No runtime work remains from this bundle.

**XAVIER is being built out as a PERSONAL tool, not a product (Kariim decided
2026-07-12).** Packaging-for-sale and a marketing agent are OFF the table; the
income-first / neon-forge-flagship plan stands. In-scope XAVIER work (personal
assistant polish): voice always premium, log/text window containment, immersion
(hide plumbing), a readable in-app brief folder, real immediate voice-command
acting, full auto briefings + ingestion via **Obsidian**, a visual overhaul,
claude-eyes vision, bridging to his other subs (Codex-pro, Google AI Studio, HF,
"Moe" — undefined), and self-improve/distillation behind a Kariim-approval gate.

**XAVIER briefing FIXED (2026-07-12).** Root cause confirmed: three tasks
(`XAVIER Morning Briefing`, `XAVIER Evening Debrief`, `XAVIER Weekly Review`)
pointed at the deleted `Desktop\xavier-agentic-os` path -> `0xFFFD0000`
(4294770688). Repointed all three to `C:\Users\Kariim\Dev\xavier-agentic-os`
(surgical Set-ScheduledTask, args only). Not triggered (spends tokens); 8AM run
confirms. NOTE: a separate `XAVIER` task (my-skills\bin) also runs a lighter
brief at 8AM — two briefings now fire; consolidation pending Kariim's call.

**XAVIER voice FIXED (2026-07-12, commit 8097259).** `useVoice.ts` premium-first
+ retry: a 502/network blip used to drop that line to stock and a single 503
latched the whole session to stock. Now retries premium 3x, never latches, stock
only as true-outage last resort (logged). tsc+build green; audio-by-ear is a
Kariim check. Loose failure-map output committed (28184a3).

**The advisor interview ran and REORDERED the mission.** Authoritative plan is `~/.claude/advisor/goals.md` **v2**: **income-first, products-as-proof.** Reality that drove it: income $0, ~3-month runway, $3k/month floor. Belief ranking of income streams: 1) freelance, 2) a stable tech job, 3) products, 4) content. So it is NO LONGER "sell neon-forge first" — the mission is **land paid freelance work and/or a tech job fast** (goal 1: first paid client OR job offer by ~Aug 20), and ship neon-forge + Just-a-pinch as *portfolio proof* that makes him hireable/findable. The gap the interview named is **proof + distribution**, not skill. 12-month target still $50k (~$3k/mo floor + growth). The live STATUS-tracked queue is `xavier-agentic-os/data/roadmap-2026-07-consultant-audit.md` (see its STRATEGY UPDATE banner) + that repo's `PROGRESS.md` "Business queue" — both updated to v2 this session.

Done + verified across sessions: Higgsfield token rotated + verified live; brain, `~/.claude`, and XAVIER `data/` backed up off-machine (private `Kariimc/brain` repo + `XAVIER-BAK` thumbdrive, hourly task + Desktop launcher); XAVIER loaded with the real workload; the 9PM `evening-debrief` hardened (detached-HEAD guard + shared git lock + honest logging + UTF-8); and now the **advisor interview is DONE (goals v2)**.

Backup state: the temporary Desktop evacuation folder `C:\Users\Kariim\Desktop\backup` was moved back to the thumbdrive as `E:\backup` on 2026-07-09; verified 239 files / 1,807,658 bytes and Desktop source removed. Keep using the `XAVIER-BAK` thumbdrive backup flow, but note this drive may currently be unlabeled after repair.

Claude Eyes desktop launcher finished on 2026-07-09: `C:\Users\Kariim\Desktop\Claude Eyes.lnk` targets `C:\Users\Kariim\Dev\claude-eyes\start-eyes.bat` and uses the revised all-seeing-eye `eye.ico` (smaller eye seated at the pyramid peak). Target and icon verified.


Only-Kariim next step (nothing agent-actionable is open): review + send the offer one-pager (`xavier-agentic-os/data/offer-neon-forge.md`) — under v2 it doubles as proof/distribution. Everything else on the queue is DONE, BLOCKED-SCOPE (needs the Windows box), or a Kariim decision.

MCP note: most claude.ai connector / plugin MCP servers (Notion, Figma, Supabase, Asana, Linear, etc.) are unauthenticated and unusable until Kariim connects them. Deliberately NOT bulk-connecting them (control-plane freeze / Stop-2): authenticate a server only when a paying task actually needs it, via `/mcp` in an interactive Claude Code session or claude.ai → Settings → Connectors.

Corrections to the older notes below: the second brain is `C:\Users\Kariim\Dev\brain` (NOT `C:\Dev\brain`) and now HAS a git remote + backup; the Relay is already built (this repo); in `xavier-agentic-os` every git WRITE goes through `scripts\git-lock.ps1` (see that repo's CLAUDE.md "Named Mistakes" #16 -- two sessions writing git at once left the repo tangled once). Authoritative per-repo handoffs: xavier-agentic-os -> `PROGRESS.md`; brain -> `wiki/user-primer.md`.

## 1. Who you're working for and how
Riimos (GitHub: Kariimc), solo developer. Communicates by voice-to-text — silently fix speech artifacts ("table five" = "Fable 5"). Rules of engagement: answer first, zero preamble; plain everyday language, every technical term explained in the same breath; act by default, stop only for credentials, genuinely unclear intent, or design/project-breaking risk; every deliverable is ONE copy-paste artifact, never a checklist; do all legwork yourself — the only hard wall is writing to his local machine or pushing to his GitHub (name it in one line); "done" means 100% working, zero bugs; never bring up other projects unprompted; repos span TWO namespaces - user `Kariimc` and org `shift9-studio` - and are NOT all public (xavier-agentic-os, Flow-State, claude-eyes, brain and ~13 others are private); enumerate with `gh api '/user/repos?affiliation=owner,collaborator,organization_member'`, fetch public ones directly, never ask for paths or screenshots.

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
