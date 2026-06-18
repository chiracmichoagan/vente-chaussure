import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { p as products, c as categories } from "./router-CYvenWdT.js";
import { useState } from "react";
function formatPrice(cents) {
  return (cents / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });
}
function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const filtered = activeCategory === "Tous" ? products : products.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: {
        backgroundImage: "radial-gradient(circle at 20% 80%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #78716c 0%, transparent 50%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6", children: "Collection 2024" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight", children: [
            "Marchez avec",
            /* @__PURE__ */ jsx("span", { className: "block text-amber-400", children: "style." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-300 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-10 leading-relaxed", children: "Des chaussures pensées pour vous — du running au quotidien, du trail aux soirées." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center md:justify-start", children: [
            /* @__PURE__ */ jsx("a", { href: "#catalogue", className: "bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide", children: "Voir le catalogue" }),
            /* @__PURE__ */ jsx("a", { href: "#about", className: "border border-stone-400 hover:border-white text-stone-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm", children: "Notre histoire" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-72 h-72 md:w-96 md:h-96", children: [
          /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80", alt: "Chaussure hero", className: "w-full h-full object-cover rounded-3xl shadow-2xl" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -right-4 bg-amber-400 text-stone-900 rounded-2xl px-5 py-3 shadow-xl", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wide", children: "Livraison" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-black", children: "Gratuite dès 80€" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white border-b border-stone-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [{
      value: "500+",
      label: "Modèles disponibles"
    }, {
      value: "14 ans",
      label: "d'expertise"
    }, {
      value: "98%",
      label: "Clients satisfaits"
    }, {
      value: "30 jours",
      label: "Retour gratuit"
    }].map((stat) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-amber-600", children: stat.value }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-stone-500 mt-1", children: stat.label })
    ] }, stat.label)) }) }),
    /* @__PURE__ */ jsxs("section", { id: "categories", className: "max-w-7xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-center mb-3", children: "Nos catégories" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-center mb-10", children: "Trouvez la paire parfaite pour chaque moment" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [{
        name: "Running",
        emoji: "🏃",
        desc: "Performance & légèreté"
      }, {
        name: "Lifestyle",
        emoji: "🌆",
        desc: "Style urbain"
      }, {
        name: "Trail",
        emoji: "🏔️",
        desc: "Aventure & nature"
      }, {
        name: "Habillé",
        emoji: "👔",
        desc: "Élégance & sophistication"
      }, {
        name: "Confort",
        emoji: "☁️",
        desc: "Bien-être au quotidien"
      }].map((cat) => /* @__PURE__ */ jsxs("button", { onClick: () => {
        setActiveCategory(cat.name);
        document.getElementById("catalogue")?.scrollIntoView({
          behavior: "smooth"
        });
      }, className: "flex flex-col items-center gap-3 p-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-400 hover:shadow-md transition-all group cursor-pointer", children: [
        /* @__PURE__ */ jsx("span", { className: "text-4xl group-hover:scale-110 transition-transform", children: cat.emoji }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-sm", children: cat.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-stone-500 mt-0.5", children: cat.desc })
        ] })
      ] }, cat.name)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "catalogue", className: "max-w-7xl mx-auto px-6 py-8 pb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black", children: "Notre catalogue" }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-500 mt-1", children: [
            filtered.length,
            " modèle",
            filtered.length > 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveCategory(cat), className: `px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"}`, children: cat }, cat)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((product) => /* @__PURE__ */ jsxs(Link, { to: "/products/$productId", params: {
        productId: product.id.toString()
      }, className: "group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:shadow-xl hover:border-stone-300 transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
          /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
          product.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full", children: product.badge }),
          /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 bg-white/90 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full", children: product.category })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-1 group-hover:text-amber-600 transition-colors", children: product.name }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm mb-4 line-clamp-2", children: product.shortDescription }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-black", children: formatPrice(product.price) }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-stone-400", children: [
              product.sizes.length,
              " tailles"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: product.colors.slice(0, 3).map((c) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full", children: c }, c)) })
        ] })
      ] }, product.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "about", className: "bg-stone-900 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-sm font-bold uppercase tracking-widest", children: "Notre histoire" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black mt-3 mb-6 leading-tight", children: "Artisans de la chaussure depuis 2010" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-300 leading-relaxed mb-6", children: "Sole & Style est née d'une passion simple : trouver la chaussure parfaite pour chaque pas. Fondée par deux amis cordonniers, notre boutique sélectionne rigoureusement chaque modèle selon trois critères : confort, durabilité et style." }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-300 leading-relaxed mb-8", children: "Nous travaillons en direct avec des ateliers certifiés en Europe pour vous offrir des paires de qualité à des prix justes. Chaque chaussure que nous vendons, nous la portons d'abord nous-mêmes." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-6", children: [{
          icon: "🌱",
          text: "Matières responsables"
        }, {
          icon: "🏅",
          text: "Qualité garantie"
        }, {
          icon: "🚚",
          text: "Livraison rapide"
        }].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: item.icon }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-stone-400 font-medium", children: item.text })
        ] }, item.text)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80", alt: "Atelier", className: "rounded-2xl object-cover w-full aspect-square" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80", alt: "Collection", className: "rounded-2xl object-cover w-full aspect-square mt-8" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-6 py-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-center mb-3", children: "Ce que disent nos clients" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-center mb-12", children: "Des milliers de clients satisfaits depuis 2010" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        name: "Sophie M.",
        stars: 5,
        text: "Les Air Stride Pro sont incroyables ! Je cours depuis 10 ans et c'est la meilleure chaussure que j'aie jamais eue.",
        city: "Bénin"
      }, {
        name: "Thomas R.",
        stars: 5,
        text: "Service impeccable, livraison en 48h et les Velvet Loafer sont exactement comme sur les photos. Qualité irréprochable.",
        city: "Gabon"
      }, {
        name: "Amira K.",
        stars: 4,
        text: "Les Zen Walk ont transformé mes longues journées de travail. Je ne ressens plus aucune fatigue dans les jambes !",
        city: "Togo"
      }].map((review) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex text-amber-400 mb-4 text-lg", children: "★".repeat(review.stars) }),
        /* @__PURE__ */ jsxs("p", { className: "text-stone-600 text-sm leading-relaxed mb-4", children: [
          '"',
          review.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "font-bold text-sm", children: [
          review.name,
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-normal text-stone-400", children: [
            "· ",
            review.city
          ] })
        ] })
      ] }, review.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-stone-50 border-t border-stone-200", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black mb-6", children: "Notre boutique" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 mb-8", children: "Visitez notre showroom pour découvrir notre collection complète et bénéficier de nos conseils experts." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📍" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-stone-900", children: "Adresse" }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600", children: "42 Rue de la Paix, 75000 Cotonou, Bénin" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📞" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-stone-900", children: "Téléphone" }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600", children: "+229 01 53 94 79 16" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🕐" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-stone-900", children: "Horaires" }),
              /* @__PURE__ */ jsxs("div", { className: "text-stone-600", children: [
                /* @__PURE__ */ jsx("div", { children: "Lun - Ven: 90h - 19h" }),
                /* @__PURE__ */ jsx("div", { children: "Sam: 10h - 18h" }),
                /* @__PURE__ */ jsx("div", { children: "Dim: Fermé" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1234567890123!2d2.123456789012345!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sSole%20%26%20Style%20Showroom!5e0!3m2!1sfr!2sbj!4v1700000000000", width: "100%", height: "400", style: {
        border: 0
      }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "w-full h-96" }) })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
