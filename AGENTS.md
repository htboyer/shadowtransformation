# Architecture decisions

- Keep the public site as a static React/Vite application deployed through its existing GitHub Pages workflow; no backend is needed for presentation media.
- Resolve optional commercial downloads from exact files in `src/assets/presentation/` with Vite URL globs; this ensures missing originals never produce dead or substitute links. The MP4 original exceeds the 10 MB repo commit limit and is served from a Lovable CDN asset pointer (`.asset.json`) instead of a repo binary; keep both paths exact and conditional.
- Render the YouTube player only after an explicit visitor click, with a local poster before activation; this avoids third-party player requests on initial page load.