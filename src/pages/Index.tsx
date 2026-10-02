/**
 * Shadow Transformation — Landing page premium (V3)
 * --------------------------------------------------
 * Positionnement : dispositif complet — diagnostic, décision,
 * structuration, accompagnement, réévaluation.
 *
 *   1. <HeroSection />          → Section 1 : Hero
 *   2. <ProblemSection />       → Section 2 : Le problème
 *   3. <ApproachSection />      → Section 3 : L'approche (4 temps)
 *   4. <ModulesSection />       → Section 4 : Une intervention progressive (5 modules)
 *   5. <AccompagnementSection />→ Section 5 : Du diagnostic à la mise en œuvre
 *   6. <DeliverablesSection />  → Section 6 : Livrables
 *   7. <ContactSection />       → Section 7 : Contact / closing
 */

import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ChartNoAxesCombined,
  CheckCircle2,
  Compass,
  Eye,
  GitBranch,
  Layers3,
  Map,
  Network,
  ScanSearch,
  Target,
  Users,
} from "lucide-react";
import RegardsSection from "@/components/RegardsSection";
import { PageBackdrop, SiteFooter, SiteNav } from "@/components/site/SiteChrome";
import { Link } from "react-router-dom";
import FounderSection from "@/components/FounderSection";
import ModuleOneShowcase from "@/components/ModuleOneShowcase";
import PresentationSection from "@/components/PresentationSection";
import { Button } from "@/components/ui/button";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";

import { CONTACT_EMAIL, MAILTO } from "@/lib/site";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <PageBackdrop />
      <div className="relative z-10">
        <SiteNav home />
        <main>
          <HeroSection />
          <PresentationSection />
          <ProblemSection />
          <MaturityProofSection />
          <ApproachSection />
          <ModulesSection />
          <ModuleOneShowcase />
          <AccompagnementSection />
          <DeliverablesSection />
          <RegardsSection />
          <FounderSection />
          <ContactSection />
        </main>
        <SiteFooter home />
      </div>
    </div>
  );
};

export default Index;


/* =========================================================
   SECTION 1 — Hero
   ========================================================= */
const HeroSection = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(var(--ice-blue) / 0.4), transparent)",
      }}
    />
    <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-16 lg:px-10 lg:pb-40 lg:pt-24">
      <p className="text-center font-display text-xs font-light italic tracking-[0.12em] text-muted-foreground/60 sm:text-sm">
        «&nbsp;Passez de l’ombre à la lumière.&nbsp;»
      </p>
      <div className="mx-auto mt-5 h-px w-12 bg-ice-blue/40" aria-hidden />
      <p className="eyebrow mt-7">Cabinet · Transformation</p>

      <h1 className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.1] text-glacier sm:text-5xl lg:text-[58px]">
        Sécuriser la décision, structurer la{" "}
        <span className="text-ice-blue">trajectoire</span>, accompagner la
        transformation.
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
        Shadow Transformation aide les dirigeants à objectiver la maturité réelle
        de leur organisation, à décider lucidement de la suite, puis à construire
        et accompagner une trajectoire de transformation crédible.
      </p>

      {/* Signature stratégique */}
      <p className="mt-6 font-display text-sm font-light italic tracking-wide text-ice-blue/90">
        Mieux voir avant d’agir.
      </p>

      <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          asChild
          className="group h-auto rounded-full bg-petrol px-7 py-3.5 text-sm font-medium tracking-wide text-glacier shadow-soft hover:bg-petrol/90"
        >
          <a
            href={MAILTO}
            onClick={() => trackEvent(ANALYTICS_EVENTS.CTA_HERO)}
          >
            Demander un échange confidentiel
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="group h-auto rounded-full border-ice-blue/35 bg-transparent px-7 py-3.5 text-sm font-medium tracking-wide text-glacier hover:border-ice-blue/70 hover:bg-secondary"
        >
          <a href="#module-1-pratique">
            Voir le Module 1 en pratique
            <span aria-hidden className="text-ice-blue transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </Button>
      </div>

      <a href="#presentation" className="mt-5 inline-flex text-sm text-ice-blue/80 underline underline-offset-4 transition-colors hover:text-glacier">
        Découvrir la démarche en vidéo
      </a>

      <div className="mt-20 max-w-3xl border-l border-ice-blue/40 pl-6">
        <p className="font-display text-lg font-light leading-relaxed text-glacier/90 lg:text-xl">
          Lire le réel. <span className="text-muted-foreground">·</span> Décider lucidement.{" "}
          <span className="text-muted-foreground">·</span> Structurer la suite.{" "}
          <span className="text-muted-foreground">·</span> Accompagner l’exécution.
        </p>
        {/* Ligne de crédibilité — discrète, non promotionnelle */}
        <p className="mt-6 text-xs leading-relaxed tracking-[0.08em] text-muted-foreground/70">
          25+ ans d’expérience · 50+ contextes pays · Public, santé, éducation,
          entreprise · Un constat : le réel est sous-lu
        </p>
      </div>
    </div>

    <div className="hairline mx-auto max-w-6xl" />
  </section>
);

/* =========================================================
   SECTION 2 — Le problème
   ========================================================= */
const PROBLEMS = [
  "Lancer la transformation trop vite, sans avoir lu le terrain.",
  "Confondre intention de transformation et maturité réelle de l’organisation.",
  "Engager une transformation sans que les conditions minimales soient réunies.",
  "Sous-estimer les écarts de perception entre niveaux, fonctions et récits internes.",
  "Produire un plan sans capacité réelle d’exécution.",
];

const ALIGNMENT_POLES = [
  { title: "Stratégie", question: "Où veut-on aller ? Pourquoi maintenant ?" },
  { title: "Humains", question: "Qui porte, comprend et s’approprie la transformation ?" },
  { title: "Exécution", question: "Quelles conditions rendent la suite praticable ?" },
];

const ProblemSection = () => (
  <section id="probleme" className="relative">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">01 — Le problème</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Une transformation échoue souvent avant même d’avoir commencé.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Une transformation ne se résume pas à une intention stratégique, un
            plan projet ou une annonce de direction. Elle suppose un terrain
            lisible, des écarts nommés, des conditions minimales réunies et une
            capacité réelle de portage dans l’organisation.
          </p>
          <ul className="mt-10 divide-y divide-hairline/70 border-y border-hairline/70">
            {PROBLEMS.map((p, i) => (
              <li key={i} className="flex gap-6 py-5">
                <span className="step-number w-8 shrink-0 text-sm">0{i + 1}</span>
                <span className="text-[15px] leading-relaxed text-glacier/85">{p}</span>
              </li>
            ))}
          </ul>

          {/* Trois pôles de l'alignement — visuel sobre, lignes fines */}
          <div className="mt-12">
            <p className="text-base font-medium leading-relaxed text-glacier/90 lg:text-lg">
              La transformation échoue quand stratégie, humains et exécution ne
              sont pas alignés.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
              {ALIGNMENT_POLES.map((pole) => (
                <div key={pole.title} className="bg-surface p-6">
                  <p className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-ice-blue">
                    {pole.title}
                  </p>
                  <span aria-hidden className="mt-4 block h-px w-8 bg-ice-blue/40" />
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {pole.question}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span aria-hidden className="h-px flex-1 bg-ice-blue/30" />
              <p className="font-display text-sm font-light italic tracking-wide text-glacier/90">
                Alignement = capacité réelle à transformer
              </p>
              <span aria-hidden className="h-px flex-1 bg-ice-blue/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   Preuve éditoriale — pourquoi commencer par la maturité
   ========================================================= */
const MATURITY_STATS = [
  {
    value: "< 30 %",
    text: "des transformations organisationnelles améliorent durablement la performance et maintiennent leurs gains dans le temps.",
    source: "McKinsey",
    icon: ChartNoAxesCombined,
  },
  {
    value: "16 %",
    text: "des transformations digitales réussissent à la fois sur la performance et dans la durée.",
    source: "McKinsey",
    icon: Network,
  },
  {
    value: "49 % vs 1 %",
    text: "de réussite selon que les dirigeants sont pleinement alignés sur les objectifs… ou peu ou pas alignés.",
    source: "McKinsey",
    icon: Target,
  },
] satisfies Array<{ value: string; text: string; source: string; icon: LucideIcon }>;

const MaturityProofSection = () => (
  <section className="relative border-t border-hairline/60" aria-labelledby="maturity-proof-title">
    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <p className="eyebrow">Point de départ</p>
          <h2
            id="maturity-proof-title"
            className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl"
          >
            Pourquoi commencer par la maturité ?
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:text-lg">
          Beaucoup de transformations échouent moins par manque d’ambition que par
          défaut de préparation, d’alignement et de conditions d’entrée suffisamment
          solides.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-3">
        {MATURITY_STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
          <article key={stat.value} className="relative flex min-h-64 flex-col bg-surface p-7 lg:p-8">
            <div className="flex items-center justify-between">
              <span className="step-number text-[11px]">0{index + 1}</span>
              <Icon aria-hidden strokeWidth={1.25} className="h-5 w-5 text-ice-blue/70" />
            </div>
            <p className="mt-6 font-display text-3xl font-light text-ice-blue lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-glacier/85">
              {stat.text}
            </p>
            <p className="mt-8 border-t border-hairline/70 pt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
              Source · {stat.source}
            </p>
          </article>
          );
        })}
      </div>

      <div className="mt-8 flex items-start gap-5 border-l border-ice-blue/35 pl-5 sm:items-center sm:border-l-0 sm:pl-0">
        <span aria-hidden className="hidden h-px w-12 shrink-0 bg-ice-blue/40 sm:block" />
        <p className="max-w-4xl font-display text-base font-light leading-relaxed text-glacier/90 lg:text-lg">
          Ces chiffres n’invitent pas à renoncer à transformer. Ils invitent à
          vérifier lucidement si le terrain peut porter la transformation.
        </p>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 3 — L'approche (4 temps)
   ========================================================= */
const STEPS = [
  { n: "I", title: "Lire", text: "Objectiver la maturité, les écarts de perception, les appuis et les fragilités.", icon: Eye },
  { n: "II", title: "Décider", text: "Arbitrer entre passage, temporisation, préparation complémentaire ou engagement de la suite.", icon: Compass },
  { n: "III", title: "Structurer", text: "Transformer les enseignements en chantiers, priorités, gouvernance et trajectoire pilotable.", icon: Layers3 },
  { n: "IV", title: "Accompagner", text: "Soutenir la mise en œuvre, ajuster les actions et réévaluer ce qui bouge, résiste ou se diffuse.", icon: Users },
] satisfies Array<{ n: string; title: string; text: string; icon: LucideIcon }>;

const ApproachSection = () => (
  <section
    id="approche"
    className="relative border-t border-hairline/60"
    style={{
      background:
        "linear-gradient(180deg, hsl(218 60% 11% / 0.55), hsl(218 60% 11% / 0.25))",
    }}
  >
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">02 — L’approche</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          De la lecture du réel à l’exécution accompagnée.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Structurée, séquentielle, refusant le mouvement pour le mouvement.
          Chaque étape conditionne la suivante.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-4">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
          <div
            key={step.n}
            className="group relative bg-surface p-8 transition-colors hover:bg-surface-elev"
          >
            <div className="flex items-baseline justify-between">
              <span className="step-number text-xs">{step.n}</span>
              <Icon aria-hidden strokeWidth={1.25} className="h-5 w-5 text-ice-blue/70" />
            </div>
            <h3 className="mt-8 font-display text-xl font-medium text-glacier">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-ice-blue/25 bg-[hsl(var(--petrol)/0.10)] p-8 lg:p-10">
        <p className="text-sm leading-relaxed text-glacier/90 lg:text-base">
          <span className="font-medium text-ice-blue">Shadow Transformation</span>{" "}
          n’est ni un audit RH, ni un questionnaire de climat social, ni un plan de
          transformation prématuré. C’est une démarche de lecture, d’arbitrage et
          d’accompagnement destinée à rendre la transformation plus lucide, plus
          structurée et plus tenable.
        </p>
      </div>

      {/* Méthode augmentée — encadré sobre */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-8 sm:flex-row sm:items-baseline sm:gap-8 lg:px-10">
        <p className="shrink-0 font-display text-base font-medium text-glacier">
          Une méthode augmentée, pas automatisée.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          L’IA aide à structurer les données, les écarts, les verbatims et les
          visualisations. L’interprétation reste humaine. La décision reste
          dirigeante.
        </p>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 4 — Modules : une intervention progressive
   ========================================================= */
const MODULES = [
  {
    title: "Diagnostic organisationnel",
    text: "Lire le fonctionnement réel et qualifier la robustesse d’une suite.",
    icon: ScanSearch,
  },
  {
    title: "Élan vital",
    text: "Identifier ce qui mobilise encore, ce qui fatigue et ce qui peut être réinvesti.",
    icon: Activity,
  },
  {
    title: "Futurs possibles",
    text: "Explorer des directions crédibles et un futur souhaitable.",
    icon: Compass,
  },
  {
    title: "Dilemmes et leviers",
    text: "Rendre visibles les tensions à arbitrer et les leviers activables.",
    icon: GitBranch,
  },
  {
    title: "Trajectoire",
    text: "Traduire la suite en plan de transformation pilotable.",
    icon: Map,
  },
] satisfies Array<{ title: string; text: string; icon: LucideIcon }>;

const ModulesSection = () => (
  <section id="modules" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">03 — Modules</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Une intervention progressive.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Cinq modules qui se succèdent, de la lecture du réel à la trajectoire
          pilotable. Chacun éclaire et conditionne le suivant.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => {
          const Icon = m.icon;
          return (
          <article key={m.title} className="premium-card p-8">
            <div className="flex items-baseline justify-between">
              <span className="step-number text-[11px]">
                {String(i + 1).padStart(2, "0")} / {String(MODULES.length).padStart(2, "0")}
              </span>
              <Icon aria-hidden strokeWidth={1.25} className="h-5 w-5 text-ice-blue/65" />
            </div>
            <h3 className="mt-8 font-display text-lg font-medium leading-snug text-glacier">
              {m.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
          </article>
          );
        })}

        {/* Carte-cadre */}
        <article className="rounded-2xl border border-ice-blue/30 bg-[hsl(var(--petrol)/0.10)] p-8">
          <p className="eyebrow text-ice-blue">Cadre</p>
          <p className="mt-5 font-display text-lg font-light leading-relaxed text-glacier">
            Le diagnostic est la porte d’entrée. Il ne remplace pas le plan de
            transformation : il en sécurise la construction.
          </p>
        </article>
      </div>

      {/* Clé de lecture des modules */}
      <div className="mt-10 flex items-start gap-5">
        <span aria-hidden className="mt-3 h-px w-10 shrink-0 bg-ice-blue/50" />
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Le Module 1 sécurise l’entrée dans la démarche. Les modules 2 à 5
          permettent d’approfondir, arbitrer, projeter et traduire la
          transformation en trajectoire pilotable.
        </p>
      </div>
      <Link
        to="/diagnostic-organisationnel/"
        className="mt-6 inline-flex items-center gap-2 text-sm text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier sm:ml-[3.75rem]"
      >
        Le diagnostic organisationnel avant transformation <span aria-hidden>→</span>
      </Link>
    </div>
  </section>
);

/* =========================================================
   SECTION 5 — Accompagnement
   ========================================================= */
const CHAIN = [
  { label: "Diagnostic", icon: ScanSearch },
  { label: "Décision", icon: Compass },
  { label: "Structuration", icon: Layers3 },
  { label: "Mise en œuvre", icon: Users },
  { label: "Réévaluation", icon: CheckCircle2 },
] satisfies Array<{ label: string; icon: LucideIcon }>;

const AccompagnementSection = () => (
  <section
    id="accompagnement"
    className="relative border-t border-hairline/60"
    style={{
      background:
        "linear-gradient(180deg, hsl(218 60% 11% / 0.55), hsl(218 60% 11% / 0.25))",
    }}
  >
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">04 — Accompagnement</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Du diagnostic à la mise en œuvre.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Shadow Transformation ne s’arrête pas à la lecture du réel. La
            démarche accompagne les dirigeants dans la traduction des enseignements
            en trajectoire, en priorités de transformation, en gouvernance de
            pilotage et en actions concrètes.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li>
              <Link to="/accompagnement-transformation-ia/" className="inline-flex items-center gap-2 text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier">
                Accompagner une transformation par l’IA <span aria-hidden>→</span>
              </Link>
            </li>
            <li>
              <Link to="/accompagnement-reorganisation/" className="inline-flex items-center gap-2 text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier">
                Accompagner une réorganisation <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute bottom-5 left-4 top-5 w-px bg-gradient-to-b from-hairline via-ice-blue/40 to-ice-blue/80 sm:bottom-auto sm:left-5 sm:right-5 sm:top-5 sm:h-px sm:w-auto sm:bg-gradient-to-r"
            />
            <ol className="relative grid gap-7 sm:grid-cols-5 sm:gap-3">
            {CHAIN.map((step, i) => {
              const Icon = step.icon;
              return (
              <li key={step.label} className="flex min-w-0 items-center gap-4 sm:flex-col sm:items-start sm:gap-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ice-blue/40 bg-surface font-display text-[10px] text-ice-blue shadow-soft"
                >
                  <Icon strokeWidth={1.25} className="h-4 w-4" />
                </span>
                <span className="min-w-0 font-display text-sm font-medium leading-snug text-glacier/90 sm:text-xs lg:text-sm">
                  {step.label}
                </span>
              </li>
              );
            })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 6 — Livrables
   ========================================================= */
const DELIVERABLES = [
  {
    title: "Lecture de maturité pré-transformation",
    text: "État réel de l’organisation au regard de la transformation envisagée.",
  },
  {
    title: "Écarts de perception",
    text: "Mise en évidence des décalages entre niveaux, fonctions et récits internes.",
  },
  {
    title: "Appuis et fragilités structurantes",
    text: "Ce qui peut porter le mouvement — et ce qui le fragiliserait s’il était engagé en l’état.",
  },
  {
    title: "Priorités de sécurisation",
    text: "Les points à consolider avant tout engagement, sans verser dans le plan de transformation.",
  },
  {
    title: "Feuille de route de transformation",
    text: "Une trajectoire pilotable : chantiers, priorités, séquencement.",
  },
  {
    title: "Gouvernance de pilotage",
    text: "Les instances, rôles et rythmes qui tiennent la transformation dans la durée.",
  },
  {
    title: "Accompagnement de mise en œuvre",
    text: "Un soutien à l’exécution, ajusté à ce qui bouge, résiste ou se diffuse.",
  },
  {
    title: "Points de réévaluation",
    text: "Des temps de lecture intermédiaires pour mesurer l’avancement réel et réajuster.",
  },
];

const DeliverablesSection = () => (
  <section id="livrables" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">05 — Livrables</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Ce que la démarche met entre vos mains.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Des livrables sobres, exploitables en comité exécutif, conçus pour
          éclairer une décision et tenir une trajectoire — pas pour décorer.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {DELIVERABLES.map((d, i) => (
          <article key={d.title} className="premium-card p-7">
            <div className="flex items-baseline justify-between">
              <span className="step-number text-[11px]">
                {String(i + 1).padStart(2, "0")} / {String(DELIVERABLES.length).padStart(2, "0")}
              </span>
              <span aria-hidden className="h-px w-8 bg-ice-blue/40" />
            </div>
            <h3 className="mt-7 font-display text-base font-medium leading-snug text-glacier">
              {d.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
          </article>
        ))}
      </div>

      {/* Six familles de signaux + sortie décisionnelle */}
      <div className="mt-12 grid gap-6 rounded-2xl border border-hairline bg-surface p-8 lg:grid-cols-2 lg:p-10">
        <div>
          <p className="eyebrow">Signaux rendus visibles</p>
          <p className="mt-5 text-sm leading-relaxed tracking-wide text-glacier/85">
            Identité vécue <span className="text-ice-blue/60">·</span> Cohérence{" "}
            <span className="text-ice-blue/60">·</span> Coopération{" "}
            <span className="text-ice-blue/60">·</span> Changement{" "}
            <span className="text-ice-blue/60">·</span> Sens &amp; énergie{" "}
            <span className="text-ice-blue/60">·</span> Maturité
          </p>
        </div>
        <div>
          <p className="eyebrow">Sortie décisionnelle</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Le diagnostic ne produit pas une note : il ouvre une décision.
            Passage direct, passage avec précautions, travaux complémentaires ou
            recadrage.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 7 — Contact / closing
   ========================================================= */
const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mesure d'audience : signale l'arrivée sur la section Contact (une fois).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackEvent(ANALYTICS_EVENTS.CONTACT_VIEW);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
  <section id="contact" ref={sectionRef} className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-40">
      <p className="eyebrow justify-center">07 — Contact</p>

      <h2 className="mt-8 font-display text-3xl font-light leading-[1.2] text-glacier sm:text-4xl lg:text-[44px]">
        Avant d’engager une transformation, il faut savoir si le terrain peut la
        porter — puis construire la trajectoire qui permettra de la tenir.
      </h2>

      <div className="mx-auto mt-12 h-px w-24 bg-ice-blue/50" />

      <a
        href={MAILTO}
        onClick={() => trackEvent(ANALYTICS_EVENTS.EMAIL_CLICK)}
        className="mt-12 inline-block font-display text-lg text-ice-blue transition-colors hover:text-glacier"
      >
        {CONTACT_EMAIL}
      </a>

      <div className="mt-10">
        <a
          href={MAILTO}
          onClick={() => trackEvent(ANALYTICS_EVENTS.CTA_CONTACT)}
          className="inline-flex items-center gap-3 rounded-full bg-petrol px-8 py-3.5 text-sm font-medium tracking-wide text-glacier shadow-soft transition-all hover:bg-petrol/90"
        >
          Demander un échange confidentiel
          <span aria-hidden>→</span>
        </a>
      </div>

      <p className="mt-14 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
        Site complet en préparation
      </p>
    </div>
  </section>
  );
};

