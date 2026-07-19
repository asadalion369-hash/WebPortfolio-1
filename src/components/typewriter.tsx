import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  dwell?: number;
  className?: string;
}

export function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  dwell = 1600,
  className = "",
}: TypewriterProps) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "dwell" | "deleting">("typing");

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("deleting"), dwell);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setI((n) => n + 1);
        setPhase("typing");
        return;
      }
    }
    return () => clearTimeout(t!);
  }, [text, phase, i, words, typeSpeed, deleteSpeed, dwell]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] h-[0.9em] -mb-[0.1em] bg-[var(--color-glow)] animate-pulse align-middle" />
    </span>
  );
}
