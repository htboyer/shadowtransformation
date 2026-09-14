import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DeliverableViewerProps = {
  title: string;
  description: string;
  pages: string[];
  label: string;
  trigger: ReactNode;
};

const DeliverableViewer = ({ title, description, pages, label, trigger }: DeliverableViewerProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const total = pages.length;
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) setIndex(0);
  }, [open]);

  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.querySelector<HTMLElement>(`[data-page="${index}"]`);
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  const go = (next: number) => setIndex(Math.min(total - 1, Math.max(0, next)));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(index + 1);
          if (event.key === "ArrowLeft") go(index - 1);
        }}
        className="flex max-h-[94vh] w-[96vw] max-w-5xl flex-col gap-0 overflow-hidden border-hairline bg-background p-0 shadow-soft"
      >
        <DialogHeader className="space-y-2 border-b border-hairline px-5 py-5 pr-12 text-left sm:px-7">
          <DialogTitle className="font-display text-lg font-medium text-glacier sm:text-xl">{title}</DialogTitle>
          <DialogDescription className="text-xs leading-relaxed sm:text-sm">{description}</DialogDescription>
        </DialogHeader>

        <div className="relative flex-1 overflow-y-auto bg-card/40 px-4 py-6 sm:px-8">
          <img
            key={pages[index]}
            src={pages[index]}
            alt={`${label} — page ${index + 1} sur ${total}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
            className="mx-auto w-full max-w-3xl rounded-lg border border-hairline bg-background object-contain select-none"
          />
        </div>

        <div className="border-t border-hairline bg-background px-4 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              className="border-ice-blue/30 bg-transparent text-glacier hover:bg-secondary"
            >
              <ChevronLeft aria-hidden className="h-4 w-4" />
              <span className="hidden sm:inline">Précédent</span>
            </Button>
            <p aria-live="polite" className="font-display text-xs tracking-[0.18em] text-muted-foreground sm:text-sm">
              Page {index + 1} / {total}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => go(index + 1)}
              disabled={index === total - 1}
              className="border-ice-blue/30 bg-transparent text-glacier hover:bg-secondary"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight aria-hidden className="h-4 w-4" />
            </Button>
          </div>

          <div ref={thumbsRef} className="mt-4 hidden gap-2 overflow-x-auto pb-1 sm:flex">
            {pages.map((page, pageIndex) => (
              <button
                key={page}
                type="button"
                data-page={pageIndex}
                onClick={() => go(pageIndex)}
                aria-label={`Aller à la page ${pageIndex + 1}`}
                aria-current={pageIndex === index}
                className={`h-14 w-11 shrink-0 overflow-hidden rounded border transition-colors ${
                  pageIndex === index ? "border-ice-blue/70" : "border-hairline hover:border-ice-blue/40"
                }`}
              >
                <img
                  src={page}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top opacity-80"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliverableViewer;
