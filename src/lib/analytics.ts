/**
 * Mesure d'audience — Shadow Transformation
 * ------------------------------------------
 * Suivi discret, compatible site statique, sans compteur public.
 * Conçu pour Plausible (recommandé) ou Umami.
 *
 * INSTALLATION :
 * 1. Créer un compte Plausible (plausible.io) ou Umami (umami.is).
 * 2. Dans index.html, décommenter le bloc « MESURE D'AUDIENCE » et
 *    renseigner l'identifiant du site (domaine Plausible ou
 *    data-website-id Umami).
 * 3. Les événements ci-dessous remontent alors automatiquement :
 *    - « CTA — Échange confidentiel (header) »
 *    - « CTA — Échange confidentiel (hero) »
 *    - « CTA — Échange confidentiel (contact) »
 *    - « Clic email »
 *    - « Vue section Contact »
 *
 * Renseigner ici l'identifiant Plausible / Umami une fois le compte créé.
 *
 * Aucune identification individuelle : suivi d'audience et
 * d'intentions uniquement (visites, visiteurs uniques, sources,
 * pages vues, clics CTA, consultation de la section Contact).
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

export const ANALYTICS_EVENTS = {
  CTA_HEADER: "CTA — Échange confidentiel (header)",
  CTA_HERO: "CTA — Échange confidentiel (hero)",
  CTA_CONTACT: "CTA — Échange confidentiel (contact)",
  EMAIL_CLICK: "Clic email",
  CONTACT_VIEW: "Vue section Contact",
} as const;

/** Envoie un événement à Plausible ou Umami si le script est chargé. */
export function trackEvent(event: string): void {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event);
    window.umami?.track(event);
  } catch {
    /* La mesure d'audience ne doit jamais bloquer l'expérience. */
  }
}
