import founderPhoto from "@/assets/founder.jpg";

/* =========================================================
   SECTION — À propos du fondateur
   Encart premium, placé juste avant le Contact final.
   ========================================================= */
const FOUNDER_TAGS_1 = [
  "25+ ans d’expérience",
  "50+ contextes pays",
  "Public",
  "Santé",
  "Éducation",
  "Entreprise",
];

const FOUNDER_TAGS_2 = [
  "Transformation & change",
  "Leadership",
  "Stratégie",
  "Facilitation",
  "IA raisonnée",
];

const FounderSection = () => (
  <section id="fondateur" className="relative border-t border-hairline/60">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">06 — À propos du fondateur</p>
        <h2 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Une approche née du terrain.
        </h2>
      </div>

      <div className="premium-card mt-14 grid gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
        {/* Photo — cadrage portrait, fond neutre conservé */}
        <div className="lg:col-span-4">
          <figure className="relative mx-auto max-w-xs lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, hsl(var(--ice-blue) / 0.12), transparent 70%)",
              }}
            />
            <img
              src={founderPhoto}
              alt="Portrait de Hugues Temple-Boyer, fondateur de Shadow Transformation"
              width={480}
              height={560}
              loading="lazy"
              className="relative aspect-[6/7] w-full rounded-2xl border border-hairline object-cover object-top"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
            <figcaption className="mt-5 text-center lg:text-left">
              <p className="font-display text-lg font-medium text-glacier">
                Hugues Temple-Boyer
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ice-blue">
                Fondateur de Shadow Transformation
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Texte */}
        <div className="flex flex-col justify-center lg:col-span-8">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground lg:text-base">
            <p>
              Hugues Temple-Boyer a construit son approche de la transformation à
              partir de plus de vingt-cinq ans d’expérience auprès d’organisations
              publiques, privées, sanitaires, éducatives et institutionnelles,
              dans plus de cinquante contextes pays.
            </p>
            <p>
              Son parcours croise direction de business unit, pilotage de
              portefeuilles complexes, accompagnement d’institutions en mutation
              et management d’équipes dans des environnements exigeants, parfois
              fragiles ou profondément transformés.
            </p>
            <p>
              De cette expérience est né un constat simple : dans les
              transformations, le réel est souvent sous-lu. Les écarts de
              perception, la fatigue organisationnelle, les relais managériaux
              fragiles et les conditions concrètes d’exécution sont trop souvent
              identifiés trop tard.
            </p>
            <p className="text-glacier/90">
              Shadow Transformation a été conçu pour répondre à cet angle mort :
              aider les dirigeants à mieux lire le terrain, objectiver les
              écarts, sécuriser leurs décisions et construire des trajectoires de
              transformation crédibles, pilotables et accompagnées.
            </p>
          </div>

          {/* Micro-tags sobres — continuité avec la ligne de crédibilité du hero */}
          <div className="mt-10 space-y-3 border-t border-hairline/70 pt-8">
            <p className="text-xs leading-relaxed tracking-[0.08em] text-muted-foreground/80">
              {FOUNDER_TAGS_1.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && <span className="text-ice-blue/50">{" · "}</span>}
                  {tag}
                </span>
              ))}
            </p>
            <p className="text-xs leading-relaxed tracking-[0.08em] text-muted-foreground/60">
              {FOUNDER_TAGS_2.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && <span className="text-ice-blue/40">{" · "}</span>}
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
