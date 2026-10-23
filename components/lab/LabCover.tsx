import type { CSSProperties } from "react";
import Image from "next/image";
import type { LabProject } from "@/lib/content";

/**
 * A project's cover, like a store's feature graphic: its own colour as the field, its name set
 * large, and its real screens in proper frames, tilted a little and rising from the bottom edge.
 * Phones get a bezel, a web app gets a browser window with its real address. STEP/REPEAT is its
 * own picture, a proof on paper. Everything is sized from the cover's width, so it holds at any size.
 */
export function LabCover({ project, size = "card" }: { project: LabProject; size?: "card" | "large" }) {
  const { field, glow, ink, url } = project.cover;
  const style = { "--cover-field": field, "--cover-glow": glow } as CSSProperties;
  const sizes = size === "large" ? "(max-width: 1199px) 60vw, 360px" : "(max-width: 809px) 30vw, 180px";

  return (
    <div className="cover" data-slug={project.slug} data-ink={ink} style={style} aria-hidden>
      <span className="cover-mark">{project.name}</span>
      {project.slug === "step-repeat" ? (
        <div className="cover-proof">
          <Image src="/images/lab/step-repeat-still.webp" alt="" fill sizes={size === "large" ? "600px" : "300px"} />
        </div>
      ) : project.shape === "web" ? (
        <div className="cover-browser">
          <div className="cover-bar">
            <i />
            <span>{url}</span>
          </div>
          {project.screens?.[0] && (
            <Image src={project.screens[0].src} alt="" width={project.screens[0].w} height={project.screens[0].h} sizes={size === "large" ? "600px" : "320px"} />
          )}
        </div>
      ) : (
        <div className="cover-phones" data-n={project.screens?.length ?? 1}>
          {project.screens?.map((s) => (
            <div key={s.src} className="cover-phone">
              <Image src={s.src} alt="" width={s.w} height={s.h} sizes={sizes} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
