import { useState } from "react";
import { Download, ExternalLink, Play } from "lucide-react";
import poster from "@/assets/presentation/youtube-poster.jpg";
import presentationVideo from "../assets/presentation/shadow-transformation-presentation.mp4.asset.json";
import { Button } from "@/components/ui/button";

const VIDEO_URL = "https://youtu.be/qc8XGnFqrIU";
const EMBED_URL = "https://www.youtube-nocookie.com/embed/qc8XGnFqrIU?autoplay=1&playsinline=1&rel=0";

// Fiche PDF : résolue depuis le fichier exact hébergé sur le site. MP4 : asset CDN externe.
const resources = import.meta.glob([
  "../assets/presentation/shadow-transformation-fiche-presentation.pdf",
], {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const downloads = [
  {
    path: "../assets/presentation/shadow-transformation-fiche-presentation.pdf",
    filename: "shadow-transformation-fiche-presentation.pdf",
    label: "Télécharger la fiche de présentation (PDF)",
  },
  {
    path: "../assets/presentation/shadow-transformation-presentation.mp4",
    filename: "shadow-transformation-presentation.mp4",
    label: "Télécharger la vidéo (MP4)",
  },
]
  .map(({ path, ...rest }) => ({
    ...rest,
    url: path.endsWith(".mp4") ? presentationVideo.url : resources[path],
  }))
  .filter(({ url }) => Boolean(url));

const PresentationSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="presentation" aria-labelledby="presentation-title" className="scroll-mt-24 border-b border-hairline/60">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <p className="eyebrow">Présentation</p>
        <h2 id="presentation-title" className="mt-6 font-display text-3xl font-light leading-tight text-glacier lg:text-4xl">
          Découvrir la démarche en vidéo
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          Comprendre le rôle du diagnostic de maturité et les étapes d’un accompagnement de transformation.
        </p>

        <div className={`mt-10 grid items-start gap-8 lg:gap-10 ${downloads.length > 0 ? "lg:grid-cols-[minmax(0,1.7fr)_minmax(240px,0.7fr)]" : "max-w-4xl lg:grid-cols-1"}`}>
          <div>
            <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface">
              {playing ? (
                <iframe
                  src={EMBED_URL}
                  title="Présentation vidéo de Shadow Transformation sur YouTube"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <>
                  <img src={poster} alt="Aperçu de la présentation Shadow Transformation" className="absolute inset-0 h-full w-full object-cover" width="1280" height="720" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/25">
                    <Button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="Lire la vidéo (YouTube)"
                      className="h-16 w-16 rounded-full border border-ice-blue/50 bg-background/85 text-glacier shadow-soft hover:bg-petrol focus-visible:ring-ice-blue"
                      title="Lire la vidéo (YouTube)"
                    >
                      <Play aria-hidden className="!h-6 !w-6 fill-current" />
                    </Button>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <p className="text-muted-foreground">Le lecteur YouTube se charge à votre demande.</p>
              <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ice-blue underline underline-offset-4 transition-colors hover:text-glacier">
                Voir sur YouTube <ExternalLink aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>

          {downloads.length > 0 && (
            <aside aria-label="Ressources de présentation" className="border-t border-hairline pt-6 lg:border-t-0 lg:border-l lg:py-2 lg:pl-8">
              <p className="font-display text-sm font-medium text-glacier">Documents de présentation</p>
              <div className="mt-5 flex flex-col items-start gap-3">
                {downloads.map(({ path, filename, label }) => (
                  <Button key={path} asChild variant="outline" className="h-auto max-w-full whitespace-normal border-ice-blue/35 bg-transparent px-4 py-3 text-left text-glacier hover:bg-secondary">
                    <a href={resources[path]} download={filename}>
                      <Download aria-hidden className="h-4 w-4" /> {label}
                    </a>
                  </Button>
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;