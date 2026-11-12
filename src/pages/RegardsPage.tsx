import { Breadcrumb, SiteShell } from "@/components/site/ContentLayout";
import { ArticleCards } from "@/components/RegardsSection";
import { Brain, Compass, GraduationCap, Layers, MessageSquare, Search, type LucideIcon } from "lucide-react";
import { LINKEDIN_COMPANY, LINKEDIN_HUGUES } from "@/lib/site";
import { REGARDS_SUBTITLE, REGARDS_TITLE } from "@/seo/routes";

const linkClass = "text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier";

type Post = { id: string; icon: LucideIcon; subject: string; date: string; dateLabel: string; title: string; excerpt: string; href: string };

const POSTS: Post[] = [
  { id: "ia-transmission", icon: GraduationCap, subject: "IA et transmission", date: "2026-04-24", dateLabel: "24 avril 2026", title: "Quand l’IA coupe la chaîne de transmission", excerpt: "On parle beaucoup des métiers que l’intelligence artificielle pourrait remplacer. Mais on parle trop peu de ceux qu’elle risque d’empêcher d’apprendre.", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_ia-emploidesjeunes-formation-share-7453444221736448000-Zk7P" },
  { id: "naissance-shadow-transformation", icon: Compass, subject: "La démarche", date: "2026-09-17", dateLabel: "17 septembre 2026", title: "Pourquoi j’ai créé Shadow Transformation", excerpt: "Les transformations échouent rarement faute d’ambition. Elles se fragilisent lorsque l’organisation n’est pas réellement prête à les absorber. Priorités contradictoires, décisions peu alignées, surcharge des équipes, gouvernance floue, décalage entre la stratégie et la réalité du terrain…", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_transformation-changemanagement-leadership-ugcPost-7506334811288985601-Cumf" },
  { id: "ia-humanite", icon: Brain, subject: "IA et humanités", date: "2026-04-24", dateLabel: "24 avril 2026", title: "Comment l’avènement de l’IA va nous contraindre à repenser notre humanité ?", excerpt: "Demain, savoir utiliser une IA sera banal. Savoir lui résister intellectuellement sera rare. C’est pourquoi nous devrons réhabiliter la philosophie, l’histoire, la rhétorique, la littérature, la psychologie, les civilisations, les langues, les sciences sociales. Non par nostalgie. Par nécessité.", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_ia-humanitaezs-philosophie-share-7453430938606317568-9NUz" },
  { id: "manager-feedback", icon: MessageSquare, subject: "Management et accompagnement", date: "2026-09-14", dateLabel: "14 septembre 2026", title: "Accompagner un manager : observer avant de conclure", excerpt: "Quand un manager est en difficulté avec son équipe, l’erreur du coach débutant est souvent de vouloir trop vite identifier « ce qui ne va pas ».", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_coaching-management-leadership-share-7505170221981163520-8z4D" },
  { id: "capacite-transformation", icon: Layers, subject: "Préparer la transformation", date: "2026-09-14", dateLabel: "14 septembre 2026", title: "L’organisation peut-elle réellement absorber la transformation ?", excerpt: "Et si le principal risque d’une transformation n’était pas la stratégie… mais la capacité de l’organisation à l’absorber ? On parle beaucoup de vision, de feuille de route, de digitalisation, d’IA, de réorganisation. Mais beaucoup moins d’une question pourtant décisive : L’organisation est-elle réellement prête à porter ce changement ?", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_transformation-leadership-management-share-7505298333825978370-UXpg" },
  { id: "diagnostic-verdict", icon: Search, subject: "Diagnostic et dialogue", date: "2026-09-14", dateLabel: "14 septembre 2026", title: "Quand le diagnostic devient un verdict", excerpt: "Tous les problèmes observés dans une équipe ne sont pas des problèmes de manager. Certains viennent du manager, d’autres du fonctionnement collectif, d’autres encore des règles, de la gouvernance, de la culture ou des contradictions de l’organisation. Notre travail consiste justement à ne pas confondre trop vite symptôme, cause et responsabilité.", href: "https://www.linkedin.com/posts/hugues-temple-boyer-b44b1926_leadership-coaching-management-share-7505172249700892674-_cTw" },
];

const RegardsPage = () => (
  <SiteShell>
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <Breadcrumb items={[{ label: "Regards" }]} />
      <header className="mt-10 max-w-[70ch]">
        <p className="eyebrow">Analyses</p>
        <h1 className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-[44px]">{REGARDS_TITLE}</h1>
        <p className="mt-6 text-base leading-[1.75] text-muted-foreground lg:text-lg">{REGARDS_SUBTITLE}</p>
        <p className="mt-4 text-sm text-muted-foreground/80">
          Analyses et démarches proposées par Shadow Transformation. Les exemples présentés sont fictifs.
        </p>
        <p className="mt-4 text-sm">
          <a href="#publications-linkedin" className={`${linkClass} rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue`}>
            Voir aussi : publications LinkedIn ↓
          </a>
        </p>
      </header>
      <div className="mt-14">
        <ArticleCards headingLevel="h2" />
      </div>
      <section id="publications-linkedin" aria-labelledby="publications-linkedin-title" className="mt-20 scroll-mt-24">
        <div className="max-w-[70ch]">
          <p className="eyebrow">Publications LinkedIn</p>
          <h2 id="publications-linkedin-title" className="mt-6 font-display text-2xl font-light leading-tight text-glacier lg:text-[34px]">
            Des regards qui prolongent la réflexion
          </h2>
          <p className="mt-6 text-base leading-[1.75] text-muted-foreground">
            Une sélection de publications de Hugues Temple-Boyer sur la transformation, le management et la place de l’humain face à l’IA. Retrouvez ici des extraits de ses textes, puis la publication complète et les échanges sur LinkedIn.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {POSTS.map(({ id, icon: Icon, subject, date, dateLabel, title, excerpt, href }) => (
            <li key={id} id={id} className="flex flex-col border border-border/60 bg-card/40 p-6 lg:p-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon className="h-5 w-5 shrink-0 text-ice-blue" aria-hidden="true" strokeWidth={1.5} />
                <span className="text-ice-blue">{subject}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={date}>{dateLabel}</time>
              </div>
              <h3 className="mt-5 font-display text-xl font-light leading-snug text-glacier">{title}</h3>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-muted-foreground/80">Extrait du texte publié</p>
              <blockquote className="mt-3 border-l border-ice-blue/40 pl-4 text-base leading-[1.75] text-muted-foreground">{excerpt}</blockquote>
              <div className="mt-auto pt-6">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lire la publication complète « ${title} » sur LinkedIn (nouvel onglet)`}
                  className={`${linkClass} inline-block rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                >
                  Lire la publication sur LinkedIn ↗
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[70ch] text-sm text-muted-foreground/80">
          Les textes sont présentés comme des prises de position à leur date de publication. Certains titres ont été raccourcis pour la lecture ; les extraits conservent le propos de leur auteur. Les liens s’ouvrent dans un nouvel onglet.
        </p>
      </section>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <a href={LINKEDIN_COMPANY} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Suivre Shadow Transformation sur LinkedIn ↗
        </a>
        <a href={LINKEDIN_HUGUES} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Suivre Hugues Temple-Boyer sur LinkedIn ↗
        </a>
      </div>
    </div>
  </SiteShell>
);

export default RegardsPage;
