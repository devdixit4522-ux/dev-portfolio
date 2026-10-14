"use client";

import { useEffect } from "react";

/**
 * Remembers where you are on the homepage, as you scroll, so Back from a case study can put you there.
 * The putting back happens in app/layout.tsx (RESTORE_HOME), before the page is first drawn.
 */
export function ScrollMemory() {
  useEffect(() => {
    let frame = 0;
    const save = () => {
      frame = 0;
      try {
        sessionStorage.setItem("home-scroll", String(Math.round(window.scrollY)));
      } catch {}
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(save);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", save);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", save);
    };
  }, []);

  return null;
}
