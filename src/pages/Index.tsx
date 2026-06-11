/**
 * Shadow Transformation — Landing page statique premium
 * ------------------------------------------------------
 * Page unique, 6 sections clairement identifiables et modifiables.
 * Chaque section est encapsulée dans son propre composant, juste en dessous.
 *
 *   1. <HeroSection />          → Section 1 : Hero
 *   2. <ProblemSection />       → Section 2 : Le problème
 *   3. <ApproachSection />      → Section 3 : L'approche (4 temps)
 *   4. <ModuleOneSection />     → Section 4 : Module 1
 *   5. <DeliverablesSection />  → Section 5 : Ce que le client obtient
 *   6. <ContactSection />       → Section 6 : Contact / closing
 *
 * Pour modifier le texte d'une section, éditer directement le composant
 * correspondant ci-dessous. Les styles globaux vivent dans src/index.css
 * (design system : couleurs, typo, cartes, filets).
 */

import logo from "@/assets/logo-mark.png";

const CONTACT_EMAIL = "contact@shadowtransformation.fr";
const MAILTO = `mailto:${CONTACT_EMAIL}`;

const LOGO_URL = "/__l5e/assets-v1/f1e9f10d-38a0-46a9-88ee-149bcc44b77b/shadow-transformation-logo.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Watermark / arrière-plan rappelant le logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute right-[-10%] top-[8%] h-[70vh] w-[70vh] opacity-[0.07]"
          style={{
            backgroundImage: `url(${LOGO_URL})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute left-[-15%] top-[55%] h-[55vh] w-[55vh] opacity-[0.05]"
          style={{
            backgroundImage: `url(${LOGO_URL})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute -left-40 -bottom-40 h-[60vh] w-[60vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--petrol) / 0.22), transparent 70%)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-[60vh] w-[60vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--ice-blue) / 0.14), transparent 70%)",
          }}
        />
      </div>
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
   Navigation simple, ancres internes
   ========================================================= */
const NAV = [
  { href: "#approche", label: "Approche" },
  { href: "#module-1", label: "Diagnostic de maturité" },
  { href: "#livrables", label: "Ce que vous obtenez" },
  { href: "#contact", label: "Contact" },
];

const SiteNav = () => (
  <header className="sticky top-0 z-40 border-b border-hairline/60 bg-abyss/70 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
      <a href="#top" className="group flex items-center gap-3" aria-label="Shadow Transformation — Accueil">
        <img
          src={logo}
          alt="Shadow Transformation"
          width={48}
          height={48}
          className="h-10 w-10 object-contain transition-opacity group-hover:opacity-90"
        />
        <span className="hidden leading-none sm:flex sm:flex-col">
          <span className="font-display text-base font-semibold tracking-tight text-glacier">
            Shadow
          </span>
          <span className="mt-1 font-display text-[11px] font-light tracking-[0.22em] text-ice-blue">
            TRANSFORMATION<sup className="ml-0.5 text-[8px]">©</sup>
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
        className="md:hidden rounded-full border border-ice-blue/40 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-glacier transition-colors hover:border-ice-blue hover:bg-ice-blue/10"
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
      style={{ background: "linear-gradient(90deg, transparent, hsl(var(--ice-blue) / 0.4), transparent)" }}
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
        Shadow Transformation<sup className="ml-0.5 text-[0.6em]">©</sup> aide à objectiver la maturité pré-transformation,
        à lire les écarts de perception et à identifier les travaux préparatoires
        avant engagement.
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

      {/* Bloc de synthèse premium */}
      <div className="mt-20 max-w-3xl border-l border-ice-blue/40 pl-6">
        <p className="font-display text-lg font-light leading-relaxed text-glacier/90 lg:text-xl">
          Lire le réel. <span className="text-muted-foreground">·</span> Objectiver les écarts.{" "}
          <span className="text-muted-foreground">·</span> Décider lucidement.
        </p>
      </div>
    </div>

    {/* Filet de fin de hero */}
    <div className="hairline mx-auto max-w-6xl" />
  </section>
);

/* =========================================================
   SECTION 2 — Le problème
   ========================================================= */
const PROBLEMS = [
  "Lancer trop vite, sans avoir lu le terrain.",
  "Confondre intention de transformation et maturité réelle de l’organisation.",
  "Engager une transformation sans que les conditions minimales soient réunies.",
  "Sous-estimer les écarts de perception et les fragilités structurantes.",
];

const ProblemSection = () => (
  <section id="probleme" className="relative">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">01 — Le problème</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Les transformations échouent souvent avant même d’avoir commencé.
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
  <section id="approche" className="relative border-t border-hairline/60 bg-night/40">
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

      {/* Progression visuelle sobre */}
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
   SECTION 4 — Module 1
   ========================================================= */
const MODULE_ONE_POINTS = [
  "Diagnostic pré-transformation",
  "Lecture de maturité",
  "Écarts de perception",
  "Voix de l’organisation",
  "Travaux préparatoires avant engagement",
  "Décision de sortie",
];

const ModuleOneSection = () => (
  <section id="module-1" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">03 — Diagnostic</p>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
            Découvrez notre module de diagnostic de maturité.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Le Module 1 est conçu comme un préalable rigoureux : il instruit la
            décision, il ne la précipite pas.
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

      {/* Sous-bloc très visible : ce que le module 1 n'est pas */}
      <div className="mt-16 rounded-2xl border border-ice-blue/30 bg-[hsl(var(--petrol)/0.08)] p-8 lg:p-12">
        <p className="eyebrow text-ice-blue">Cadre du diagnostic</p>
        <p className="mt-5 font-display text-xl font-light leading-relaxed text-glacier lg:text-2xl">
          Ce module ne produit pas le plan détaillé de transformation. Il
          permet de décider si les conditions sont réunies pour engager la
          suite, et ce qu’il faut rendre suffisamment mûr avant cela.
        </p>
      </div>
    </div>
  </section>
);

/* =========================================================
   SECTION 5 — Ce que le client obtient
   ========================================================= */
const DELIVERABLES = [
  { title: "Lecture de maturité", text: "État réel de l’organisation au regard de la transformation envisagée." },
  { title: "Écarts de perception", text: "Mise en évidence des décalages entre niveaux, fonctions et récits internes." },
  { title: "Appuis et fragilités structurantes", text: "Identification de ce qui peut porter le mouvement, et de ce qui le fragiliserait." },
  { title: "Travaux préparatoires", text: "Liste précise des chantiers à mener avant tout engagement de transformation." },
  { title: "Décision instruite", text: "Passage, temporisation ou préparation : trois issues claires, argumentées, assumées." },
];

const DeliverablesSection = () => (
  <section id="livrables" className="relative border-t border-hairline/60 bg-night/40">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">04 — Ce que vous obtenez</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Ce qui vous est remis.
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
              <span className="step-number text-[11px]">{String(i + 1).padStart(2, "0")} / {String(DELIVERABLES.length).padStart(2, "0")}</span>
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
   Pied de page : domaines + mentions discrètes
   ========================================================= */
const SiteFooter = () => (
  <footer className="border-t border-hairline/60 bg-abyss">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs text-muted-foreground/80 md:flex-row md:items-center lg:px-10">
      <div className="flex items-center">
        <div className="rounded-md bg-white p-2">
          <img
            src="/__l5e/assets-v1/f1e9f10d-38a0-46a9-88ee-149bcc44b77b/shadow-transformation-logo.png"
            alt="Shadow Transformation"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 tracking-wide">
        <span>www.shadowtransformation.fr</span>
        <span aria-hidden className="hidden h-3 w-px bg-hairline md:inline-block" />
        <span>www.shadowtransformation.com</span>
      </div>
      <div>© {new Date().getFullYear()}</div>
    </div>
  </footer>
);
