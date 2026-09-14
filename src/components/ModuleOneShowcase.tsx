import type { ReactNode } from "react";
import { FileText, Maximize2 } from "lucide-react";
import dashboardImage from "@/assets/module-one/dashboard.webp";
import monitoringImage from "@/assets/module-one/monitoring.webp";
import analysisImage from "@/assets/module-one/analysis.webp";
import reportImage from "@/assets/module-one/report.webp";
import DeliverableViewer from "@/components/DeliverableViewer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const loadPages = (modules: Record<string, { default: string }>) =>
  Object.keys(modules)
    .sort()
    .map((key) => modules[key].default);

const REPORT_PAGES = loadPages(
  import.meta.glob("@/assets/deliverables/rapport-*.webp", { eager: true }) as Record<string, { default: string }>,
);
const SUMMARY_PAGES = loadPages(
  import.meta.glob("@/assets/deliverables/synthese-*.webp", { eager: true }) as Record<string, { default: string }>,
);

const TOOL_SCREENS = [
  { title: "Tableau de bord", image: dashboardImage },
  { title: "Suivi de la collecte", image: monitoringImage },
  { title: "Analyse", image: analysisImage },
  { title: "Rapport", image: reportImage },
];

const DELIVERABLES = [
  {
    title: "Restitution sponsor — rapport",
    description:
      "Un exemple de livrable décisionnel : synthèse exécutive, lecture de maturité, écarts de perception, points d’appui, zones de vigilance et décision de sortie.",
    cta: "Consulter le rapport",
    modalTitle: "Restitution sponsor — rapport complet",
    modalDescription:
      "Exemple anonymisé présenté à titre illustratif. Le document est adapté à chaque mission, au mandat et au niveau de confidentialité défini avec le sponsor.",
    pages: REPORT_PAGES,
  },
  {
    title: "Restitution sponsor — synthèse",
    description:
      "Un support court pour partager les enseignements clés, clarifier les conditions de passage et ouvrir les arbitrages de suite.",
    cta: "Consulter la synthèse",
    modalTitle: "Restitution sponsor — synthèse complète",
    modalDescription:
      "Support de restitution court, conçu pour partager les enseignements clés et ouvrir les arbitrages de suite.",
    pages: SUMMARY_PAGES,
  },
];

const PreviewDialog = ({
  title,
  description,
  images,
  trigger,
}: {
  title: string;
  description: string;
  images: string[];
  trigger: ReactNode;
}) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto border-hairline bg-background p-4 shadow-soft sm:p-7">
      <DialogHeader className="pr-8">
        <DialogTitle className="font-display text-xl font-medium text-glacier">{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className={images.length > 1 ? "grid gap-5 md:grid-cols-2" : "mt-2"}>
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={images.length > 1 ? `${title}, aperçu ${index + 1}` : title}
            loading="lazy"
            className="w-full rounded-lg border border-hairline bg-card object-contain"
          />
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const ModuleOneShowcase = () => (
  <section
    id="module-1-pratique"
    className="relative scroll-mt-24 border-t border-hairline/60"
    style={{
      background:
        "linear-gradient(180deg, hsl(218 60% 11% / 0.55), hsl(218 60% 11% / 0.25))",
    }}
  >
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">04 — Module 1 en pratique</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Module 1 en pratique
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Un outil pour cadrer la mission, piloter la collecte, lire les écarts et produire une sortie décisionnelle exploitable.
        </p>
      </div>

      <div className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-lg font-medium text-glacier">Aperçu de l’outil</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Le Module 1 permet de cadrer la mission, piloter la collecte, lire les signaux utiles et structurer une décision de suite.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {TOOL_SCREENS.map((screen) => (
            <PreviewDialog
              key={screen.title}
              title={screen.title}
              description="Aperçu illustratif de l’outil d’intervention du Module 1."
              images={[screen.image]}
              trigger={
                <Button
                  type="button"
                  variant="outline"
                  className="group h-auto w-full flex-col items-stretch gap-0 overflow-hidden rounded-lg border-hairline bg-surface p-0 text-left shadow-soft hover:border-ice-blue/50 hover:bg-surface"
                  aria-label={`Agrandir l’aperçu : ${screen.title}`}
                >
                  <span className="relative block aspect-[16/9] overflow-hidden bg-card">
                    <img
                      src={screen.image}
                      alt={`Interface du Module 1 — ${screen.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-background/85 text-ice-blue opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 aria-hidden className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="block border-t border-hairline px-5 py-4 font-display text-sm font-medium text-glacier">
                    {screen.title}
                  </span>
                </Button>
              }
            />
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-hairline/70 pt-12">
        <p className="font-display text-lg font-medium text-glacier">Exemples de livrables</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {DELIVERABLES.map((deliverable) => (
            <article key={deliverable.title} className="premium-card flex flex-col p-7 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ice-blue/30 bg-[hsl(var(--petrol)/0.12)] text-ice-blue">
                <FileText aria-hidden className="h-4 w-4" />
              </div>
              <h3 className="mt-6 font-display text-lg font-medium text-glacier">{deliverable.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{deliverable.description}</p>
              <DeliverableViewer
                title={deliverable.modalTitle}
                description={deliverable.modalDescription}
                label={deliverable.title}
                pages={deliverable.pages}
                trigger={
                  <Button variant="outline" className="mt-7 w-fit border-ice-blue/30 bg-transparent text-glacier hover:bg-secondary">
                    {deliverable.cta}
                    <span aria-hidden>→</span>
                  </Button>
                }
              />
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground/70">
          Exemples anonymisés — consultation illustrative uniquement. Les documents ne sont pas proposés au téléchargement direct.
        </p>
      </div>
    </div>
  </section>
);

export default ModuleOneShowcase;