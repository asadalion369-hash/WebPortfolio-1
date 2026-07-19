import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  container = true,
}: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-28 py-24 sm:py-32 ${className}`}>
      <div className={container ? "mx-auto w-full max-w-6xl px-6" : ""}>
        {(eyebrow || title || description) && (
          <Reveal className="mx-auto max-w-3xl text-center mb-14">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-[15px] text-white/70">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PlaceholderGrid({
  items = 3,
  height = "h-48",
}: {
  items?: number;
  height?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: items }).map((_, i) => (
        <div
          key={i}
          className={`glass-panel rounded-2xl p-6 ${height} flex flex-col justify-between`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white/60">
            <span className="text-xs">0{i + 1}</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/5 rounded-full bg-white/20" />
            <div className="h-2 w-2/5 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}
