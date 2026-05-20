// Insights data extracted from /insights output.
// Regenerate this file when /insights runs again; the dashboard reads from window.INSIGHTS.
window.INSIGHTS = {
  generatedAt: "2026-05-20",
  totals: { sessions: 1, analyzed: 0, messages: 0, hours: 0, commits: 0 },
  projects: [
    {
      name: "No Data Available",
      sessions: 0,
      description: "No Claude Code usage data was captured in the provided dataset. All session counts, message counts, and activity metrics are zero. There is no information available to analyze project areas or development activities."
    },
    {
      name: "Unknown Project Work",
      sessions: 0,
      description: "Without session summaries, tool usage, or commit history, it is not possible to identify specific project areas. The data structure appears to be an empty template awaiting population."
    },
    {
      name: "Undetermined Languages",
      sessions: 0,
      description: "No programming languages were recorded in the usage data. The languages field is empty, preventing identification of technical stacks or frameworks used."
    },
    {
      name: "Missing Friction Points",
      sessions: 0,
      description: "No friction details or user instructions were captured. This prevents analysis of pain points, workflow challenges, or improvement opportunities in Claude Code usage."
    },
    {
      name: "Empty Date Range",
      sessions: 0,
      description: "The date range fields are blank, indicating no time-bounded activity was logged. A populated dataset would be needed to perform meaningful project area analysis."
    }
  ],
  working: {
    intro: "Based on the limited data available, here are some general observations about effective Claude Code usage patterns.",
    items: [
      { title: "Exploring Claude Code's Capabilities", desc: "Taking time to understand the tool before committing to a workflow." },
      { title: "Building a Foundation", desc: "Right moment to establish CLAUDE.md, commands, and conventions." },
      { title: "Investing in Tooling", desc: "Engagement with usage analytics is itself a positive signal." }
    ]
  },
  friction: {
    intro: "There is insufficient usage data to identify specific friction patterns yet.",
    categories: [
      { category: "Insufficient Data for Analysis", description: "Zero sessions analyzed means no behavioral patterns can be detected." },
      { category: "Missing User Instructions", description: "No CLAUDE.md captured — Claude restarts from zero context each session." },
      { category: "No Tracked Outcomes or Commits", description: "Zero commits across the date range; success signal is missing." }
    ]
  },
  suggestions: [
    { title: "Start a CLAUDE.md", detail: "Give Claude persistent context: build/test commands, code style, conventions." },
    { title: "Track repeated prompts", detail: "Repeated tasks (commit msgs, test fixes) are candidates for /skills." },
    { title: "Use Task Agents", detail: "Explore unfamiliar code with subagents to keep main context clean." }
  ],
  horizon: {
    intro: "AI-assisted development is shifting from single-prompt help to autonomous multi-agent workflows.",
    items: [
      { title: "Parallel Agent Swarms", desc: "Multiple agents on git worktrees, each owning a workstream." },
      { title: "Autonomous TDD Loops", desc: "Define failing tests; let Claude iterate until they pass." },
      { title: "Self-Maintaining Codebases", desc: "Long-running agents that open PRs for stale deps, flaky tests, dead code." }
    ]
  }
};
