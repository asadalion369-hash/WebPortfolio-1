import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../section";

const QUOTES = [
  {
    n: "Mark Sterling",
    r: "CEO, Sterling Realty Group",
    q: "Asad completely transformed our pipeline. His multi-agent system qualifies incoming Zillow leads and schedules them into active calendar blocks in under 60 seconds. Our phone bookings spiked 4.5x instantly.",
  },
  {
    n: "Dr. Elena Rostova",
    r: "Operations Director, CarePulse Medical",
    q: "We needed a bulletproof, HIPAA-compliant patient router. Asad delivered a flawless n8n and AWS architecture that eliminated manual charting typos and slashed claims denials. Essential engineering.",
  },
  {
    n: "Julian Vance",
    r: "Managing Partner, Vance & Co. Accounting",
    q: "The automated invoice engine handles multi-currency line items perfectly. If there is a calculation variance, the exception loop flags it immediately. It recaptured $64,000 in early discounts.",
  },
  {
    n: "Chef Mateo Silva",
    r: "Franchise Owner, Silva Quick-Service Eats",
    q: "Our peak hour phone order abandonment dropped to absolute zero. The streaming voice agent handles custom menu modifications directly over SIP trunking and pushes right to our Toast POS.",
  },
  {
    n: "Clara Zhang",
    r: "Founder, VibeTech SaaS",
    q: "We built a beautiful front-end using Lovable, but our backend was completely broken under traffic. Asad stepped in as our Vibe-Coding Architect and rigged up an airtight database structure in days.",
  },
];

function Card({ q, n, r }: { q: string; n: string; r: string }) {
  return (
    <div className="group h-full w-[380px] flex-none">
      <div className="glass-panel relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-[var(--color-glow)]/50 hover:shadow-[0_0_50px_-15px_var(--color-glow)]">
        <div className="text-4xl leading-none text-white/25">&ldquo;</div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">{q}</p>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/25 to-white/5 text-[13px] font-medium text-white/80">
            {n
              .split(" ")
              .map((p) => p[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium text-white">{n}</div>
            <div className="truncate text-[12px] text-white/50">{r}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const loop = [...QUOTES, ...QUOTES];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What clients say."
      description="Real outcomes from real operators."
    >
      <div
        className="relative -mx-6 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg,#222)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg,#222)] to-transparent" />

        <motion.div
          className="flex gap-5 px-6"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
