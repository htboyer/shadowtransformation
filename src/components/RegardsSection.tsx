import { Link } from "react-router-dom";
import { ARTICLES } from "@/content/articles";
import { formatDate } from "@/components/site/ContentLayout";
import { REGARDS_SUBTITLE, REGARDS_TITLE } from "@/seo/routes";

export const ArticleCards = ({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) => {
  const H = headingLevel;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {ARTICLES.map((a) => (
        <article key={a.slug} className="premium-card flex flex-col p-7">
          <time dateTime={a.datePublished} className="step-number text-[11px]">
            {formatDate(a.datePublished)}
          </time>
          <H className="mt-6 font-display text-base font-medium leading-snug text-glacier">
            <Link to={a.path} className="transition-colors hover:text-ice-blue">{a.h1}</Link>
          </H>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
          <Link
            to={a.path}
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier"
            aria-label={`Lire l’analyse : ${a.h1}`}
          >
            Lire l’analyse <span aria-hidden>→</span>
          </Link>
        </article>
      ))}
    </div>
  );
};

const RegardsSection = () => (
  <section id="regards" className="relative scroll-mt-24 border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow">Regards</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">{REGARDS_TITLE}</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">{REGARDS_SUBTITLE}</p>
      </div>
      <div className="mt-14">
        <ArticleCards />
      </div>
      <Link
        to="/regards/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-ice-blue/35 px-5 py-2.5 text-sm text-glacier transition-colors hover:bg-secondary"
      >
        Toutes les analyses <span aria-hidden>→</span>
      </Link>
    </div>
  </section>
);

export default RegardsSection;
