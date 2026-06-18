import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-5">
      <div className="rounded-3xl p-12 bg-white border border-stone-200 shadow-lg text-center max-w-lg">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-black mb-4">Commande confirmée !</h1>
        <p className="text-stone-600 mb-8">
          Merci pour votre achat. Votre commande est en cours de préparation et sera expédiée sous 24h.
        </p>
        <Link
          to="/"
          className="inline-block bg-stone-900 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          Continuer mes achats
        </Link>
      </div>
    </div>
  )
}
