export type Source = { label: string; url: string };

export type Block =
  | string
  | { kind: "note"; text: string; source: Source }
  | { kind: "link"; label: string; href: string };

export type Section = { id: string; title: string; blocks: Block[] };

export type RelatedLink = { label: string; href: string };

export type ContentPage = {
  path: string;
  /** Balise <title> */
  seoTitle: string;
  description: string;
  h1: string;
  /** Libellé court du fil d'Ariane */
  crumb: string;
  intro: string;
  sections: Section[];
  conclusion?: string;
  related: RelatedLink[];
  sources?: Source[];
};

export type Article = ContentPage & {
  slug: string;
  summary: string;
  datePublished: string;
  image: string;
  imageAlt: string;
};
