# Architecture decisions

- Keep the public site as a static React/Vite application deployed through its existing GitHub Pages workflow; no backend is needed for presentation media.
- Resolve optional commercial downloads from exact files in `src/assets/presentation/` with Vite URL globs; this ensures missing originals never produce dead or substitute links. The MP4 original exceeds the 10 MB repo commit limit and is served from a Lovable CDN asset pointer (`.asset.json`) instead of a repo binary; keep both paths exact and conditional.
- Render the YouTube player only after an explicit visitor click, with a local poster before activation; this avoids third-party player requests on initial page load.- Pre-render every public route at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`, hydrated by `src/main.tsx`) from the same `AppRoutes` tree; GitHub Pages then serves real per-route HTML, a noindex 404.html and a generated sitemap without any server.
- Keep per-route head metadata in one table (`src/seo/routes.ts`) used by both the pre-render and client navigation; this prevents divergent titles/canonicals.
- Store editorial and service content as typed data in `src/content/`; adding an entry automatically creates its route, card, JSON-LD and sitemap entry.
- Serve Regards illustrations as small versioned WebP files from `public/images/regards/` and reference them from article data; this keeps GitHub Pages images and social metadata on the site's own domain without enlarging the source images.
- Load Module 1 examples only from the active dated WebP folder, keeping source documents private and using the existing viewer for full-cover previews; this prevents mixing document versions or adding direct downloads.
