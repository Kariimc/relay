/**
 * Merge these four entries into the exported `details` Record in
 * shift9/apps/shift9-dev/lib/work-details.ts (e.g. just before the closing `};`).
 * Facts verified against live source in the originating chat session; copy is a
 * first pass in the INSTRUMENT voice — Kariim may polish in PR review.
 */

  "titanium-forge-pro": {
    tagline: "A component workbench with a real Figma pipeline and live team co-presence.",
    overview: [
      "Titanium Forge Pro is a React/motion-design workbench: pull real frames straight out of a Figma file, tune spring physics with an actual damping/FPS profiler, and generate design assets with Gemini — all backed by a working server, not a demo loop.",
      "Built solo as v2 of Neon Forge, with a shared component registry and CLI so a team can publish and pull components like packages.",
    ],
    features: [
      { title: "Real Figma import", body: "Server-side proxy calls the actual Figma REST API with your personal access token, pulls real frame data and rendered SVGs — never persisted, used once per request." },
      { title: "Live co-presence", body: "A genuine Server-Sent Events channel — every connected teammate's cursor, actions, and join/leave events broadcast in real time, no mocked peers." },
      { title: "AI asset generation", body: "Gemini-backed image/video generation for design assets, with a real fallback path when quota runs out." },
      { title: "Motion Profiler", body: "Real spring physics — Hooke's law plus damping, integrated frame-by-frame, with actual FPS tracked. The number, not a vibe." },
      { title: "Shared registry + CLI", body: "Publish a component from the app, pull it into any project with `npx titanium-forge-cli add <slug> --registry <url>`." },
    ],
    tech: ["React", "TypeScript", "Express", "Server-Sent Events", "Gemini API"],
  },
  "flow-state": {
    tagline: "Fully local voice dictation for Windows — nothing you say ever leaves your machine.",
    overview: [
      "Flow State is on-device dictation: hold a hotkey, speak, text lands in any app. Whisper and Moonshine run entirely locally — no cloud call, no account, nothing uploaded, ever.",
      "Built and benchmarked on genuinely low-end hardware (no AVX2, under 4GB free RAM) to prove it works where it matters, not just on a dev machine.",
    ],
    features: [
      { title: "Actually private", body: "No network calls anywhere in the transcription or cleanup path — verified, not just claimed." },
      { title: "Fast even on old hardware", body: "Moonshine transcribes a 4-second clip in ~1–2.5s on a Pentium Gold with no AVX2, versus ~35s for faster-whisper on the same machine." },
      { title: "Measured, not vibed", body: "122-test suite plus real median/p95 latency benchmarking." },
      { title: "Honest about its limits", body: "Cleanup is rule-based today (LLM rewriting is a documented later path), no word-level streaming yet, Windows-only." },
    ],
    tech: ["Python", "Moonshine", "Whisper", "sherpa-onnx"],
    external: { label: "View on GitHub ↗", href: "https://github.com/Kariimc/Flow-State" },
  },
  "my-skills": {
    tagline: "A 420-skill AI agent operating system running Claude Code and Codex.",
    overview: [
      "my-skills is the control plane behind every project in this studio — versioned skills, sub-agents, and safety gates that make AI coding agents reliable across machines and surfaces instead of starting from zero each session.",
      "Includes a failure ledger, a proven-playbook system, and a fabrication gate that catches agents shipping placeholder code before it lands.",
    ],
    features: [
      { title: "Versioned skills & agents", body: "420+ skills, dozens of sub-agents, all in one auditable repo instead of scattered prompts." },
      { title: "Fabrication gate", body: "CI-enforced check that blocks agents from committing TODO/placeholder code disguised as done work." },
      { title: "Failure ledger", body: "Every proven-dead approach gets logged once, so no agent re-discovers the same dead end twice." },
      { title: "Cross-surface sync", body: "The same rules and skills follow you across Claude Desktop, Claude Code CLI, and cloud sessions." },
    ],
    tech: ["Markdown", "Python", "Bash", "GitHub Actions"],
    external: { label: "View on GitHub ↗", href: "https://github.com/Kariimc/my-skills" },
  },
  "lumen": {
    tagline: "Point a projector at anything. Drag four dots with your phone. Done.",
    overview: [
      "Lumen turns any projector into a mapped display without a laptop tether: a control window shows a pairing QR code, and calibration happens by dragging four corner points from your phone over the same Wi-Fi.",
      "Shipped v1 with working corner-pin math and automated tests covering the state machine and the corner-pinning calculations themselves.",
    ],
    features: [
      { title: "Phone-based calibration", body: "No laptop hovering next to the projector — drag the four corners from your phone, done." },
      { title: "Automatic display detection", body: "Plug in a projector or second monitor and a fullscreen output window appears on it automatically." },
      { title: "Tested, not just working once", body: "8 automated tests cover duplicate-ID prevention, persistence, input validation, and the corner-pinning math — including a real division bug this project shipped with once, now fixed and regression-tested." },
    ],
    tech: ["Electron", "JavaScript", "WebSocket"],
    external: { label: "View on GitHub ↗", href: "https://github.com/Kariimc/lumen-projection-mapper" },
  },
