---
name: Portfolio de Brandon Picq
description: Galerie encre et glacier, avec interfaces de projets à essayer.
colors:
  folio-ink: "#153a50"
  folio-bg: "#cbdde5"
  folio-muted: "#355267"
  folio-accent: "#ff6b35"
  folio-line: "#91abb9"
  folio-paper: "#edf3f6"
  inverse-text: "#f8fafc"
typography:
  display: {fontFamily: '"Folio Archivo", "Archivo", sans-serif', fontSize: 'clamp(42px, 4.3vw, 70px)', fontWeight: 780, lineHeight: 1.08, letterSpacing: '-0.035em'}
  headline: {fontFamily: '"Folio Archivo", "Archivo", sans-serif', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.025em'}
  title: {fontFamily: '"Folio Archivo", "Archivo", sans-serif', fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', fontWeight: 750, lineHeight: 1.12, letterSpacing: '-0.03em'}
  body: {fontFamily: '"Folio Archivo", "Archivo", sans-serif', fontSize: '0.95rem', lineHeight: 1.75}
  label: {fontFamily: '"Folio Archivo", "Archivo", sans-serif', fontSize: '0.8rem', fontWeight: 600}
rounded: {control: '5px', field: '8px', preview: '12px'}
spacing: {small-gap: '8px', medium-gap: '16px', section-gap: '2rem', section-padding: '2.5rem 0', gutter: 'clamp(24px, 2.35vw, 48px)'}
components:
  button-primary: {backgroundColor: '{colors.folio-ink}', textColor: '{colors.inverse-text}', rounded: '{rounded.control}', padding: '12px 20px'}
  project-link: {textColor: '{colors.folio-ink}'}
  button-icon: {backgroundColor: transparent, textColor: '{colors.folio-ink}', rounded: '{rounded.control}', width: '40px', height: '40px'}
  project-navigation: {textColor: '{colors.inverse-text}', padding: '8px 0 12px'}
  search-field: {backgroundColor: '{colors.folio-paper}', textColor: '{colors.folio-ink}', rounded: '{rounded.field}', padding: '0.35rem 0.8rem 0.35rem 1rem'}
  category-filter: {backgroundColor: transparent, textColor: '{colors.folio-muted}', rounded: '{rounded.control}', padding: '0.6rem 0.7rem'}
  category-filter-selected: {backgroundColor: '{colors.folio-ink}', textColor: '{colors.folio-paper}', rounded: '{rounded.control}'}
  technology-filter: {backgroundColor: transparent, textColor: '{colors.folio-muted}', rounded: '{rounded.control}', padding: '0.6rem 0.7rem'}
---

# Design System: Portfolio de Brandon Picq

## Overview

**Creative North Star: "Galerie encre et glacier"**

L’enveloppe associe un rail encre à une scène glacier continue. Archivo dense donne le caractère ; aplats, espacements et filets organisent le contenu. Les projets occupent l’espace principal. Le choix final est B2 avec la flèche orange nord-est de B1 sur « Voir le projet ».

**Key Characteristics:**

- Grandes surfaces encre/glacier, orange ponctuel pour les directions et sélections.
- Grotesque variable, titres serrés et prose ouverte.
- Cadres interactifs, composition à filets et contrôles sobres.

État au 12 septembre 2026 : système extrait du code et des captures fournies. La revue juge B2 atteinte visuellement, sans correctif visuel ou fonctionnel matériel prescrit ; sa disposition reste `fix`, car le gate `hero` demeure ouvert (0,6407 sous 0,72). Ce document ne vaut ni passage du gate ni verdict `ship`. Portée et limites : [verification.md](.impeccable/review/verification.md), [finish-review.md](.impeccable/review/finish-review.md).

## Colors

**Primary :** l’encre porte rail, titres, texte et contrôles actifs ; l’orange signale flèches et sélections, sans devenir une couleur de texte courant. **Neutral :** glacier pour la scène et le texte secondaire du rail, encre atténuée pour les descriptions, filet glacier pour les séparateurs, papier froid pour recherche/encadrés/survols, texte inverse sur l’encre. Les valeurs du frontmatter proviennent de `src/folio.css`.

**The Démos autonomes Rule.** La bascule de thème concerne les démos ; elle ne recolore ni le rail ni la scène du portfolio. Leurs palettes et le chrome commun du cadre restent locaux. Les rampes du sidecar sont des aides synthétiques de visualisation, pas des tokens supplémentaires de l’application.

## Typography

Archivo est auto-hébergée sous le nom « Folio Archivo » dans `public/fonts/archivo-variable.ttf` (graisses 100–900, `font-display: swap`), avec sa licence `public/fonts/OFL-Archivo.txt`. Conserver les deux fichiers. Les rôles du frontmatter correspondent aux titres de page, titres de sections documentaires, noms du catalogue, prose et libellés de recherche. Les titres se composent avec `text-wrap: balance` ; les noms longs peuvent se couper. La prose des fiches et du parcours se limite à 70ch, les descriptions du catalogue à 68ch. Le hero et le rail gardent leur expression propre définie dans `src/folio.css`, sans imposer leurs tailles à toutes les surfaces.

## Layout

Rail fixe à 25 % et scène restante sur grand écran ; rail défilant si nécessaire. De 901 à 1100 px : rail à 27 %, gouttières de 24 px. À 900 px et moins : en-tête encre dans le flux avec menu repliable. À 760 px et moins : catalogue, fiches, parcours et compétences passent en colonne ; les domaines de compétences reviennent à la ligne. À 540 px et moins : gouttières de 18 px, descriptif de l’aperçu sous son titre et contact en colonne. Si la hauteur est au plus de 800 px sur ordinateur, les espacements du rail se resserrent.

Catalogue en lignes à deux colonnes asymétriques ; fiches et parcours avec intitulé/date à gauche du contenu. Filets et espace séparent les sections. Les démos utilisent le conteneur `project-demo` et des seuils à 600, 850 et 920 px pour recomposer grilles et en-têtes. Sur l’accueil au-dessus de 900 px, leur contenu défilant suit `clamp(440px, calc(100svh - 350px), 610px)` ; en dessous il est plafonné à 640 px. Le pied reste hors de cette région défilante.

## Elevation & Depth

**The Aplats et filets Rule.** L’enveloppe exprime ses limites par le contraste des surfaces et des filets fins, sans ombre portée ni texture raster. Les matières et ombres éventuelles d’une démo appartiennent à ce projet.

## Shapes

Grandes surfaces ouvertes ; rayons `control` pour les petits contrôles, `field` pour recherche et encadrés de lecture, `preview` pour le cadre des démos. Ce cadre découpe son contenu et laisse sa région interne défiler. Icônes SVG Lucide ; technologies descriptives en texte séparé par des barres obliques, sans transformation en badges.

## Components

Le bouton plein encre sert notamment aux états vides ; le survol éclaircit son fond. « Voir le projet » reste un lien souligné avec flèche SVG orange nord-est. Précédent/suivant utilisent les boutons carrés bordés et des noms accessibles indiquant le projet visé. Menu, liens principaux et filtres ont généralement une hauteur interactive de 44 px ; flèches du cadre et réinitialisation mesurent 40 px. Ce relevé n’est pas une certification d’accessibilité.

Le projet actif du rail combine graisse, filet orange, flèche droite et `aria-current`. Le menu mobile expose `aria-expanded`/`aria-controls` ; choisir un lien le ferme et rend le focus au contenu, Échap revient au bouton. Le lien d’évitement apparaît au focus. Un changement de route place le focus sur le contenu et remet la page en haut. La recherche possède un libellé visible et un contour `:focus-within` ; domaines et technologies exposent `aria-pressed`. Les domaines actifs sont pleins dans le catalogue, les technologies soulignées ; les compétences emploient le soulignement orange et reviennent à un état d’attente après changement de domaine.

Une sélection possède un état sémantique et un traitement visuel ; les changements de projet, résultats et compétences utilisent une annonce de statut, et les contrôles gardent un focus visible. Le contour courant fait 2 px avec un décalage de 4 px ; recherche et région défilante ont leurs traitements dédiés.

Le cadre nomme sa région défilante accessible au clavier et affiche « Données de démonstration ». Réinitialiser remet aussi le défilement interne au début ; le nom accessible demeure quand son texte visuel disparaît sur mobile. Le projet sélectionné est conservé dans le paramètre d’URL `project`. Les interactions et identités propres aux projets sont conservées. Les contrôles documentés sont ciblés ; l’accessibilité et les simulations n’ont pas fait l’objet d’un audit exhaustif.

Le mouvement extérieur se limite au filet du rail (200 ms), à la flèche et au fond des boutons fléchés (180 ms). `prefers-reduced-motion: reduce` supprime ces transitions et réduit les animations/transitions des démos à une durée quasi nulle. Les changements de projet restent immédiats.

## Do's and Don'ts

### Do:

- **Do** conserver la palette fixe du portfolio et les identités propres aux démos.
- **Do** réutiliser Archivo auto-hébergée, les titres serrés, les filets et les rayons existants.
- **Do** préserver les retours à la ligne, le défilement interne, les noms accessibles et les états de sélection.
- **Do** conserver la flèche orange nord-est sur « Voir le projet » et les annonces des changements.

### Don't:

- **Don't** remplacer une vraie démo par les données ou les contrôles illustratifs d’une maquette.
- **Don't** ajouter de texture raster ou d’ombre portée à l’enveloppe encre/glacier.
- **Don't** propager les anciens styles inutilisés ou les styles particuliers d’une démo aux surfaces du portfolio.
- **Don't** transformer les données de démonstration ou les affirmations non vérifiées en règles de design ou en preuves publiques.
