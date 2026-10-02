import type { ContentPage } from "@/content/types";
import {
  BlockView,
  Breadcrumb,
  ContactCta,
  Prose,
  RelatedLinks,
  SiteShell,
  SourcesList,
} from "@/components/site/ContentLayout";

const ServicePage = ({ page }: { page: ContentPage }) => (
  <SiteShell>
    <article className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Breadcrumb items={[{ label: page.crumb }]} />
      <header className="mt-10 max-w-[70ch]">
        <p className="eyebrow">Prestation</p>
        <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">{page.h1}</h1>
        <p className="mt-8 text-base leading-[1.75] text-glacier/85 lg:text-lg">{page.intro}</p>
      </header>
      <div className="mt-10">
        <Prose>
          {page.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id} className="space-y-5">
              <h2 id={s.id}>{s.title}</h2>
              {s.blocks.map((b, i) => (
                <BlockView key={i} block={b} />
              ))}
            </section>
          ))}
        </Prose>
      </div>
      <ContactCta question={page.conclusion} />
      <RelatedLinks title="Pour aller plus loin" links={page.related} />
      {page.sources && <SourcesList sources={page.sources} />}
    </article>
  </SiteShell>
);

export default ServicePage;
