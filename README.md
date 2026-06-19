# 404am-landing

Landing page for [404-AM](https://404am.thefndrs.com), built with **Qwik**
(Qwik City) and prerendered to static HTML.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build (static)

```bash
npm run build      # → dist/  (static, prerendered)
npm run preview    # serve the built dist/ locally
```

The static adapter prerenders the site to `dist/index.html` plus hashed
assets. Origin is set to `https://404am.thefndrs.com` in
`adapters/static/vite.config.ts`.

> Note: we build with Vite directly (`vite build` + the static adapter config)
> instead of the `qwik build` CLI, which has a packaging issue (`Cannot find
> module 'ignore'`) in this version.

## Deploy to 404am.thefndrs.com

Upload the contents of `dist/` to any static host (Netlify, Cloudflare Pages,
Vercel static, S3+CloudFront, GitHub Pages) and point the `404am.thefndrs.com`
DNS/CNAME at it. Serve with long-lived cache headers on `build/` assets.

## Before going live

- In `src/routes/index.tsx`, replace the placeholder store URLs in `LINKS`
  (Firefox/Edge/Opera) with the real listing URLs once each is approved, and
  set the GitHub link in the footer.
- The **Chrome** button is intentionally a disabled "coming soon" state with a
  "Blocked in Honduras" note.
