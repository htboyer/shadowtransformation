import { Breadcrumb, SiteShell } from "@/components/site/ContentLayout";
import { ArticleCards } from "@/components/RegardsSection";
import { LINKEDIN_COMPANY, LINKEDIN_HUGUES } from "@/lib/site";
import { REGARDS_SUBTITLE, REGARDS_TITLE } from "@/seo/routes";

const linkClass = "text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier";

const RegardsPage = () => (
  <SiteShell>
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Breadcrumb items={[{ label: "Regards" }]} />
      <header className="mt-10 max-w-[70ch]">
        <p className="eyebrow">Analyses</p>
        <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">{REGARDS_TITLE}</h1>
        <p className="mt-6 text-base leading-[1.75] text-muted-foreground lg:text-lg">{REGARDS_SUBTITLE}</p>
        <p className="mt-4 text-sm text-muted-foreground/80">
          Analyses et démarches proposées par Shadow Transformation. Les exemples présentés sont fictifs.
        </p>
      </header>
      <div className="mt-14">
        <ArticleCards headingLevel="h2" />
      </div>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <a href={LINKEDIN_COMPANY} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Suivre Shadow Transformation sur LinkedIn ↗
        </a>
        <a href={LINKEDIN_HUGUES} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Suivre Hugues Temple-Boyer sur LinkedIn ↗
        </a>
      </div>
    </div>
  </SiteShell>
);

export default RegardsPage;
