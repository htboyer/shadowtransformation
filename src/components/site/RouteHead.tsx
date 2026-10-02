import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headTags } from "@/seo/head";
import { metaForPath } from "@/seo/routes";

/**
 * Met à jour <head> lors de la navigation côté navigateur, à partir de la
 * même table que le pré-rendu (aucune divergence de contenu).
 */
const RouteHead = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    document.title = meta.title;
    document.head
      .querySelectorAll(
        '[data-route-head], meta[name="description"], meta[name="robots"], link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"], script[type="application/ld+json"]',
      )
      .forEach((el) => el.remove());
    for (const t of headTags(meta)) {
      const el = document.createElement(t.tag);
      Object.entries(t.attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute("data-route-head", "");
      document.head.appendChild(el);
    }
    for (const data of meta.jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-route-head", "");
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    }
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default RouteHead;
