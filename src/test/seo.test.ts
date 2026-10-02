import { describe, expect, it } from "vitest";
import { ARTICLES } from "@/content/articles";
import { PAGES, metaForPath } from "@/seo/routes";
import { renderHead } from "@/seo/head";

describe("métadonnées SEO", () => {
  it("expose exactement 8 pages indexables avec slash final", () => {
    expect(PAGES).toHaveLength(8);
    PAGES.forEach((p) => expect(p.path.endsWith("/")).toBe(true));
  });

  it("titres et descriptions uniques", () => {
    expect(new Set(PAGES.map((p) => p.title)).size).toBe(8);
    expect(new Set(PAGES.map((p) => p.description)).size).toBe(8);
  });

  it("canonical www pour chaque page, noindex pour une URL inconnue", () => {
    PAGES.forEach((p) => {
      const head = renderHead(p);
      expect(head).toContain(`<link rel="canonical" href="https://www.shadowtransformation.fr${p.path}"`);
      expect(head).not.toContain("noindex");
      expect(head).not.toContain("lovable.app");
    });
    const missing = renderHead(metaForPath("/inconnue/"));
    expect(missing).toContain("noindex");
    expect(missing).not.toContain("canonical");
  });

  it("BlogPosting fidèle pour les 3 articles", () => {
    ARTICLES.forEach((a) => {
      const ld = metaForPath(a.path).jsonLd[0] as Record<string, unknown>;
      expect(ld["@type"]).toBe("BlogPosting");
      expect(ld.headline).toBe(a.h1);
      expect(ld.datePublished).toBe("2026-10-02");
      expect((ld.author as { name: string }).name).toBe("Hugues Temple-Boyer");
      expect(ld.image).toBe(`https://www.shadowtransformation.fr${a.image}`);
      expect(renderHead(metaForPath(a.path))).toContain(`property="og:image" content="https://www.shadowtransformation.fr${a.image}"`);
    });
  });

  it("normalise l'URL sans slash final", () => {
    expect(metaForPath("/regards").path).toBe("/regards/");
  });
});
