# Guide éditorial — Regards sur la transformation

## Ajouter un article
1. Dans `src/content/articles.ts`, créer un objet `Article` sur le modèle existant. Renseigner :
   - le `slug` et le `path` (`/regards/<slug>/`, slash final) ;
   - le `seoTitle` (unique), le `h1`, le `summary` (environ 2 lignes) et la `description` ;
   - la `datePublished` : date réelle de première publication, jamais réécrite ;
   - les `sections`, les `sources` et les liens `related`.
2. L'ajouter au tableau `ARTICLES`. La route, la carte, le pré-rendu, le JSON-LD et le sitemap suivent automatiquement. La page d'accueil affiche tous les articles de `ARTICLES` : pour en garder trois, ajuster `RegardsSection`.
3. Les sources se placent dans un bloc `{ kind: "note" }` à côté du passage concerné, et dans `sources`.
4. Les exemples doivent être explicitement fictifs. Aucun client, chiffre ou témoignage inventé.

## Rythme proposé
Deux analyses par mois. Aucune programmation automatique.

## Fiche de préparation (par article)
- Question traitée.
- Prestation liée.
- Sources consultées, avec les URL officielles.
- Date réelle.
- Relecture par Hugues.

## Liens suivis (UTM, sans données personnelles)
- `https://www.shadowtransformation.fr/regards/clarifier-processus-avant-ia/?utm_source=linkedin&utm_medium=social&utm_campaign=regards`
- `https://www.shadowtransformation.fr/regards/reorganisation-roles-decisions/?utm_source=linkedin&utm_medium=social&utm_campaign=regards`
- `https://www.shadowtransformation.fr/regards/fatigue-changement-disponibilite/?utm_source=linkedin&utm_medium=social&utm_campaign=regards`

La balise canonical reste sans paramètres.

## Brouillons de partage LinkedIn (NON publiés)
1. « Avant d'automatiser une tâche par l'IA, savons-nous quel problème elle résout dans le processus complet ? Une grille simple pour clarifier, tester et vérifier. » + lien article 1
2. « Un organigramme peut être clair et le travail rester incertain. Comment repérer les doublons de responsabilités et les décisions qui se bloquent, sur des cas concrets. » + lien article 2
3. « Manque d'adhésion ou manque de disponibilité ? Avant de remobiliser, vérifier le temps, les moyens et les arbitrages réellement disponibles. » + lien article 3

## À faire par le propriétaire (non réalisé)
- Ajouter le site dans les coordonnées du profil LinkedIn de Hugues et dans la section Sélection.
- Mettre à jour la page entreprise.
