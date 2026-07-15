# BUILD PROMPT — Claude Cross-Surface Relay (paste this whole file into Claude Code and press enter)

You are building the **Relay**: a shared communication and state system so every Claude surface Riimos uses — claude.ai chat (web/desktop/mobile), local Claude Code (Windows, `C:\Dev\`), cloud Claude Code, Claude Desktop/Cowork, Steam Deck — can share information and hand work to each other with zero manual re-explaining.

Do everything yourself through GitHub and the local filesystem. Do not ask Riimos to run steps you can run. Report one final summary when done.

---

## WHY THIS DESIGN (context you need)

- The ONLY store every surface can reach is GitHub. Chat reads public repos via the GitHub API. Claude Code (all machines) has git. Desktop/Cowork has the local clone.
- Riimos already has: `Kariimc/my-skills` (398+ skills, deploys to `~/.claude/` via SessionStart hook, rules concatenated into global CLAUDE.md), a per-repo `PROGRESS.md` handoff system with an auto-read rule, and `cloud-setup-prompt.md` for GitHub-side setup. DO NOT rebuild any of that. The Relay sits ABOVE it: PROGRESS.md = per-project state; Relay = cross-project, cross-surface state and messages.
- Repos span TWO namespaces (user `Kariimc`, org `shift9-studio`) and are NOT all public - many are private. Keep the relay itself public (chat needs unauthenticated API reads). NEVER put secrets in it.

## ARCHITECTURE (build exactly this — simple, no frameworks)

Repo: `Kariimc/relay` (public), containing:

```
relay/
  HANDOFF.md          ← THE single source of truth. Current global state. Any agent reads this first.
  inbox/
    chat.md           ← messages TO claude.ai chat
    code-local.md     ← messages TO local Claude Code (Windows)
    code-cloud.md     ← messages TO cloud Claude Code
    cowork.md         ← messages TO Desktop/Cowork
    steamdeck.md      ← messages TO Steam Deck Claude Code
  log.md              ← append-only decision/event log (one line each, newest on top)
  README.md           ← explains the system in plain language
```

**Protocol (write it into README.md):**
1. Session start: read `HANDOFF.md`, then your own inbox file. Act on messages, then clear them (leave the header).
2. To message another surface: append to its inbox file with a dated entry.
3. Before ending any significant session: update `HANDOFF.md` (state changed) and add one line to `log.md`.
4. Commit messages: `relay: <surface> — <one-line summary>`.
5. Chat can't push — when chat needs to write, it hands Riimos ONE paste-block that any Claude Code session runs. That's the accepted bridge.

## STEP-BY-STEP PLAN (execute all of it)

**Phase 1 — Create the repo and files.**
Create `Kariimc/relay` (public). Add all files above. Each inbox file starts with:
```markdown
# Inbox: <surface>
Messages for this surface. Read at session start, act, then delete handled entries.
---
(empty)
```
`HANDOFF.md` starts from the template in Phase 4. `log.md` starts with one line: `YYYY-MM-DD | code | Relay system created`.

**Phase 2 — Wire it into every Claude Code surface automatically.**
In `Kariimc/my-skills`, add `rules/08-relay.md`:
```markdown
# Relay — cross-surface communication (fires every session)
At session start, fetch and read https://raw.githubusercontent.com/Kariimc/relay/main/HANDOFF.md and your surface's inbox at https://raw.githubusercontent.com/Kariimc/relay/main/inbox/<surface>.md (surfaces: code-local, code-cloud, cowork, steamdeck). If the repo is cloned locally, prefer git pull + local read. Act on inbox messages, then clear them. Before ending a session where state changed, update HANDOFF.md, append one line to log.md, commit and push: `relay: <surface> — <summary>`. If you cannot push, output the exact commands as one paste-block.
```
Commit and push to `my-skills` — the existing SessionStart hook propagates it to every machine on next sync.

**Phase 3 — Add a skill** at `skills/relay/SKILL.md` in `my-skills`:
- name: relay
- description: read/write the Kariimc/relay cross-surface handoff system — HANDOFF.md state, per-surface inboxes, append-only log
- Body: the protocol from README.md plus the exact file format for HANDOFF.md (Phase 4) so any agent writes it identically.

**Phase 4 — Author the first real HANDOFF.md** using this exact template, filled with current known state (HoopClone Sprints 1–4 done / Sprint 5 queued at `C:\Dev\hoopclone`; my-skills + rules system live; second-brain skills merged, brain store at `C:\Dev\brain`; claude-eyes deployed; PROGRESS.md system live; July 7 2026 Fable deadline):

```markdown
# HANDOFF — global state (read me first)
Updated: <date> by <surface>

## Who Riimos is / how to work with him
Solo dev. Voice-to-text (silently fix speech artifacts). Plain language, zero jargon. Lead with the answer. Act by default. One-paste deliverables only. Never claim done unless 100% working.

## Active projects & where they live
| Project | Location | State | Next step |
|---|---|---|---|
| ... | ... | ... | ... |

## Infrastructure that already exists (do not rebuild)
- my-skills repo → ~/.claude/ via SessionStart hook; rules 00, 07 (progress), 08 (relay)
- PROGRESS.md per-repo handoff (rule 07)
- Relay (this repo)
- claude-eyes, second-brain (C:\Dev\brain), cloud-setup-prompt.md

## In flight right now
- <bullets>

## Open decisions / blockers needing Riimos
- <bullets>

## Standing constraints
- HoopClone lives outside OneDrive (path corruption history). Relay is PUBLIC — no secrets ever.
```

**Phase 5 — Verify before reporting done.**
- Fetch `https://raw.githubusercontent.com/Kariimc/relay/main/HANDOFF.md` unauthenticated and confirm it returns the file (proves chat can read it).
- Write a test message into `inbox/code-local.md`, confirm it's live, then leave it (first real message: "Relay is live — clear me to confirm you read your inbox").
- Confirm rule 08 and the relay skill are pushed to my-skills.

**Definition of done:** repo live and publicly fetchable, rule + skill pushed, HANDOFF.md fully filled in, test inbox message placed, one-paragraph report of what exists and the single next step (local machines pick it up on next my-skills sync — no action needed).
