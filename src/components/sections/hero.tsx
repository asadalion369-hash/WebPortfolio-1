import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { MagneticButton } from "../magnetic-button";
import { Typewriter } from "../typewriter";
import { CountUp } from "../count-up";
import { SplineBackdrop } from "../spline-backdrop";
import asadAsset from "@/assets/asad.png.asset.json";

const STATS = [
  { n: 50, suffix: "+", label: "Workflows Automated" },
  { n: 6000, suffix: "+", label: "Hours Saved Monthly" },
  { n: 35, suffix: "+", label: "Businesses Scaled" },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const handleLeave = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  return (
    <section
      id="top"
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden pt-28 pb-24"
    >
      {/* Cursor glow */}
      <motion.div
        aria-hidden
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute z-0 h-[420px] w-[420px] rounded-full bg-[var(--color-glow)]/12 blur-3xl mix-blend-screen"
      />

      {/* Grid + vignette */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_85%)]" />

      {/* Spline backdrop — oversized, dominant background, lazy loaded */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center">
        <div className="relative h-[135vh] max-h-[1600px] w-[140%] max-w-none -mt-[8vh] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_88%)] sm:w-[120%] lg:w-[115%]">
          <SplineBackdrop url="https://prod.spline.design/7NKmILBuWNuVmjdM/scene.splinecode" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-[11.5px] uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-glow)] opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--color-glow)]" />
            </span>
            AI Automation Engineer
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-5xl text-balance text-center text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          I Build{" "}
          <span className="text-glow bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            AI Employees
          </span>{" "}
          That Work 24/7 So Businesses{" "}
          <span className="italic font-light text-white/80">Scale</span> Without Hiring.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-center text-[15.5px] leading-relaxed text-white/70 sm:text-base"
        >
          I design AI Agents, Voice AI systems, Workflow Automations, and No-Code
          solutions using modern automation platforms.
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.2em] text-white/50"
        >
          <span>Specializing in</span>
          <span className="min-w-[190px] text-left text-[13px] uppercase tracking-[0.18em] text-white">
            <Typewriter
              words={[
                "AI Agents",
                "Voice Automation",
                "Workflow Automation",
                "Business Automation",
                "Lead Generation",
              ]}
            />
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#contact"
            className="group relative inline-flex items-center rounded-full bg-white px-6 py-3.5 text-[13.5px] font-medium text-black transition-shadow hover:shadow-[0_0_40px_-4px_var(--color-glow)]"
          >
            Book Discovery Call
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8m0 0L6 2m4 4L6 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
          <MagneticButton
            href="#projects"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-[13.5px] font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/[0.09]"
          >
            View Projects
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl px-6 py-5 text-center">
              <div className="text-4xl font-semibold tracking-tight text-white text-glow">
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Portrait + quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-[380px_1fr]"
        >
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--color-glow)]/10 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-2">
              <div className="overflow-hidden rounded-[1.4rem] bg-black/20">
                <img
                  src="/_15e/assets-v1/db38a0e3-f31c-49f5-bf66-daa31ad12f59/asad.png"
                  alt="Asad Khan, AI Automation Engineer"
                  className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-white/70">
                <span>Asad Khan</span>
                <span className="flex items-center gap-2">
                  <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_18px_-2px_rgba(37,211,102,0.7)]">
                    <svg viewBox="0 0 32 32" width="15" height="15" fill="currentColor" aria-hidden="true">
                      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.28.6 4.42 1.66 6.28L3 29l6.9-1.62A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm5.86 15.7c-.32-.16-1.9-.94-2.2-1.04-.3-.12-.5-.16-.72.16-.2.32-.82 1.04-1 1.24-.18.2-.36.22-.68.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.78-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.52.1-.2.06-.4-.02-.56-.08-.16-.72-1.74-1-2.38-.26-.62-.52-.54-.72-.54H10c-.2 0-.52.08-.8.4s-1.04 1.02-1.04 2.48c0 1.46 1.06 2.88 1.22 3.08.16.2 2.1 3.22 5.1 4.5.72.32 1.28.5 1.72.64.72.24 1.36.2 1.88.12.58-.08 1.9-.78 2.16-1.52.26-.74.26-1.38.18-1.52-.08-.14-.28-.22-.6-.38Z" />
                    </svg>
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#22ff88] ring-2 ring-black shadow-[0_0_10px_#22ff88] animate-pulse" />
                  </span>
                  <span>Available</span>
                </span>
              </div>
            </div>
          </div>

          <blockquote className="relative">
            <div className="text-6xl leading-none text-white/15 font-serif">“</div>
            <p className="mt-2 text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
              Real impact starts with real solutions. I believe every challenge is an
              opportunity to simplify what feels impossible. Instead of adding
              complexity, I focus on creating systems that are clear, dependable, and
              built with purpose. Great results don't come from chasing attention—they
              come from solving the right problems in the right way.
            </p>
            <footer className="mt-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-white/50">
              <span className="h-px w-10 bg-white/30" />
              Asad Khan · Engineer's note
            </footer>
          </blockquote>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/30" />
    </section>
  );
}
