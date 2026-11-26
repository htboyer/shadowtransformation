import { CONTACT_EMAIL } from "@/lib/site";

export const TOOLS_PATH = "/outils/";
export const BIDCROSSCHECK_PATH = "/outils/bidcrosscheck/";
export const BIDCROSSCHECK_PDF = "/telechargements/BidCrossCheck_Rapport_composite.pdf";
export const CREDIT_PACKS = [1, 10, 25, 50] as const;
export type CreditPack = (typeof CREDIT_PACKS)[number];
export const BIDCROSSCHECK = {
  experienceYears: 17,
  trialCredits: 1,
  accountScopes: ["BE", "département"],
  sharedCounter: true,
} as const;

export const TOOL_CATALOGUE = [
  {
    name: "M1 Diagnostic",
    status: "Commande après validation",
    description: "Le module Diagnostic de la gamme M1 / M2 sera disponible à la commande après sa validation. Son offre n’est pas ouverte ici à ce stade.",
  },
  {
    name: "M2 Lecture organisationnelle et élan vital",
    status: "Commande après validation",
    description: "M2 sera disponible à la commande après sa propre validation. Autonome, il pourra être commandé et utilisé indépendamment de M1. Son offre n’est pas ouverte ici à ce stade.",
  },
  {
    name: "Résonance",
    status: "En finalisation",
    description: "Résonance est en cours de finalisation. Son offre n’est pas encore ouverte à la commande ici.",
  },
  {
    name: "Livrets IA et moi",
    status: "Publications · commande non ouverte ici",
    description: "Les livrets IA et moi complètent les publications de Shadow Transformation. Les informations de commande seront précisées ultérieurement.",
  },
] as const;

const emailLink = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const introduction = "Bonjour,\n\nBE ou département : [à préciser]\nNom et fonction : [à préciser]\n";

export const KIT_MAILTO = emailLink(
  "BidCrossCheck — Demande du kit et du guide DSI",
  `${introduction}\nJe souhaite recevoir le kit BidCrossCheck et le guide DSI pour préparer l’installation et l’analyse sur le serveur de notre BE.\n\nJe ne transmets aucune pièce d’offre dans ce courriel.\n\nCordialement,`,
);

export const TRIAL_MAILTO = emailLink(
  "BidCrossCheck — Demande de mon crédit d’essai",
  `${introduction}\nJe souhaite demander mon crédit d’essai BidCrossCheck pour notre compte BE ou département, avec compteur partagé.\n\nAprès installation, je joins à ce courriel le fichier demande.json généré lors de l’installation. Si l’installation n’est pas encore faite, je demande d’abord le kit et le guide DSI, puis je reviens avec demande.json.\n\nAucune pièce d’offre à transmettre : je ne joins ni TDR, ni méthodologie, ni planning, ni CV, ni offre financière, ni devis interne.\n\nCordialement,`,
);

export const orderMailto = (credits: CreditPack) => emailLink(
  `BidCrossCheck — Commande de ${credits} crédit${credits > 1 ? "s" : ""}`,
  `${introduction}\nJe souhaite commander ${credits} crédit${credits > 1 ? "s" : ""} BidCrossCheck pour notre compte BE ou département, avec compteur partagé. Merci de me communiquer le prix et les modalités de commande.\n\nJe ne transmets aucune pièce d’offre dans ce courriel.\n\nCordialement,`,
);