# 📝 Guide de maintenance — Skills Data

Ce fichier explique comment ajouter ou modifier les compétences et projets du portfolio.

## 📂 Structure

Le fichier `skills.ts` contient toutes les données centralisées :
- **`skillsData`** : Les catégories de compétences avec leurs icônes et listes de technologies
- **`techToProjects`** : Le mapping entre chaque technologie et les projets qui l'utilisent
- **`tabs`** : L'ordre d'affichage des onglets

---

## ✨ Comment ajouter une nouvelle technologie

### 1️⃣ Ajouter la techno dans une catégorie

Éditer `skillsData` et ajouter la technologie dans le tableau `skills` de la catégorie appropriée :

```typescript
frontend: {
  icon: Palette,
  label: "Frontend",
  skills: ["React", "Vite", "Nouvelle Techno"] // ← Ajouter ici
}
```

### 2️⃣ Ajouter les projets associés (optionnel)

Si la technologie est utilisée dans des projets, ajouter une entrée dans `techToProjects` :

```typescript
export const techToProjects: Record<string, string[]> = {
  // ... autres technologies
  "Nouvelle Techno": ["Projet Alpha", "Projet Beta"]
};
```

**Important** : Si une technologie n'a pas d'entrée dans `techToProjects`, elle sera automatiquement désactivée (grisée, non cliquable) dans l'interface.

---

## 🎨 Comment ajouter une nouvelle catégorie

### 1️⃣ Choisir une icône

Consulter [Lucide Icons](https://lucide.dev/) et importer l'icône dans `skills.ts` :

```typescript
import { Code2, Palette, Server, Database, Rocket, Wrench, NouvelleIcon } from "lucide-react";
```

### 2️⃣ Ajouter la catégorie

Éditer le type et ajouter dans `skillsData` :

```typescript
export type SkillCategory = "languages" | "frontend" | "backend" | "databases" | "devops" | "tools" | "nouvelle";

export const skillsData: SkillsData = {
  // ... autres catégories
  nouvelle: {
    icon: NouvelleIcon,
    label: "Nouvelle Catégorie",
    skills: ["Tech1", "Tech2", "Tech3"]
  }
};
```

### 3️⃣ Ajouter dans les tabs

```typescript
export const tabs: SkillCategory[] = ["languages", "frontend", "backend", "databases", "devops", "tools", "nouvelle"];
```

---

## 🔧 Comment modifier un nom de projet

Si un projet change de nom, il suffit de modifier toutes ses occurrences dans `techToProjects` :

**Avant** :
```typescript
"React": ["Ancien Nom", "Projet B"],
"Docker": ["Ancien Nom", "Projet C"]
```

**Après** :
```typescript
"React": ["Nouveau Nom", "Projet B"],
"Docker": ["Nouveau Nom", "Projet C"]
```

---

## 💡 Bonnes pratiques

- ✅ **Noms cohérents** : Utiliser les mêmes noms de projets partout dans `techToProjects`
- ✅ **Ordre alphabétique** : Garder les technologies dans un ordre logique (langages, frameworks, tools)
- ✅ **Commentaires** : Ajouter des commentaires pour regrouper visuellement (ex: `// Langages`, `// Frontend`)
- ✅ **Tout dans skills.ts** : Ne jamais mettre de données en dur dans Home.tsx, toujours les centraliser ici

---

## 🎯 Exemple complet : Ajouter "Next.js"

```typescript
// 1. Ajouter dans frontend
frontend: {
  icon: Palette,
  label: "Frontend",
  skills: ["React", "Next.js", "Vite", /* ... */]
},

// 2. Ajouter les projets qui l'utilisent
export const techToProjects: Record<string, string[]> = {
  // ...
  "Next.js": ["Projet E-commerce", "Dashboard Admin"]
};
```

C'est tout ! 🚀 Le portfolio affichera automatiquement la techno et permettra de cliquer dessus pour voir les projets.
