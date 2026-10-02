import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PageBackdrop, SiteFooter, SiteNav } from "@/components/site/SiteChrome";
import type { Block, RelatedLink, Source } from "@/content/types";
import { MAILTO } from "@/lib/site";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";

export const SiteShell = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen bg-background text-foreground">
    <PageBackdrop />
    <div className="relative z-10">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  </div>
);

export const Breadcrumb = ({ items }: { items: { label: string; href?: string }[] }) => (
  <nav aria-label="Fil d’Ariane" className="text-xs tracking-wide text-muted-foreground">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <li>
        <a href="/" className="transition-colors hover:text-glacier">Accueil</a>
      </li>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <span aria-hidden className="text-ice-blue/50">/</span>
          {item.href ? (
            <Link to={item.href} className="transition-colors hover:text-glacier">{item.label}</Link>
          ) : (
            <span aria-current="page" className="text-glacier/80">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

const isInternal = (href: string) => href.startsWith("/") && !href.includes("#");

export const SmartLink = ({ href, className, children }: { href: string; className?: string; children: ReactNode }) =>
  isInternal(href) ? (
    <Link to={href} className={className}>{children}</Link>
  ) : (
    <a href={href} className={className}>{children}</a>
  );

const linkClass = "text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier";

export const BlockView = ({ block }: { block: Block }) => {
  if (typeof block === "string") return <p>{block}</p>;
  if (block.kind === "link")
    return (
      <p>
        <SmartLink href={block.href} className={`inline-flex items-center gap-2 ${linkClass}`}>
          {block.label} <span aria-hidden>→</span>
        </SmartLink>
      </p>
    );
  return (
    <aside className="rounded-xl border border-hairline bg-surface/70 px-5 py-4 text-[15px] leading-relaxed">
      <p className="eyebrow text-[10px]">Repère</p>
      <p className="mt-3 text-muted-foreground">{block.text}</p>
      <p className="mt-3 text-sm">
        Source :{" "}
        <a href={block.source.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {block.source.label}
        </a>
      </p>
    </aside>
  );
};

export const Prose = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[70ch] space-y-5 text-base leading-[1.75] text-muted-foreground lg:text-[17px] [&_h2]:scroll-mt-28 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:leading-snug [&_h2]:text-glacier lg:[&_h2]:text-2xl">
    {children}
  </div>
);

export const ContactCta = ({ question }: { question?: string }) => (
  <section className="mt-16 max-w-[70ch] rounded-2xl border border-ice-blue/30 bg-[hsl(var(--petrol)/0.10)] p-8">
    {question && <p className="font-display text-xl font-light leading-snug text-glacier">{question}</p>}
    <a
      href={MAILTO}
      onClick={() => trackEvent(ANALYTICS_EVENTS.CTA_CONTACT)}
      className={`${question ? "mt-6 " : ""}inline-flex items-center gap-3 rounded-full bg-petrol px-7 py-3 text-sm font-medium tracking-wide text-glacier shadow-soft transition-all hover:bg-petrol/90`}
    >
      Demander un échange confidentiel <span aria-hidden>→</span>
    </a>
  </section>
);

export const RelatedLinks = ({ title, links }: { title: string; links: RelatedLink[] }) => (
  <section className="mt-12 max-w-[70ch]">
    <h2 className="font-display text-lg font-medium text-glacier">{title}</h2>
    <ul className="mt-4 space-y-3 text-[15px]">
      {links.map((l) => (
        <li key={l.href}>
          <SmartLink href={l.href} className={linkClass}>{l.label}</SmartLink>
        </li>
      ))}
    </ul>
  </section>
);

export const SourcesList = ({ sources }: { sources: Source[] }) => (
  <section className="mt-12 max-w-[70ch] border-t border-hairline/70 pt-8">
    <h2 className="font-display text-base font-medium text-glacier">Sources et repères</h2>
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
      {sources.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkClass}>{s.label}</a>
          <span className="text-muted-foreground/70"> — {s.url.replace(/^https:\/\//, "")}</span>
        </li>
      ))}
    </ul>
  </section>
);

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d === 1 ? "1er" : d} ${MONTHS[m - 1]} ${y}`;
};
