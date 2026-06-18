import { createRootRoute, HeadContent, Scripts, Link, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sole & Style — Chaussures de qualité" },
      { name: "description", content: "Découvrez notre sélection de chaussures pour tous les styles et toutes les occasions." }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-stone-50 text-stone-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      children,
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "👟" }),
      /* @__PURE__ */ jsx("span", { className: "font-black text-xl tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors", children: "Sole & Style" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium text-stone-600", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-stone-900 transition-colors", children: "Accueil" }),
      /* @__PURE__ */ jsx("a", { href: "#categories", className: "hover:text-stone-900 transition-colors", children: "Catalogue" }),
      /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-stone-900 transition-colors", children: "À propos" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-stone-900 transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "#contact",
        className: "hidden md:inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors",
        children: "Nous contacter"
      }
    ) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { id: "contact", className: "bg-stone-900 text-stone-300 mt-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "👟" }),
          /* @__PURE__ */ jsx("span", { className: "font-black text-xl text-white", children: "Sole & Style" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "Votre destination pour des chaussures de qualité, alliant confort, style et durabilité depuis 2010." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-4", children: "Liens utiles" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Catalogue" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#categories", className: "hover:text-white transition-colors", children: "Catégories" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Livraison & retours" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Guide des tailles" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "📍 12 rue de la Mode, Cotonou 75001" }),
          /* @__PURE__ */ jsx("li", { children: "📞 +229 01 53 94 79 16" }),
          /* @__PURE__ */ jsx("li", { children: "✉️ michoaganchiracdona@gmail.com" }),
          /* @__PURE__ */ jsx("li", { className: "pt-2", children: "Lundi–Samedi : 90h–19h" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-stone-700 mt-12 pt-6 text-xs text-center text-stone-500", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sole & Style. Tous droits réservés."
    ] })
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./index-BRlMUsWa.js");
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const products = [
  {
    id: 1,
    name: "Air Stride Pro",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    description: "Conçues pour les coureurs exigeants, les Air Stride Pro offrent un amorti exceptionnel grâce à leur semelle en mousse réactive. La tige en mesh respirant assure une ventilation optimale, tandis que la semelle extérieure en caoutchouc haute résistance garantit une adhérence parfaite sur toutes les surfaces. Idéales pour les longues distances comme pour les sprints.",
    shortDescription: "Chaussure de running haut de gamme avec amorti réactif.",
    price: 14900,
    category: "Running",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["Blanc/Rouge", "Noir/Bleu", "Gris/Orange"],
    badge: "Nouveauté"
  },
  {
    id: 2,
    name: "Urban Classic",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
    description: "Le style intemporel rencontre le confort moderne avec les Urban Classic. Inspirées du design des années 80, ces sneakers en cuir pleine fleur sont rehaussées de détails contrastés et d'une semelle légère en EVA. Portez-les avec un jean ou un costume décontracté pour un look toujours impeccable.",
    shortDescription: "Sneakers en cuir au design intemporel pour le quotidien.",
    price: 12500,
    category: "Lifestyle",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ["Blanc/Noir", "Camel", "Marine"]
  },
  {
    id: 3,
    name: "Trail Blazer X",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    description: "Affrontez tous les terrains avec les Trail Blazer X. Dotées d'une semelle Vibram ultra-adhérente et d'une membrane imperméable, ces chaussures de trail vous accompagnent quelle que soit la météo. Le système de laçage rapide Boa® vous permet de les ajuster parfaitement même avec des gants.",
    shortDescription: "Chaussure de trail imperméable pour les aventuriers.",
    price: 17900,
    category: "Trail",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: ["Vert/Noir", "Orange/Gris"],
    badge: "Bestseller"
  },
  {
    id: 4,
    name: "Velvet Loafer",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80",
    description: "L'élégance sans compromis. Les Velvet Loafer sont taillées dans un velours de la plus haute qualité et montées à la main dans notre atelier parisien. La doublure en cuir de veau et la semelle en cuir cousue à la main font de ces mocassins le summum du raffinement. Un classique indémodable pour les occasions spéciales.",
    shortDescription: "Mocassins en velours faits main, pour les grandes occasions.",
    price: 24500,
    category: "Habillé",
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Bordeaux", "Bleu nuit", "Noir"],
    badge: "Artisanal"
  },
  {
    id: 5,
    name: "Street Dunk Low",
    image: "https://images.unsplash.com/photo-1584735175097-42e7f14218bb?w=800&q=80",
    description: "Née sur les terrains de basket, adoptée dans les rues. La Street Dunk Low revisite les codes de la chaussure de sport avec une tige mi-haute structurée, une semelle vulcanisée et des détails colorés audacieux. Disponible en éditions limitées, chaque colorway raconte une histoire unique.",
    shortDescription: "Sneakers mi-hautes inspirées du basket, style street incontournable.",
    price: 11900,
    category: "Lifestyle",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["Blanc/Vert", "Noir/Or", "Rouge/Blanc"]
  },
  {
    id: 6,
    name: "Zen Walk",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    description: "Pour ceux qui font des milliers de pas par jour, les Zen Walk sont la solution ultime. Leur semelle anatomique en gel viscoélastique épouse la forme du pied et réduit la fatigue. La tige en tissu recyclé certifié est à la fois légère, résistante et respectueuse de l'environnement. Le confort intelligent.",
    shortDescription: "Chaussures de marche ergonomiques en matières recyclées.",
    price: 9900,
    category: "Confort",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: ["Beige/Blanc", "Gris ardoise", "Marine/Crème"],
    badge: "Éco-responsable"
  }
];
const categories = ["Tous", "Running", "Lifestyle", "Trail", "Habillé", "Confort"];
const $$splitComponentImporter$2 = () => import("./_productId-CVICgBh4.js");
const Route$2 = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((p) => p.id === +params.productId);
    if (!product) throw new Error("Produit introuvable");
    return product;
  }
});
const $$splitComponentImporter$1 = () => import("./success-CaYwQiqZ.js");
const Route$1 = createFileRoute("/checkout/success")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cancel--xeF_Wjw.js");
const Route = createFileRoute("/checkout/cancel")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const ProductsProductIdRoute = Route$2.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$4
});
const CheckoutSuccessRoute = Route$1.update({
  id: "/checkout/success",
  path: "/checkout/success",
  getParentRoute: () => Route$4
});
const CheckoutCancelRoute = Route.update({
  id: "/checkout/cancel",
  path: "/checkout/cancel",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  CheckoutCancelRoute,
  CheckoutSuccessRoute,
  ProductsProductIdRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  categories as c,
  products as p,
  router as r
};
