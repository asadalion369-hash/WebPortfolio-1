import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Smile, Send, X, Check, CheckCheck } from "lucide-react";

type Message = {
  id: string;
  from: "them" | "me";
  kind: "text" | "voice";
  text?: string;
  duration?: string;
  time: string;
  read?: boolean;
};

const QUICK_REPLIES = [
  "Book a discovery call",
  "How much does it cost?",
  "Can you automate my CRM?",
  "Show me a case study",
];

const EMOJIS = ["👍", "🙌", "🔥", "🚀", "🤖", "💡", "✅", "❤️", "😄", "🎯", "⚡", "📈"];

// Static scripted responses. Replace `getAgentResponse` with a real API
// call later — the message pipeline stays identical.
const SCRIPTS: Record<string, string> = {
  "book a discovery call":
    "Awesome — I'd love to. Drop your email or best time and I'll send a Calendly invite within the hour.",
  "how much does it cost?":
    "Projects start at $200 (Starter) and scale to $1,250+ (Enterprise). Custom quotes based on scope — want the full breakdown?",
  "can you automate my crm?":
    "Absolutely. I've built self-healing pipelines for HubSpot, Salesforce, GoHighLevel & Airtable. What CRM are you on?",
  "show me a case study":
    "Sure — check out The Autonomous Drive-Thru or The 60-Second Qualifier in the Case Studies section. Both shipped real ROI.",
};

async function getAgentResponse(userText: string): Promise<string> {
  // TODO: swap this out for a real AI agent API call, e.g.:
  //   const r = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ text: userText }) });
  //   const { reply } = await r.json();
  //   return reply;
  const key = userText.trim().toLowerCase();
  return (
    SCRIPTS[key] ??
    "Got it — I'll get back to you with details shortly. In the meantime, feel free to explore the site or book a call above."
  );
}

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      from: "them",
      kind: "text",
      text: "Hey 👋 I'm Asad's AI assistant. Ask me anything about building your AI employee.",
      time: timeNow(),
    },
    {
      id: "m2",
      from: "them",
      kind: "voice",
      duration: "0:14",
      time: timeNow(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      from: "me",
      kind: "text",
      text: trimmed,
      time: timeNow(),
      read: false,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setEmojiOpen(false);
    setTyping(true);

    const reply = await getAgentResponse(trimmed);
    // simulate natural delay
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 700));

    setTyping(false);
    setMessages((m) => [
      ...m.map((msg) =>
        msg.id === userMsg.id ? { ...msg, read: true } : msg,
      ),
      {
        id: crypto.randomUUID(),
        from: "them",
        kind: "text",
        text: reply,
        time: timeNow(),
      },
    ]);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.05]"
        style={{ backgroundColor: "#25D366" }}
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 blur-xl opacity-70 animate-pulse-glow" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.svg
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              viewBox="0 0 32 32"
              width="26"
              height="26"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 3C8.82 3 3 8.82 3 16c0 2.28.6 4.42 1.66 6.28L3 29l6.9-1.62A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.6c-2.02 0-3.9-.54-5.52-1.48l-.4-.24-4.1.96.98-4-.26-.42A10.55 10.55 0 0 1 5.4 16C5.4 10.14 10.14 5.4 16 5.4S26.6 10.14 26.6 16 21.86 26.6 16 26.6Zm5.86-7.9c-.32-.16-1.9-.94-2.2-1.04-.3-.12-.5-.16-.72.16-.2.32-.82 1.04-1 1.24-.18.2-.36.22-.68.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.78-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.52.1-.2.06-.4-.02-.56-.08-.16-.72-1.74-1-2.38-.26-.62-.52-.54-.72-.54H10c-.2 0-.52.08-.8.4s-1.04 1.02-1.04 2.48c0 1.46 1.06 2.88 1.22 3.08.16.2 2.1 3.22 5.1 4.5.72.32 1.28.5 1.72.64.72.24 1.36.2 1.88.12.58-.08 1.9-.78 2.16-1.52.26-.74.26-1.38.18-1.52-.08-.14-.28-.22-.6-.38Z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-40 flex h-[560px] w-[92vw] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
            style={{ backgroundColor: "#0b141a" }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ backgroundColor: "#202c33" }}
            >
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-semibold text-black">
                  A
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#202c33] bg-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-medium text-white">Asad's AI Assistant</div>
                <div className="flex items-center gap-1.5 text-[11.5px] text-[#8696a0]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  online
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#aebac1] hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-2 overflow-y-auto px-3 py-4"
              style={{
                backgroundColor: "#0b141a",
                backgroundImage:
                  "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.02) 0%, transparent 40%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.02) 0%, transparent 40%)",
              }}
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} msg={m} />
              ))}
              {typing && <TypingIndicator />}
            </div>

            {/* Quick replies */}
            <div className="flex gap-2 overflow-x-auto border-t border-white/5 bg-[#111b21] px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="shrink-0 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-[12px] text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Emoji picker */}
            <AnimatePresence>
              {emojiOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-white/5 bg-[#202c33]"
                >
                  <div className="grid grid-cols-6 gap-1 p-3">
                    {EMOJIS.map((e) => (
                      <button
                        key={e}
                        onClick={() => setInput((v) => v + e)}
                        className="rounded-lg py-1.5 text-xl hover:bg-white/10"
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 bg-[#202c33] px-3 py-2.5"
            >
              <button
                type="button"
                onClick={() => setEmojiOpen((v) => !v)}
                className="text-[#8696a0] hover:text-white transition-colors"
                aria-label="Emoji"
              >
                <Smile className="h-5 w-5" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
                className="flex-1 rounded-full bg-[#2a3942] px-4 py-2 text-[13.5px] text-white placeholder:text-[#8696a0] outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isMe = msg.from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[78%] rounded-lg px-2.5 py-1.5 shadow-sm ${
          isMe ? "text-white" : "text-white"
        }`}
        style={{ backgroundColor: isMe ? "#005c4b" : "#202c33" }}
      >
        {msg.kind === "text" && (
          <div className="whitespace-pre-wrap text-[13.5px] leading-snug pr-14">
            {msg.text}
          </div>
        )}
        {msg.kind === "voice" && <VoiceBubble duration={msg.duration ?? "0:12"} />}
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-white/60">
          {msg.time}
          {isMe &&
            (msg.read ? (
              <CheckCheck className="h-3 w-3 text-[#53bdeb]" />
            ) : (
              <Check className="h-3 w-3" />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

function VoiceBubble({ duration }: { duration: string }) {
  return (
    <div className="flex items-center gap-2.5 py-1 pr-2">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Play voice message"
      >
        <Play className="h-3.5 w-3.5 fill-current" />
      </button>
      <div className="flex items-end gap-[2px] h-6">
        {Array.from({ length: 22 }).map((_, i) => {
          const h = [30, 55, 80, 45, 65, 90, 40, 70, 50, 85, 35, 60, 75, 45, 55, 80, 40, 65, 50, 70, 45, 35][i];
          return (
            <span
              key={i}
              className="w-[2px] rounded-full bg-white/70"
              style={{ height: `${h}%` }}
            />
          );
        })}
      </div>
      <span className="text-[10.5px] text-white/70 ml-1">{duration}</span>
    </div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="rounded-lg px-3 py-2.5" style={{ backgroundColor: "#202c33" }}>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-white/60"
              animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
