import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../section";
import { Reveal, RevealItem } from "../reveal";
import { CountUp } from "../count-up";

type Metric = { value: number; suffix?: string; prefix?: string; label: string };
type Node = { id: string; label: string };
type Project = {
  name: string;
  industry: string;
  summary: string;
  tech: string[];
  problem: string;
  solution: string;
  workflow: Node[];
  impact: string;
  metrics: Metric[];
};

const PROJECTS: Project[] = [
  {
    name: "Voice AI Order Engine",
    industry: "Restaurant",
    summary:
      "24/7 voice agent that takes phone orders, upsells, and pushes tickets to the POS.",
    tech: ["Vapi", "Twilio", "OpenAI", "Square POS", "Make"],
    problem:
      "Staff missed 40% of dinner-rush calls; abandoned orders were bleeding revenue every night.",
    solution:
      "Deployed a natural-sounding voice agent that answers instantly, confirms menu items, applies upsells, and posts orders straight into the POS.",
    workflow: [
      { id: "call", label: "Inbound Call" },
      { id: "voice", label: "Voice Agent" },
      { id: "menu", label: "Menu AI" },
      { id: "pos", label: "POS Ticket" },
      { id: "sms", label: "SMS Confirm" },
    ],
    impact:
      "Recovered every missed call, added 22% avg-ticket lift via automated upsells, zero new headcount.",
    metrics: [
      { value: 100, suffix: "%", label: "Calls Answered" },
      { value: 22, suffix: "%", label: "Avg Ticket Lift" },
      { value: 48000, prefix: "$", label: "Annual Revenue Recovered" },
    ],
  },
  {
    name: "Agentic Lead Qualification Pipeline",
    industry: "Real Estate",
    summary:
      "Multi-step agent that scores, enriches, and books qualified buyers into the calendar.",
    tech: ["n8n", "Apollo", "Clay", "OpenAI", "HubSpot", "Cal.com"],
    problem:
      "SDRs burned 6+ hours a day chasing cold leads that never fit the buyer profile.",
    solution:
      "Built an agent stack that enriches every inbound lead, runs a qualification interview via SMS/email, and books hot buyers directly onto the agent's calendar.",
    workflow: [
      { id: "lead", label: "New Lead" },
      { id: "enrich", label: "Apollo Enrich" },
      { id: "score", label: "AI Score" },
      { id: "crm", label: "HubSpot" },
      { id: "book", label: "Auto Booking" },
    ],
    impact:
      "SDR team redeployed to closing. Pipeline value up 4.1x with the same team size.",
    metrics: [
      { value: 95, suffix: "%", label: "Faster Response" },
      { value: 4, suffix: "x", label: "Lead Conversion" },
      { value: 29000, prefix: "$", label: "Saved Annually" },
    ],
  },
  {
    name: "HIPAA-Compliant Patient Intake Router",
    industry: "Healthcare",
    summary:
      "Encrypted intake flow that triages patients and routes to the right specialist.",
    tech: ["Twilio", "OpenAI", "Supabase", "Zapier", "Athenahealth"],
    problem:
      "Front-desk teams spent 3+ hours a day rekeying intake forms and misrouting appointments.",
    solution:
      "Voice + form intake agent that captures symptoms, verifies insurance, and writes structured records into the EHR with full audit logging.",
    workflow: [
      { id: "intake", label: "Patient Intake" },
      { id: "triage", label: "AI Triage" },
      { id: "verify", label: "Insurance Check" },
      { id: "ehr", label: "EHR Write" },
      { id: "notify", label: "Provider Alert" },
    ],
    impact:
      "Cut intake time from 14 minutes to under 3. Zero HIPAA incidents since launch.",
    metrics: [
      { value: 78, suffix: "%", label: "Faster Intake" },
      { value: 3200, label: "Patients / Month" },
      { value: 62000, prefix: "$", label: "Admin Cost Saved" },
    ],
  },
  {
    name: "Autonomous Invoice Processing Factory",
    industry: "Finance Ops",
    summary:
      "OCR + LLM pipeline that ingests, validates, codes, and pays vendor invoices.",
    tech: ["Azure OCR", "OpenAI", "n8n", "QuickBooks", "Slack"],
    problem:
      "AP team drowning in 2,000+ monthly invoices with a 6-day average payment cycle and constant coding errors.",
    solution:
      "Autonomous pipeline extracts invoice data, matches POs, flags anomalies for review, and schedules payments — humans only touch exceptions.",
    workflow: [
      { id: "inbox", label: "Invoice Inbox" },
      { id: "ocr", label: "OCR + Parse" },
      { id: "match", label: "PO Match" },
      { id: "approve", label: "AI Approve" },
      { id: "pay", label: "QuickBooks Pay" },
    ],
    impact:
      "Payment cycle dropped from 6 days to 8 hours. AP team refocused on strategic vendor work.",
    metrics: [
      { value: 94, suffix: "%", label: "Touchless Rate" },
      { value: 18, suffix: "x", label: "Faster Payment" },
      { value: 140000, prefix: "$", label: "Yearly Savings" },
    ],
  },
  {
    name: "Multi-Agent Supply Chain Exception Handler",
    industry: "Logistics",
    summary:
      "Swarm of agents that detects delays, reroutes shipments, and notifies customers.",
    tech: ["LangGraph", "OpenAI", "Postgres", "Shippo", "Slack"],
    problem:
      "Ops managers chased shipment exceptions across 5 dashboards; customers found out about delays before the team did.",
    solution:
      "Agent swarm monitors carrier APIs, predicts delays, reroutes when possible, and drafts proactive customer comms for approval.",
    workflow: [
      { id: "signal", label: "Carrier Signal" },
      { id: "detect", label: "Delay Detector" },
      { id: "reroute", label: "Reroute Agent" },
      { id: "comms", label: "Customer Comms" },
      { id: "ops", label: "Ops Dashboard" },
    ],
    impact:
      "Proactive comms replaced angry inbounds. NPS jumped 31 points in one quarter.",
    metrics: [
      { value: 67, suffix: "%", label: "Fewer Escalations" },
      { value: 31, prefix: "+", label: "NPS Point Lift" },
      { value: 210000, prefix: "$", label: "Recovered Revenue" },
    ],
  },
  {
    name: "Autonomous HR & IT Onboarding Agent",
    industry: "People Ops",
    summary:
      "One agent provisions accounts, sends docs, schedules training, tracks completion.",
    tech: ["Okta", "Google Workspace", "Notion", "Slack", "OpenAI"],
    problem:
      "New hires waited 3+ days for laptops, logins, and docs. HR and IT duplicated 40+ manual steps per hire.",
    solution:
      "Central agent orchestrates provisioning across Okta, Workspace, and Slack; sends personalized onboarding paths; escalates blockers to humans.",
    workflow: [
      { id: "hire", label: "New Hire" },
      { id: "provision", label: "Auto Provision" },
      { id: "docs", label: "Docs & Policies" },
      { id: "train", label: "Training Plan" },
      { id: "check", label: "Day-30 Check" },
    ],
    impact:
      "Day-one readiness went from 61% to 100%. HR and IT time per hire cut by 84%.",
    metrics: [
      { value: 84, suffix: "%", label: "Less Manual Work" },
      { value: 100, suffix: "%", label: "Day-One Ready" },
      { value: 52000, prefix: "$", label: "Ops Cost Saved" },
    ],
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Systems shipped in production."
      description="Six representative builds across voice, agents, and back-office automation."
    >
      <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <RevealItem key={p.name}>
            <ProjectCard project={p} onOpen={() => setActive(p)} />
          </RevealItem>
        ))}
      </Reveal>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="group relative h-full">
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_50%_0%,var(--color-glow)_0%,transparent_70%)] opacity-40 blur-md" />
      </div>
      <div className="glass-panel relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10.5px] uppercase tracking-[0.22em] text-white/50">
            {project.industry}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-white/70">
          {project.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[10.5px] tracking-wide text-white/70"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[10.5px] tracking-wide text-white/50">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <div className="mt-6 flex-1" />
        <button
          onClick={onOpen}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-4 py-2 text-[12.5px] font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/[0.12]"
        >
          View Case
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8m0 0L6 2m4 4L6 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        aria-hidden
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        initial={{ opacity: 0, scale: 0.94, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.96, y: 10, filter: "blur(6px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel-strong relative z-10 my-4 w-full max-w-3xl rounded-3xl p-6 sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition-colors hover:bg-white/[0.12]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 2l10 10M12 2L2 12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/50">
          {project.industry}
        </div>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-[14.5px] text-white/70">{project.summary}</p>

        <ModalSection label="Problem">
          <p className="text-[14.5px] leading-relaxed text-white/75">{project.problem}</p>
        </ModalSection>

        <ModalSection label="Solution">
          <p className="text-[14.5px] leading-relaxed text-white/75">{project.solution}</p>
        </ModalSection>

        <ModalSection label="Workflow Diagram">
          <WorkflowDiagram nodes={project.workflow} />
        </ModalSection>

        <ModalSection label="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[11.5px] tracking-wide text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_8px_var(--color-glow)]" />
                {t}
              </span>
            ))}
          </div>
        </ModalSection>

        <ModalSection label="Business Impact">
          <p className="text-[14.5px] leading-relaxed text-white/85">{project.impact}</p>
        </ModalSection>

        <ModalSection label="ROI Metrics">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-center"
              >
                <div className="text-3xl font-semibold tracking-tight text-white text-glow">
                  <CountUp
                    to={m.value}
                    suffix={m.suffix ?? ""}
                    prefix={m.prefix ?? ""}
                  />
                </div>
                <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.2em] text-white/60">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </ModalSection>
      </motion.div>
    </motion.div>
  );
}

function ModalSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[10.5px] uppercase tracking-[0.22em] text-white/50">
          {label}
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      {children}
    </div>
  );
}

function WorkflowDiagram({ nodes }: { nodes: Node[] }) {
  const width = 720;
  const height = 140;
  const padX = 40;
  const step = (width - padX * 2) / (nodes.length - 1);
  const y = height / 2;

  return (
    <div className="rounded-2xl border border-white/12 bg-black/25 p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Workflow diagram"
      >
        <defs>
          <filter id="nodeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.slice(0, -1).map((_, i) => {
          const x1 = padX + step * i + 42;
          const x2 = padX + step * (i + 1) - 42;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-20"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </line>
              <circle r="2.4" fill="var(--color-glow)" opacity="0.9">
                <animateMotion
                  dur={`${2 + i * 0.15}s`}
                  repeatCount="indefinite"
                  path={`M ${x1} ${y} L ${x2} ${y}`}
                />
              </circle>
              <polygon
                points={`${x2},${y} ${x2 - 5},${y - 3.5} ${x2 - 5},${y + 3.5}`}
                fill="rgba(255,255,255,0.5)"
              />
            </g>
          );
        })}

        {nodes.map((n, i) => {
          const cx = padX + step * i;
          return (
            <g key={n.id} filter="url(#nodeGlow)">
              <rect
                x={cx - 42}
                y={y - 22}
                width="84"
                height="44"
                rx="12"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
              <text
                x={cx}
                y={y + 4}
                textAnchor="middle"
                fill="rgba(255,255,255,0.9)"
                fontSize="9.5"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
