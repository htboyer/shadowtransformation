import type { Article } from "@/content/types";
import { ARTICLES } from "@/content/articles";
import {
  BlockView,
  Breadcrumb,
  ContactCta,
  Prose,
  RelatedLinks,
  SiteShell,
  SourcesList,
  formatDate,
} from "@/components/site/ContentLayout";
import { AUTHOR_NAME, LINKEDIN_COMPANY, LINKEDIN_HUGUES, absoluteUrl } from "@/lib/site";

const linkClass = "text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier";

const ArticlePage = ({ article }: { article: Article }) => {
  const others = ARTICLES.filter((a) => a.slug !== article.slug).map((a) => ({ label: a.h1, href: a.path }));
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteUrl(article.path))}`;
  return (
    <SiteShell>
      <article className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <Breadcrumb items={[{ label: "Regards", href: "/regards/" }, { label: article.crumb }]} />
        <header className="mt-10 max-w-[70ch]">
          <p className="eyebrow">Regards sur la transformation</p>
          <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[40px]">{article.h1}</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Par{" "}
            <a href={LINKEDIN_HUGUES} target="_blank" rel="noopener noreferrer author" className={linkClass}>
              {AUTHOR_NAME}
            </a>
            , fondateur de Shadow Transformation · Publié le{" "}
            <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
          </p>
          <p className="mt-8 border-l-2 border-ice-blue/50 pl-5 font-display text-lg font-light leading-relaxed text-glacier/90">
            {article.summary}
          </p>
        </header>

        <nav aria-label="Sommaire" className="mt-10 max-w-[70ch] rounded-xl border border-hairline bg-surface/60 p-6">
          <p className="eyebrow text-[10px]">Sommaire</p>
          <ol className="mt-4 space-y-2 text-sm">
            {article.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-glacier">{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10">
          <Prose>
            <p className="text-glacier/85">{article.intro}</p>
            {article.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id} className="space-y-5">
                <h2 id={s.id}>{s.title}</h2>
                {s.blocks.map((b, i) => (
                  <BlockView key={i} block={b} />
                ))}
              </section>
            ))}
            {article.conclusion && (
              <section aria-labelledby="conclusion" className="space-y-5">
                <h2 id="conclusion">Conclusion</h2>
                <p className="text-glacier/85">{article.conclusion}</p>
              </section>
            )}
          </Prose>
        </div>

        <div className="mt-10 flex max-w-[70ch] flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href={LINKEDIN_COMPANY} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Suivre les analyses sur LinkedIn ↗
          </a>
          <a href={shareUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Partager sur LinkedIn ↗
          </a>
        </div>

        <ContactCta />
        <RelatedLinks title="Prestation associée" links={article.related} />
        <RelatedLinks title="Autres lectures" links={others} />
        {article.sources && <SourcesList sources={article.sources} />}
      </article>
    </SiteShell>
  );
};

export default ArticlePage;
