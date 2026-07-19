import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "../section";
import { Reveal } from "../reveal";

type Node = { label: string; sub?: string };

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  workflow: Node[];
  before: string;
  after: string;
  quote: string;
  attribution: string;
  metrics: { k: string; v: string }[];
};

const studies: CaseStudy[] = [
  {
    id: "drive-thru",
    title: "The Autonomous Drive-Thru",
    client: "Regional QSR Chain · 42 locations",
    industry: "Quick-Service Restaurant",
    workflow: [
      { label: "Voice Call", sub: "Twilio" },
      { label: "STT", sub: "Deepgram" },
      { label: "LLM Agent", sub: "GPT-4o" },
      { label: "Menu / POS", sub: "Toast API" },
      { label: "Order Confirm", sub: "TTS" },
    ],
    before:
      "Peak-hour lines stalled at 6 minutes. Staff turnover was burning $180K/yr on retraining order-takers who left within 90 days.",
    after:
      "A Voice AI drive-thru agent takes 100% of orders across 3 lanes, syncs directly with Toast POS, upsells based on cart, and hands off only edge cases to humans.",
    quote:
      "We stopped hiring order-takers. Line times dropped 43% and check average went up 18% because the agent never forgets to upsell.",
    attribution: "COO · QSR Group",
    metrics: [
      { k: "43%", v: "Faster line time" },
      { k: "+18%", v: "Check average" },
      { k: "24/7", v: "Uptime" },
    ],
  },
  {
    id: "qualifier",
    title: "The 60-Second Qualifier",
    client: "High-Volume Real Estate Brokerage",
    industry: "Real Estate",
    workflow: [
      { label: "Inbound Lead", sub: "Web / Zillow" },
      { label: "AI Voice Call", sub: "<60s" },
      { label: "BANT Scoring", sub: "LLM" },
      { label: "CRM Route", sub: "Follow Up Boss" },
      { label: "Agent Assign", sub: "Calendar" },
    ],
    before:
      "Leads waited 4+ hours for a first call. Only 27% of inbound inquiries ever got contacted. Top agents burned nights re-qualifying dead leads.",
    after:
      "An AI voice agent calls every lead within 60 seconds, runs full BANT qualification, books tours on live calendars, and only routes hot leads to human agents.",
    quote:
      "Our closers stopped chasing tire-kickers. Booked showings tripled and the team's happier because every hand-off is a real buyer.",
    attribution: "Managing Broker · Coastal Realty",
    metrics: [
      { k: "3.2×", v: "Booked showings" },
      { k: "97%", v: "Lead contact rate" },
      { k: "58s", v: "Avg response time" },
    ],
  },
  {
    id: "medical-router",
    title: "The Zero-Error Medical Router",
    client: "Multi-Specialty Clinic Network",
    industry: "Healthcare",
    workflow: [
      { label: "Patient Call", sub: "Inbound" },
      { label: "HIPAA STT", sub: "Encrypted" },
      { label: "Symptom Triage", sub: "LLM + RAG" },
      { label: "Specialty Match", sub: "Rules Engine" },
      { label: "Book / Escalate", sub: "EHR Sync" },
    ],
    before:
      "Front-desk staff mis-routed 1 in 5 patient calls. Wrong-specialty appointments cost the clinic $92 per no-show and eroded patient trust.",
    after:
      "A HIPAA-compliant voice agent triages every incoming call, matches symptoms to the correct specialty via a curated knowledge base, and books directly into the EHR.",
    quote:
      "Mis-routes went to nearly zero. Our nurses stopped playing switchboard and got back to actual patient care.",
    attribution: "Director of Operations · Clinic Network",
    metrics: [
      { k: "99.4%", v: "Correct routing" },
      { k: "-71%", v: "No-shows" },
      { k: "HIPAA", v: "Compliant" },
    ],
  },
  {
    id: "self-healing-crm",
    title: "The Self-Healing CRM",
    client: "B2B SaaS · 400-seat sales org",
    industry: "SaaS / RevOps",
    workflow: [
      { label: "Data Sources", sub: "Email / Calls / Web" },
      { label: "Enrichment Agent", sub: "Clearbit + LLM" },
      { label: "Dedupe & Merge", sub: "Fuzzy Match" },
      { label: "CRM Write", sub: "Salesforce" },
      { label: "Audit Loop", sub: "Nightly" },
    ],
    before:
      "63% of CRM records were incomplete or duplicated. Reps wasted 9 hours/week on data hygiene instead of selling.",
    after:
      "A background agent continuously enriches, dedupes, and validates every record — reps never touch a form again, and the CRM is now a source of truth.",
    quote:
      "For the first time, the dashboard actually matches reality. We recovered a full day per rep per week.",
    attribution: "VP RevOps · SaaS Platform",
    metrics: [
      { k: "9 hrs", v: "Saved / rep / wk" },
      { k: "94%", v: "Record accuracy" },
      { k: "0", v: "Manual entries" },
    ],
  },
  {
    id: "lead-responder",
    title: "The 10-Second Lead Responder",
    client: "DTC E-commerce Brand",
    industry: "E-commerce",
    workflow: [
      { label: "Form / DM / Ad", sub: "Multi-channel" },
      { label: "Intent Classifier", sub: "LLM" },
      { label: "Personalized Reply", sub: "Context-aware" },
      { label: "Cart / Checkout", sub: "Shopify" },
      { label: "Human Handoff", sub: "If needed" },
    ],
    before:
      "Ad-driven leads went cold after 5 minutes. Support team couldn't keep up with DMs across Instagram, WhatsApp, and site chat.",
    after:
      "A unified conversational agent replies in under 10 seconds across every channel, recovers abandoned carts, and only escalates when a human is truly needed.",
    quote:
      "Response time went from hours to seconds. Conversion on ad traffic jumped 34% in the first month.",
    attribution: "Head of Growth · DTC Brand",
    metrics: [
      { k: "+34%", v: "Ad conversion" },
      { k: "<10s", v: "Reply time" },
      { k: "5", v: "Channels unified" },
    ],
  },
  {
    id: "touchless-invoicer",
    title: "The Touchless Invoicer",
    client: "Mid-Market Manufacturer",
    industry: "Finance Ops",
    workflow: [
      { label: "Invoice Inbox", sub: "Email / EDI" },
      { label: "OCR + Extract", sub: "Vision LLM" },
      { label: "3-Way Match", sub: "PO + GR" },
      { label: "Approval Route", sub: "Policy Engine" },
      { label: "ERP Post", sub: "NetSuite" },
    ],
    before:
      "AP clerks manually keyed 4,200 invoices/month. Errors averaged 3.1% and payment cycles stretched to 21 days.",
    after:
      "A vision + LLM pipeline reads any invoice format, matches to POs, routes exceptions, and posts to NetSuite — with a full audit trail on every line.",
    quote:
      "We closed the month in 3 days instead of 11. The AP team now handles exceptions, not data entry.",
    attribution: "Controller · Manufacturing Co.",
    metrics: [
      { k: "97%", v: "Touchless rate" },
      { k: "-73%", v: "Cycle time" },
      { k: "0.2%", v: "Error rate" },
    ],
  },
];

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="Deep dives into real deployments."
      description="Problem, architecture, outcome. Numbers first, story second."
    >
      <div className="space-y-24 sm:space-y-32">
        {studies.map((s, i) => (
          <CaseStudyBlock key={s.id} study={s} index={i} />
        ))}
      </div>
    </Section>
  );
}

function CaseStudyBlock({ study, index }: { study: CaseStudy; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <article className="relative">
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">
              Case Study · {String(index + 1).padStart(2, "0")} · {study.industry}
            </div>
            <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {study.title}
            </h3>
            <div className="mt-2 text-sm text-white/60">{study.client}</div>
          </div>
        </div>
      </Reveal>

      <div
        className={`grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 ${
          flipped ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="lg:col-span-7">
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <WorkflowStrip nodes={study.workflow} />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="flex h-full flex-col gap-5">
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45">
                Before
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {study.before}
              </p>
              <div className="mt-5 h-px w-full bg-white/10" />
              <div className="mt-5 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-glow)]">
                After
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {study.after}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {study.metrics.map((m) => (
                <div
                  key={m.v}
                  className="glass-panel rounded-xl px-3 py-4 text-center"
                >
                  <div className="text-lg font-semibold text-white text-glow">
                    {m.k}
                  </div>
                  <div className="mt-1 text-[9.5px] uppercase tracking-[0.16em] text-white/50">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <figure className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-4 -top-6 select-none font-display text-[110px] leading-none text-white/10"
          >
            &ldquo;
          </div>
          <blockquote className="relative pl-8 sm:pl-12">
            <p className="font-display text-xl sm:text-2xl leading-snug text-white text-glow">
              {study.quote}
            </p>
            <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/50">
              — {study.attribution}
            </figcaption>
          </blockquote>
        </figure>
      </Reveal>
    </article>
  );
}

function WorkflowStrip({ nodes }: { nodes: Node[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="relative">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45">
          Workflow
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
          Live pipeline
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        {nodes.map((n, i) => (
          <div
            key={i}
            className="flex flex-1 items-center gap-3 sm:flex-col sm:gap-0"
          >
            <NodePill node={n} index={i} active={inView} total={nodes.length} />
            {i < nodes.length - 1 && (
              <Connector index={i} active={inView} total={nodes.length} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function NodePill({
  node,
  index,
  active,
  total,
}: {
  node: Node;
  index: number;
  active: boolean;
  total: number;
}) {
  const delay = 0.15 + index * (1.2 / total);
  return (
    <motion.div
      initial={{ opacity: 0.25, y: 6 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full sm:flex-1"
    >
      <motion.div
        initial={{ boxShadow: "0 0 0 0 rgba(252,232,215,0)" }}
        animate={
          active
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(252,232,215,0)",
                  "0 0 32px -4px rgba(252,232,215,0.55)",
                  "0 0 16px -6px rgba(252,232,215,0.25)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.1, delay, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-3 py-3 text-center backdrop-blur"
      >
        <div className="text-[11px] font-medium text-white leading-tight">
          {node.label}
        </div>
        {node.sub && (
          <div className="mt-1 text-[9.5px] uppercase tracking-[0.18em] text-white/45">
            {node.sub}
          </div>
        )}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={active ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]"
        />
      </motion.div>
    </motion.div>
  );
}

function Connector({
  index,
  active,
  total,
}: {
  index: number;
  active: boolean;
  total: number;
}) {
  const delay = 0.15 + index * (1.2 / total) + 0.25;
  return (
    <>
      {/* Mobile: vertical dashed line */}
      <div className="ml-4 flex h-4 w-4 items-center justify-center sm:hidden">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={active ? { scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay }}
          className="h-4 w-px origin-top bg-gradient-to-b from-[var(--color-glow)]/70 to-white/10"
        />
      </div>
      {/* Desktop: horizontal animated line with traveling dot */}
      <div className="relative hidden h-px flex-none self-center sm:block sm:h-[2px] sm:w-6 lg:w-10">
        <div className="absolute inset-0 rounded-full bg-white/10" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={active ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
          className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[var(--color-glow)] to-white/40"
        />
        <motion.div
          initial={{ x: "-4px", opacity: 0 }}
          animate={active ? { x: "calc(100% - 4px)", opacity: [0, 1, 0] } : {}}
          transition={{ duration: 0.9, delay: delay + 0.05, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_var(--color-glow)]"
        />
      </div>
    </>
  );
}
