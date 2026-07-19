import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../section";
import { Reveal } from "../reveal";

const STEPS = [
  {
    l: "A",
    t: "Audit",
    short: "Assess",
    d: "Assess current workflows and bottlenecks. Map every manual process, tool, and hand-off to find the highest-leverage automation targets.",
  },
  {
    l: "L",
    t: "Logic",
    short: "Design",
    d: "Design the automation logic and decision rules. Define agents, routing, guardrails, and the deterministic backbone the AI runs on.",
  },
  {
    l: "P",
    t: "Pipeline",
    short: "Build",
    d: "Build the end-to-end workflow/pipeline. Wire APIs, models, memory, and tools into a resilient system that ships value on day one.",
  },
  {
    l: "H",
    t: "Handoff",
    short: "Integrate",
    d: "Integrate into the client's existing stack — CRM, telephony, inbox, database. No parallel tools. It lives where the team already works.",
  },
  {
    l: "A",
    t: "Amplify",
    short: "Scale",
    d: "Monitor, refine, scale. Observability, evals, and iterative upgrades turn a working automation into a compounding advantage.",
  },
];

export function AlphaFramework() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="framework"
      eyebrow="A.L.P.H.A Framework"
      title="The signature methodology behind every build."
      description="A repeatable operating system for taking an idea to a running AI employee."
    >
      {/* Ambient glow backdrop — signature centerpiece */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-glow)]/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-glow)]/15 blur-[80px]" />
      </div>

      <Reveal>
        <div className="glass-panel-strong glow-ring relative rounded-3xl p-6 sm:p-10">
          {/* Stepper track */}
          <div className="relative">
            {/* Base line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-white/10 sm:top-9" />
            {/* Progress line */}
            <motion.div
              className="absolute left-0 top-8 h-px bg-gradient-to-r from-white/70 via-[var(--color-glow)] to-white/0 shadow-[0_0_16px_var(--color-glow)] sm:top-9"
              initial={false}
              animate={{
                width: `${(active / (STEPS.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative grid grid-cols-5 gap-2 sm:gap-4">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        boxShadow: isActive
                          ? "0 0 0 1px oklch(1 0 0 / 0.35), 0 0 32px -4px oklch(0.93 0.035 65 / 0.75), 0 0 80px -10px oklch(0.93 0.035 65 / 0.5)"
                          : "0 0 0 1px oklch(1 0 0 / 0.12), 0 0 0 rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur sm:h-[72px] sm:w-[72px] ${
                        isActive
                          ? "bg-white/[0.14]"
                          : isPast
                            ? "bg-white/[0.08]"
                            : "bg-white/[0.04]"
                      }`}
                    >
                      <span
                        className={`text-2xl font-semibold sm:text-[26px] ${
                          isActive ? "text-white text-glow" : "text-white/80"
                        }`}
                      >
                        {s.l}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="alpha-halo"
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30"
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                    </motion.div>
                    <div className="mt-3 text-center">
                      <div
                        className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                          isActive ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        Step 0{i + 1}
                      </div>
                      <div
                        className={`mt-1 text-[13px] font-medium transition-colors ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {s.short}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active step detail */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`letter-${active}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="text-[10.5px] uppercase tracking-[0.28em] text-white/50">
                    Phase 0{active + 1}
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-[120px] font-semibold leading-none tracking-tighter text-white text-glow sm:text-[144px]">
                      {STEPS[active].l}
                    </span>
                  </div>
                  <div className="mt-1 text-2xl font-medium text-white/90">
                    {STEPS[active].t}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="md:col-span-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg leading-relaxed text-white/75 sm:text-xl"
                >
                  {STEPS[active].d}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
