import type { Article, Source } from "./types";

export const PUBLISHED = "2026-10-02";

const NIST: Source = { label: "NIST — AI RMF Playbook, fonction MAP", url: "https://airc.nist.gov/airmf-resources/playbook/map/" };
const HSE_ROLE: Source = { label: "Health and Safety Executive — Management Standards : Role", url: "https://www.hse.gov.uk/stress/standards/role.htm" };
const HSE_DEMANDS: Source = { label: "Health and Safety Executive — Management Standards : Demands", url: "https://www.hse.gov.uk/stress/standards/demands.htm" };

export const ARTICLE_IA: Article = {
  slug: "clarifier-processus-avant-ia",
  image: "/images/regards/clarifier-processus-avant-ia.webp",
  imageAlt: "Flux de travail avec étapes de décision et contrôle humain avant l’assistance par l’IA.",
  path: "/regards/clarifier-processus-avant-ia/",
  datePublished: PUBLISHED,
  seoTitle: "Avant l'IA : clarifier les processus de travail | Shadow Transformation",
  h1: "Avant d'automatiser par l'IA, que faut-il clarifier dans ses processus ?",
  crumb: "Clarifier ses processus avant l'IA",
  summary:
    "L'enjeu n'est pas seulement de produire plus vite. Il faut savoir quelle tâche améliorer, dans quel processus, avec quels contrôles et quelles conséquences pour le travail des équipes.",
  description:
    "L'enjeu n'est pas seulement de produire plus vite. Il faut savoir quelle tâche améliorer, dans quel processus, avec quels contrôles et quelles conséquences pour le travail des équipes.",
  intro:
    "Une démonstration d'IA peut être impressionnante tout en laissant la question principale ouverte : quel problème résout-elle dans l'organisation ? Accélérer une tâche mal définie peut laisser intacts les délais de validation, les informations manquantes ou les reprises. Notre recommandation est donc de partir d'une situation de travail précise, puis d'examiner ce qui mérite d'être simplifié, assisté ou automatisé.",
  sections: [
    {
      id: "parcours-reel",
      title: "Cartographier le parcours réel, pas seulement la procédure",
      blocks: [
        "Prenez un dossier récent et suivez-le de la demande initiale au résultat remis. Qui fournit les informations ? Qui les vérifie ? Où le dossier attend-il ? Quelles exceptions nécessitent un jugement ? Qui reprend le travail lorsqu'une erreur apparaît ? Cette lecture peut rester courte : il ne s'agit pas de cartographier toute l'entreprise avant le moindre essai. Il s'agit de comprendre suffisamment le périmètre touché pour ne pas déplacer la difficulté ailleurs.",
        {
          kind: "note",
          text: "Dans sa fonction MAP, le NIST recommande de documenter la finalité, le contexte d'usage, les attentes des utilisateurs, les effets possibles et la supervision humaine. Il invite également à examiner des solutions sans IA. Ce cadre soutient le principe d'un choix contextualisé ; il ne valide pas automatiquement un usage donné.",
          source: NIST,
        },
      ],
    },
    {
      id: "supprimer-clarifier-assister",
      title: "Distinguer ce qui doit être supprimé, clarifié ou assisté",
      blocks: [
        "Une étape peut exister par habitude, répondre à une véritable exigence ou compenser une information peu fiable en amont. Ces situations n'appellent pas la même réponse. Avant de l'automatiser, demandez-vous si cette étape reste nécessaire, si sa règle est comprise et si ses entrées sont suffisamment fiables. Gardez les désaccords visibles : une procédure décrite différemment par deux équipes constitue une question à instruire, pas un détail à effacer pour obtenir un schéma propre.",
      ],
    },
    {
      id: "exemple-fictif",
      title: "Un exemple fictif : la préparation d'une proposition commerciale",
      blocks: [
        "Imaginons qu'une équipe souhaite générer ses propositions plus rapidement. Le temps de rédaction n'est peut-être pas le principal délai. Le dossier peut attendre une validation de prix, une précision technique ou un arbitrage sur le périmètre. Si ces règles restent incertaines, l'IA risque surtout de produire plus tôt un document qui devra être corrigé. Le premier test pourrait donc porter sur une tâche délimitée, avec des informations vérifiées et une validation clairement attribuée, tandis que les points d'arbitrage sont traités séparément. Cet exemple illustre un raisonnement ; il ne décrit aucun client réel.",
      ],
    },
    {
      id: "controle-apprentissage",
      title: "Faire une place au contrôle et à l'apprentissage",
      blocks: [
        "Un essai doit préciser ce que l'utilisateur vérifie, quand il peut écarter une réponse et à qui il demande de l'aide. Il faut aussi prévoir le temps d'apprentissage dans l'activité, pas l'ajouter implicitement aux engagements existants. Des usages simples et utiles au quotidien peuvent être un bon point d'entrée, mais ils ne sont ni obligatoires dans tous les contextes ni suffisants pour préparer un projet plus structurant. Leur intérêt dépend des risques, des besoins et de ce qu'ils permettent réellement d'apprendre.",
      ],
    },
    {
      id: "verifier-gain",
      title: "Vérifier un gain dans le travail complet",
      blocks: [
        "Comparez des situations suffisamment proches avant et pendant l'essai. Retenez le délai de bout en bout, le temps de vérification, les reprises et la qualité attendue. Observez aussi le travail transféré aux autres : une production accélérée peut augmenter le volume à contrôler en aval. Une grille de test peut contenir quatre questions : le résultat est-il utilisable ? le contrôle est-il soutenable ? le recours fonctionne-t-il ? la qualité est-elle préservée ? Ces critères sont à adapter, pas à transformer en score universel.",
      ],
    },
    {
      id: "premier-livrable",
      title: "Le premier livrable utile",
      blocks: [
        "Avant de décider d'élargir, rédigez une fiche d'une page : problème métier, périmètre, informations nécessaires, tâches humaines conservées, critères d'essai, responsable et conditions d'arrêt. Si cette fiche ne peut pas être remplie, le sujet prioritaire peut être un arbitrage ou une clarification, plutôt que le choix d'un outil.",
      ],
    },
  ],
  conclusion:
    "Notre ligne de conduite est simple : comprendre assez bien le travail pour choisir ce qu'on transforme, puis vérifier que l'essai améliore l'ensemble du processus. L'IA est un moyen possible ; le résultat métier reste le point de départ.",
  related: [
    { label: "Préparer et accompagner une transformation par l'IA", href: "/accompagnement-transformation-ia/" },
    { label: "Diagnostic organisationnel avant transformation", href: "/diagnostic-organisationnel/" },
  ],
  sources: [NIST],
};

export const ARTICLE_REORG: Article = {
  slug: "reorganisation-roles-decisions",
  image: "/images/regards/reorganisation-roles-decisions.webp",
  imageAlt: "Coordination de plusieurs équipes, clarification d’une décision et transmission d’un dossier.",
  path: "/regards/reorganisation-roles-decisions/",
  datePublished: PUBLISHED,
  seoTitle: "Réorganisation : clarifier les rôles et décisions | Shadow Transformation",
  h1: "Réorganisation : comment repérer les doublons de responsabilités et les décisions qui se bloquent ?",
  crumb: "Rôles et décisions en réorganisation",
  summary:
    "Un organigramme peut être clair et le travail rester incertain. Pour comprendre ce qui bloque, il faut suivre les décisions, les responsabilités et les transmissions sur des cas concrets.",
  description:
    "Un organigramme peut être clair et le travail rester incertain. Pour comprendre ce qui bloque, il faut suivre les décisions, les responsabilités et les transmissions sur des cas concrets.",
  intro:
    "Deux personnes valident le même sujet, une demande passe d'un service à l'autre ou un manager reçoit des consignes incompatibles. Ces situations peuvent apparaître dans une réorganisation, mais elles ne suffisent pas à prouver qu'elle est mal conçue. Notre proposition est d'examiner précisément où le fonctionnement s'interrompt et quelle décision manque, avant de redessiner la structure ou de multiplier les communications.",
  sections: [
    {
      id: "organigramme-responsabilite-arbitrage",
      title: "Ne pas confondre organigramme, responsabilité et arbitrage",
      blocks: [
        "L'organigramme situe les liens hiérarchiques. La responsabilité indique qui porte un résultat. L'arbitrage précise qui tranche lorsqu'une question dépasse le périmètre prévu ou oppose plusieurs priorités. Les trois peuvent être cohérents sur le papier sans être compris de la même manière dans le travail.",
        {
          kind: "note",
          text: "Le référentiel Role du Health and Safety Executive met notamment l'accent sur la compréhension des responsabilités, la compatibilité des exigences et la possibilité de signaler les incertitudes de rôle. C'est un repère de management, pas une obligation juridique française déduite de cet article.",
          source: HSE_ROLE,
        },
      ],
    },
    {
      id: "reconstituer-dossiers",
      title: "Reconstituer deux ou trois dossiers récents",
      blocks: [
        "Choisissez un dossier qui s'est déroulé correctement et un autre qui a nécessité des relances ou des reprises. Pour chacun, notez la demande, le résultat attendu, les intervenants, les décisions, les temps d'attente et les informations manquantes. Demandez aux personnes concernées de décrire ce qu'elles ont fait et compris. Évitez de commencer par « qui a bloqué ? » : cette formulation ferme la discussion avant de distinguer une règle absente d'une règle inutilisable.",
      ],
    },
    {
      id: "bonne-explication",
      title: "Chercher la bonne explication",
      blocks: [
        "Un doublon peut être un contrôle nécessaire, une prudence transitoire ou un chevauchement réel. Une attente peut provenir d'un décideur non identifié, d'une indisponibilité ou d'un dossier incomplet. Une contradiction peut relever d'objectifs concurrents plutôt que d'un défaut de compréhension. Il faut départager ces explications, car chacune conduit à un travail différent. Une formation ne résout pas une délégation de décision qui n'existe pas ; un message général ne crée pas du temps pour traiter les dossiers.",
      ],
    },
    {
      id: "exemple-fictif",
      title: "Un exemple fictif : deux validations pour une même demande",
      blocks: [
        "Après une évolution de structure, un responsable de pôle et un responsable métier pensent devoir autoriser toute demande exceptionnelle. L'équipe sollicite les deux, reçoit parfois des réponses différentes et attend qu'ils se coordonnent. Avant de supprimer l'un des contrôles, on vérifie leur finalité et leurs contraintes. Le travail peut alors consister à préciser quel type de décision relève de chacun et qui arbitre en cas de désaccord. Le cas suivant permet de vérifier si la demande avance sans perdre le contrôle nécessaire. Cet exemple est fictif : il ne constitue pas un retour d'expérience client.",
      ],
    },
    {
      id: "regle-courte",
      title: "Formaliser une règle assez courte pour être utilisée",
      blocks: [
        "Une fiche « décidé / ouvert / arbitre » peut réunir ce qui relève de l'équipe, ce qui nécessite une validation et le recours lorsque la règle ne couvre pas la situation. Pour les transmissions, compléter avec l'information minimale à fournir et le critère qui rend le dossier recevable. La fiche ne doit pas devenir une procédure exhaustive. Elle sert à tester une clarification et à identifier les exceptions qui demandent encore un choix.",
      ],
    },
    {
      id: "verifier-effets",
      title: "Vérifier les effets, pas seulement la diffusion",
      blocks: [
        "Sur les dossiers suivants, les acteurs donnent-ils la même explication de la règle ? L'arbitre peut-il être joint ? Le dossier est-il traité sans nouvelles reprises évitables ? Le contrôle nécessaire est-il maintenu ? Si la difficulté persiste, la conclusion n'est pas automatiquement « les équipes n'appliquent pas ». Il peut rester une contradiction, une indisponibilité ou une règle inadaptée. Le retour d'expérience sert alors à ajuster la décision.",
      ],
    },
  ],
  conclusion:
    "Une réorganisation se rend praticable dans les décisions et les interfaces. L'enjeu n'est pas d'obtenir partout la même description théorique, mais des repères suffisamment explicites pour que le travail avance et que les difficultés trouvent un recours.",
  related: [
    { label: "Accompagner une réorganisation", href: "/accompagnement-reorganisation/" },
    { label: "Diagnostic organisationnel avant transformation", href: "/diagnostic-organisationnel/" },
  ],
  sources: [HSE_ROLE],
};

export const ARTICLE_FATIGUE: Article = {
  slug: "fatigue-changement-disponibilite",
  image: "/images/regards/fatigue-changement-disponibilite.webp",
  imageAlt: "Mise en balance des sollicitations de travail et du temps réservé à la contribution.",
  path: "/regards/fatigue-changement-disponibilite/",
  datePublished: PUBLISHED,
  seoTitle: "Fatigue du changement : vérifier la disponibilité | Shadow Transformation",
  h1: "Fatigue du changement : manque d'adhésion ou manque de disponibilité ?",
  crumb: "Fatigue du changement et disponibilité",
  summary:
    "Un faible engagement apparent ne dit pas pourquoi la contribution est difficile. Avant de chercher à remobiliser, examinons le temps, les moyens et les arbitrages réellement disponibles.",
  description:
    "Un faible engagement apparent ne dit pas pourquoi la contribution est difficile. Avant de chercher à remobiliser, examinons le temps, les moyens et les arbitrages réellement disponibles.",
  intro:
    "« Les équipes ne s'impliquent pas assez. » Cette lecture peut venir rapidement lorsqu'un projet peine à mobiliser ses participants. Pourtant, une même situation observable peut correspondre à plusieurs mécanismes : intérêt limité, priorités concurrentes, fatigue, moyens insuffisants ou doute sur l'utilité du projet. Un diagnostic utile ne choisit pas l'explication la plus commode. Il cherche ce qui permet de les départager.",
  sections: [
    {
      id: "interet-capacite-conditions",
      title: "Distinguer l'intérêt, la capacité et les conditions de contribution",
      blocks: [
        "Comprendre l'objectif ne signifie pas disposer du temps pour contribuer. Savoir réaliser une tâche ne signifie pas avoir accès aux informations nécessaires. Être volontaire ne signifie pas pouvoir tenir un engagement supplémentaire. Nous proposons de séparer ces questions dans les échanges avec les équipes et les managers, puis de les rapprocher de situations concrètes. Cette distinction évite de traiter toute difficulté par une campagne de mobilisation.",
        {
          kind: "note",
          text: "Le standard Demands du Health and Safety Executive recommande des exigences de travail adaptées et réalisables dans le temps convenu, une adéquation entre compétences et demandes et des mécanismes pour répondre aux difficultés. Il éclaire l'examen de la charge ; il ne permet pas de diagnostiquer la situation d'une équipe à distance.",
          source: HSE_DEMANDS,
        },
      ],
    },
    {
      id: "journees",
      title: "Faire apparaître ce qui remplit déjà les journées",
      blocks: [
        "Demandez aux personnes sollicitées de rapprocher leurs engagements courants, les aléas qu'elles doivent absorber, le soutien qu'elles apportent à d'autres et la contribution attendue au projet. Une réunion prévue n'est pas encore du temps disponible. Les préparations, les essais et les reprises doivent aussi être considérés. L'objectif n'est pas une surveillance minute par minute, mais un support de dialogue permettant de rendre des arbitrages explicites.",
      ],
    },
    {
      id: "exemple-fictif",
      title: "Un exemple fictif : un référent sans disponibilité protégée",
      blocks: [
        "Une collaboratrice reconnue pour son expertise accepte de devenir référente d'un nouvel outil. Ses objectifs habituels ne changent pas et ses collègues continuent à la solliciter comme avant. Elle participe moins aux essais, ce qui est interprété comme une baisse de motivation. Une revue de ses engagements peut révéler que le rôle n'a jamais été accompagné d'un choix sur les tâches à différer. La réponse proposée serait alors un arbitrage de charge, avant un nouvel appel à l'engagement. Cette hypothèse doit être vérifiée ; cet exemple ne décrit aucun client réel.",
      ],
    },
    {
      id: "arbitrer",
      title: "Arbitrer ce qui peut être reporté, simplifié ou réaffecté",
      blocks: [
        "Une fois une difficulté confirmée, la responsabilité ne doit pas revenir uniquement au contributeur. Le sponsor et le management précisent ce qui peut attendre, ce qui doit être maintenu et quelles ressources sont réellement mobilisables. Il faut vérifier les effets sur les autres équipes : déplacer une tâche peut simplement déplacer la surcharge. Parfois, le bon choix est de réduire le périmètre ou de ralentir temporairement le projet, plutôt que d'annoncer une disponibilité irréaliste.",
      ],
    },
    {
      id: "tester-disponibilite",
      title: "Tester la disponibilité annoncée",
      blocks: [
        "Lors des premières contributions, rapprochez le temps prévu du temps effectivement préservé. Les créneaux ont-ils été absorbés par d'autres demandes ? Une personne a-t-elle dû compenser par du travail supplémentaire ? Le soutien annoncé a-t-il été accessible ? Le résultat attendu n'est pas une liste de référents, mais une contribution possible dans des conditions soutenables. Si l'arbitrage ne tient pas, il doit être revu.",
      ],
    },
    {
      id: "pas-tout-charge",
      title: "Ne pas tout ramener à la charge",
      blocks: [
        "La difficulté peut aussi porter sur le sens, les compétences, la confiance ou les effets anticipés de la transformation. Une expression de fatigue ne démontre donc pas une surcharge générale, et une revue de charge ne traite pas toutes les situations. Lorsque des signes de souffrance ou une situation de santé sont signalés, les interlocuteurs compétents de prévention et de santé au travail doivent être mobilisés ; cet article ne remplace pas leur évaluation.",
      ],
    },
  ],
  conclusion:
    "Avant de demander davantage d'implication, vérifions que la contribution a été rendue possible. La disponibilité n'est pas une intention individuelle : elle dépend aussi des décisions que l'organisation accepte de prendre.",
  related: [
    { label: "Diagnostic organisationnel avant transformation", href: "/diagnostic-organisationnel/" },
    { label: "Accompagner une réorganisation", href: "/accompagnement-reorganisation/" },
  ],
  sources: [HSE_DEMANDS],
};

export const ARTICLES: Article[] = [ARTICLE_IA, ARTICLE_REORG, ARTICLE_FATIGUE];
