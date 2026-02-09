# Deploy to Vercel (npm)

## Project summary

- **Stack:** React 18 + Vite + TypeScript + TailwindCSS. Express server is dev-only; **only the frontend (SPA) is deployed** to Vercel.
- **Build:** `npm run build:client` → output in `dist/spa`. No backend on Vercel.
- **Routes:** `/`, `/h_v2`, `/h_v3`, `/components`, `/iconslib` (SPA; `vercel.json` rewrites handle them).
- **Data:** All UI data is in-component (no `/api` calls from the app). External images use Builder.io CDN URLs.

## Vercel settings (use npm)

1. Push your repo to **GitHub / GitLab / Bitbucket**.
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Configure:
   - **Framework Preset:** Other (or leave as detected).
   - **Build Command:** `npm run build:vercel`  
     (or `npm run build:client`)
   - **Output Directory:** `dist/spa`
   - **Install Command:** leave default (`npm install`) or set `npm ci`.
4. **Deploy.** Vercel will run `npm install` and `npm run build:vercel`, then serve `dist/spa` with the rewrites from `vercel.json`.

## What’s already set

- **`vercel.json`** – rewrites so all non-file paths serve `index.html` (React Router works).
- **`package.json`** – `build:vercel` script runs `npm run build:client`. `packageManager` removed so Vercel uses **npm**.
- **`.npmrc`** – `legacy-peer-deps=true` (fine for npm installs).

## Local check before deploy

```bash
npm install
npm run build:vercel
```

Then open `dist/spa/index.html` in a browser or serve `dist/spa` with a static server to confirm the SPA works.

## Notes

- Express routes (`/api/ping`, `/api/demo`) are **not** available on Vercel. The app does not call them, so the site works as a static SPA.
- To use npm locally too, run `npm install` and `npm run dev` (or `npm run build:vercel` for production build).
