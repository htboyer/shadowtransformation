import { SHARE_IMAGE, absoluteUrl } from "@/lib/site";
import type { SeoMeta } from "./routes";

/** Balises gérées par route (remplacées au pré-rendu et à la navigation). */
export type HeadTag = { tag: "meta" | "link"; attrs: Record<string, string> };

export const headTags = (m: SeoMeta): HeadTag[] => {
  const url = absoluteUrl(m.path);
  const tags: HeadTag[] = [
    { tag: "meta", attrs: { name: "description", content: m.description } },
    { tag: "meta", attrs: { property: "og:title", content: m.title } },
    { tag: "meta", attrs: { property: "og:description", content: m.description } },
    { tag: "meta", attrs: { property: "og:type", content: m.ogType } },
    { tag: "meta", attrs: { property: "og:locale", content: "fr_FR" } },
    { tag: "meta", attrs: { property: "og:site_name", content: "Shadow Transformation" } },
    { tag: "meta", attrs: { property: "og:image", content: SHARE_IMAGE } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title", content: m.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: m.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: SHARE_IMAGE } },
  ];
  if (m.noindex) {
    tags.push({ tag: "meta", attrs: { name: "robots", content: "noindex" } });
  } else {
    tags.push({ tag: "link", attrs: { rel: "canonical", href: url } });
    tags.push({ tag: "meta", attrs: { property: "og:url", content: url } });
  }
  return tags;
};

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Sérialisation HTML pour le pré-rendu au build. */
export const renderHead = (m: SeoMeta): string => {
  const lines = [`<title>${esc(m.title)}</title>`];
  for (const t of headTags(m)) {
    const attrs = Object.entries(t.attrs)
      .map(([k, v]) => `${k}="${esc(v)}"`)
      .join(" ");
    lines.push(`<${t.tag} ${attrs} data-route-head />`);
  }
  for (const data of m.jsonLd) {
    lines.push(
      `<script type="application/ld+json" data-route-head>${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return lines.join("\n    ");
};
