import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";
import { renderHead } from "./seo/head";
import { NOT_FOUND_META, PAGES, metaForPath } from "./seo/routes";

/** Pré-rendu au build : HTML de la route + balises <head> correspondantes. */
export function render(url: string) {
  const html = renderToString(
    <QueryClientProvider client={new QueryClient()}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </QueryClientProvider>,
  );
  const meta = url === NOT_FOUND_META.path ? NOT_FOUND_META : metaForPath(url);
  return { html, head: renderHead(meta) };
}

export const routes = PAGES.map((p) => p.path);
export const notFoundPath = NOT_FOUND_META.path;
