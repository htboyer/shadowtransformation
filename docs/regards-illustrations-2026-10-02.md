# Illustrations Regards — 2 octobre 2026

Les trois rendus Canva fournis ont été reçus en PNG de **600 × 337 px** chacun, puis convertis sans recadrage en WebP qualité 90, toujours **600 × 337 px**. Il ne s'agit pas d'exports HD : l'affichage reste limité à 600 px de largeur et se réduit sur petit écran.

| Rendu reçu | Article correspondant | Fichier servi sur le domaine |
| --- | --- | --- |
| 1.png — flux, décision, contrôle humain et IA | clarifier-processus-avant-ia | `/images/regards/clarifier-processus-avant-ia.webp` |
| 2.png — équipes, décision et transmission | reorganisation-roles-decisions | `/images/regards/reorganisation-roles-decisions.webp` |
| 3.png — charge et calendrier | fatigue-changement-disponibilite | `/images/regards/fatigue-changement-disponibilite.webp` |

Les dessins ont été comparés visuellement aux trois thèmes. Les fichiers sont conservés dans le site, sans lien Canva temporaire.

Contrôles effectués : les trois images se chargent sur l'accueil et sur `/regards/`, ainsi que sur les trois pages de lecture (où figurent aussi les deux autres cartes). Les largeurs mesurées dans le navigateur à 390, 768 et 1280 px restent toutes inférieures ou égales à 600 px ; aucun débordement horizontal ni erreur JavaScript relevé. Les six tests existants et le contrôle des types passent. Le contrôle des fichiers HTML pré-rendus en production reste non vérifié localement : le répertoire `dist` n'est pas présent dans cet environnement ; le workflow GitHub Pages existant exécute le build avec pré-rendu à la publication.