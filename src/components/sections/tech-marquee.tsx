const STACK = [
  { name: "n8n", d: "M4 6l5 6-5 6M20 6l-5 6 5 6M9 12h6" },
  { name: "Make", d: "M12 3l4 7h-3v8h-2v-8H8l4-7z" },
  { name: "Zapier", d: "M12 2v20M2 12h20M5 5l14 14M19 5L5 19" },
  { name: "Vapi", d: "M4 12c2-4 4-6 8-6s6 2 8 6c-2 4-4 6-8 6s-6-2-8-6z M12 9v6" },
  { name: "OpenAI", d: "M12 3a5 5 0 015 5v8a5 5 0 01-10 0V8a5 5 0 015-5zM12 8v8" },
  { name: "Anthropic", d: "M6 20L11 4h2l5 16h-2.5l-1.2-4h-4.6L8.5 20H6z" },
  { name: "ElevenLabs", d: "M8 6v12M12 4v16M16 8v8" },
  { name: "Twilio", d: "M12 3a9 9 0 100 18 9 9 0 000-18zm-3 6h2v2H9V9zm4 0h2v2h-2V9zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z" },
  { name: "Airtable", d: "M3 8l9-4 9 4-9 4-9-4zm0 4l9 4 9-4M3 16l9 4 9-4" },
  { name: "Google Sheets", d: "M5 3h10l4 4v14H5zM9 11h10M9 15h10M9 19h10M9 11v8" },
  { name: "Supabase", d: "M13 3L4 15h7v6l9-12h-7V3z" },
  { name: "Stripe", d: "M8 8c0-1.5 1.5-2 3-2s3 .5 3 2-1.5 2-3 2.5S8 11 8 12.5s1.5 2 3 2 3-.5 3-2" },
];

function Logo({ name, d }: { name: string; d: string }) {
  return (
    <div className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.08]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/80 transition-all group-hover:text-white group-hover:drop-shadow-[0_0_6px_var(--color-glow)]"
      >
        <path d={d} />
      </svg>
      <span>{name}</span>
    </div>
  );
}

export function TechMarquee() {
  const row = [...STACK, ...STACK];
  return (
    <section
      aria-label="Tech stack"
      className="relative py-20 border-y border-white/10 bg-white/[0.02]"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent" />

      <div className="mb-8 text-center text-[11px] uppercase tracking-[0.28em] text-white/50">
        Tools I orchestrate every day
      </div>

      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {row.map((l, i) => (
            <Logo key={`${l.name}-${i}`} name={l.name} d={l.d} />
          ))}
        </div>
      </div>
    </section>
  );
}
