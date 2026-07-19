import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Section } from "../section";
import { Reveal } from "../reveal";

const ROLES = [
  {
    y: "2025 — 2026",
    r: "Backend & Workflow Automation Specialist",
    d: "Built foundational enterprise pipelines using script-heavy Node.js and Python tasks to automate legacy database migrations. Developed internal ETL workers that eliminated multi-day corporate data backlogs across supply chain and inventory networks.",
  },
  {
    y: "2025 — 2026",
    r: "Integration Engineer & API Architect",
    d: "Shifted into high-volume visual workflow platforms, creating programmatic webhooks between disparate SaaS stacks. Built fault-tolerant error-handling modules managing millions of daily operational payloads with zero downtime.",
  },
  {
    y: "2025 — 2026",
    r: "AI Solutions & LLM Core Developer",
    d: "Pivoted backend architectures to leverage emerging generative models. Engineered production-ready Retrieval-Augmented Generation (RAG) structures with vector databases, turning unstructured corporate knowledge bases into intelligent internal query engines.",
  },
  {
    y: "2025 — Present",
    r: "Principal Automation Engineer",
    d: "Formed Nexus to engineer enterprise-grade multi-agent swarms, low-latency WebRTC voice solutions, and autonomous workflow nodes. Specialize in deploying digital workers that integrate directly into live corporate infrastructure to replace manual administrative tasks.",
  },
  {
    y: "2025 — Present",
    r: "Senior Vibe-Coding Architect & Production Auditor",
    d: "Pioneered production-grade backend scaling for the “Vibe Coding” ecosystem. Audit, debug, and harden rapid front-end prototypes generated via Lovable, Bolt.new, and Replit — designing custom n8n webhook architectures and background event routers that bridge AI-generated interfaces into secure enterprise databases.",
  },
];

function TimelineItem({
  role,
  index,
}: {
  role: (typeof ROLES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <div ref={ref} className="relative pl-16 md:pl-24">
      {/* Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 top-3 md:left-8"
      >
        <div className="relative">
          <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_20px_var(--color-glow)]" />
          <div className="absolute inset-0 h-4 w-4 rounded-full bg-[var(--color-glow)]/60 animate-pulse-glow" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
        animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-2xl p-6 transition-colors hover:border-white/25"
      >
        <div className="flex flex-wrap items-baseline gap-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
            {role.y}
          </div>
          <div className="text-[10.5px] uppercase tracking-[0.24em] text-white/35">
            Milestone 0{index + 1}
          </div>
        </div>
        <h3 className="mt-2 text-lg font-medium text-white sm:text-xl">
          {role.r}
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">
          {role.d}
        </p>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of shipped systems."
      description="From ETL pipelines to autonomous multi-agent swarms — the throughline is production-grade automation."
    >
      <Reveal>
        <div ref={trackRef} className="relative mx-auto max-w-3xl">
          {/* Base line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:left-10" />
          {/* Animated draw-in line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-white via-[var(--color-glow)] to-white/0 shadow-[0_0_12px_var(--color-glow)] md:left-10"
          />

          <div className="space-y-8">
            {ROLES.map((r, i) => (
              <TimelineItem key={i} role={r} index={i} />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
