# Compte rendu d'inspection (lecture seule) — aucun changement effectué

## 1. Dépôt et code
- HEAD = `d0beb8737ffaf1a4323cc717d0377104c6ee2c05` (identique à main sur GitHub), arbre de travail propre.
- Scripts : dev, build (`vite build`), build:dev, lint, preview, test (`vitest run`), test:watch. Aucun script de pré-rendu ni de rendu serveur.
- `index.html` : canonical et og:url pointent vers `https://shadowtransformation.lovable.app/` ; titre, description, og/twitter et og:image sont définis ; le bloc Plausible/Umami est commenté.
- `App.tsx` : BrowserRouter avec seulement `/` et `*` (NotFound). `main.tsx` : createRoot, sans hydratation. `vite.config.ts` : standard, sans `base` ni plugin de pré-rendu.
- `AGENTS.md` impose trois contraintes :
  - le site reste statique (React/Vite) et publié par GitHub Pages ;
  - les téléchargements viennent des chemins exacts et restent conditionnels, avec le MP4 servi par un pointeur CDN Lovable ;
  - le lecteur YouTube se charge seulement après un clic.
- Accès au navigateur qui pourraient gêner un rendu serveur :
  - `main.tsx:5`, `document.getElementById`, se trouve dans le point d'entrée : ce n'est pas bloquant si un point d'entrée serveur séparé est créé.
  - `use-mobile.tsx` utilise `window` dans un useEffect : sans risque.
  - `analytics.ts` est protégé par `typeof window` : sans risque.
- Composants non lus ligne à ligne :
  - FounderSection utilise un IntersectionObserver, à vérifier.
  - L'URL du MP4 est relative (`/__l5e/assets-v1/...`). Elle n'est servie que par l'hébergement Lovable.
  - Sur `www.shadowtransformation.fr` (GitHub Pages), ce lien MP4 renverra probablement 404. Ce point est à vérifier par GET avant le lot SEO.

## 2. État en ligne (GET)
- `https://www.shadowtransformation.fr/` : 200 (GitHub Pages). La canonical servie est `https://shadowtransformation.lovable.app/`, ce qui est incorrect pour l'objectif.
- `https://shadowtransformation.fr/` et `http://shadowtransformation.fr/` : 301 vers `https://www.shadowtransformation.fr/`.
- `https://shadowtransformation.lovable.app/` : 200, avec la même canonical lovable.app.
- `robots.txt` existe sur www et lovable.app (200), sans directive Sitemap. `sitemap.xml` est absent : 404 sur les deux.

## 3. LinkedIn
- Je n'ai trouvé aucune URL de page entreprise dans les fichiers du projet, dans le texte du PDF commercial ni dans l'historique des échanges.
- Seule URL trouvée : le profil personnel validé `https://www.linkedin.com/in/hugues-temple-boyer-b44b1926/`. Il faut demander l'URL de l'entreprise si elle doit figurer sur le site.

## 4. Présentation et références de non-régression
- `qc8XGnFqrIU` est présent dans `PresentationSection.tsx`, avec le lien YouTube et l'iframe nocookie.
- Le PDF est présent (9 319 041 octets), ainsi que le pointeur MP4 `.asset.json` et le poster.
- Empreintes SHA256 :
  - PresentationSection.tsx `6de198b1c36c43e29c80d3b06e747d44d5f797356aaf85e9a74f878453733aed`
  - ModuleOneShowcase.tsx `f32f5fa9740258afaa6f6745bcdc8f51a79a41357dc4416f257b3c7a2cf45e12`
  - DeliverableViewer.tsx `c3464008cbf32af89bd04c76174b3e65124eb40144274ddbb54342c83f613109`
  - 37 WebP concaténés dans l'ordre alphabétique : `12937d1f7bae94c0dac9f63fd9a75fb3799e778926b831df75c5c1c85adb4e0b`. Le contrôle individuel se fait avec `docs/module1-exemples-2026-09-21.json`.

## 5. Search Console et mesure d'audience
- Il n'y a ni balise `google-site-verification` ni fichier `google*.html` dans `public/`.
- Plausible et Umami sont préparés mais commentés : aucun outil de mesure n'est actif.

Aucune erreur pendant l'inspection. Rien n'a été modifié ni déployé.
