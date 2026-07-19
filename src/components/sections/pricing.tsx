import { Section } from "../section";
import { Reveal, RevealItem } from "../reveal";
import { motion } from "framer-motion";

const TIERS = [
  {
    name: "Starter",
    price: "$200",
    tag: "Single automation",
    features: [
      "1 workflow or micro-agent",
      "Up to 3 integrations",
      "2-week delivery",
      "1 revision round",
      "Handoff + Loom walkthrough",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$750",
    tag: "Full AI system",
    features: [
      "Multi-workflow architecture",
      "Voice agent or agentic stack",
      "Unlimited integrations",
      "4-week delivery",
      "30-day support + docs",
      "Observability dashboard",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$1,250",
    tag: "End-to-end platform",
    features: [
      "Dedicated build capacity",
      "Custom TypeScript + n8n hybrid",
      "SOC2 / HIPAA-ready patterns",
      "Weekly ship cadence",
      "Priority SLA",
      "Ongoing partnership",
    ],
    featured: false,
  },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2 5 8.6l4.5-5"
          stroke="var(--color-glow)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple, outcome-based tiers."
      description="Every engagement is scoped in a discovery call. These are starting points, not menus."
    >
      <Reveal stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
        {TIERS.map((t) => (
          <RevealItem key={t.name} className={t.featured ? "lg:-my-4" : ""}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className={`group relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 ${
                t.featured
                  ? "glass-panel-strong border border-white/15 hover:border-[var(--color-glow)]/60 hover:shadow-[0_0_60px_-10px_var(--color-glow)]"
                  : "glass-panel hover:border-[var(--color-glow)]/40 hover:shadow-[0_0_40px_-15px_var(--color-glow)]"
              }`}
            >
              {t.featured && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_50%_0%,var(--color-glow)/25,transparent_60%)]" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.2em] text-black shadow-[0_0_20px_var(--color-glow)]">
                    Most popular
                  </div>
                </>
              )}
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                {t.tag}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <div className="text-5xl font-semibold text-white">{t.price}</div>
                <div className="text-sm text-white/50">/ project</div>
              </div>
              <div className="mt-1 text-sm text-white/60">{t.name}</div>
              <ul className="mt-6 space-y-3 text-[14px] text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing-quote"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-medium transition-all hover:scale-[1.02] ${
                  t.featured
                    ? "bg-white text-black shadow-[0_0_30px_-5px_var(--color-glow)]"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                }`}
              >
                Start with {t.name}
              </a>
            </motion.div>
          </RevealItem>
        ))}
      </Reveal>

      <div id="pricing-quote" className="mt-24 scroll-mt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
            Custom quote
          </div>
          <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Get a custom quote.
          </h3>
          <p className="mt-3 text-[15px] text-white/70">
            Something in between, or bigger than Enterprise? Tell me the shape of it.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <motion.div
            whileHover={{ y: -2 }}
            className="glass-panel-strong glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-10 transition-shadow duration-300 hover:shadow-[0_0_80px_-20px_var(--color-glow)]"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[var(--color-glow)]/20 blur-3xl" />
            <form className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name *" placeholder="Your full name" />
              <Field label="Business Name" placeholder="Company name" />
              <Field label="Email *" placeholder="you@company.com" type="email" />
              <Field label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
              <Field label="Service Needed" placeholder="e.g. AI Chatbot, Voice Agent, CRM A" />
              <Field label="Budget (USD)" placeholder="e.g. 1,000 - 2,000" />
              <div className="sm:col-span-2">
                <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Project Details *
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your business, current challenges, and the outcome you're aiming for."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14.5px] text-white placeholder:text-white/40 outline-none transition-all focus:border-[var(--color-glow)]/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_var(--color-glow)]"
                />
              </div>
              <div className="sm:col-span-2 flex justify-center pt-2">
                <button
                  type="button"
                  className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-8 py-3.5 text-[13.5px] font-medium text-white backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/[0.14] hover:border-[var(--color-glow)]/60 hover:shadow-[0_0_40px_-5px_var(--color-glow)]"
                >
                  <span className="relative z-10">Request Custom Quote</span>
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="relative z-10 transition-transform group-hover:translate-x-0.5">
                    <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="absolute inset-0 rounded-full bg-[var(--color-glow)]/40 blur-xl opacity-0 transition-opacity group-hover:opacity-70" />
                </button>
              </div>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14.5px] text-white placeholder:text-white/40 outline-none transition-all focus:border-[var(--color-glow)]/50 focus:bg-white/[0.06] focus:shadow-[0_0_30px_-10px_var(--color-glow)]"
      />
    </div>
  );
}
