import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function CheckoutSuccess() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-[70vh] flex items-center justify-center p-5", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl p-12 bg-white border border-stone-200 shadow-lg text-center max-w-lg", children: [
    /* @__PURE__ */ jsx("div", { className: "text-6xl mb-6", children: "✅" }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black mb-4", children: "Commande confirmée !" }),
    /* @__PURE__ */ jsx("p", { className: "text-stone-600 mb-8", children: "Merci pour votre achat. Votre commande est en cours de préparation et sera expédiée sous 24h." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block bg-stone-900 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full transition-colors", children: "Continuer mes achats" })
  ] }) });
}
export {
  CheckoutSuccess as component
};
