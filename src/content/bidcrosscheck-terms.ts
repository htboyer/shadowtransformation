export const BIDCROSSCHECK_CGV_PATH = "/outils/bidcrosscheck/cgv/";
export const BIDCROSSCHECK_TERMS = {
  version: "2026-11-26",
  draft: true,
  professionalOnly: true,
  trialCredits: 1,
  sameDaoRelaunchIncluded: true,
  issuanceAfterPayment: true,
  explicitAcceptanceRequired: true,
  requestOrDownloadConcludesSale: false,
} as const;

export const BIDCROSSCHECK_TERMS_SECTIONS = [
  {
    title: "1. Objet et périmètre",
    paragraphs: [
      "Le présent document constitue un projet de conditions générales de vente réservé aux clients professionnels pour BidCrossCheck, utilisé via un compte de bureau d’études (BE) ou de département à compteur de crédits partagé. Il ne régit aucun autre produit de Shadow Transformation. L’identité juridique complète de l’éditeur (dénomination, forme, adresse et identifiants) reste à compléter avant publication.",
    ],
  },
  {
    title: "2. Devis et accord explicite",
    paragraphs: [
      "Les prix sont exprimés hors taxes (HT) sur devis, accompagnés des taxes applicables et des conditions particulières avant tout engagement. La version datée des présentes CGV est communiquée avec le devis sous une forme conservable ; l’engagement requiert une acceptation écrite explicite, sans case précochée. Le téléchargement du kit ou un courriel de demande ne conclut aucune vente.",
    ],
  },
  {
    title: "3. Livraison, crédits et règlement",
    paragraphs: [
      "Un crédit d’essai peut être demandé après installation en transmettant le fichier demande.json, sans pièce d’offre. Les crédits payants sont émis après paiement, selon les modalités et délais précisés au devis. La relance sur un même DAO à empreinte DAO/TDR identique est incluse sans nouveau débit ; un rapport bloqué ne consomme pas de crédit, tandis qu’un rapport partiel exploitable est décompté. Les conditions de facturation, d’échéance, d’escompte, de pénalités de retard, d’indemnité de recouvrement, de validité des crédits et de mises à jour sont précisées au devis avant tout engagement.",
    ],
  },
  {
    title: "4. Pièces et couverture",
    paragraphs: [
      "Le client applique le Guide DSI, utilise les formats effectivement traités par son environnement et fournit un dossier complet, à jour et cohérent (DAO/TDR et additifs, mémoire, annexes, CV, plannings, offre financière ; devis interne facultatif uniquement pour le contrôle de marge et le rapprochement). Tableaux, unités, devises et périodes doivent être lisibles. Les scans ou fichiers non reconnus limitent la couverture et nécessitent remplacement puis relance ; l’absence d’alerte ne vaut pas conformité.",
    ],
  },
  {
    title: "5. Confidentialité et sécurité des données",
    paragraphs: [
      "Les pièces et les CV sont analysés sur le serveur interne du client ; le rapport est remis au poste utilisateur. Les copies de travail sont supprimées à l’issue du traitement ; après un arrêt brutal, leur purge relève de la DSI. Le registre local conserve les droits, les références de dossier et l’empreinte du DAO. Le client limite les accès aux utilisateurs habilités, protège les postes, les sauvegardes et le stockage temporaire et définit les durées de conservation.",
      "Les échanges de licence portent sur les données de compte, d’installation et de crédits ; les pièces, rapports et empreintes du DAO restent chez le client. Toute intervention d’assistance nécessitant l’accès à des données du dossier fait l’objet d’un accord préalable définissant les accès et la confidentialité. Tout incident lié au produit est signalé à contact@shadowtransformation.fr. BidCrossCheck reste un outil d’aide à la relecture : la recevabilité, les arbitrages et la validation finale demeurent humains, sans garantie de résultat commercial ni décharge générale de responsabilité au-delà du contrat accepté et du droit applicable.",
    ],
  },
] as const;