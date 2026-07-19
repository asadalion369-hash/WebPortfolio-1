import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated node-network background. Pure SVG so it stays crisp on any viewport
 * and avoids WebGL/Three.js. Deterministic layout, subtle drift + pulsing glows.
 */
export function NodeNetwork({ density = 22 }: { density?: number }) {
  const nodes = useMemo(() => {
    const rng = mulberry32(7);
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: rng() * 100,
      y: rng() * 100,
      r: 1 + rng() * 2.2,
      delay: rng() * 4,
    }));
  }, [density]);

  const edges = useMemo(() => {
    const out: { a: number; b: number; d: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 22) out.push({ a: i, b: j, d });
      }
    }
    return out;
  }, [nodes]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fce8d7" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#fce8d7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#fce8d7" stopOpacity="0" />
          </radialGradient>
        </defs>
        {edges.map((e, i) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          const opacity = Math.max(0, 0.35 - e.d / 80);
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="white"
              strokeOpacity={opacity}
              strokeWidth={0.08}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.01 }}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r * 2.4}
              fill="url(#node-glow)"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.15, 0.55, 0.15] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: n.delay,
                ease: "easeInOut",
              }}
            />
            <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill="white" fillOpacity={0.85} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
