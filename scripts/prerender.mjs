// Pré-rendu statique après `vite build` : une page HTML réelle par route,
// un 404.html (noindex) et le sitemap. Aucune dépendance supplémentaire.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://www.shadowtransformation.fr";
const dist = resolve("dist");
const ssrDir = resolve(".ssr-build");
const { render, routes, notFoundPath } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

// Le modèle conserve charset, viewport, polices, favicons et bundles réels ;
// on retire les balises propres à chaque route pour les régénérer.
const template = readFileSync(resolve(dist, "index.html"), "utf8")
  .replace(/<title>[\s\S]*?<\/title>\s*/g, "")
  .replace(/<meta\s+(name|property)="(description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/g, "")
  .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "")
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

const page = (url) => {
  const { html, head } = render(url);
  return template.replace("</head>", `    ${head}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
};

for (const route of routes) {
  const out = resolve(dist, `.${route}`, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(route));
  console.log(`prerender ${route}`);
}
writeFileSync(resolve(dist, "404.html"), page(notFoundPath));
console.log("prerender 404.html");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((r) => `  <url><loc>${SITE_URL}${r}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
writeFileSync(resolve(dist, "sitemap.xml"), sitemap);
console.log(`sitemap.xml (${routes.length} URL)`);

rmSync(ssrDir, { recursive: true, force: true });
