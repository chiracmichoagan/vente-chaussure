# AGENTS.md — Sole & Style

Site vitrine e-commerce pour un vendeur de chaussures. Construit avec TanStack Start, React 19 et Tailwind CSS v4, déployé sur Netlify.

## Tech Stack

| Couche | Technologie |
|--------|-------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styles | Tailwind CSS v4 |
| Language | TypeScript (strict) |
| Déploiement | Netlify |

## Structure des dossiers

```
src/
├── components/
│   └── BuyButton.tsx       # Bouton d'achat (Stripe checkout)
├── data/
│   └── products.ts         # Catalogue produits + interface Product + catégories
├── lib/
│   └── stripe.ts           # Fonctions serveur Stripe
├── routes/
│   ├── __root.tsx          # Layout racine : Header + Footer + meta SEO
│   ├── index.tsx           # Page d'accueil : hero, stats, catégories, catalogue filtrable, témoignages
│   ├── products/
│   │   └── $productId.tsx  # Page produit : sélection taille/coloris, produits similaires
│   └── checkout/
│       ├── success.tsx     # Page confirmation commande
│       └── cancel.tsx      # Page annulation commande
└── styles.css              # Tailwind global + scroll-behavior smooth
```

## Conventions

- Routes : fichiers kebab-case dans `src/routes/`
- Composants : PascalCase
- Prix : stockés en centimes (ex: 14900 = 149,00 €), formatés avec `Intl.NumberFormat`
- Images : URLs Unsplash (paramètre `?w=800&q=80` pour l'optimisation)
- Langue : tout le contenu est en français

## Données produits

`src/data/products.ts` exporte :
- `products` (défaut) — tableau de 6 chaussures avec `id`, `name`, `image`, `description`, `shortDescription`, `price` (centimes), `category`, `sizes`, `colors`, `badge?`
- `categories` — tableau des catégories pour les filtres

## Ajout de produits

Ajouter un objet dans le tableau `products` de `src/data/products.ts` en respectant l'interface `Product`. Pas de base de données — les données sont statiques.

## Stripe

La variable d'environnement `STRIPE_SECRET_KEY` est nécessaire pour activer le checkout. Sans elle, le BuyButton affiche "Checkout Unavailable". Le site fonctionne normalement en mode vitrine sans Stripe.
