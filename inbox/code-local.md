# Inbox: code-local
Messages for this surface. Read at session start, act, then delete handled entries.
---

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
