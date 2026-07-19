import type { ReactNode } from "react";
import { Section } from "../section";
import { Reveal, RevealItem } from "../reveal";
import {
  Workflow,
  Mic,
  Sparkles,
  Database,
  Code2,
  Bot,
  Phone,
  AudioLines,
  Zap,
  Network,
  Boxes,
  Brain,
  MessageSquare,
  Table2,
  FileSpreadsheet,
  Users,
  Server,
  FileCode,
  Braces,
} from "lucide-react";

type Tool = { name: string; icon: ReactNode; blurb: string };
type Group = { t: string; icon: ReactNode; items: Tool[] };

const GROUPS: Group[] = [
  {
    t: "Automation Platforms",
    icon: <Workflow className="h-4 w-4" />,
    items: [
      { name: "n8n", icon: <Network className="h-4 w-4" />, blurb: "Self-hosted workflow engine" },
      { name: "Make", icon: <Boxes className="h-4 w-4" />, blurb: "Visual scenario builder" },
      { name: "Zapier", icon: <Zap className="h-4 w-4" />, blurb: "Fast SaaS glue" },
      { name: "Pipedream", icon: <Workflow className="h-4 w-4" />, blurb: "Code-first workflows" },
    ],
  },
  {
    t: "Voice AI",
    icon: <Mic className="h-4 w-4" />,
    items: [
      { name: "Vapi", icon: <Phone className="h-4 w-4" />, blurb: "Voice agent orchestration" },
      { name: "ElevenLabs", icon: <AudioLines className="h-4 w-4" />, blurb: "Ultra-realistic TTS" },
      { name: "Twilio", icon: <Phone className="h-4 w-4" />, blurb: "Telephony infrastructure" },
      { name: "Deepgram", icon: <Mic className="h-4 w-4" />, blurb: "Real-time transcription" },
    ],
  },
  {
    t: "AI / LLM",
    icon: <Sparkles className="h-4 w-4" />,
    items: [
      { name: "OpenAI", icon: <Bot className="h-4 w-4" />, blurb: "GPT + Realtime API" },
      { name: "Anthropic", icon: <Brain className="h-4 w-4" />, blurb: "Claude for reasoning" },
      { name: "LangChain", icon: <Braces className="h-4 w-4" />, blurb: "Agent + RAG framework" },
      { name: "LlamaIndex", icon: <FileCode className="h-4 w-4" />, blurb: "Data-aware retrieval" },
    ],
  },
  {
    t: "Data & CRM",
    icon: <Database className="h-4 w-4" />,
    items: [
      { name: "Airtable", icon: <Table2 className="h-4 w-4" />, blurb: "Flexible ops database" },
      { name: "Supabase", icon: <Database className="h-4 w-4" />, blurb: "Postgres + vectors" },
      { name: "HubSpot", icon: <Users className="h-4 w-4" />, blurb: "CRM of record" },
      { name: "Google Sheets", icon: <FileSpreadsheet className="h-4 w-4" />, blurb: "Universal source of truth" },
    ],
  },
  {
    t: "Dev Stack",
    icon: <Code2 className="h-4 w-4" />,
    items: [
      { name: "Next.js", icon: <Code2 className="h-4 w-4" />, blurb: "Production React framework" },
      { name: "TypeScript", icon: <FileCode className="h-4 w-4" />, blurb: "Typed end-to-end" },
      { name: "Node.js", icon: <Server className="h-4 w-4" />, blurb: "Backend runtime" },
      { name: "TailwindCSS", icon: <Braces className="h-4 w-4" />, blurb: "Utility-first styling" },
    ],
  },
  {
    t: "Chat & Messaging",
    icon: <MessageSquare className="h-4 w-4" />,
    items: [
      { name: "WhatsApp API", icon: <MessageSquare className="h-4 w-4" />, blurb: "Business messaging" },
      { name: "Slack", icon: <MessageSquare className="h-4 w-4" />, blurb: "Team ops surface" },
      { name: "Telegram", icon: <MessageSquare className="h-4 w-4" />, blurb: "Bot-friendly channel" },
      { name: "Intercom", icon: <MessageSquare className="h-4 w-4" />, blurb: "Support automation" },
    ],
  },
];

export function TechnicalArsenal() {
  return (
    <Section
      id="arsenal"
      eyebrow="Technical Arsenal"
      title="The stack behind the systems."
      description="Categorized by function — the tools I reach for to ship AI employees fast."
    >
      <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => (
          <RevealItem key={g.t}>
            <div className="glass-panel group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05] text-white/80">
                  {g.icon}
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {g.t}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {g.items.map((it) => (
                  <div key={it.name} className="group/tool relative">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-white/85 transition-all hover:border-white/25 hover:bg-white/[0.08]">
                      <span className="text-white/70 transition-colors group-hover/tool:text-white">
                        {it.icon}
                      </span>
                      <span className="truncate">{it.name}</span>
                    </div>
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[200px] -translate-x-1/2 rounded-lg border border-white/15 bg-black/85 px-2.5 py-1.5 text-[11.5px] text-white/85 opacity-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur transition-opacity duration-200 group-hover/tool:opacity-100">
                      {it.blurb}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
