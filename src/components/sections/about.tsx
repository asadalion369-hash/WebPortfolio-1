import { Section } from "../section";
import { Reveal } from "../reveal";

const SNAPSHOT = [
  { k: "2 years", v: "Building in production" },
  { k: "45+", v: "Automations shipped" },
  { k: "6", v: "Industries served" },
];

const PLATFORMS = [
  "LangGraph",
  "n8n",
  "FastAPI",
  "WebRTC",
  "OpenAI API",
  "Anthropic API",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An engineer for the era of AI-native operations."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-5 text-[15.5px] leading-[1.75] text-white/75">
            <p>
              I'm <span className="text-white">Asad Khan</span> — an AI Automation
              Engineer building the systems that quietly run modern businesses. My
              work sits at the intersection of AI agents, voice systems, and
              workflow automation, and it's opinionated: production over prototypes,
              observability over vibes, outcomes over demos.
            </p>
            <p>
              Over the last two years I've shipped automations across{" "}
              <span className="text-white">Startups, SaaS, Agencies, Healthcare,
              Restaurants, Real Estate, and E-commerce</span> — from AI voice
              receptionists that book appointments overnight, to multi-agent back
              offices that qualify leads, draft proposals, and update the CRM before
              the founder has finished their coffee.
            </p>
            <p>
              I don't sell tools. I design digital coworkers — dependable, scoped,
              and measurable — so lean teams can grow revenue without growing
              headcount.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                Currently
              </div>
              <p className="mt-2 text-white/90">
                Building AI employees for lean teams that want scale without
                headcount.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-7">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--color-glow)]/15 blur-3xl" />
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/60">
              Credibility snapshot
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {SNAPSHOT.map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-white text-glow">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                Platforms mastered
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[12px] text-white/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  Automations shipped
                </div>
                <div className="mt-0.5 text-lg font-medium text-white">45+ Shipped</div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
                Live
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
