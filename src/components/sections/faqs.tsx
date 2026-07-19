import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../section";

const FAQS = [
  {
    q: "How does your pricing actually work?",
    a: "Every engagement is fixed-scope, fixed-price. After a 30-minute discovery call I send a written proposal with milestones, deliverables, and a flat quote — no hourly billing, no scope creep surprises. Retainers are billed monthly and can be paused anytime.",
  },
  {
    q: "What's a realistic timeline for a project?",
    a: "A single automation typically ships in 2 weeks. A full multi-agent AI system runs 3–6 weeks depending on integrations and compliance requirements. I confirm a hard delivery date in the proposal and give you a shared build tracker so nothing is a black box.",
  },
  {
    q: "Which platforms and stacks do you build on?",
    a: "n8n and Make for workflow automation, Vapi and Retell for voice, OpenAI / Anthropic / Gemini for LLM orchestration, Supabase / Postgres / Airtable for data, and custom TypeScript wherever no-code hits a wall. I pick the stack that fits the problem, not the other way around.",
  },
  {
    q: "Do you handle integrations with our existing CRM and tools?",
    a: "Yes — HubSpot, Salesforce, GoHighLevel, Pipedrive, Airtable, Notion, Slack, Google Workspace, Twilio, Stripe, Toast, Zendesk, and most anything with a REST API or webhook. If a native integration doesn't exist, I build a custom connector.",
  },
  {
    q: "What about ongoing support after launch?",
    a: "Every project includes a 30-day post-launch support window covering bug fixes, tuning, and small tweaks at no extra cost. After that, most clients move to a monthly retainer for continuous improvements, observability, and new workflows.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "All credentials live in vaulted secret managers, never in plaintext. For regulated industries I build to HIPAA, SOC 2, and GDPR patterns — encrypted at rest and in transit, role-based access, full audit logs, and PII scrubbing at ingest. I sign BAAs and NDAs on request.",
  },
  {
    q: "Will I own the automations and code you build?",
    a: "100%. You get full ownership — source code, workflow exports, credentials, documentation, and Loom walkthroughs. Everything is deployed into your accounts on your infrastructure. No lock-in, no proprietary layer you have to keep paying me for.",
  },
  {
    q: "What if the automation breaks or an API changes?",
    a: "Every build ships with logging, alerting, and a retry-and-fallback layer. If something breaks during the support window I fix it free. Retainer clients get monitored dashboards and same-day response on production issues.",
  },
  {
    q: "Can you work with our in-house engineering team?",
    a: "Often the best setup. I can embed as a fractional automation architect, review PRs, pair on hard integrations, or hand off clean specs and code so your team can maintain it. I've partnered with dev teams from 2 to 40+ engineers.",
  },
  {
    q: "How do we get started?",
    a: "Book a discovery call from the Contact section. We'll spend 30 minutes mapping the bottleneck, the volume, and the outcome you want. Within 48 hours you'll have a written proposal with scope, timeline, and a flat price. If it fits, we start the following week.",
  },
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faqs"
      eyebrow="FAQs"
      title="Answers before you ask."
      description="The questions founders and operators actually send before booking a call."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`glass-panel overflow-hidden rounded-2xl transition-all duration-300 ${
                isOpen
                  ? "border-[var(--color-glow)]/40 shadow-[0_0_40px_-15px_var(--color-glow)]"
                  : "hover:border-[var(--color-glow)]/30 hover:shadow-[0_0_30px_-15px_var(--color-glow)]"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium text-white">{f.q}</span>
                <span
                  className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-[var(--color-glow)]/60 text-white shadow-[0_0_15px_var(--color-glow)]"
                      : ""
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-[14.5px] leading-relaxed text-white/70">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
