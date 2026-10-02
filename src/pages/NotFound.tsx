import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/ContentLayout";

const NotFound = () => (
  <SiteShell>
    <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
      <p className="eyebrow justify-center">Erreur 404</p>
      <h1 className="mt-6 font-display text-3xl font-light text-glacier lg:text-4xl">Page introuvable</h1>
      <p className="mt-6 text-base text-muted-foreground">Cette page n’existe pas ou a été déplacée.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
        <a href="/" className="text-ice-blue underline underline-offset-4 hover:text-glacier">Retour à l’accueil</a>
        <Link to="/regards/" className="text-ice-blue underline underline-offset-4 hover:text-glacier">Regards sur la transformation</Link>
      </div>
    </div>
  </SiteShell>
);

export default NotFound;
