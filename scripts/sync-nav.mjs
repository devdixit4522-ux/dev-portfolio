// Writes the site nav into every static case study, from public/system/site.json.
// The React nav (components/Navbar.tsx) reads the same file, so the two can't drift.
// Runs before `dev` and `build`. Markup goes between <!-- site-nav --> and <!-- /site-nav -->.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/(\w:)/, "$1");
const site = JSON.parse(readFileSync(join(root, "public/system/site.json"), "utf8"));
const icon = (d) =>
  `<svg class="nav-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ARROW_UP_RIGHT = icon('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>');
const ARROW_DOWN = icon('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>');
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const nav = `<!-- site-nav -->
  <header class="site-nav">
    <div class="nav-frost-pane" aria-hidden="true"></div>
    <nav class="site-nav-in" aria-label="Primary">
      <a class="nav-name" href="/">${esc(site.name)}</a>
      <ul class="nav-switch">
${site.pages
  .map(
    (p) =>
      `        <li><a class="nav-item" href="${esc(p.href)}"${p.label === "Work" ? ' aria-current="page"' : ""}>${esc(p.label)}</a></li>`
  )
  .join("\n")}
      </ul>
      <div class="nav-ext nav-contact">
        <button class="nav-contact-btn" type="button" aria-expanded="false" aria-controls="nav-contact-card">Contact</button>
        <div class="nav-card" id="nav-contact-card" hidden>
          <div class="nav-row"><a href="mailto:${esc(site.email)}"><span class="nav-row-label">Email</span><span class="nav-row-value">${esc(site.email)}</span></a><button class="nav-copy" type="button" data-copy="${esc(site.email)}">Copy</button></div>
          <a class="nav-row" href="${esc(site.linkedinUrl)}" target="_blank" rel="noopener noreferrer"><span><span class="nav-row-label">LinkedIn</span><span class="nav-row-value">Message me</span></span>${ARROW_UP_RIGHT}</a>
          <a class="nav-row" href="${esc(site.resumeUrl)}"><span><span class="nav-row-label">Resume</span><span class="nav-row-value">Download PDF</span></span>${ARROW_DOWN}</a>
        </div>
      </div>
    </nav>
  </header>
  <!-- /site-nav -->`;

const work = join(root, "public/work");
for (const slug of readdirSync(work)) {
  const file = join(work, slug, "index.html");
  if (!existsSync(file)) continue;
  const html = readFileSync(file, "utf8");
  const next = html.replace(/<!-- site-nav -->[\s\S]*?<!-- \/site-nav -->/, nav);
  if (next === html && !html.includes("<!-- site-nav -->")) {
    console.warn(`sync-nav: no <!-- site-nav --> marker in ${slug}/index.html`);
    continue;
  }
  if (next !== html) writeFileSync(file, next);
}
