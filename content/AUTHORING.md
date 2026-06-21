# Guide de publication d'un article

Ce fichier explique comment publier un article sur le blog **sans ouvrir le code**, par
exemple depuis l'app Claude mobile via un connecteur GitHub.

## Principe

Publier = committer un fichier `content/blog/<slug>.mdx` sur la branche `main` du repo
`stevemorgeat/portfolio`. Le déploiement (GitHub Actions → S3 + CloudFront) part **tout seul**.

Le frontmatter est validé par un schéma strict **au build**. Si un champ est faux ou manquant,
le build échoue et **le site reste sur sa dernière version valide** — donc publier ne peut jamais
casser la prod. En cas de build rouge, corriger le frontmatter et recommiter.

## Étapes pour publier un article texte

1. Choisir un `slug` en **kebab-case** (`mon-nouvel-article`), unique, qui n'est pas un mot réservé :
   `blog`, `contact`, `about`, `projets`, `feed`, `sitemap`, `robots`.
2. Créer le fichier `content/blog/<slug>.mdx` avec le frontmatter ci-dessous.
3. Écrire le corps en Markdown sous le frontmatter.
4. Committer sur `main`. C'est tout.

## Frontmatter — article texte (le cas courant)

```yaml
---
title: "Un titre accrocheur (≥ 3 caractères)"
slug: "mon-nouvel-article"            # kebab-case, = nom du fichier
description: "Résumé pour Google et l'aperçu réseaux, entre 20 et 200 caractères."
date: "2026-06-21"                    # AAAA-MM-JJ (date du jour)
category: "note"                      # projet | techno | voyage | note
format: "article"
tags: ["react", "perso"]              # liste, peut être vide
draft: false                          # true = invisible en prod (brouillon)
featured: false                       # true = article mis "À la une" (un seul à la fois)
---

Le corps de l'article, en **Markdown**. Titres avec `##`, listes, liens, blocs de code…
```

### Règles à respecter
- Champs **obligatoires** : `title`, `slug`, `description`, `date`, `category`, `format`.
- `description` : **20 à 200 caractères** (sinon build rouge).
- `category` : exactement une valeur parmi `projet`, `techno`, `voyage`, `note`.
- **Aucun champ inconnu** n'est autorisé (le schéma est strict).
- `featured: true` ne doit être présent que sur **un seul** article (le plus récent à mettre en avant).
- Le temps de lecture est calculé automatiquement, ne pas l'écrire.

## Autres formats (référence)

**Lien externe** (format `link`) :
```yaml
format: "link"
href: "https://exemple.com/ressource"   # URL valide obligatoire
```

**Galerie photo** (format `gallery`) — nécessite de committer aussi les images dans
`public/gallery/`, donc **plutôt depuis Claude Code que mobile** :
```yaml
format: "gallery"
layout: "grid"                # "grid" (galerie simple) ou "manga" (planche BD)
images:
  - { src: "/gallery/photo.webp", caption: "Légende" }
```
Le mode `layout: "manga"` accepte par image : `size` (`wide`|`tall`|`sq`),
`narration`, `pos` (`tl`|`bl`), `sfx`, `sfxPos` (`r`|`t`).

## Conseil de style (le ton du blog)
- Titres **« putaclic mais classe »**, orientés tech / récit, pas client-spécifiques.
- Première personne, honnête, concret. Des **mini bouts de pseudo-code** quand ça éclaire un choix.
- Pas de langage d'évolution (« amélioré », « refactorisé ») — décrire ce qui **est**.
