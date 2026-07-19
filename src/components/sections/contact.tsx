import { Phone, Mail, Linkedin } from "lucide-react";
import { Section } from "../section";
import { Reveal } from "../reveal";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build your AI employee."
      description="Reach out through any channel — I typically respond within a few hours."
    >
      <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InfoCard label="Founder">
          <div className="text-3xl font-semibold tracking-tight text-white font-display">
            Asad Khan
          </div>
          <div className="mt-1 text-[13.5px] text-white/60">
            AI-Automation Engineer
          </div>
        </InfoCard>

        <InfoCard label="Phone" icon={<Phone className="h-4 w-4" />}>
          <a
            href="tel:+923329971718"
            className="block text-[16px] text-white hover:text-[var(--color-glow)] transition-colors"
          >
            +92 332 997 1718
          </a>
          <a
            href="tel:+923246516138"
            className="mt-1.5 block text-[16px] text-white hover:text-[var(--color-glow)] transition-colors"
          >
            +92 324 651 6138
          </a>
        </InfoCard>

        <InfoCard label="Email" icon={<Mail className="h-4 w-4" />}>
          <a
            href="mailto:asadalion369@gmail.com"
            className="block text-[15px] text-white hover:text-[var(--color-glow)] transition-colors break-all"
          >
            asadalion369@Gmail.com
          </a>
          <a
            href="mailto:nexus.aia.m369@gmail.com"
            className="mt-1.5 block text-[15px] text-white hover:text-[var(--color-glow)] transition-colors break-all"
          >
            nexus.aia.m369@Gmail.com
          </a>
        </InfoCard>

        <InfoCard label="LinkedIn" icon={<Linkedin className="h-4 w-4" />}>
          <a
            href="https://linkedin.com/in/asad-khan-135670274"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-white hover:text-[var(--color-glow)] transition-colors break-all"
          >
            linkedin.com/in/asad-khan-135670274
          </a>
        </InfoCard>
      </Reveal>
    </Section>
  );
}

function InfoCard({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group glass-panel relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:border-white/25 hover:-translate-y-0.5">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-glow)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-glow)]/25" />
      <div className="relative flex items-center gap-2.5">
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80">
            {icon}
          </span>
        )}
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
          {label}
        </span>
      </div>
      <div className="relative mt-4">{children}</div>
    </div>
  );
}
