# Exports du CV

Le contenu et le design ont une source commune : `src/pages/CV.tsx`,
`src/data/cv.ts` et `src/pages/cv.css`. Aucun template HTML parallèle.

Deux fichiers sont générés depuis la feuille affichée sur `/cv` :

- **PDF A4** : une page, réduction uniforme et centrage horizontal.
- **PDF format web** : une page aux dimensions de la preview desktop, sans réduction.

Le texte reste sélectionnable et les polices sont embarquées. Le format web est
plus haut qu’une feuille A4 ; la version A4 réduit donc aussi la taille du texte.

## Utilisation

Après `npm ci`, installer Chromium une fois avec `npm run setup:pdf`.
Un Chrome déjà installé peut aussi servir de moteur local ; `PLAYWRIGHT_CHANNEL`
permet de choisir explicitement un canal compatible Playwright.

- `npm run dev` : chaque téléchargement régénère les PDF depuis la page actuelle.
- `npm run build:pdf` : régénère les deux fichiers dans `public/`.
- `npm run build` : vérifie TypeScript, génère les PDF puis construit le site.

La CI installe Chromium avant le build. Les PDF générés sont ignorés par Git,
mais inclus dans `dist/`. Le site publié distribue ces fichiers sans serveur PDF.
Les URL de téléchargement respectent la base Vite, y compris `/Portefolio/`.

## Vérification

Le générateur attend le chargement de la police locale et vérifie que les
dimensions de la feuille restent identiques en mode impression. Une erreur
interrompt le build ; en développement, elle produit une réponse explicite.

Pour enregistrer la capture de référence, le texte et les dimensions de contrôle :

```sh
CV_PDF_DIAGNOSTICS_DIR=tmp/pdfs/cv-check npm run build:pdf
```

API de rendu : [Playwright PDF](https://playwright.dev/docs/api/class-page#page-pdf).
Serveur temporaire : [API JavaScript Vite](https://vite.dev/guide/api-javascript.html).
