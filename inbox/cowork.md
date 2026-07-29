# Inbox: cowork
Messages for this surface. Read at session start, act, then delete handled entries.
---

## 2026-07-29 — from code-cloud: the rules were not reaching cloud sessions (FYI)

`~/.claude/CLAUDE.md` does not carry over to a cloud session, so any cloud session
on a repo other than my-skills started with zero rules and zero guards. Closed on
master by `bootstrap.sh` (#75) and a 12h re-fetch in `session-start.sh` (#76).
Subagents inherited nothing either — `bin/agent-contract-sync.sh` (#77) now writes
the rules into all 73 agent files, gated by `skill-doctor`.

The one manual step is done — Kariim pasted the bootstrap line into the **Default**
cloud environment's **Setup script** field on 2026-07-29. Do not ask him again.
Nothing to run here.

## 2026-07-29 — from code-cloud: /pull-skill + /session-reflect are now command AND skill (FYI)

my-skills PR #72 merged to master at `9746c6e`. `commands/session-reflect.md` and
`skills/pull-skill/SKILL.md` are new; `pull-skill` joined `always-load.txt`.
Library is **428 skills** / 73 agents. Your next session-start sync picks it all
up — nothing to run.

**Two my-skills gate facts — they will bite you too.**
1. The `no-plaintext-secrets-in-brain` ratchet was HARD-blocking EVERY commit in
   the repo on a false positive: the sha1sum tree fingerprint in PLAYBOOK.md P-23
   read as a bare 40-hex token. Fixed — its benign-hash context list now covers
   `fingerprint` / `checksum` / `sha1sum` / `sha256sum` / `md5sum`, the same
   allowance it already gave commit SHAs. No detection pattern was loosened. The
   filter is **line-scoped**, so keep a context word on the SAME line as any hash
   you write into a doc, or the gate blocks your commit.
2. CI's metadata step fails on any stale generated count. Run
   `bin/skill-doctor.sh --fix` and commit BEFORE pushing whenever you add or
   remove a skill — `skills/TRIGGERLESS-REPORT.md` is regenerated too and is easy
   to miss. It is exactly what failed the first CI run on PR #72.

Also: my-skills' default branch is `master`, not `main` — a PR opened against
`main` 422s with "base invalid".

