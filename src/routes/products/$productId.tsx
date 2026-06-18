import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { useState } from 'react'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Produit introuvable')
    return product
  },
})

function formatPrice(cents: number) {
  return (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

function RouteComponent() {
  const product = Route.useLoaderData()
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [added, setAdded] = useState(false)

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)

  const handleAddToCart = () => {
    if (!selectedSize) return
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm mb-8 group">
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Retour au catalogue
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl object-cover aspect-square shadow-lg"
          />
          {product.badge && (
            <span className="absolute top-6 left-6 bg-amber-500 text-stone-900 text-sm font-bold px-4 py-1.5 rounded-full shadow">
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="py-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl font-black mb-3">{product.name}</h1>
          <div className="text-3xl font-black text-stone-900 mb-6">{formatPrice(product.price)}</div>

          <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

          {/* Color */}
          <div className="mb-6">
            <div className="text-sm font-bold mb-3">Coloris : <span className="font-normal text-stone-500">{selectedColor}</span></div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all ${
                    selectedColor === color
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white border-stone-300 text-stone-600 hover:border-stone-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-bold">Pointure {selectedSize ? `: EU ${selectedSize}` : ''}</div>
              <button className="text-xs text-amber-600 underline hover:text-amber-700">Guide des tailles</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl text-sm font-semibold border transition-all ${
                    selectedSize === size
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white border-stone-300 text-stone-600 hover:border-stone-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
              added
                ? 'bg-green-500 text-white'
                : selectedSize
                ? 'bg-stone-900 hover:bg-amber-600 text-white'
                : 'bg-stone-100 text-stone-400 cursor-not-allowed'
            }`}
          >
            {added ? '✓ Commande envoyée !' : !selectedSize ? 'Choisissez une pointure' : 'Commander sur whatsapp'}
          </button>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center text-xs text-stone-500">
            {[
              { icon: '🚚', label: 'Livraison gratuite', sub: 'dès 80€' },
              { icon: '↩️', label: 'Retour gratuit', sub: '30 jours' },
              { icon: '🔒', label: 'Paiement sécurisé', sub: 'SSL 256-bit' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 p-3 bg-stone-50 rounded-xl">
                <span className="text-xl">{item.icon}</span>
                <div className="font-semibold text-stone-700">{item.label}</div>
                <div>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-black mb-8">Dans la même catégorie</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/products/$productId"
                params={{ productId: p.id.toString() }}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-bold group-hover:text-amber-600 transition-colors">{p.name}</div>
                  <div className="text-stone-500 text-sm mt-1">{formatPrice(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
