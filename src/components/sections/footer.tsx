export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[17px] font-semibold text-black font-display">
              A
              <span className="absolute inset-0 -z-10 rounded-xl bg-[var(--color-glow)]/40 blur-md animate-pulse-glow" />
            </span>
            <span className="text-[14px] font-medium tracking-wide text-white">
              Asad Khan
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/60">
            AI-Automation Engineer building autonomous AI employees that work
            24/7 so teams scale without hiring.
          </p>
        </div>

        <FooterCol
          title="Sections"
          links={[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "A.L.P.H.A", href: "#framework" },
            { label: "Experience", href: "#experience" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { label: "Voice AI Agents", href: "#services" },
            { label: "Lead Qualification", href: "#services" },
            { label: "Workflow Automation", href: "#services" },
            { label: "CRM Integrations", href: "#services" },
            { label: "Custom AI Employees", href: "#services" },
          ]}
        />
        <FooterCol
          title="Social"
          links={[
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/asad-khan-135670274",
            },
            { label: "WhatsApp", href: "https://wa.me/923329971718" },
            { label: "Email", href: "mailto:asadalion369@gmail.com" },
            { label: "GitHub", href: "#" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-[11.5px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center">
          <span>© {year} Asad Khan · All rights reserved</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] shadow-[0_0_10px_var(--color-glow)]" />
            Built with AI-powered automation
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[13px] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
