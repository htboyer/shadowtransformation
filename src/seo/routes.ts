import { ARTICLES } from "@/content/articles";
import { SERVICES } from "@/content/services";
import type { ContentPage } from "@/content/types";
import {
  AUTHOR_NAME,
  CONTACT_EMAIL,
  LINKEDIN_COMPANY,
  LINKEDIN_HUGUES,
  LOGO_URL,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

export type SeoMeta = {
  path: string;
  title: string;
  description: string;
  ogType: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd: Record<string, unknown>[];
};

export const REGARDS_PATH = "/regards/";
export const REGARDS_TITLE = "Regards sur la transformation";
export const REGARDS_SUBTITLE =
  "Des analyses et des repères concrets pour comprendre les frictions, préparer les décisions et accompagner le changement.";

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#hugues-temple-boyer`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: AUTHOR_NAME,
  jobTitle: "Fondateur de Shadow Transformation",
  sameAs: [LINKEDIN_HUGUES],
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Shadow Transformation",
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  email: CONTACT_EMAIL,
  sameAs: [LINKEDIN_COMPANY],
  founder: person,
};

const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const servicePage = (p: ContentPage): SeoMeta => ({
  path: p.path,
  title: p.seoTitle,
  description: p.description,
  ogType: "website",
  jsonLd: [breadcrumb([{ name: p.crumb, path: p.path }])],
});

export const HOME_META: SeoMeta = {
  path: "/",
  title: "Shadow Transformation — Sécuriser et accompagner les transformations",
  description:
    "Cabinet de conseil en transformation. Diagnostic de maturité, décision lucide, trajectoire structurée et accompagnement de la mise en œuvre pour dirigeants et comités exécutifs.",
  ogType: "website",
  jsonLd: [organization],
};

export const NOT_FOUND_META: SeoMeta = {
  path: "/404.html",
  title: "Page introuvable | Shadow Transformation",
  description: "Cette page n'existe pas ou a été déplacée.",
  ogType: "website",
  noindex: true,
  jsonLd: [],
};

export const PAGES: SeoMeta[] = [
  HOME_META,
  ...SERVICES.map(servicePage),
  {
    path: REGARDS_PATH,
    title: `${REGARDS_TITLE} | Shadow Transformation`,
    description: REGARDS_SUBTITLE,
    ogType: "website",
    jsonLd: [breadcrumb([{ name: "Regards", path: REGARDS_PATH }])],
  },
  ...ARTICLES.map<SeoMeta>((a) => ({
    path: a.path,
    title: a.seoTitle,
    description: a.description,
    ogType: "article",
    image: absoluteUrl(a.image),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: a.h1,
        description: a.description,
        image: absoluteUrl(a.image),
        url: absoluteUrl(a.path),
        mainEntityOfPage: absoluteUrl(a.path),
        datePublished: a.datePublished,
        inLanguage: "fr-FR",
        author: person,
        publisher: { "@type": "Organization", "@id": ORG_ID, name: "Shadow Transformation", logo: { "@type": "ImageObject", url: LOGO_URL } },
      },
      breadcrumb([
        { name: "Regards", path: REGARDS_PATH },
        { name: a.crumb, path: a.path },
      ]),
    ],
  })),
];

const normalize = (pathname: string) => (pathname.endsWith("/") ? pathname : `${pathname}/`);

export const metaForPath = (pathname: string): SeoMeta =>
  PAGES.find((p) => p.path === normalize(pathname)) ?? NOT_FOUND_META;
