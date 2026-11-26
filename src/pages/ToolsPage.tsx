import { ArrowRight, BookOpen, FileCheck2, Layers, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb, SiteShell } from "@/components/site/ContentLayout";
import { Button } from "@/components/ui/button";
import { BIDCROSSCHECK_PATH, TOOL_CATALOGUE } from "@/content/tools";

const icons = [Layers, Layers, Radio, BookOpen];

const ToolsPage = () => (
  <SiteShell>
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Breadcrumb items={[{ label: "Nos outils" }]} />
      <header className="mt-10 max-w-[70ch]">
        <p className="eyebrow">Nos outils</p>
        <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">Outils et publications</h1>
        <p className="mt-6 text-base leading-[1.75] text-muted-foreground lg:text-lg">
          Des outils au service de la relecture, du diagnostic et de la décision. BidCrossCheck est la seule offre ouverte ici ; les autres offres et publications se préparent.
        </p>
      </header>

      <section aria-labelledby="bidcrosscheck-title" className="mt-14 border-y border-hairline py-10 lg:py-12">
        <div className="flex items-center gap-3 text-ice-blue">
          <FileCheck2 className="h-6 w-6 shrink-0" aria-hidden="true" strokeWidth={1.5} />
          <span className="text-sm font-medium">Offre ouverte · Prix sur demande</span>
        </div>
        <h2 id="bidcrosscheck-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">BidCrossCheck</h2>
        <p className="mt-3 text-sm text-ice-blue">by Shadow Transformation</p>
        <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground">
          Relire une offre avant son dépôt : TDR, méthodologie, planning et mobilisation, CV, offre financière et, si vous le souhaitez, devis interne. L’analyse s’effectue sur le serveur de votre bureau d’études (BE) ; la validation finale reste humaine.
        </p>
        <Button asChild className="mt-8 h-auto min-h-11 whitespace-normal px-6 py-3 text-left">
          <Link to={BIDCROSSCHECK_PATH}>Découvrir BidCrossCheck <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </section>

      <section aria-labelledby="gamme-title" className="mt-16">
        <p className="eyebrow">La gamme et les publications</p>
        <h2 id="gamme-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Les offres à venir</h2>
        <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground">
          M1 et M2 seront disponibles à la commande après validation de chaque module. M2 est autonome : il ne nécessite pas de commander M1.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TOOL_CATALOGUE.map((tool, index) => {
            const Icon = icons[index] ?? BookOpen;
            return (
              <li key={tool.name} className="flex flex-col rounded-md border border-border/60 bg-card/40 p-6 lg:p-8">
                <Icon className="h-6 w-6 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
                <p className="mt-5 text-sm text-ice-blue">{tool.status}</p>
                <h3 className="mt-4 font-display text-xl font-light leading-snug text-glacier">{tool.name}</h3>
                <p className="mt-5 text-base leading-[1.75] text-muted-foreground">{tool.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  </SiteShell>
);

export default ToolsPage;