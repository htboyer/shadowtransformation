import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Download, FileCheck2, Mail, Server, Users } from "lucide-react";
import { Breadcrumb, SiteShell } from "@/components/site/ContentLayout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BIDCROSSCHECK, BIDCROSSCHECK_PDF, CREDIT_PACKS, TOOLS_PATH, TRIAL_MAILTO, orderMailto, type CreditPack } from "@/content/tools";
import { BIDCROSSCHECK_CGV_PATH } from "@/content/bidcrosscheck-terms";
import clientKit from "@/assets/tools/BidCrossCheck_0.39_Client.zip.asset.json";
import { CONTACT_EMAIL } from "@/lib/site";

const reviews = [
  { title: "TDR", text: "Relire les termes de référence, les pièces applicables, les attentes et les critères à respecter." },
  { title: "Méthodologie", text: "Rapprocher la méthode proposée des objectifs, des résultats attendus et des livrables annoncés." },
  { title: "Planning et mobilisation", text: "Examiner le calendrier, les dépendances et les charges des experts, puis leur cohérence avec les moyens prévus." },
  { title: "CV", text: "Rapprocher les profils des exigences et identifier les qualifications, expériences ou justificatifs qui restent à vérifier." },
  { title: "Offre financière", text: "Relire les calculs et rapprocher le chiffrage des engagements techniques et de la mobilisation." },
  { title: "Devis interne · facultatif", text: "Si vous l’ajoutez à la revue, rapprocher le prix soumis du devis interne et relire les coûts, commissions et marges." },
];

const actionClass = "h-auto min-h-11 whitespace-normal px-5 py-3 text-left leading-relaxed";

export const REVIEW_ASSUMPTIONS = {
  annualGrossSalaries: [70_000, 100_000],
  annualHours: 1_600,
  hoursPerOffer: 3,
  annualOffers: 40,
  arithmeticDetectionTarget: 99,
  methodologicalDetectionTargetExclusive: 90,
  acceptanceDiscrepancies: { euros: 300, overloadDays: 0.5, planningBudgetDays: 1 },
} as const;

export const reviewTimeValue = (annualGrossSalary: number, offers = 1) =>
  annualGrossSalary / REVIEW_ASSUMPTIONS.annualHours * REVIEW_ASSUMPTIONS.hoursPerOffer * offers;

const formatAmount = (value: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value);

const BidCrossCheckPage = () => {
  const [credits, setCredits] = useState<CreditPack>(1);
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("Adresse copiée.");
    } catch {
      setCopyStatus("Copie indisponible : vous pouvez sélectionner l’adresse ci-dessous et la copier.");
    }
  };

  return (
    <SiteShell>
      <article className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <Breadcrumb items={[{ label: "Nos outils", href: TOOLS_PATH }, { label: "BidCrossCheck" }]} />
        <header className="mt-10 max-w-[70ch]">
          <p className="eyebrow">Offre ouverte · Prix sur demande</p>
          <h1 className="mt-6 break-words font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">BidCrossCheck</h1>
          <p className="mt-3 font-display text-base text-ice-blue">by Shadow Transformation</p>
          <p className="mt-8 font-display text-xl font-light leading-snug text-glacier lg:text-2xl">{REVIEW_ASSUMPTIONS.hoursPerOffer} heures de revue managériale visées par offre</p>
          <p className="mt-4 text-base leading-[1.75] text-muted-foreground">Une hypothèse fondée sur l’expérience métier du fondateur, pas un gain constaté ou garanti. Le gain de temps reste à mesurer selon le dossier.</p>
          <p className="mt-6 text-base leading-[1.75] text-muted-foreground lg:text-lg">
            BidCrossCheck aide les bureaux d’études (BE) à rapprocher les pièces d’une offre, à repérer les incohérences et à préparer les arbitrages avant dépôt. Une démarche fondée sur {BIDCROSSCHECK.experienceYears} ans d’expérience de préparation et de contrôle d’offres, sans garantie chiffrée ni promesse de résultat automatique.
          </p>
          <Button asChild className={`mt-8 ${actionClass}`}><a href={new URL(clientKit.url, "https://shadowtransformation.lovable.app").href} download="BidCrossCheck_0.39_Client.zip"><Download aria-hidden="true" />Télécharger le kit client</a></Button>
          <p className="mt-3 text-sm text-muted-foreground">ZIP 0.39 · guide DSI inclus</p>
        </header>

        <section aria-labelledby="temps-title" className="mt-16 border-t border-hairline pt-10">
          <p className="eyebrow">Hypothèse de temps mobilisable</p>
          <h2 id="temps-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Du temps de direction pour les arbitrages</h2>
          <div className="mt-6 max-w-[70ch] space-y-4 text-base leading-[1.75] text-muted-foreground">
            <p>Sur une base de {formatAmount(REVIEW_ASSUMPTIONS.annualGrossSalaries[0])} à {formatAmount(REVIEW_ASSUMPTIONS.annualGrossSalaries[1])} € de salaire brut annuel et une hypothèse de {formatAmount(REVIEW_ASSUMPTIONS.annualHours)} heures de travail par an, la valorisation se calcule ainsi : salaire brut annuel ÷ heures annuelles × {REVIEW_ASSUMPTIONS.hoursPerOffer} heures.</p>
            <p>Soit environ {formatAmount(reviewTimeValue(REVIEW_ASSUMPTIONS.annualGrossSalaries[0]))} à {formatAmount(reviewTimeValue(REVIEW_ASSUMPTIONS.annualGrossSalaries[1]))} € de temps de direction mobilisable par offre, avant le prix du crédit et hors charges.</p>
            <p>Pour {REVIEW_ASSUMPTIONS.annualOffers} offres par an : {REVIEW_ASSUMPTIONS.annualOffers} × {REVIEW_ASSUMPTIONS.hoursPerOffer} h = {REVIEW_ASSUMPTIONS.annualOffers * REVIEW_ASSUMPTIONS.hoursPerOffer} h/an, soit {formatAmount(reviewTimeValue(REVIEW_ASSUMPTIONS.annualGrossSalaries[0], REVIEW_ASSUMPTIONS.annualOffers))} à {formatAmount(reviewTimeValue(REVIEW_ASSUMPTIONS.annualGrossSalaries[1], REVIEW_ASSUMPTIONS.annualOffers))} € selon ces mêmes hypothèses.</p>
            <p>Cette valorisation théorique du temps n’est ni une économie nette, ni une baisse de dépenses, ni un retour sur investissement démontré. Le temps effectivement dégagé dépend du dossier et de la revue humaine nécessaire.</p>
          </div>
        </section>

        <section aria-labelledby="revue-title" className="mt-16 border-t border-hairline pt-10">
          <p className="eyebrow">Le périmètre de la revue</p>
          <h2 id="revue-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Des pièces rapprochées, des décisions éclairées</h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {reviews.map((review) => (
              <li key={review.title} className="border-l border-ice-blue/40 pl-5">
                <h3 className="font-display text-lg font-medium text-glacier">{review.title}</h3>
                <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{review.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="fiabilite-title" className="mt-16 border-t border-hairline pt-10">
          <p className="eyebrow">Fiabilité et limites</p>
          <h2 id="fiabilite-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Distinguer les objectifs des preuves opérationnelles</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-medium text-glacier">Objectifs de détection encore à valider</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">Les objectifs sont de détecter {REVIEW_ASSUMPTIONS.arithmeticDetectionTarget} % des erreurs arithmétiques sur les données chiffrées reconnues et plus de {REVIEW_ASSUMPTIONS.methodologicalDetectionTargetExclusive} % des incohérences méthodologiques relevant des critères couverts. Ce sont des objectifs, pas des taux mesurés ni garantis. Ils restent à valider et ne signifient pas que toutes les pièces ou toutes les incohérences sont couvertes.</p>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground">Prérequis : Guide DSI respecté, formats effectivement traités, DAO et additifs à jour, pièces complètes et versions cohérentes, tableaux, unités, devises et périodes lisibles. Même lisibles, les pièces peuvent donner des résultats incomplets ; la revue et la décision restent humaines.</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-glacier">Trois écarts attendus retrouvés en recette</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">Sur le dossier de recette, les trois écarts attendus ont été retrouvés : une erreur de {REVIEW_ASSUMPTIONS.acceptanceDiscrepancies.euros} €, une surcharge de {String(REVIEW_ASSUMPTIONS.acceptanceDiscrepancies.overloadDays).replace(".", ",")} jour et {REVIEW_ASSUMPTIONS.acceptanceDiscrepancies.planningBudgetDays} jour d’écart entre planning et budget. Ces constats opérationnels portent sur ce dossier ; ils ne démontrent pas un taux de détection généralisable.</p>
            </div>
          </div>
          <div className="mt-8 max-w-[70ch]">
            <h3 className="font-display text-lg font-medium text-glacier">Des pièces complètes, lisibles et exploitables</h3>
            <p className="mt-3 text-base leading-[1.75] text-muted-foreground">La revue requiert l’ensemble des pièces applicables : TDR et annexes ou additifs, méthodologie, planning et mobilisation, CV et justificatifs, offre financière ; le devis interne reste facultatif. Fournissez les versions complètes, à jour et lisibles, avec des tableaux et données chiffrées exploitables.</p>
            <p className="mt-4 text-base leading-[1.75] text-muted-foreground">Utilisez uniquement les formats pris en charge par la version installée, à vérifier dans le kit et le guide DSI avant analyse. Une pièce absente, illisible ou dans un format non pris en charge, ainsi qu’une donnée non reconnue, limite les contrôles et doit être revue par votre équipe. L’absence de signalement ne vaut pas validation de l’offre.</p>
          </div>
        </section>

        <section aria-labelledby="maitrise-title" className="mt-16 border-t border-hairline pt-10">
          <h2 id="maitrise-title" className="font-display text-2xl font-light text-glacier lg:text-[34px]">L’analyse chez vous. La décision vous appartient.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <Server className="h-6 w-6 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-medium text-glacier">Sur le serveur du BE</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">L’analyse s’effectue sur le serveur de votre bureau d’études. Le kit et le guide destiné à votre DSI permettent de préparer l’installation. Aucune pièce d’offre n’est à transmettre par courriel à Shadow Transformation.</p>
            </div>
            <div>
              <FileCheck2 className="h-6 w-6 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-medium text-glacier">Une validation finale humaine</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">Les constats servent à la relecture et aux arbitrages de votre équipe. La recevabilité, les choix de profils, les engagements et le prix restent à vérifier et à valider par les personnes responsables de l’offre.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="exemple-title" className="mt-16 border-y border-hairline py-10">
          <p className="eyebrow">Exemple commenté</p>
          <h2 id="exemple-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">De la relecture à l’arbitrage</h2>
          <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground">Ce rapport composite de 6 pages présente des cas réels transposés, des tests de recette et une simulation commerciale. Les extraits sont reformulés, les chiffres financiers transposés et la simulation explicitement signalée.</p>
          <Button asChild variant="outline" className={`mt-8 ${actionClass}`}>
            <a href={BIDCROSSCHECK_PDF} download="BidCrossCheck_Rapport_composite.pdf"><Download aria-hidden="true" />Voir un exemple commenté de revue d’offre</a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">Téléchargement PDF · 6 pages</p>
        </section>

        <section aria-labelledby="credits-title" className="mt-16">
          <p className="eyebrow">Essai et commande</p>
          <h2 id="credits-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Un compte partagé pour votre équipe</h2>
          <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground"><Link to={BIDCROSSCHECK_CGV_PATH} className="text-ice-blue underline underline-offset-4">Conditions générales de vente — clients professionnels</Link> · Version projet du 26 novembre 2026. Le téléchargement et les courriels de demande ne concluent pas une vente ; le devis et les CGV datées nécessitent une acceptation explicite.</p>
          <div className="mt-6 flex max-w-[70ch] items-start gap-3">
            <Users className="mt-1 h-5 w-5 shrink-0 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
            <p className="text-base leading-[1.75] text-muted-foreground">Le compte est celui de votre BE ou de votre département, avec un compteur de crédits partagé. Les demandes d’essai et les commandes se font par courriel. Prix sur demande.</p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-light text-glacier">Demander votre crédit d’essai</h3>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground">Après installation, joignez le fichier <code className="text-glacier">demande.json</code> à votre demande de crédit d’essai. Aucune pièce d’offre à transmettre. Si vous n’avez pas encore installé BidCrossCheck, demandez d’abord le kit et le guide DSI.</p>
              <Button asChild variant="outline" className={`mt-6 ${actionClass}`}><a href={TRIAL_MAILTO}><Mail aria-hidden="true" />Demander mon crédit d’essai</a></Button>
            </div>
            <div>
              <h3 className="font-display text-xl font-light text-glacier">Commander des crédits</h3>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground">Choisissez 1, 10, 25 ou 50 crédits. Le prix et les modalités vous seront communiqués par courriel ; aucun paiement n’est demandé sur le site.</p>
              <label id="credit-pack-label" className="mt-6 block text-sm text-muted-foreground">Nombre de crédits</label>
              <Select value={String(credits)} onValueChange={(value) => {
                const pack = CREDIT_PACKS.find((candidate) => String(candidate) === value);
                if (pack !== undefined) setCredits(pack);
              }}>
                <SelectTrigger aria-labelledby="credit-pack-label" className="mt-2 w-full max-w-xs"><SelectValue /></SelectTrigger>
                <SelectContent>{CREDIT_PACKS.map((pack) => <SelectItem key={pack} value={String(pack)}>{pack} crédit{pack > 1 ? "s" : ""}</SelectItem>)}</SelectContent>
              </Select>
              <Button asChild className={`mt-4 ${actionClass}`}><a href={orderMailto(credits)}><Mail aria-hidden="true" />Commander {credits} crédit{credits > 1 ? "s" : ""} par courriel</a></Button>
            </div>
          </div>
          <div className="mt-12 border-t border-hairline pt-8">
            <p className="text-sm text-muted-foreground">Votre messagerie ne s’ouvre pas ?</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-base text-ice-blue underline underline-offset-4">{CONTACT_EMAIL}</a>
              <Button variant="ghost" size="icon" aria-label="Copier l’adresse de contact" title="Copier l’adresse de contact" onClick={copyEmail}>
                {copyStatus === "Adresse copiée." ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              </Button>
            </div>
            <p role="status" className="mt-2 min-h-6 text-sm text-muted-foreground">{copyStatus}</p>
          </div>
        </section>
      </article>
    </SiteShell>
  );
};

export default BidCrossCheckPage;