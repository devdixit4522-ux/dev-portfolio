import { writeFile } from "node:fs/promises";
import path from "node:path";

// Dev-only: the banner's Tune panel saves its look here, into lib/step-repeat-look.json.
// It does nothing on the live site.
const FILE = path.join(process.cwd(), "lib", "step-repeat-look.json");
const KEYS = ["size", "density", "shiftX", "shiftY", "squeeze", "compression", "rotation", "motion", "speed"] as const;

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") return new Response("Not found", { status: 404 });
  const body = await request.json().catch(() => null);
  if (!body || !KEYS.every((key) => typeof body[key] === "number" && Number.isFinite(body[key]))) {
    return Response.json({ error: "Every setting needs a number" }, { status: 400 });
  }
  if (!["image", "text"].includes(body.source) || typeof body.text !== "string" || !["grotesk", "narrow", "didone"].includes(body.face)) {
    return Response.json({ error: "Source, text or typeface is missing" }, { status: 400 });
  }
  const look = { source: body.source, text: body.text, face: body.face, ...Object.fromEntries(KEYS.map((key) => [key, body[key]])) };
  await writeFile(FILE, `${JSON.stringify(look, null, 2)}\n`);
  return Response.json({ saved: true });
}
