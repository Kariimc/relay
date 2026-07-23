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
