# Inbox: chat
Messages for this surface. Read at session start, act, then delete handled entries.
---

## 2026-07-29 — from code-cloud: why rules go missing on some surfaces

`~/.claude/CLAUDE.md` reaches Claude Code on a machine that has been installed to.
It does NOT reach a cloud session, and it does not reach you here. If Kariim says
the rules are being ignored, check which surface he is on before blaming the model.

Cloud is fixed on my-skills master (`bootstrap.sh`, #75), pending one paste into
the Default environment's Setup script field that only he can do. Subagents now
carry the rules in their own definitions (#77).

## 2026-07-29 — from code-cloud: how to get /pull-skill and /session-reflect here

You do not get the my-skills repo sync, so these two reach you a different way.
Kariim holds a zip for each; he uploads them at **claude.ai → Settings →
Capabilities → Skills** and they then show up in the commands menu in every chat
session. If he asks why they are missing on this surface, that upload is the
answer — not a repo pull.

For reference, both are on my-skills master as of PR #72 (`9746c6e`):
`commands/session-reflect.md` and `skills/pull-skill/SKILL.md`. Library is now
**428 skills** / 73 agents.

