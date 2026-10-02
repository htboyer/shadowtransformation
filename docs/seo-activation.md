# Activation SEO — étapes à réaliser par le propriétaire

Rien de ce qui suit n'a été fait automatiquement : aucune propriété Search Console, aucun jeton de validation, aucun outil de mesure n'est configuré.

## 1. Google Search Console — propriété « préfixe d'URL »
1. Ouvrir https://search.google.com/search-console et ajouter la propriété `https://www.shadowtransformation.fr/`.
2. Choisir une méthode de validation et transmettre la valeur **exacte** fournie par Google :
   - fichier HTML (`googleXXXX.html`) → à déposer tel quel dans `public/` ;
   - ou balise `<meta name="google-site-verification" content="…">` → à ajouter dans `index.html`.
3. Après publication par le workflow GitHub Pages, cliquer sur « Valider ».

Alternative : propriété « domaine » via un enregistrement DNS TXT, à ajouter uniquement par le propriétaire chez son registraire.

Référence : https://support.google.com/webmasters/answer/9008080?hl=fr

## 2. Sitemap
- Soumettre `https://www.shadowtransformation.fr/sitemap.xml` dans Search Console (rubrique Sitemaps). Il est généré au build et contient les 8 URL canoniques.
- `robots.txt` le déclare déjà.
- Ne pas utiliser l'ancien « ping » de sitemap (abandonné) ni l'Indexing API (réservée à d'autres types de contenu).

Référence : https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## 3. Inspection d'URL
Inspecter puis « Demander une indexation » pour : l'accueil, `/diagnostic-organisationnel/`, et un article (ex. `/regards/clarifier-processus-avant-ia/`).

## Publication, exploration, indexation
- **Publication** : la page est servie par GitHub Pages (vérifiable par GET).
- **Exploration** : Googlebot a récupéré la page (visible dans Search Console).
- **Indexation** : Google a décidé de l'inclure dans son index. Rien ne la garantit ni ne permet d'en fixer le délai.
