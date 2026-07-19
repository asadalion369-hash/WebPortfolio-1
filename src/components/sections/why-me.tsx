import { Section } from "../section";
import { Reveal, RevealItem } from "../reveal";

const REASONS = [
  {
    t: "Built like software, not spreadsheets",
    d: "Every workflow is engineered with retries, logs, and version control — no fragile drag-and-drop that breaks on Monday morning.",
    icon: (
      <path d="M4 5h16v14H4z M8 5v14 M4 9h4 M4 13h4 M4 17h4" />
    ),
  },
  {
    t: "A digital workforce that never clocks out",
    d: "Agents answering, qualifying, booking, and following up at 3AM — while your team sleeps and your competitors miss the reply window.",
    icon: (
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 7v5l3 2" />
    ),
  },
  {
    t: "ROI you can point at on a dashboard",
    d: "Every build ships with a metric attached — hours reclaimed, leads captured, response time cut. If it doesn't move the number, we don't build it.",
    icon: (
      <path d="M4 20V6 M4 20h16 M8 16l4-4 3 3 5-6" />
    ),
  },
  {
    t: "Cross-platform fluency, one operator",
    d: "n8n, Make, Vapi, custom TypeScript, edge functions — I pick the right tool for the problem instead of forcing the problem into a tool.",
    icon: (
      <path d="M4 12h4 M16 12h4 M8 8h8v8H8z M12 4v4 M12 16v4" />
    ),
  },
];

export function WhyMe() {
  return (
    <Section
      id="why"
      eyebrow="Why me"
      title="Not another prompt hacker. An operator."
      description="Automation is only useful when it survives Monday morning. I build systems that do."
    >
      <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {REASONS.map((r) => (
          <RevealItem key={r.t}>
            <div className="group glass-panel relative h-full overflow-hidden rounded-2xl p-7 transition-all hover:glow-ring">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-glow)]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/85 transition-all group-hover:text-white group-hover:drop-shadow-[0_0_10px_var(--color-glow)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {r.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-medium text-white">{r.t}</h3>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">{r.d}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
