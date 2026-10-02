import type { ContentPage } from "./types";

const NIST_MAP = { label: "NIST — AI RMF Playbook, fonction MAP", url: "https://airc.nist.gov/airmf-resources/playbook/map/" };

export const DIAGNOSTIC: ContentPage = {
  path: "/diagnostic-organisationnel/",
  seoTitle: "Diagnostic organisationnel avant transformation | Shadow Transformation",
  description:
    "Croiser les regards de la direction, des managers et des équipes pour identifier les frictions, qualifier la maturité et préparer les décisions de transformation.",
  h1: "Diagnostic organisationnel avant transformation",
  crumb: "Diagnostic organisationnel",
  intro:
    "Avant de lancer une réorganisation, d'introduire l'IA ou d'accélérer un projet déjà engagé, une question mérite d'être instruite : l'organisation peut-elle réellement porter la prochaine étape ? Le Module 1 de Shadow Transformation croise les perceptions du sponsor, des managers et des collaborateurs pour rendre les écarts lisibles et préparer une décision argumentée.",
  sections: [
    {
      id: "quand",
      title: "Quand ce diagnostic est-il utile ?",
      blocks: [
        "Priorités comprises différemment, arbitrages difficiles à appliquer, doublons de responsabilités, coopération inégale ou disponibilité incertaine : ces situations peuvent justifier un diagnostic. Elles ne démontrent pas à elles seules une résistance au changement. La mission commence par la clarification de votre question et de la décision à prendre, avant de choisir le périmètre et les participants.",
      ],
    },
    {
      id: "examen",
      title: "Ce que nous examinons",
      blocks: [
        "Six dimensions structurent la lecture : identité organisationnelle vécue ; cohérence entre discours, décisions et pratiques ; interactions et coopération ; rapport au changement et à l'incertitude ; sens, mobilisation et disponibilité ; maturité de transformation. Les résultats quantitatifs sont rapprochés des réponses ouvertes et du contexte. Aucune population n'est considérée comme la vérité unique du système.",
      ],
    },
    {
      id: "deroulement",
      title: "Comment se déroule l'intervention ?",
      blocks: [
        "Cadrer avec le sponsor la question, le périmètre et les règles de confidentialité. Recueillir les contributions dans un cadre expliqué. Vérifier la qualité et les limites des données. Formuler des enseignements propres à la mission. Confronter leur interprétation aux acteurs, puis préciser les conditions de la suite. L'outil soutient l'analyse ; l'interprétation et l'arbitrage restent humains.",
      ],
    },
    {
      id: "resultats",
      title: "Ce que vous obtenez",
      blocks: [
        "Un rapport PDF argumenté, une présentation courte orientée résultats et actions, une lecture des écarts et des appuis, des priorités de vérification ou de préparation et les conditions d'une décision. Une recommandation précise ce qu'il faut examiner, qui mobiliser, le résultat attendu et l'effet à vérifier. Les modalités exactes sont convenues au cadrage.",
        { kind: "link", label: "Consulter un exemple fictif de restitution", href: "/#module-1-pratique" },
      ],
    },
    {
      id: "limites",
      title: "Ce que ce diagnostic ne prétend pas faire",
      blocks: [
        "Un score ne certifie pas qu'une transformation réussira. Le Module 1 ne remplace ni un audit technique de l'IA, ni une évaluation individuelle, ni une enquête psychosociale. Il ne produit pas automatiquement l'organisation cible ou une feuille de route complète. Il prépare la décision : poursuivre, poursuivre sous conditions, réaliser des travaux préparatoires ou recadrer la demande.",
      ],
    },
    {
      id: "confidentialite",
      title: "Confidentialité et conditions de participation",
      blocks: [
        "Les contributions sont confidentielles et les restitutions agrégées, avec un niveau de détail adapté aux effectifs et au risque d'identification. Le suivi technique de la participation est distingué du contenu des réponses. Les règles de mission, les destinataires et les limites sont explicités avant la collecte.",
      ],
    },
  ],
  conclusion: "Quel point devez-vous clarifier avant d'engager la suite ?",
  related: [
    { label: "Préparer et accompagner une transformation par l'IA", href: "/accompagnement-transformation-ia/" },
    { label: "Accompagner une réorganisation", href: "/accompagnement-reorganisation/" },
    { label: "Fatigue du changement : manque d'adhésion ou manque de disponibilité ?", href: "/regards/fatigue-changement-disponibilite/" },
    { label: "Réorganisation : repérer les doublons de responsabilités et les décisions qui se bloquent", href: "/regards/reorganisation-roles-decisions/" },
  ],
};

export const IA: ContentPage = {
  path: "/accompagnement-transformation-ia/",
  seoTitle: "Accompagner une transformation par l'IA | Shadow Transformation",
  description:
    "Préparer les processus, les compétences et l'organisation du travail avant d'élargir les usages d'intelligence artificielle. Une démarche accompagnée et contextualisée.",
  h1: "Préparer et accompagner une transformation par l'IA",
  crumb: "Transformation par l'IA",
  intro:
    "Un outil peut produire une réponse rapidement sans rendre le travail collectif plus fluide. Nous aidons les dirigeants à relier l'ambition IA aux processus concernés, à la contribution des équipes et aux décisions nécessaires pour une adoption maîtrisée.",
  sections: [
    {
      id: "probleme",
      title: "Partir d'un problème de travail, pas d'une liste d'outils",
      blocks: [
        "Qu'attendez-vous réellement : réduire les reprises, mieux qualifier une demande, trouver une information fiable ou raccourcir un délai ? Il faut préciser le résultat, la situation de départ et les critères de qualité avant de choisir un usage. Une simplification de procédure ou une meilleure organisation des données peut parfois être préférable à l'automatisation.",
      ],
    },
    {
      id: "contribution",
      title: "Préparer une contribution possible",
      blocks: [
        "Clarifier les tâches concernées, les décisions humaines conservées, les contrôles nécessaires et le recours en cas d'erreur. Examiner aussi les compétences, le temps d'apprentissage, la charge des personnes sollicitées et les effets sur les autres équipes. Les interlocuteurs techniques et responsables des données valident les règles qui relèvent de leurs responsabilités.",
      ],
    },
    {
      id: "experimenter",
      title: "Expérimenter sur un périmètre limité",
      blocks: [
        "Nous proposons de démarrer, lorsque le contexte s'y prête, par des usages utiles au quotidien, encadrés et réversibles. Les utilisateurs participent à leur définition et à leur évaluation. Ce n'est pas une séquence universelle : le périmètre, les risques et les prérequis peuvent imposer un autre ordre. Mesurer le travail de contrôle et de reprise, pas seulement la vitesse de production.",
      ],
    },
    {
      id: "relier",
      title: "Relier diagnostic, décisions et accompagnement",
      blocks: [
        "Le diagnostic organisationnel éclaire les conditions de préparation. L'accompagnement peut ensuite aider à hiérarchiser les usages, clarifier les responsabilités, organiser les retours d'expérience et ajuster les pratiques. Le périmètre d'intervention est défini avec vous ; le Module 1 seul ne livre pas une architecture technique ni une autorisation de déploiement.",
      ],
    },
    {
      id: "livrables",
      title: "Ce que cette démarche peut mettre entre vos mains",
      blocks: [
        "Une question métier clarifiée, une carte du travail concerné, des règles de responsabilité, des priorités d'apprentissage, des critères d'évaluation et des points d'arbitrage. Leur utilité est vérifiée dans des situations réelles, sans promesse de gain standard ou de retour sur investissement automatique.",
        {
          kind: "note",
          text: "Le NIST recommande d'établir le contexte d'usage, les attentes, les effets possibles et les rôles de supervision humaine, en examinant aussi les solutions sans IA. Cette référence éclaire l'analyse, sans certification ni partenariat revendiqué.",
          source: NIST_MAP,
        },
      ],
    },
  ],
  related: [
    { label: "Diagnostic organisationnel avant transformation", href: "/diagnostic-organisationnel/" },
    { label: "Avant d'automatiser par l'IA, que faut-il clarifier dans ses processus ?", href: "/regards/clarifier-processus-avant-ia/" },
  ],
  sources: [NIST_MAP],
};

export const REORGANISATION: ContentPage = {
  path: "/accompagnement-reorganisation/",
  seoTitle: "Accompagner une réorganisation | Shadow Transformation",
  description:
    "Clarifier les responsabilités, les arbitrages et les passages de relais dans une réorganisation prévue ou déjà engagée, en partant du travail réel des équipes.",
  h1: "Accompagner une réorganisation sans perdre le fil du travail",
  crumb: "Réorganisation",
  intro:
    "Un nouvel organigramme décrit une structure. Il ne suffit pas à établir qui tranche une demande contradictoire, comment un dossier passe d'une équipe à l'autre ou quel soutien un manager peut mobiliser. Nous aidons à examiner ces conditions concrètes, avant comme pendant une réorganisation.",
  sections: [
    {
      id: "reperer",
      title: "Repérer où le fonctionnement devient incertain",
      blocks: [
        "Les signaux à examiner peuvent être des validations successives, des rôles qui se recouvrent, des demandes sans responsable clair ou des consignes différentes selon les interlocuteurs. Nous partons de situations documentées et de regards croisés, sans désigner d'emblée les personnes comme responsables du problème.",
      ],
    },
    {
      id: "niveaux",
      title: "Distinguer trois niveaux de clarification",
      blocks: [
        "La responsabilité : qui porte le résultat ? L'arbitrage : qui décide lorsqu'une difficulté dépasse le mandat de l'équipe ? La transmission : quelles informations et quels critères rendent un passage de relais exploitable ? Ces distinctions permettent de choisir un travail ciblé plutôt qu'une réponse générale de communication.",
      ],
    },
    {
      id: "cas",
      title: "Travailler sur des cas et vérifier les effets",
      blocks: [
        "Reconstituer quelques dossiers récents, rapprocher ce qui était prévu de ce qui s'est passé, puis tester une règle explicite sur les cas suivants. Selon les constats, l'intervention peut porter sur les priorités, les responsabilités, les interfaces ou la disponibilité. La réussite d'un atelier se juge à ce qu'il permet de résoudre ensuite, pas à sa seule tenue.",
      ],
    },
    {
      id: "proportionnes",
      title: "Des travaux proportionnés au contexte",
      blocks: [
        "Un diagnostic peut d'abord être nécessaire lorsque les lectures divergent ou que le problème reste diffus. Lorsque la difficulté est déjà suffisamment documentée, un accompagnement ciblé peut être plus adapté. La méthode ne remplace pas les responsabilités de direction, le dialogue social ou les expertises juridiques et de prévention requises par la situation.",
      ],
    },
  ],
  related: [
    { label: "Diagnostic organisationnel avant transformation", href: "/diagnostic-organisationnel/" },
    { label: "Réorganisation : repérer les doublons de responsabilités et les décisions qui se bloquent", href: "/regards/reorganisation-roles-decisions/" },
    { label: "Fatigue du changement : manque d'adhésion ou manque de disponibilité ?", href: "/regards/fatigue-changement-disponibilite/" },
  ],
};

export const SERVICES = [DIAGNOSTIC, IA, REORGANISATION];
