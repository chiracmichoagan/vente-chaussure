import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { R as Route, p as products } from "./router-CYvenWdT.js";
import { useState } from "react";
function formatPrice(cents) {
  return (cents / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });
}
function RouteComponent() {
  const product = Route.useLoaderData();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const handleAddToCart = () => {
    if (!selectedSize) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-10", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm mb-8 group", children: [
      /* @__PURE__ */ jsx("span", { className: "group-hover:-translate-x-1 transition-transform", children: "←" }),
      "Retour au catalogue"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "w-full rounded-3xl object-cover aspect-square shadow-lg" }),
        product.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-6 left-6 bg-amber-500 text-stone-900 text-sm font-bold px-4 py-1.5 rounded-full shadow", children: product.badge })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full", children: product.category }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black mb-3", children: product.name }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-stone-900 mb-6", children: formatPrice(product.price) }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-600 leading-relaxed mb-8", children: product.description }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold mb-3", children: [
            "Coloris : ",
            /* @__PURE__ */ jsx("span", { className: "font-normal text-stone-500", children: selectedColor })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((color) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedColor(color), className: `px-4 py-2 rounded-full text-sm border transition-all ${selectedColor === color ? "bg-stone-900 text-white border-stone-900" : "bg-white border-stone-300 text-stone-600 hover:border-stone-600"}`, children: color }, color)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold", children: [
              "Pointure ",
              selectedSize ? `: EU ${selectedSize}` : ""
            ] }),
            /* @__PURE__ */ jsx("button", { className: "text-xs text-amber-600 underline hover:text-amber-700", children: "Guide des tailles" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((size) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedSize(size), className: `w-12 h-12 rounded-xl text-sm font-semibold border transition-all ${selectedSize === size ? "bg-stone-900 text-white border-stone-900" : "bg-white border-stone-300 text-stone-600 hover:border-stone-600"}`, children: size }, size)) })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: handleAddToCart, disabled: !selectedSize, className: `w-full py-4 rounded-2xl font-bold text-lg transition-all ${added ? "bg-green-500 text-white" : selectedSize ? "bg-stone-900 hover:bg-amber-600 text-white" : "bg-stone-100 text-stone-400 cursor-not-allowed"}`, children: added ? "✓ Commande envoyée !" : !selectedSize ? "Choisissez une pointure" : "Commander sur whatsapp" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 mt-8 text-center text-xs text-stone-500", children: [{
          icon: "🚚",
          label: "Livraison gratuite",
          sub: "dès 80€"
        }, {
          icon: "↩️",
          label: "Retour gratuit",
          sub: "30 jours"
        }, {
          icon: "🔒",
          label: "Paiement sécurisé",
          sub: "SSL 256-bit"
        }].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl", children: item.icon }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-stone-700", children: item.label }),
          /* @__PURE__ */ jsx("div", { children: item.sub })
        ] }, item.label)) })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black mb-8", children: "Dans la même catégorie" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: related.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/products/$productId", params: {
        productId: p.id.toString()
      }, className: "group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold group-hover:text-amber-600 transition-colors", children: p.name }),
          /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-sm mt-1", children: formatPrice(p.price) })
        ] })
      ] }, p.id)) })
    ] })
  ] });
}
export {
  RouteComponent as component
};
