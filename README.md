# Rishabh Sharma — Portfolio

## Before you deploy — fix these

1. **Your resume itself says "Internship details to be added."** That's on the actual PDF now in `public/resume.pdf` (real file, not a placeholder). Fix or remove that line in the source resume before deploying — a visible TODO on a resume sent to employers is worse than no internship line at all.
2. **Only one project (`Tidal`) is in `src/data/content.ts`.** Add entries to the `projects` array when ready — the grid layout handles both single- and multi-project states.
3. **`Involvement` section has two entries, neither a job.** Accurate to what's currently real, but thin. Revisit once there's actual experience to add.
4. **Skills grid is 4 columns wide but there are now 5 groups** (Languages, Frontend & mobile, Backend & data, Computer vision, Tools & platforms) after adding Computer Vision as its own category to match the resume. One group will sit alone on the last row on desktop. Either accept it, fold Computer Vision into Backend & data, or change the grid to `repeat(auto-fit, minmax(...))`.
5. **Phone number on resume (`+91 8072652048`) isn't on the site anywhere.** Decide if that's intentional (site as portfolio, resume as the only place with a phone number) or an oversight.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

## Deploy (Render.com)

1. `git init && git add . && git commit -m "Initial portfolio"`
2. Push to a new empty GitHub repo (no README/gitignore from GitHub's side)
3. Render.com → New → Static Site → connect the repo
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`

## What changed in this version vs. the original build

- Removed the "More work on GitHub" project card
- Split `Experience` into `Involvement` (Google Dev Program, HackerRank cert) and `Education` (degree, kept after Involvement per your call)
- Added a subtle "Speaks" language row at the bottom of the About section instead of burying it in a paragraph
- Reduced footer/contact social links to LinkedIn + GitHub (primary) and LeetCode/HackerRank/Codeforces (secondary, muted mono style) — no bare email link in the list since it's already the large CTA above it
- Confirmed location: Chennai, India
- Added LinkedIn to socials

## Files I had to reconstruct (not previously shared in conversation)

`index.css`, `Reveal.tsx`, `ScrollProgress.tsx`, `Skills.tsx`, `useScrollSpy.ts`, `useLocalTime.ts`, `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `main.tsx`, `favicon.svg`. These follow the design tokens and structure documented at the start of this project, but you should sanity-check them against the actual original files if you still have them — I'm working from the written spec, not the source.
