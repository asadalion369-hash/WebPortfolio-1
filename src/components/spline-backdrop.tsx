import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

let splineScriptLoaded = false;
function loadSplineScript() {
  if (splineScriptLoaded || typeof document === "undefined") return;
  splineScriptLoaded = true;
  const s = document.createElement("script");
  s.type = "module";
  s.src = "https://unpkg.com/@splinetool/viewer@1.12.98/build/spline-viewer.js";
  document.head.appendChild(s);
}

export function SplineBackdrop({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 140]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.08]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            loadSplineScript();
            setReady(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback;
    const t = idle
      ? idle(() => {
          loadSplineScript();
          setReady(true);
        })
      : window.setTimeout(() => {
          loadSplineScript();
          setReady(true);
        }, 1500);
    return () => {
      io.disconnect();
      if (typeof t === "number") clearTimeout(t);
    };
  }, []);

  return (
    <motion.div ref={ref} style={{ y, scale }} className="h-full w-full will-change-transform">
      {ready ? (
        // @ts-expect-error - custom element
        <spline-viewer
          url={url}
          events-target="global"
          loading-anim-type="none"
          style={{ width: "100%", height: "100%", background: "transparent" }}
        />
      ) : null}
    </motion.div>
  );
}
