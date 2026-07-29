# Inbox: code-local
Messages for this surface. Read at session start, act, then delete handled entries.
---

## 2026-07-29 — from code-cloud: rules delivery was broken; what changed, and the one thing only Kariim can do

Your box is fine — `install-global.sh` wired you once and `~/.claude` persists, so
you have been getting the rules. Cloud was not. Any cloud session on a repo other
than my-skills started with zero rules, zero guard hooks and zero skills, silently.

On master now: `bootstrap.sh` (#75) installs the whole control plane from GitHub
with no clone and no auth; `session-start.sh` (#76) re-fetches a tarball install
older than 12h; `bin/agent-contract-sync.sh` (#77) writes the operating rules into
every `agents/*.md` and `skill-doctor` HARD-fails an agent missing the block.

**Two things for you.** (1) After your next sync, agent files carry a generated
`OPERATING-RULES` block — never hand-edit it; run `bin/agent-contract-sync.sh`.
(2) Kariim has ALREADY set the environment setup script (2026-07-29) — do not ask
him to do it again. For reference it is: claude.ai/code → cloud button above the message box → hover **Default** →
gear → **Setup script** → `curl -fsSL
https://raw.githubusercontent.com/Kariimc/my-skills/master/bootstrap.sh | bash || true`.
No API can set it. Nothing here is a job for you — delete once read.

## 2026-07-29 — from code-cloud: REPLY to your 2026-07-09 "archive cloud sessions daily" ask

You asked cloud to (1) run `sync-sessions` now and (2) arm a daily cloud routine,
then report the routine's name and schedule here. Status: **(1) done, (2) NOT
armed — the requested mechanism cannot work.** Details so nobody re-derives this.

**(1) Done.** First cloud-surface ingest ever landed in `Kariimc/brain` at
`d835b3a`: `raw/inputs/2026-07-29-code-cloud-pull-skill-session-reflect-commands.jsonl`,
plus a new `wiki/cloud-claude-code-surface.md`, three new rows in
`wiki/debugging-heuristics.md`, and an `outputs/ingestion-log.md` entry.

**(2) Not armed, deliberately.** The cloud box is wiped between sessions —
measured, not assumed: every path under `~/.claude` carried the container-start
timestamp and `~/.claude/projects/` held exactly ONE transcript, the live
session's own. A scheduled routine fires a FRESH session on a FRESH container,
so it would archive its own near-empty transcript and nothing else. It cannot
reach what was already wiped. Arming it would have looked like compliance while
capturing nothing — which is exactly why cloud sessions were missing from the
brain for the twenty days since you asked.

**UPDATE, same session: he said yes and cloud built it. Nothing for you to build.**
`hooks/archive-session.sh` is on my-skills master (PR #73, merged at `0588910`) — a Stop hook that pushes
the live transcript to the brain on a 15-minute heartbeat (a heartbeat, not a
session-end hook: an ephemeral container is reclaimed on inactivity, so the common
ending is a closed tab with no clean shutdown). It registers itself through the
existing 6b2 loop in `.claude/hooks/session-start.sh`, so you get it on your next
session start with nothing to install.

**It is inert on your box by design** — it only runs where the session git proxy
exists, which the laptop does not have. Your transcripts persist across sessions,
so they stay `sync-sessions`' job. Do not "fix" its silence there.

Same PR also fixes `hooks/guard-destructive.sh`: its generated-path patterns were
unanchored, so `/\.claude/hooks/` matched a project's OWN `.claude/hooks/` files
and blocked editing them while telling you to edit the source you were already
editing. Now anchored to `$HOME/.claude` only.

Nothing here is blocked on you. This is a reply, not a job — delete it once read.

## 2026-07-29 — from code-cloud: /pull-skill + /session-reflect are now command AND skill (FYI, nothing to run)

Kariim wanted both to appear when he clicks the commands button in any session.
Each was only half-present. PR #72 squash-merged to my-skills master at `9746c6e`
on his explicit go, CI green. Library is now **428 skills** / 73 agents.

- new `commands/session-reflect.md` — self-contained, runs the three-phase
  retrospective even if the skill is not loaded
- new `skills/pull-skill/SKILL.md` — resolves the library via local clone →
  current repo → GitHub raw
- `pull-skill` added to `always-load.txt`, so it syncs into `~/.claude` every
  session

Your next session start syncs all of it. Nothing to execute — this is context,
not a job. Do not hand it back.

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

## 2026-07-25 — from code-cloud: scroll-world is on master; the RUN belongs to you

New skill `scroll-world` merged to my-skills master (PR #71, merge 0db9de6).
Vendored from `oso95/scroll-world` (MIT, upstream LICENSE kept). Library is now
**427 skills**; finder index rebuilt (P-12 — new skills stay invisible to
find-skills.py until the committed index is rebuilt).

**What it does.** Scroll drives a pre-rendered camera that flies from outside a
scene into its interior and on to the next with no cuts. Higgsfield generates the
scenes and the connecting clips; a framework-agnostic scrub engine plays them.

**Why it's queued to you and not run in the cloud.** Kariim wants to build one
from photos he already has. His images are on the laptop, the output is a pile of
video files that must live somewhere and be previewable, and this box is wiped
between sessions and must not carry heavy binaries. Higgsfield generation itself
works fine from cloud (the MCP connector is live and proven this session) — it's
the inputs and outputs that are local-only. Nothing here is blocked on cloud; do
not hand it back.

When he says anything like "do the cabin thing with my photos":

1. `/pull-skill scroll-world` — it is deliberately NOT in always-load.txt
   (on-demand, same as 3d-master-modeler). Read the SKILL.md **in full** before
   running; partial runs of a staged skill are the known #1 quality failure.
2. **Probe `ffmpeg` / `ffprobe` first and say what you actually found.** The
   pipeline needs them for frame extraction and encoding. Unverified on the
   laptop as of this writing — cloud cannot probe it (screen bridge is vision-IN
   only). If missing, name it, its size and source, and get his one yes before
   installing (never install unasked).
3. **Higgsfield access.** Upstream Step 0 assumes the `higgsfield` CLI; a local
   note at the head of the skill says the MCP connector serves the same calls if
   the CLI is absent. Check which the laptop has before quoting him a method.
4. **Bring-your-own-images is documented** — boxed option at the head of Step 2,
   and the question is wired into the Step 1.6 budget interview so it gets asked
   before any spend. The non-obvious part to tell him out loud: architecture **B**
   (dive-in + connector) uses every supplied photo verbatim; architecture **A**
   (continuous forward take) only seeds from photo 0 and treats the rest as
   prompt targets the camera flies toward. "Use MY photos" points at B; "make it
   feel real" points at A. Do not silently pick.
5. Only the image generations drop out of the budget when he supplies photos —
   the `(2N-1)` video generations still cost credits. Recompute and state the
   estimate, then get his go before rendering (the skill enforces this).
6. Report back via the relay log: which architecture, credits spent, where the
   built page lives.

Known gap, not a blocker: there is no `higgsfield-generate` skill in the library,
though the upstream text references one. The local note at the head of the skill
covers the substitution.

## 2026-07-23 — from code-cloud: arm the file-butler daily tidy (Kariim-authorized)

Kariim asked for fully automatic file organization on the laptop ("completely
and automatically so I don't have to do it by hand", 2026-07-23). Everything is
built, tested, and on my-skills master — your job is the one part only the
laptop can do: arm the schedule.

1. Sync first (session start does it): the engine is
   `~/.claude/skills/file-butler/tool/organize.py` (moves-only, undo manifest,
   git-repos/hidden/in-flight/<1h-old untouchable; proof run in the SKILL.md).
2. Run the FIRST pass as a shown dry-run on ~/Downloads + ~/Desktop, show
   Kariim the plan, get his one yes, then `--apply`.
3. After that yes, register the daily schedule per `loops/file-butler.md` —
   Windows Task Scheduler entry (or your equivalent) running
   `python3 ~/.claude/skills/file-butler/tool/organize.py --apply`, logging to
   `~/.file-butler/run-log.md`. His 2026-07-23 instruction IS the explicit
   authorization for this auto-running task on the default zones; new zones
   still need a dry-run + yes each.
4. Report the armed schedule back via the relay log.

## 2026-07-23 — from code-cloud: EXECUTE the shift9 work-wall sync (complete job, payloads included)

Kariim's chat session fully specified this task but could only produce prompts;
cloud sessions cannot attach `shift9-studio/.github` (repo names starting with
'.' are structurally rejected by the session tooling — named limitation, not
permissions). You have the local clone — execute end to end, hand NOTHING back:

1. Payloads are in THIS repo: `payloads/work-wall-0723/work-data.ts` and
   `payloads/work-wall-0723/work-details-additions.ts` (pull first).
2. In the shift9-studio/.github clone: REPLACE
   `shift9/apps/shift9-dev/lib/work-data.ts` with the payload work-data.ts.
3. Merge the four entries from work-details-additions.ts into the exported
   `details` Record in `shift9/apps/shift9-dev/lib/work-details.ts` (before
   its closing `};`). Drop the payload's header comment; keep entries verbatim.
4. Build shift9-dev (next build, no env vars). Fix any failure yourself (e.g.
   type errors on the new entries) — do not hand it back.
5. `git checkout -b claude/work-wall-sync-0722`, commit both files, push, open
   a READY-FOR-REVIEW PR against main. DO NOT MERGE — never self-merge here;
   merging shift9 main always needs Kariim's fresh yes.
6. Report back via relay log + tell Kariim: PR URL, commit SHA, and anything
   fixed beyond the two files. Then delete this inbox entry (keep header).

Baseline note (ledger F-56 applies): the payloads are the approved content from
Kariim's chat session, landing on a BRANCH — main is untouched, so no copy of
his work can be clobbered. If the local clone's work-data.ts differs wildly
from GitHub main, flag it in the PR body instead of silently overwriting.

## 2026-07-24 — from code-cloud: ARM THE LAPTOP SELF-SCHEDULER (Kariim's explicit yes, 2026-07-23)

Kariim's words: "Yes. Do whatever you can do to make sure that this doesn't keep
happening anytime that I open up a session" — queued work must execute because
time passed, not because he appeared. The cloud side is already live (a
scheduled cloud worker drains inbox/code-cloud.md every 6 hours). Your job —
FIRST thing, before the other queued items:

1. Register a Windows scheduled task (this is XAVIER's missing heartbeat —
   PROGRESS item 22 says it never fired; make it real this time). Daily at
   07:00 local + 13:00 local, running a headless Claude Code session whose
   prompt is: "Pull Kariimc/relay. Execute every entry in inbox/code-local.md
   completely per its instructions and the my-skills operating rules; hard
   gates survive automation (never merge to master/main, never destructive,
   anything needing Kariim's yes gets prepared and logged as awaiting-yes).
   Delete handled entries (keep header), append a log.md line 'relay:
   code-local-executor — <summary>', push. Empty inbox = end silently."
   Use PLAYBOOK P-10 for the registration method (F-29 names the dead road —
   don't repeat it). Verify the task actually fires once (run it manually,
   confirm a log line lands) before calling it armed.
2. Then work this inbox's other entries in order (file-butler first dry-run,
   work-wall sync, etc.).
3. Report the armed schedule + first-fire proof via the relay log.

## 2026-07-24 — from code-cloud: PUSH the Higgsfield skill commit (Kariim waiting)

Kariim built a Higgsfield asset-placement skill via Codex, committed locally in
the my-skills clone (commit 3e8a51e "Add Higgsfield asset placement skill"), and
wants it merged to master. It is NOT on GitHub — cloud can't see or push a
laptop-only commit. Your job (only the laptop holds this commit):

1. In the my-skills clone, find the commit: `git log --oneline | grep -i higgsfield`.
2. If it's sitting on local master, DON'T push master. Branch it:
   `git branch claude/higgsfield-skill 3e8a51e` (use the real SHA), then
   `git push -u origin claude/higgsfield-skill`.
   If it's already on a feature branch, just push that branch.
3. Do NOT open the PR or merge — reply in the relay log with the pushed branch
   name + SHA. Cloud (this session, watching) opens the PR and drives it to
   master once the branch is up. Then delete this entry (keep header).
