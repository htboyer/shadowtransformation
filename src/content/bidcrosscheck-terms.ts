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
    title: "1. Projet, périmètre et interlocuteur",
    paragraphs: [
      "Ce projet concerne uniquement BidCrossCheck et les clients professionnels, pour un compte de bureau d’études (BE) ou de département avec compteur de crédits partagé. Il ne régit aucun autre produit de Shadow Transformation. Il doit être complété et validé avant toute utilisation contractuelle.",
      "Le site présente BidCrossCheck by Shadow Transformation et Hugues Temple-Boyer, son fondateur. Aucune identité juridique complète de l’éditeur n’a pu être vérifiée dans des mentions légales existantes : raison sociale ou identité de l’entrepreneur, forme juridique, adresse et identifiants applicables restent à confirmer avant publication. Aucun identifiant n’est présumé.",
    ],
  },
  {
    title: "2. Devis, communication et acceptation",
    paragraphs: [
      "Le prix est communiqué sur devis, hors taxes (HT), avec les taxes applicables et les conditions particulières avant tout engagement. Le devis doit préciser le périmètre du compte, les crédits, les modalités d’émission et les conditions commerciales applicables. Les conditions particulières acceptées prévalent en cas de contradiction avec les conditions générales.",
      "La version datée des CGV doit être communiquée avec le devis, sous une forme conservable, avant l’engagement. Le client doit accepter explicitement le devis et cette version identifiée des CGV, par signature ou confirmation écrite non équivoque conservée avec la commande. Aucune case précochée ni acceptation présumée n’est prévue.",
      "Le simple téléchargement du kit ou du rapport, comme un courriel de demande de kit, d’essai ou de crédits, ne conclut aucune vente. Une demande ouvre un échange commercial ; elle ne remplace pas l’accord explicite sur le devis et la version datée des CGV.",
    ],
  },
  {
    title: "3. Essai, crédits et émission",
    paragraphs: [
      "Un crédit d’essai peut être demandé après installation, en transmettant demande.json, sans aucune pièce d’offre. Les commandes proposées portent sur 1, 10, 25 ou 50 crédits pour le compte BE ou département et son compteur partagé. Le crédit d’essai est distinct des crédits payants.",
      "Pour les crédits payants, l’émission intervient après paiement, selon les modalités et le délai convenus au devis. La demande du compte et la référence de commande servent à préparer le paquet signé à importer selon le Guide DSI. Le téléchargement du kit ne crédite pas le compte. Aucun délai d’émission n’est fixé dans ce projet.",
      "Selon le Guide DSI 0.39, un rapport bloqué ou un échec du moteur ne consomme pas de crédit ; un rapport partiel exploitable est décompté après confirmation initiale. Le client doit donc vérifier la couverture du rapport, y compris lorsqu’un crédit est consommé.",
      "La relance sur le même DAO est incluse : elle ne consomme pas de second crédit pour le même dossier et son propriétaire, avec contenu identique de toutes les pièces DAO/TDR reconnu par leur empreinte. Le nom ou l’ordre des fichiers peut changer ; les CV, la méthodologie et les pièces financières peuvent évoluer. Un nouvel additif, une modification ou une autre conversion du DAO nécessite une vérification métier et ne relève pas tacitement de la relance. Des lots constituant des offres distinctes nécessitent des références distinctes, même si le DAO est identique.",
    ],
  },
  {
    title: "4. Installation et pièces requises",
    paragraphs: [
      "Le client respecte le Guide DSI de la version installée, fait valider l’installation et utilise les formats effectivement traités sur son environnement. Le Guide DSI 0.39 décrit des lecteurs PDF, Word, Excel et texte ; le traitement des PDF dépend du profil serveur et doit être validé sur l’environnement cible. Cette indication ne garantit pas la prise en charge de chaque variante de fichier ou de tout contenu.",
      "Le dossier doit réunir le DAO/TDR et ses additifs à jour, le mémoire méthodologique, les annexes applicables, les CV et justificatifs, les plannings et la mobilisation, ainsi que le budget et l’offre financière. Le devis interne est facultatif et requis uniquement si le client souhaite le contrôle de marge et le rapprochement avec le prix interne.",
      "Les versions doivent être cohérentes entre elles. Tableaux, unités, devises et périodes doivent être lisibles et exploitables. Le client vérifie la complétude et l’actualité des pièces avant analyse, puis les pièces effectivement reconnues et la couverture indiquée dans le rapport.",
    ],
  },
  {
    title: "5. Couverture, scans et relance",
    paragraphs: [
      "Les scans, images, tableaux complexes ou données mal reconnues peuvent limiter ou empêcher les contrôles. Une pièce lisible à l’œil n’est pas nécessairement exploitable par le moteur. Des résultats peuvent rester incomplets même lorsque les pièces sont lisibles ; une couverture partielle doit être identifiée, et les contrôles non couverts restent ouverts.",
      "Le client remplace les pièces absentes, illisibles, non reconnues ou non prises en charge par des versions exploitables et cohérentes, puis relance dans les conditions du même DAO décrites ci-dessus. Si le remplacement modifie les originaux DAO/TDR, les conditions de relance doivent être vérifiées ; la gratuité d’une nouvelle analyse ne peut être présumée.",
      "L’absence d’alerte ne vaut ni conformité, ni recevabilité, ni validation de l’offre. La vérification des éléments non couverts et la relecture des résultats demeurent nécessaires.",
    ],
  },
  {
    title: "6. Objectifs, temps indicatif et responsabilité",
    paragraphs: [
      "Les objectifs de détection de 99 % des erreurs arithmétiques sur les données chiffrées reconnues et de plus de 90 % des incohérences méthodologiques relevant des critères couverts ne sont pas validés. Ils ne constituent ni des taux mesurés, ni des taux garantis, ni une garantie de couverture exhaustive. Les trois écarts attendus retrouvés sur le dossier de recette (300 €, 0,5 jour de surcharge et 1 jour d’écart planning/budget) ne démontrent pas un taux généralisable.",
      "Les 3 heures de revue managériale visées par offre sont une hypothèse fondée sur l’expérience métier du fondateur, à mesurer selon dossier. La valorisation de 131 à 188 € par offre repose sur 70 000 à 100 000 € de salaire brut annuel et 1 600 heures par an, avant prix du crédit et hors charges. Pour 40 offres, elle représente 120 h/an et 5 250 à 7 500 €. Ce temps indicatif ne constitue pas une allégation d’économie nette.",
      "BidCrossCheck aide à la revue ; la décision finale, la recevabilité, les profils, les engagements et le prix restent soumis à l’appréciation et à la validation humaines. Aucun succès commercial, résultat d’appel d’offres ou gain de temps n’est garanti. Ces limites ne constituent pas une décharge générale de responsabilité de l’éditeur : les responsabilités respectives restent régies par le contrat accepté et le droit applicable.",
    ],
  },
  {
    title: "7. Analyse locale et confidentialité des pièces",
    paragraphs: [
      "L’analyse s’effectue sur le serveur interne du BE. Le client et sa DSI appliquent les mesures d’accès, de sécurité et de gestion des fichiers temporaires décrites dans le Guide DSI. Aucun dossier, DAO, mémoire, budget ou CV n’est à envoyer à l’éditeur, notamment par courriel. Seuls les éléments administratifs nécessaires à la demande de compte et à l’émission sont transmis selon le guide.",
    ],
  },
  {
    title: "8. Conditions à arrêter avant publication et engagement",
    paragraphs: [
      "Restent à arrêter et à communiquer : validité et éventuelle expiration des crédits, droit aux mises à jour et périmètre du support, modalités de facturation et échéance de paiement, conditions d’escompte, taux et modalités des pénalités de retard et indemnité de recouvrement applicable. Les délais d’émission et les modalités de traitement des réclamations doivent également être précisés. Aucune politique ni aucun montant contractuel n’est inventé dans ce projet.",
      "Le propriétaire doit compléter l’identité juridique de l’éditeur et faire valider juridiquement et commercialement ce texte avant publication ou envoi comme conditions contractuelles. La présente version est un projet de travail, non une version définitive prête à conclure une vente.",
    ],
  },
] as const;