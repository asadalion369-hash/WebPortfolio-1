import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          url?: string;
          "loading-anim-type"?: string;
          "events-target"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
