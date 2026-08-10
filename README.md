# Dev Dixit Portfolio

Personal portfolio site for Dev Dixit — product designer. Built with Next.js and Tailwind CSS, ready for one-click deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All copy and project data lives in [`lib/content.ts`](lib/content.ts):

- Hero bio and contact
- Case studies (Famli App today — add more objects to the array)
- AI Explorations placeholders (replace with your real AI projects)

Assets live in `public/images/`.

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Leave the defaults (Framework: Next.js). Click **Deploy**.

No environment variables or `vercel.json` required.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start local dev server   |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |
