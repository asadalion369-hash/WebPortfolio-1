import { Section } from "../section";
import { Reveal, RevealItem } from "../reveal";
import type { ReactNode } from "react";

interface Service {
  t: string;
  d: string;
  tag: string;
  icon: ReactNode;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES: Service[] = [
  {
    t: "AI Agent Development",
    d: "Custom autonomous agents that reason, use tools, and complete real work — not chatbots pretending to help.",
    tag: "LangGraph · GPT · Claude",
    icon: (
      <g {...stroke}>
        <circle cx="12" cy="12" r="4" />
        <circle cx="5" cy="6" r="1.5" />
        <circle cx="19" cy="6" r="1.5" />
        <circle cx="5" cy="18" r="1.5" />
        <circle cx="19" cy="18" r="1.5" />
        <path d="M8.8 10L6.4 7.2 M15.2 10l2.4-2.8 M8.8 14l-2.4 2.8 M15.2 14l2.4 2.8" />
      </g>
    ),
  },
  {
    t: "Voice AI Systems",
    d: "24/7 inbound and outbound voice employees — natural conversation, real appointments, real revenue.",
    tag: "Vapi · Retell · ElevenLabs",
    icon: (
      <g {...stroke}>
        <path d="M4 12h2 M8 8v8 M12 5v14 M16 8v8 M20 12h-2" />
      </g>
    ),
  },
  {
    t: "Workflow Automation",
    d: "End-to-end business processes wired across your stack with triggers, retries, and full observability.",
    tag: "n8n · Make · Zapier",
    icon: (
      <g {...stroke}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="5" cy="18" r="2" />
        <path d="M7 6h6a4 4 0 014 4v0 M17 12a4 4 0 01-4 4H7" />
        <path d="M3 4l1-1M3 8l1 1" />
      </g>
    ),
  },
  {
    t: "CRM & Lead Automation",
    d: "Lead capture, enrichment, scoring, and routing that puts the right lead in the right rep's inbox in under a minute.",
    tag: "HubSpot · GoHighLevel · Airtable",
    icon: (
      <g {...stroke}>
        <path d="M3 17c2-4 6-6 9-6h6" />
        <path d="M15 8l3 3-3 3" />
        <circle cx="4.5" cy="18" r="1" />
        <circle cx="9" cy="15" r="1" />
      </g>
    ),
  },
  {
    t: "No-Code Integrations",
    d: "Custom APIs, webhooks, and glue code so every tool in your stack talks to every other tool — reliably.",
    tag: "Webhooks · Edge · TypeScript",
    icon: (
      <g {...stroke}>
        <path d="M7 8V5 M11 8V5 M5 8h8v4a4 4 0 01-4 4v3" />
        <path d="M13 14h3a4 4 0 004-4V8" />
      </g>
    ),
  },
  {
    t: "Business Process Consulting",
    d: "Before we build, we map. I find the loops, bottlenecks, and low-leverage work — then design the system to remove them.",
    tag: "Discovery · Systems design",
    icon: (
      <g {...stroke}>
        <path d="M12 3l4 4-4 4-4-4 4-4z" />
        <path d="M12 11v4 M12 15l-5 4 M12 15l5 4" />
        <circle cx="6" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </g>
    ),
  },
  {
    t: "Appointment & Scheduling Automation",
    d: "Booking systems that qualify, confirm, and reschedule on their own — synced to your calendar and your CRM.",
    tag: "Cal.com · Google · Voice",
    icon: (
      <g {...stroke}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16 M8 3v4 M16 3v4" />
        <path d="M10 15l2 2 4-4" />
      </g>
    ),
  },
  {
    t: "E-commerce & Order Automation",
    d: "From cart to fulfillment to support — automated order routing, inventory sync, and abandoned-cart recovery that pays for itself.",
    tag: "Shopify · Stripe · Klaviyo",
    icon: (
      <g {...stroke}>
        <path d="M3 5h2l2 11h11l2-8H7" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
        <path d="M18 8v-3M20 6.5h-4" />
      </g>
    ),
  },
  {
    t: "AI Chatbot & Support Automation",
    d: "Company-aware assistants grounded in your docs and tickets — resolving 60%+ of queries before a human sees them.",
    tag: "RAG · Pinecone · pgvector",
    icon: (
      <g {...stroke}>
        <path d="M4 5h16v10H9l-5 4V5z" />
        <path d="M12 10l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      </g>
    ),
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="A modular AI operating system for your business."
      description="Pick a module or stack them together. Everything I build plugs into the tools your team already uses."
    >
      <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <RevealItem key={s.t}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/[0.07]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-glow)]/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-white/85 transition-all group-hover:text-white group-hover:drop-shadow-[0_0_10px_var(--color-glow)]">
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                  </span>
                  <span className="text-[10.5px] uppercase tracking-[0.22em] text-white/50">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.d}</p>
              </div>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1.5 text-[12.5px] text-white/60 transition-colors group-hover:text-white"
              >
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8m0 0L6 2m4 4L6 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
