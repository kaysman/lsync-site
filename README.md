# Localyze Sync — Landing Site

A static marketing site for the Localyze Sync CLI (lsync). Built with Next.js App Router and Tailwind CSS 4, exported as a static site for easy hosting.

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19
- Tailwind CSS 4 via `@tailwindcss/postcss`

## Local Development

Requirements:

- Node.js 18+ (LTS recommended)

Run the dev server:

```
npm run dev
```

Open `http://localhost:3000` in your browser.

Edit content:

- Page content: `src/app/page.tsx`
- Global styles: `src/app/globals.css`
- Metadata (title/description/icon): `src/app/layout.tsx`
- Assets: `public/` (e.g., `favicon.png`, `lsync-demo.svg`)

## Build and Export

This project is configured for static export (`next.config.ts` sets `output: 'export'`).

Build the site:

```
npm run build
```

The static site is emitted to `out/`.

Preview the static build locally:

```
npx serve out
# or
python3 -m http.server -d out 3000
```

Note: `npm run start` starts a Next.js server and is not used for static exports. Prefer previewing `out/` with a static file server.

## Deploy

Because this is a static export, you can deploy the `out/` directory to any static host:

- Vercel: Build command `npm run build`, output directory `out/`
- Netlify: Build command `npm run build`, publish directory `out/`
- Cloudflare Pages: Build command `npm run build`, output `out/`
- GitHub Pages: Push the contents of `out/` to a `gh-pages` branch (or use an action)

## Linting

Run ESLint:

```
npm run lint
```

## Tailwind Notes

- Tailwind is enabled via PostCSS plugin (`postcss.config.mjs`)
- Global import is in `src/app/globals.css` (`@import "tailwindcss"`)
- Use utility classes directly in components

## Project Structure

```
landing/
  public/            # static assets (favicon, images)
  src/app/           # Next.js app router
    layout.tsx       # document shell + metadata
    page.tsx         # landing page content
    globals.css      # global styles + Tailwind
  next.config.ts     # output: 'export'
  package.json       # scripts and deps
```

## Customization Checklist

- Update copy and CTAs in `src/app/page.tsx`
- Replace images in `public/` if needed
- Adjust SEO metadata in `src/app/layout.tsx`
- If you need dynamic features, remove `output: 'export'` in `next.config.ts`

