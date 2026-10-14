import type { CSSProperties, ReactNode } from "react";

/**
 * Splits text into one span per word, for word-by-word motion. Each word gets --i,
 * its place in line, counted across every call so a sentence in several parts stays in order.
 * Spaces stay plain text, so the sentence wraps and reads as before.
 */
export function wordSplitter(className = "w") {
  let n = 0;
  const next = () => n++;
  const words = (text: string): ReactNode[] =>
    text.split(/(\s+)/).map((part, k) => {
      if (!part || /^\s+$/.test(part)) return part;
      const i = next();
      return (
        <span key={`${i}-${k}`} className={className} style={{ "--i": i } as CSSProperties}>
          {part}
        </span>
      );
    });
  return { words, next };
}
