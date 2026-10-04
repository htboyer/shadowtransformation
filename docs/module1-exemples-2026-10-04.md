# Exemples Module 1 — sources du 4 octobre 2026

## Périmètre
Remplacement des deux exemples NovaServices actuellement consultables dans « Module 1 en pratique ». Le PDF comporte 33 pages et le PPTX 16 diapositives. Les images de couverture sont les rendus de la première page du PDF et de la première diapositive du PPTX, et non des visuels reconstitués par IA. Les sources restent des exemples fictifs et des documents de travail à valider.

La consultation en visionneuse sans téléchargement direct est conservée. Les fichiers PDF/PPTX sources ne sont pas placés dans le site public. Aucun changement du générateur applicatif, de Supabase, des analyses, des scores, de la fiche commerciale, de la vidéo ou des articles Regards.

## Sources
- PDF : `NovaServices-Module1-Rapport(1).pdf`, 864 328 octets ; SHA256 `15c0bdda4faf7168f0507e8e33d51bffcfd748ec955a7c3991e8a19fb6351760`.
- PPTX : `NovaServices-Module1-Restitution(1).pptx`, 3 875 091 octets ; SHA256 `c1cb017e05cb3e076989259c4071eb1aa6d423ea92d5c7bc83f197517508361b`.

## Rendu
PDF rasterisé depuis son original à 1 400 pixels de largeur. PPTX converti en PDF par LibreOffice, puis rasterisé à 1 920 pixels de largeur. Calibri Light n'étant pas installé dans l'environnement de conversion, le rendu du PPTX utilise la substitution de police Carlito. Le PPTX original n'a pas été modifié ni réenregistré. Ces aperçus ne constituent pas une vérification du rendu natif dans Microsoft PowerPoint sous Windows.

49 images WebP, qualité 92, sans recadrage. Chaque image est répertoriée avec numéro, dimensions et empreinte dans le manifeste JSON. Les deux couvertures sont affichées entières, en `object-contain`, sans texte superposé. Le clic sur la couverture et le bouton de consultation ouvrent la version correspondante.

## Contrôles réalisés à la préparation
Comptage des 33 pages du PDF et des 16 diapositives du PPTX ; intégrité ZIP du PPTX ; conservation des empreintes des originaux ; décodage des 49 images ; examen des planches de rendu et des couvertures. Le script d'installation valide le manifeste et l'empreinte du composant avant modification.

## Contrôles à faire dans le projet avant publication
Tests existants ; compilation/prérendu ; contrôle des deux compteurs 33/16 ; couverture, page suivante et dernière page des deux visionneuses ; ouverture par vignette et bouton ; affichage mobile et ordinateur ; fichiers images effectivement accessibles. La présence en ligne doit être contrôlée après réussite du workflow GitHub Pages. Aucun contrôle de production n'est revendiqué par ce kit.

## Contrôles effectués lors de l’intégration
- Les 49 images du kit ont été décodées ; dimensions, tailles et SHA256 conformes au manifeste. Les originaux PDF/PPTX ne sont pas inclus dans le kit : leurs empreintes sont déclarées par son fournisseur, non recalculées ici.
- Tests existants : 6/6 réussis. Signal de compilation du preview : build OK. Aucun build/prérendu manuel supplémentaire n’a été exécuté.
- Navigateur à 1280 et 390 pixels : clic sur chaque couverture et chaque bouton, retour à la page 1, parcours de toutes les 33 pages et 16 diapositives, images chargées et compteurs conformes ; aucune erreur JavaScript ni débordement horizontal de page.
- Captures examinées des couvertures et des premières/dernières pages. Une première capture de cartes avait été prise avant le chargement différé ; elle a été reprise après décodage des images, sans changement du site.
- Le composant de visionneuse est inchangé. Seules les listes de pages, dates, comptes et couvertures des deux exemples ont été actualisés ; aucun PDF/PPTX source n’est publié.
- Publication non confirmée : au contrôle, le site public sert encore les anciens comptes ; le dernier workflow GitHub Pages visible reste le run 36995956563, réussi sur 9f6f5ec25652edc5de2bc95a85e3e53513977bc4. Aucun accès GitHub authentifié n’est disponible ici pour déclencher le workflow. La synchronisation du projet vers GitHub et son déploiement restent nécessaires ; aucun nouveau commit ni déploiement réussi n’est revendiqué.
