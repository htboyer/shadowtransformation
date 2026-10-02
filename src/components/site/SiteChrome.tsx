import { Link } from "react-router-dom";
import logo from "@/assets/logo-mark.png";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { CONTACT_EMAIL, LINKEDIN_COMPANY, LINKEDIN_HUGUES, MAILTO } from "@/lib/site";

/* Arrière-plan : nappes lumineuses + courbes "fantômes" inspirées du logo */
export const PageBackdrop = () => (
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
      <path
        d="M -100 1300 C 500 1100, 1100 1400, 1800 1180"
        stroke="url(#orbitB)"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M -200 2050 C 400 1800, 1100 1900, 1800 1700"
        stroke="url(#orbitA)"
        strokeWidth="1"
        opacity="0.35"
      />

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

/* Navigation — `home` : liens d'ancre locaux ; sinon retour vers l'accueil */
const NAV = [
  { anchor: "approche", label: "Approche" },
  { anchor: "modules", label: "Modules" },
  { anchor: "accompagnement", label: "Accompagnement" },
  { anchor: "livrables", label: "Livrables" },
];

export const SiteNav = ({ home = false }: { home?: boolean }) => {
  const a = (id: string) => (home ? `#${id}` : `/#${id}`);
  const linkClass = "text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-glacier";
  return (
  <header className="sticky top-0 z-40 border-b border-hairline/50 bg-background/75 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 lg:px-10 lg:py-6">
      <a
        href={home ? "#top" : "/"}
        className="group flex shrink-0 items-center gap-4"
        aria-label="Shadow Transformation — Accueil"
      >
        <img
          src={logo}
          alt="Shadow Transformation"
          width={56}
          height={56}
          className="h-12 w-12 object-contain drop-shadow-[0_2px_12px_hsl(202_56%_59%/0.35)] transition-opacity group-hover:opacity-95 lg:h-14 lg:w-14"
        />
        <span className="hidden leading-none sm:flex sm:flex-col lg:hidden xl:flex">
          <span className="font-display text-lg font-semibold tracking-tight text-glacier lg:text-xl">
            Shadow
          </span>
          <span className="mt-1.5 font-display text-[12px] font-medium uppercase tracking-[0.28em] text-ice-blue lg:text-[13px]">
            Transformation
          </span>
        </span>
      </a>
      <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex xl:gap-7">
        {NAV.map((item) => (
          <a key={item.anchor} href={a(item.anchor)} className={linkClass}>
            {item.label}
          </a>
        ))}
        <Link to="/regards/" className={linkClass}>
          Regards
        </Link>
        <a href={a("contact")} className={linkClass}>
          Contact
        </a>
        <a
          href={MAILTO}
          onClick={() => trackEvent(ANALYTICS_EVENTS.CTA_HEADER)}
          className="whitespace-nowrap rounded-full border border-ice-blue/40 px-4 py-2 text-xs font-medium tracking-[0.14em] text-glacier transition-colors hover:border-ice-blue hover:bg-ice-blue/10"
        >
          ÉCHANGE CONFIDENTIEL
        </a>
      </nav>
      <div className="flex items-center gap-4 lg:hidden">
        <Link to="/regards/" className="text-[12px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-glacier">
          Regards
        </Link>
        <a
          href={MAILTO}
          onClick={() => trackEvent(ANALYTICS_EVENTS.CTA_HEADER)}
          className="rounded-full border border-ice-blue/40 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-glacier transition-colors hover:border-ice-blue hover:bg-ice-blue/10"
        >
          CONTACT
        </a>
      </div>
    </div>
  </header>
  );
};

/* Pied de page : épuré, cohérent avec le header */
export const SiteFooter = ({ home = false }: { home?: boolean }) => (
  <footer className="border-t border-hairline/60 bg-background/60">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs text-muted-foreground/80 md:flex-row md:items-center lg:px-10">
      <a href={home ? "#top" : "/"} className="flex items-center gap-3" aria-label="Shadow Transformation">
        <img
          src={logo}
          alt="Shadow Transformation"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <span className="font-display text-[11px] uppercase tracking-[0.28em] text-ice-blue">
          Shadow Transformation
        </span>
      </a>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 tracking-wide">
        <a
          href={MAILTO}
          onClick={() => trackEvent(ANALYTICS_EVENTS.EMAIL_CLICK)}
          className="transition-colors hover:text-glacier"
        >
          {CONTACT_EMAIL}
        </a>
        <span aria-hidden className="hidden h-3 w-px bg-hairline md:inline-block" />
        <a href={LINKEDIN_COMPANY} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-glacier">
          Shadow Transformation sur LinkedIn
        </a>
        <a href={LINKEDIN_HUGUES} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-glacier">
          Hugues Temple-Boyer
        </a>
        <span aria-hidden className="hidden h-3 w-px bg-hairline md:inline-block" />
        <span>shadowtransformation.fr</span>
      </div>
      <div>{new Date().getFullYear()}</div>
    </div>
  </footer>
);
