import type { CSSProperties } from "react";
import Image from "next/image";
import type { LabProject } from "@/lib/content";

/**
 * A project's real screens on the dark sheet, for projects without live art:
 * phones stand side by side, a web page sits alone. The tile and the banner share it.
 */
export function LabScreens({ project, mode }: { project: LabProject; mode: "tile" | "banner" }) {
  if (!project.screens?.length) return null;
  // a tile is small, so it can show fewer screens than the banner
  const shown = mode === "tile" ? project.screens.slice(0, project.tileScreens) : project.screens;
  const screens = (
    <div className="lab-screens" data-shape={project.shape ?? "phone"} style={{ "--n": shown.length } as CSSProperties}>
      {shown.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          // in a tile the link already says the name and line, so the screen stays quiet
          alt={mode === "tile" ? "" : s.alt}
          width={s.w}
          height={s.h}
          sizes={mode === "banner" ? "(max-width: 809px) 92vw, 900px" : "(max-width: 809px) 92vw, (max-width: 1199px) 46vw, 600px"}
          priority={mode === "banner"}
        />
      ))}
    </div>
  );
  return mode === "banner" ? <div className="lab-banner">{screens}</div> : screens;
}
