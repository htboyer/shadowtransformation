import { Link } from "react-router-dom";
import { Printer } from "lucide-react";
import { Breadcrumb, Prose, SiteShell } from "@/components/site/ContentLayout";
import { Button } from "@/components/ui/button";
import { BIDCROSSCHECK_PATH, TOOLS_PATH } from "@/content/tools";
import { BIDCROSSCHECK_TERMS_SECTIONS } from "@/content/bidcrosscheck-terms";
import { CONTACT_EMAIL } from "@/lib/site";

const BidCrossCheckTermsPage = () => (
  <div className="bcc-cgv-view">
    <SiteShell>
      <article className="bcc-cgv mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="print:hidden"><Breadcrumb items={[{ label: "Nos outils", href: TOOLS_PATH }, { label: "BidCrossCheck", href: BIDCROSSCHECK_PATH }, { label: "CGV — projet" }]} /></div>
        <header className="mt-10 max-w-[70ch]">
          <p className="eyebrow">BidCrossCheck · Projet</p>
          <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">Conditions générales de vente — clients professionnels</h1>
          <p className="mt-6 text-base leading-[1.75] text-muted-foreground">Version projet du 26 novembre 2026 · À compléter et à valider avant publication et utilisation contractuelle.</p>
          <Button variant="outline" onClick={() => window.print()} className="mt-6 print:hidden"><Printer aria-hidden="true" />Imprimer</Button>
        </header>
        <div className="mt-10"><Prose>
          {BIDCROSSCHECK_TERMS_SECTIONS.map((section) => <section key={section.title} className="space-y-4"><h2>{section.title}</h2>{section.paragraphs.map((text) => <p key={text}>{text}</p>)}</section>)}
          <section className="space-y-4">
            <h2>6. Contact et références</h2>
            <p>Contact : <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-ice-blue underline underline-offset-4">{CONTACT_EMAIL}</a>.</p>
            <p>Références : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F33527" target="_blank" rel="noopener noreferrer" className="text-ice-blue underline underline-offset-4">Service Public Entreprendre (F33527)</a> · <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040866/2026-11-20" target="_blank" rel="noopener noreferrer" className="text-ice-blue underline underline-offset-4">Code civil, art. 1119</a>.</p>
          </section>
        </Prose></div>
        <Button asChild variant="outline" className="mt-10 print:hidden"><Link to={BIDCROSSCHECK_PATH}>Retour à BidCrossCheck</Link></Button>
      </article>
    </SiteShell>
  </div>
);

export default BidCrossCheckTermsPage;