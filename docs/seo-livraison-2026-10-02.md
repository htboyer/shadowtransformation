# Livraison SEO et Regards — 2 octobre 2026

## Changements
- **Pré-rendu au build, sans nouvelle dépendance :**
  - `src/entry-server.tsx` utilise StaticRouter et renderToString ;
  - `scripts/prerender.mjs` produit `dist/<route>/index.html`, `dist/404.html` (noindex) et `dist/sitemap.xml` ;
  - le navigateur hydrate le même arbre (`src/AppRoutes.tsx`, `hydrateRoot` dans `src/main.tsx`).
- Le script `build` vaut maintenant `vite build && vite build --ssr … && node scripts/prerender.mjs`. Le workflow GitHub Pages existant n'a pas été modifié.
- `<head>` est géré par route depuis une seule table (`src/seo/routes.ts`, `src/seo/head.ts`), au pré-rendu comme à la navigation (`RouteHead`).
- Les contenus sont dans `src/content/services.ts` et `src/content/articles.ts`. Les gabarits sont `ServicePage`, `ArticlePage`, `RegardsPage`, `NotFound` (restylé) et `ContentLayout`.
- L'en-tête et le pied de page ont été extraits dans `src/components/site/SiteChrome.tsx`, avec un rendu identique :
  - entrée « Regards » ajoutée ;
  - navigation complète affichée à partir de 1024 px ;
  - texte du logo masqué entre 1024 et 1280 px pour éviter un débordement constaté ;
  - liens LinkedIn ajoutés au pied de page.
- Accueil :
  - section « Regards sur la transformation » placée après Livrables ;
  - lien vers le diagnostic sous Modules, liens vers l'IA et la réorganisation sous Accompagnement ;
  - lien LinkedIn de Hugues dans FounderSection.
- Domaine et référencement :
  - `index.html` : canonical et og:url pointent vers `https://www.shadowtransformation.fr/` ;
  - `public/robots.txt` : directive Sitemap ajoutée ;
  - `public/logo-shadow-transformation.png` : copie du logo existant, référencée par le JSON-LD Organization.

## Routes (8 pages indexables)
`/`, `/diagnostic-organisationnel/`, `/accompagnement-transformation-ia/`, `/accompagnement-reorganisation/`, `/regards/`, `/regards/clarifier-processus-avant-ia/`, `/regards/reorganisation-roles-decisions/`, `/regards/fatigue-changement-disponibilite/`. Une URL inconnue sert `404.html` avec un statut 404 et noindex.

## Tests réellement exécutés (bac à sable)
- `npm run build` : réussi, avec 8 pages pré-rendues, 404.html et un sitemap de 8 URL.
- `vitest run` : 6 tests sur 6 réussis, dont 5 nouveaux sur les métadonnées, la canonical, le noindex de la 404 et le BlogPosting.
- `tsgo` sur `tsconfig.app.json` : aucune erreur.
- Contrôle des 8 fichiers HTML de dist :
  - 1 title, 1 description et 1 canonical www par page ; titres et descriptions uniques ;
  - un seul H1, avec le texte rendu avant exécution du JS ;
  - JSON-LD lisible, assets référencés présents ;
  - aucune trace de `/src/`, `lovable.app` ou `noindex` hors 404.
- Playwright sur dist, avec un serveur local qui imite GitHub Pages (404.html pour les URL inconnues) :
  - accès direct à chaque URL : 200 ;
  - URL inconnue : 404, noindex ;
  - 1280, 1100, 1024, 768 et 390 px : aucun débordement horizontal ;
  - aucune erreur d'hydratation ni de console ;
  - navigation client : le title et la canonical se mettent à jour ;
  - lien `/#approche` depuis un article : défile bien jusqu'à la section ;
  - YouTube : aucune requête avant le clic, iframe nocookie qc8XGnFqrIU après le clic ;
  - visionneuses : 1 / 24 et 1 / 13 ;
  - téléchargements PDF et MP4 présents.
- Non-régression :
  - 37 WebP conformes aux SHA256 du manifeste ;
  - PresentationSection, ModuleOneShowcase et DeliverableViewer inchangés (SHA256 identiques à l'inspection).

## Limitations
- Le serveur GitHub Pages réel reste à contrôler après le workflow : statuts, redirection `/regards` vers `/regards/`, 404.
- Le MP4 est servi depuis le CDN Lovable par un chemin relatif `/__l5e/...` : il fonctionne sur l'hébergement Lovable et reste à vérifier sur `www`, comme avant ce lot.
- Les réseaux sociaux ne lisent que le `<head>` statique, désormais propre à chaque page.

## Sources citées
- NIST AI RMF Playbook MAP
- HSE Management Standards (Role, Demands)

## Blocages
- Aucun jeton Search Console fourni : la validation reste à faire (voir `seo-activation.md`).
- Aucun outil de mesure activé.
- Aucune modification du profil ni de la page LinkedIn.
- Aucun post publié ni programmé.
