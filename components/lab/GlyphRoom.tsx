"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlyphField } from "@/components/lab/GlyphField";
import { LabCover } from "@/components/lab/LabCover";
import { LabMotion } from "@/components/lab/LabMotion";
import { labProjects, site, type LabProject } from "@/lib/content";

const PS = "dev@lab:~$";

/**
 * /lab: the AI projects with a terminal's look but plain words. A plain heading and sentence, a
 * "jump to" row of real names, each project introduced by a readable prompt line, and an optional
 * command line at the end for people who like typing. A texture of characters moves behind it all.
 */
export function GlyphRoom() {
  return (
    <>
      <GlyphField scope="page" strength={0.85} />
      <header className="gr-head">
        <h1 className="gr-title">AI experiments and products</h1>
        <p className="gr-intro">
          Things I designed and built with AI, using Claude Code and Cursor. Each one has its own page with how it works.
        </p>
        <nav className="gr-jump" aria-label="Jump to a project">
          <span className="gr-ps" aria-hidden>
            ›
          </span>
          <span className="gr-jump-label">Jump to</span>
          <ul className="gr-ls">
            {labProjects.map((p) => (
              <li key={p.slug}>
                <a href={`#${p.slug}`}>{p.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="gr-blocks">
        {labProjects.map((p) => (
          <Block key={p.slug} project={p} />
        ))}
      </div>

      <Prompt />
    </>
  );
}

function Block({ project }: { project: LabProject }) {
  return (
    <article id={project.slug} className="gr-block" aria-labelledby={`${project.slug}-name`}>
      <h2 id={`${project.slug}-name`} className="gr-prompt">
        <span className="gr-ps" aria-hidden>
          ›{" "}
        </span>
        <span className="gr-name">{project.name}</span>{" "}
        <span className="gr-comment">— {project.kind.charAt(0).toLowerCase() + project.kind.slice(1).replace(/\.$/, "")}</span>
      </h2>
      <Link href={`/lab/${project.slug}`} className="gr-shot" tabIndex={-1} aria-hidden>
        {project.slug === "step-repeat" && project.video ? (
          <LabMotion project={{ ...project, video: project.video }} />
        ) : (
          <LabCover project={project} size="large" />
        )}
      </Link>
      <div className="gr-meta">
        <p className="gr-line">{project.line}</p>
        <p className="gr-links">
          <Link href={`/lab/${project.slug}`}>
            See how it works <span aria-hidden>→</span>
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Open the live app <span aria-hidden>↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </p>
      </div>
    </article>
  );
}

type Line = { id: number; node: ReactNode };

const HELP = [
  ["ls", "list the projects"],
  ["open <name>", "open a project's page"],
  ["mail", "my email"],
  ["resume", "my resume"],
  ["cd ~", "back to the homepage"],
  ["clear", "clear the screen"],
];

/** A real prompt: type a command, or press one of the buttons under it */
function Prompt() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const count = useRef(0);
  const input = useRef<HTMLInputElement>(null);

  const find = (q: string) => {
    const k = q.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!k) return undefined;
    return labProjects.find((p) => p.slug.replace(/-/g, "").startsWith(k) || p.name.toLowerCase().replace(/[^a-z0-9]/g, "").startsWith(k));
  };

  function answer(cmd: string): ReactNode {
    const [word, ...rest] = cmd.trim().split(/\s+/);
    const arg = rest.join(" ");
    switch (word.toLowerCase()) {
      case "":
        return null;
      case "help":
        return (
          <dl className="gr-help">
            {HELP.map(([c, d]) => (
              <div key={c}>
                <dt>{c}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        );
      case "ls":
        return labProjects.map((p) => p.slug).join("   ");
      case "open":
      case "cat":
      case "cd": {
        if (word === "cd" && (arg === "~" || arg === "" || arg === "..")) {
          router.push("/");
          return "going home…";
        }
        const p = find(arg);
        if (!p) return arg ? `no project called “${arg}”. try ls` : "open what? try: open kept";
        router.push(`/lab/${p.slug}`);
        return `opening ${p.name}…`;
      }
      case "mail":
      case "email":
      case "contact":
        return (
          <a href={`mailto:${site.email}`} className="gr-out-link">
            {site.email}
          </a>
        );
      case "resume":
      case "cv":
        return (
          <a href={site.resumeUrl} download className="gr-out-link">
            Dev_Dixit_Resume.pdf
          </a>
        );
      case "exit":
      case "home":
        router.push("/");
        return "going home…";
      case "claude":
        return "that's how these were built: Claude Code and Cursor, with me making the product calls.";
      case "sudo":
        return "nice try.";
      default:
        return `command not found: ${word}. try help`;
    }
  }

  function run(cmd: string) {
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    const out = answer(cmd);
    const id = (count.current += 1);
    setLines((prev) => [
      ...prev.slice(-8),
      {
        id,
        node: (
          <>
            <p>
              <span className="gr-ps">{PS}</span> {cmd}
            </p>
            {out != null && <div className="gr-out">{out}</div>}
          </>
        ),
      },
    ]);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    run(value);
    setValue("");
  }

  return (
    <section className="gr-cli" aria-labelledby="gr-cli-title">
      <h2 id="gr-cli-title" className="gr-cli-title">
        Prefer typing? Try a command.
      </h2>
      <div className="gr-log" aria-live="polite">
        {lines.map((l) => (
          <div key={l.id}>{l.node}</div>
        ))}
      </div>
      <form className="gr-form" onSubmit={submit} onClick={() => input.current?.focus()}>
        <label htmlFor="gr-cmd" className="gr-ps">
          {PS}
        </label>
        <input
          ref={input}
          id="gr-cmd"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="type help, or open kept"
          aria-label="Type a command, like help or open kept"
        />
      </form>
      <div className="gr-chips">
        {["help", "ls", "open kept", "mail"].map((c) => (
          <button key={c} type="button" onClick={() => run(c)}>
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
