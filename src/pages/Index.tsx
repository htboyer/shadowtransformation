/**
 * Shadow Transformation — Landing page premium (V2)
 * --------------------------------------------------
 * Page unique, 6 sections clairement identifiables et modifiables.
 *
 *   1. <HeroSection />          → Section 1 : Hero
 *   2. <ProblemSection />       → Section 2 : Le problème
 *   3. <ApproachSection />      → Section 3 : L'approche (4 temps)
 *   4. <ModuleOneSection />     → Section 4 : Diagnostic
 *   5. <DeliverablesSection />  → Section 5 : Ce que le diagnostic rend possible
 *   6. <ContactSection />       → Section 6 : Contact / closing
 */

import logo from "@/assets/logo-mark.png";

const CONTACT_EMAIL = "contact@shadowtransformation.fr";
const MAILTO = `mailto:${CONTACT_EMAIL}`;

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <PageBackdrop />
      <div className="relative z-10">
        <SiteNav />
        <main>
          <HeroSection />
          <ProblemSection />
          <ApproachSection />
          <ModuleOneSection />
          <DeliverablesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default Index;

/* =========================================================
   Arrière-plan : nappes lumineuses + courbes "fantômes"
   inspirées du langage graphique du logo
   ========================================================= */
const PageBackdrop = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    style={{ background: "var(--gradient-page)" }}
  >
    {/* Halo haut-droit (ascendance) */}
    <div
      className="absolute -right-40 -top-32 h-[70vh] w-[70vh] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--ice-blue) / 0.16), transparent 65%)",
      }}
    />
    {/* Halo bas-gauche (profondeur) */}
    <div
      className="absolute -left-48 top-[55%] h-[65vh] w-[65vh] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--petrol) / 0.22), transparent 70%)",
      }}
    />

    {/* Orbites / courbes ascendantes inspirées du logo */}
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 2400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="orbitA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(202 56% 59%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(202 56% 59%)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(202 56% 59%)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="orbitB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(199 84% 50%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(199 84% 50%)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="hsl(199 84% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Orbite ascendante (zone hero) */}
      <path
        d="M -200 700 C 300 350, 900 250, 1700 520"
        stroke="url(#orbitA)"
        strokeWidth="1"
        opacity="0.55"
      />
      <path
        d="M -200 780 C 350 430, 950 330, 1700 600"
        stroke="url(#orbitA)"
        strokeWidth="1"
        opacity="0.30"
      />

      {/* Trainée milieu de page */}
      <path
        d="M -100 1300 C 500 1100, 1100 1400, 1800 1180"
        stroke="url(#orbitB)"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Orbite basse */}
      <path
        d="M -200 2050 C 400 1800, 1100 1900, 1800 1700"
        stroke="url(#orbitA)"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Cercles fantômes (rappel symbole) */}
      <circle
        cx="1320"
        cy="380"
        r="280"
        stroke="hsl(202 56% 59%)"
        strokeOpacity="0.10"
        strokeWidth="1"
      />
      <circle
        cx="1320"
        cy="380"
        r="380"
        stroke="hsl(202 56% 59%)"
        strokeOpacity="0.06"
        strokeWidth="1"
      />
      <circle
        cx="220"
        cy="1700"
        r="240"
        stroke="hsl(199 84% 50%)"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
    </svg>
  </div>
);

/* =========================================================
   Navigation
   ========================================================= */
const NAV = [
  { href: "#approche", label: "Approche" },
  { href: "#module-1", label: "Diagnostic" },
  { href: "#livrables", label: "Ce que vous obtenez" },
  { href: "#contact", label: "Contact" },
];

const SiteNav = () => (
  <header className="sticky top-0 z-40 border-b border-hairline/50 bg-background/75 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10 lg:py-6">
      <a
        href="#top"
        className="group flex items-center gap-4"
        aria-label="Shadow Transformation — Accueil"
      >
        <img
          src={logo}
          alt="Shadow Transformation"
          width={56}
          height={56}
          className="h-12 w-12 object-contain drop-shadow-[0_2px_12px_hsl(202_56%_59%/0.35)] transition-opacity group-hover:opacity-95 lg:h-14 lg:w-14"
        />
        <span className="hidden leading-none sm:flex sm:flex-col">
          <span className="font-display text-lg font-semibold tracking-tight text-glacier lg:text-xl">
            Shadow
          </span>
          <span className="mt-1.5 font-display text-[12px] font-medium uppercase tracking-[0.28em] text-ice-blue lg:text-[13px]">
            Transformation
            <sup className="ml-0.5 text-[8px] font-normal">©</sup>
          </span>
        </span>
      </a>
      <nav className="hidden items-center gap-8 md:flex lg:gap-10">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-glacier"
          >
            {item.label}
          </a>
        ))}
        <a
          href={MAILTO}
          className="rounded-full border border-ice-blue/40 px-4 py-2 text-xs font-medium tracking-[0.14em] text-glacier transition-colors hover:border-ice-blue hover:bg-ice-blue/10"
        >
          PRENDRE CONTACT
        </a>
      </nav>
      <a
        href={MAILTO}
        className="rounded-full border border-ice-blue/40 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-glacier transition-colors hover:border-ice-blue hover:bg-ice-blue/10 md:hidden"
      >
        CONTACT
      </a>
    </div>
  </header>
);

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
      <p className="text-center font-display text-2xl font-light italic tracking-tight text-glacier sm:text-3xl lg:text-4xl">
        «&nbsp;Passez de l’ombre à la lumière.&nbsp;»
      </p>
      <div className="mx-auto mt-8 h-px w-16 bg-ice-blue/50" aria-hidden />
      <p className="eyebrow mt-8">Cabinet · Transformation</p>

      <h1 className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.1] text-glacier sm:text-5xl lg:text-[64px]">
        Préparer une transformation{" "}
        <span className="text-ice-blue">crédible</span> avant d’aller plus loin.
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
        Shadow Transformation<sup className="ml-0.5 text-[0.6em]">©</sup>{" "}
        instruit la décision de transformation : lecture objective de la
        maturité réelle, écarts de perception entre niveaux, conditions
        minimales d’engagement et travaux à mener avant tout dispositif.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={MAILTO}
          className="group inline-flex items-center gap-3 rounded-full bg-petrol px-7 py-3.5 text-sm font-medium tracking-wide text-glacier shadow-soft transition-all hover:bg-petrol/90 hover:shadow-[0_10px_30px_-10px_hsl(199_84%_32%/0.6)]"
        >
          Prendre contact
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
        <a
          href="#approche"
          className="group inline-flex items-center gap-2 text-sm font-medium text-silver transition-colors hover:text-glacier"
        >
          Découvrir l’approche
          <span aria-hidden className="text-ice-blue transition-transform group-hover:translate-y-0.5">↓</span>
        </a>
      </div>

      <div className="mt-20 max-w-3xl border-l border-ice-blue/40 pl-6">
        <p className="font-display text-lg font-light leading-relaxed text-glacier/90 lg:text-xl">
          Lire le réel. <span className="text-muted-foreground">·</span> Objectiver les écarts.{" "}
          <span className="text-muted-foreground">·</span> Décider lucidement.
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
];

const ProblemSection = () => (
  <section id="probleme" className="relative">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">01 — Le problème</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Beaucoup de transformations échouent avant même d’avoir commencé.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Avant tout dispositif, certaines situations sont à éviter. Elles
            ne relèvent pas du jugement, mais de la lucidité opérationnelle.
          </p>
          <ul className="mt-10 divide-y divide-hairline/70 border-y border-hairline/70">
            {PROBLEMS.map((p, i) => (
              <li key={i} className="flex gap-6 py-5">
                <span className="step-number w-8 shrink-0 text-sm">0{i + 1}</span>
                <span className="text-[15px] leading-relaxed text-glacier/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 3 — L'approche (4 temps)
   ========================================================= */
const STEPS = [
  { n: "I",   title: "Lire",     text: "Observer le réel de l’organisation, sans filtre, sans récit imposé." },
  { n: "II",  title: "Nommer",   text: "Mettre des mots justes sur les écarts, les appuis et les fragilités." },
  { n: "III", title: "Décider",  text: "Établir si les conditions minimales d’engagement sont réunies." },
  { n: "IV",  title: "Préparer", text: "Identifier les travaux préparatoires à mener avant tout dispositif." },
];

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
          Une méthode en quatre temps.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Structurée, séquentielle, refusant le mouvement pour le mouvement.
          Chaque étape conditionne la suivante.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="group relative bg-surface p-8 transition-colors hover:bg-surface-elev"
          >
            <div className="flex items-baseline justify-between">
              <span className="step-number text-xs">{step.n}</span>
              <span aria-hidden className="h-px w-10 bg-ice-blue/40 transition-all group-hover:w-16 group-hover:bg-ice-blue" />
            </div>
            <h3 className="mt-8 font-display text-xl font-medium text-glacier">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 4 — Diagnostic
   ========================================================= */
const MODULE_ONE_POINTS = [
  "Diagnostic pré-transformation",
  "Lecture de maturité",
  "Écarts de perception",
  "Voix de l’organisation",
  "Travaux préparatoires avant engagement",
  "Décision instruite : passage, temporisation, préparation",
];

const ModuleOneSection = () => (
  <section id="module-1" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">03 — Diagnostic</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Décider lucidement, avant d’engager.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Un préalable rigoureux à toute transformation : objectiver la
            maturité réelle, révéler ce qui porte ou fragilise, et instruire la
            décision plutôt que de la précipiter.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {MODULE_ONE_POINTS.map((point, i) => (
              <li key={point} className="flex items-start gap-4 bg-surface p-6">
                <span className="step-number mt-0.5 text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] leading-relaxed text-glacier/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-ice-blue/30 bg-[hsl(var(--petrol)/0.10)] p-8 lg:p-12">
        <p className="eyebrow text-ice-blue">Cadre du diagnostic</p>
        <p className="mt-5 font-display text-xl font-light leading-relaxed text-glacier lg:text-2xl">
          Ce diagnostic ne produit pas le plan de transformation. Il permet de
          décider si les conditions sont réunies pour l’engager — et ce qu’il
          faut rendre suffisamment mûr avant cela.
        </p>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 5 — Ce que le diagnostic rend possible
   ========================================================= */
const DELIVERABLES = [
  {
    title: "Lecture de maturité",
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
    title: "Conditions préalables à réunir",
    text: "Les points de maturité à consolider avant tout engagement, sans verser dans le plan de transformation.",
  },
  {
    title: "Décision instruite",
    text: "Passage, temporisation ou préparation : trois issues claires, argumentées, assumées.",
  },
];

const DeliverablesSection = () => (
  <section
    id="livrables"
    className="relative border-t border-hairline/60"
    style={{
      background:
        "linear-gradient(180deg, hsl(218 60% 11% / 0.55), hsl(218 60% 11% / 0.25))",
    }}
  >
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">04 — Ce que vous obtenez</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Ce que le diagnostic vous permet de décider.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Des livrables sobres, exploitables en comité exécutif, conçus pour
          éclairer une décision — pas pour la décorer.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DELIVERABLES.map((d, i) => (
          <article key={d.title} className="premium-card p-8">
            <div className="flex items-baseline justify-between">
              <span className="step-number text-[11px]">
                {String(i + 1).padStart(2, "0")} / {String(DELIVERABLES.length).padStart(2, "0")}
              </span>
              <span aria-hidden className="h-px w-8 bg-ice-blue/40" />
            </div>
            <h3 className="mt-8 font-display text-lg font-medium leading-snug text-glacier">
              {d.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 6 — Contact / closing
   ========================================================= */
const ContactSection = () => (
  <section id="contact" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-40">
      <p className="eyebrow justify-center">05 — Contact</p>

      <h2 className="mt-8 font-display text-3xl font-light leading-[1.2] text-glacier sm:text-4xl lg:text-[44px]">
        Avant d’engager une transformation, il faut savoir si le terrain peut
        la porter.
      </h2>

      <div className="mx-auto mt-12 h-px w-24 bg-ice-blue/50" />

      <a
        href={MAILTO}
        className="mt-12 inline-block font-display text-lg text-ice-blue transition-colors hover:text-glacier"
      >
        {CONTACT_EMAIL}
      </a>

      <div className="mt-10">
        <a
          href={MAILTO}
          className="inline-flex items-center gap-3 rounded-full bg-petrol px-8 py-3.5 text-sm font-medium tracking-wide text-glacier shadow-soft transition-all hover:bg-petrol/90"
        >
          Prendre contact
          <span aria-hidden>→</span>
        </a>
      </div>

      <p className="mt-14 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
        Site complet en préparation
      </p>
    </div>
  </section>
);

/* =========================================================
   Pied de page : épuré, cohérent avec le header
   ========================================================= */
const SiteFooter = () => (
  <footer className="border-t border-hairline/60 bg-background/60">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs text-muted-foreground/80 md:flex-row md:items-center lg:px-10">
      <a href="#top" className="flex items-center gap-3" aria-label="Shadow Transformation">
        <img
          src={logo}
          alt="Shadow Transformation"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <span className="font-display text-[11px] uppercase tracking-[0.28em] text-ice-blue">
          Shadow Transformation
          <sup className="ml-0.5 text-[7px]">©</sup>
        </span>
      </a>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 tracking-wide">
        <a
          href={MAILTO}
          className="transition-colors hover:text-glacier"
        >
          {CONTACT_EMAIL}
        </a>
        <span aria-hidden className="hidden h-3 w-px bg-hairline md:inline-block" />
        <span>shadowtransformation.fr</span>
      </div>
      <div>© {new Date().getFullYear()}</div>
    </div>
  </footer>
);
