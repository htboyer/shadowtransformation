import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Download, FileCheck2, Mail, Server, Users } from "lucide-react";
import { Breadcrumb, SiteShell } from "@/components/site/ContentLayout";
import { Button } from "@/components/ui/button";
import { BIDCROSSCHECK, BIDCROSSCHECK_PDF, CREDIT_PACK_OFFERS, TOOLS_PATH, TRIAL_MAILTO, formatEuroHt, getCreditPackOffer, orderMailto, type CreditPack } from "@/content/tools";
import { BIDCROSSCHECK_CGV_PATH, BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR } from "@/content/bidcrosscheck-terms";
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
  annualEmployerCost: 133_000,
  annualHours: 1_600,
  hoursPerOffer: 3,
  arithmeticDetectionTarget: 99,
  methodologicalDetectionTargetExclusive: 90,
} as const;

export const reviewTimeValue = (annualEmployerCost = REVIEW_ASSUMPTIONS.annualEmployerCost) =>
  annualEmployerCost / REVIEW_ASSUMPTIONS.annualHours * REVIEW_ASSUMPTIONS.hoursPerOffer;

export const roundedReviewTimeValue = (annualEmployerCost = REVIEW_ASSUMPTIONS.annualEmployerCost) =>
  Math.round(reviewTimeValue(annualEmployerCost) / 10) * 10;

const formatAmount = (value: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value);

const BidCrossCheckPage = () => {
  const [credits, setCredits] = useState<CreditPack>(10);
  const [copyStatus, setCopyStatus] = useState("");
  const selectedOffer = getCreditPackOffer(credits);

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
        <header className="mt-10">
          <p className="eyebrow">Offre ouverte</p>
          <h1 className="mt-6 break-words font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">BidCrossCheck</h1>
          <p className="mt-3 font-display text-base text-ice-blue">by Shadow Transformation</p>
          <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground lg:text-lg">
            BidCrossCheck aide les bureaux d’études (BE) à rapprocher les pièces d’une offre, à repérer les incohérences et à préparer les arbitrages avant dépôt.
          </p>
          <p className="mt-6 border-l-2 border-ice-blue/60 pl-5 font-display text-xl font-light leading-snug text-glacier lg:text-2xl">
            Vos dossiers sont analysés sur votre serveur interne.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 border-y border-hairline py-6 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0 lg:pt-12">
          <div aria-describedby="gains-note" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl font-light text-glacier lg:text-4xl">{REVIEW_ASSUMPTIONS.hoursPerOffer} h<sup className="ml-0.5 text-lg text-ice-blue">*</sup></p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Temps moyen économisé par le manager par offre</p>
            </div>
            <div>
              <p className="font-display text-3xl font-light text-glacier lg:text-4xl">{formatAmount(roundedReviewTimeValue())} €<sup className="ml-0.5 text-lg text-ice-blue">*</sup></p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Valeur du temps de direction libéré par offre</p>
            </div>
          </div>
          <p id="gains-note" className="mt-3 text-[11px] italic leading-relaxed text-muted-foreground">
            * Gain de temps estimé sur la base de {BIDCROSSCHECK.experienceYears} années d’expérience du contrôle d’offres techniques et financières, tous bailleurs confondus. La valorisation repose sur un coût employeur annuel moyen estimé à {formatAmount(REVIEW_ASSUMPTIONS.annualEmployerCost)} € pour un manager, sur la base de {formatAmount(REVIEW_ASSUMPTIONS.annualHours)} heures travaillées par an.
          </p>
            </div>
        <section aria-labelledby="performances-title" className="min-w-0">
          <h2 id="performances-title" className="mb-4 font-display text-xl font-light leading-8 text-glacier">Performances attendues</h2>
          <div aria-describedby="performance-note" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl font-light text-glacier lg:text-4xl">{REVIEW_ASSUMPTIONS.arithmeticDetectionTarget} %<sup className="ml-0.5 text-lg text-ice-blue">**</sup></p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">des erreurs arithmétiques sur les données chiffrées reconnues</p>
            </div>
            <div>
              <p className="font-display text-3xl font-light text-glacier lg:text-4xl">Plus de {REVIEW_ASSUMPTIONS.methodologicalDetectionTargetExclusive} %<sup className="ml-0.5 text-lg text-ice-blue">**</sup></p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">des incohérences méthodologiques relevant des critères couverts</p>
            </div>
          </div>
          <p id="performance-note" className="mt-3 text-[11px] italic leading-relaxed text-muted-foreground">
            ** Performance de détection pour un dossier complet et à jour, téléversé avec des formats pris en charge et des textes, tableaux, unités et calendriers lisibles. La portée dépend des pièces effectivement exploitées. La validation finale de l’offre reste humaine.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link to={BIDCROSSCHECK_CGV_PATH} className="text-ice-blue underline underline-offset-4">Consulter les contraintes d’exploitation et de couverture dans les CGV (projet)</Link>.
          </p>
        </section>
          </div>
          <Button asChild className={`mt-8 ${actionClass}`}><a href={new URL(clientKit.url, "https://shadowtransformation.lovable.app").href} download="BidCrossCheck_0.39_Client.zip"><Download aria-hidden="true" />Télécharger le kit client</a></Button>
          <p className="mt-3 text-sm text-muted-foreground">ZIP 0.39 · guide DSI inclus</p>
        </header>

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



        <section aria-labelledby="maitrise-title" className="mt-16 border-t border-hairline pt-10">
          <h2 id="maitrise-title" className="font-display text-2xl font-light text-glacier lg:text-[34px]">L’analyse chez vous. La décision vous appartient.</h2>
          <div className="mt-8 max-w-[70ch]">
            <p className="text-base leading-[1.75] text-muted-foreground">
              Votre DSI installe BidCrossCheck sur le serveur du bureau d’études. Depuis leur navigateur, les collaborateurs habilités accèdent à l’application sur l’intranet et partagent le compteur de crédits du compte. Les pièces sont transférées au serveur interne pour l’analyse ; le rapport revient au poste de l’utilisateur. Les DAO, CV, budgets et rapports restent dans votre environnement. Une fois les crédits activés, l’analyse fonctionne sans connexion Internet. Les échanges avec Shadow Transformation concernent l’activation, les crédits et, si vous les demandez, les mises à jour.
            </p>
            <p className="mt-3 text-sm">
              <Link to={`${BIDCROSSCHECK_CGV_PATH}#${BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR}`} className="text-ice-blue underline underline-offset-4">Confidentialité et sécurité des données (CGV, projet)</Link>
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <Server className="h-6 w-6 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-medium text-glacier">Aucune pièce d’offre à transmettre</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">Le kit et le guide destiné à votre DSI préparent l’installation sur votre serveur. Aucune pièce d’offre n’est à transmettre par courriel à Shadow Transformation.</p>
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
          <p className="eyebrow">Formules, essai et commande</p>
          <h2 id="credits-title" className="mt-6 font-display text-2xl font-light text-glacier lg:text-[34px]">Un compte partagé pour votre équipe</h2>
          <p className="mt-6 max-w-[70ch] text-base leading-[1.75] text-muted-foreground"><Link to={BIDCROSSCHECK_CGV_PATH} className="text-ice-blue underline underline-offset-4">Conditions générales de vente — clients professionnels</Link> · Version projet du 26 novembre 2026. Le téléchargement et les courriels de demande ne concluent pas une vente ; le devis et les CGV datées nécessitent une acceptation explicite.</p>
          <div className="mt-6 flex max-w-[70ch] items-start gap-3">
            <Users className="mt-1 h-5 w-5 shrink-0 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
            <p className="text-base leading-[1.75] text-muted-foreground">Le compte est celui de votre BE ou de votre département, avec un compteur de crédits partagé. Un crédit ouvre la revue d’un dossier ; une relance est incluse pour le même dossier et le même DAO inchangé.</p>
          </div>
          <div className="mt-8 rounded-md border border-border/60 bg-card/40 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-[60ch]">
                <h3 className="font-display text-lg font-medium text-glacier">Essai gratuit · 1 crédit</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Après installation, joignez <code className="text-glacier">demande.json</code> à votre demande. Aucune pièce d’offre à transmettre.</p>
              </div>
              <Button asChild variant="outline" className={`shrink-0 ${actionClass}`}><a href={TRIAL_MAILTO}><Mail aria-hidden="true" />Demander mon crédit d’essai</a></Button>
            </div>
          </div>
          <div className="mt-8" role="group" aria-labelledby="packs-title">
            <h3 id="packs-title" className="font-display text-xl font-light text-glacier">Choisir une formule (tarifs HT)</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CREDIT_PACK_OFFERS.map((offer) => {
                const selected = offer.credits === credits;
                return (
                  <button
                    key={offer.credits}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCredits(offer.credits)}
                    className={`flex flex-col rounded-md border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue ${selected ? "border-ice-blue bg-card/80" : "border-border/60 bg-card/30 hover:border-ice-blue/50"}`}
                  >
                    <span className="font-display text-lg font-medium text-glacier">{offer.credits} crédit{offer.credits > 1 ? "s" : ""}</span>
                    <span className="mt-3 font-display text-2xl font-light text-glacier">{formatEuroHt(offer.priceHt)}</span>
                    <span className="mt-1 text-sm text-muted-foreground">{offer.unitPriceHt} €/crédit</span>
                    {offer.includesUpdates && <span className="mt-3 text-xs text-ice-blue">Droit aux mises à jour inclus</span>}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Button asChild className={actionClass}>
                <a href={orderMailto(credits)}>
                  <Mail aria-hidden="true" />
                  Demander la commande · {selectedOffer.credits} crédit{selectedOffer.credits > 1 ? "s" : ""} ({formatEuroHt(selectedOffer.priceHt)})
                </a>
              </Button>
              <p className="text-sm leading-relaxed text-muted-foreground">L’envoi du courriel constitue une demande de commande ; aucun paiement en ligne n’est ouvert sur le site.</p>
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