import { Link, createFileRoute } from '@tanstack/react-router'
import products, { categories } from '@/data/products'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function formatPrice(cents: number) {
  return (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered =
    activeCategory === 'Tous'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #78716c 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
              Marchez avec
              <span className="block text-amber-400">style.</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
              Des chaussures pensées pour vous — du running au quotidien, du trail aux soirées.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#catalogue"
                className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-3.5 rounded-full transition-colors text-sm tracking-wide"
              >
                Voir le catalogue
              </a>
              <a
                href="#about"
                className="border border-stone-400 hover:border-white text-stone-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
              >
                Notre histoire
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
                alt="Chaussure hero"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-stone-900 rounded-2xl px-5 py-3 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wide">Livraison</div>
                <div className="text-sm font-black">Gratuite dès 80€</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Modèles disponibles' },
            { value: '14 ans', label: "d'expertise" },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '30 jours', label: 'Retour gratuit' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black text-amber-600">{stat.value}</div>
              <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-center mb-3">Nos catégories</h2>
        <p className="text-stone-500 text-center mb-10">Trouvez la paire parfaite pour chaque moment</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'Running', emoji: '🏃', desc: 'Performance & légèreté' },
            { name: 'Lifestyle', emoji: '🌆', desc: 'Style urbain' },
            { name: 'Trail', emoji: '🏔️', desc: 'Aventure & nature' },
            { name: 'Habillé', emoji: '👔', desc: 'Élégance & sophistication' },
            { name: 'Confort', emoji: '☁️', desc: 'Bien-être au quotidien' },
          ].map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategory(cat.name)
                document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex flex-col items-center gap-3 p-6 bg-white border border-stone-200 rounded-2xl hover:border-amber-400 hover:shadow-md transition-all group cursor-pointer"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <div>
                <div className="font-bold text-sm">{cat.name}</div>
                <div className="text-xs text-stone-500 mt-0.5">{cat.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-black">Notre catalogue</h2>
            <p className="text-stone-500 mt-1">{filtered.length} modèle{filtered.length > 1 ? 's' : ''}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <Link
              key={product.id}
              to="/products/$productId"
              params={{ productId: product.id.toString() }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:shadow-xl hover:border-stone-300 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-white/90 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black">{formatPrice(product.price)}</span>
                  <span className="text-sm text-stone-400">{product.sizes.length} tailles</span>
                </div>
                <div className="flex gap-2 mt-4">
                  {product.colors.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Notre histoire</span>
            <h2 className="text-4xl font-black mt-3 mb-6 leading-tight">Artisans de la chaussure depuis 2010</h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              Sole & Style est née d'une passion simple : trouver la chaussure parfaite pour chaque pas. Fondée par deux amis cordonniers, notre boutique sélectionne rigoureusement chaque modèle selon trois critères : confort, durabilité et style.
            </p>
            <p className="text-stone-300 leading-relaxed mb-8">
              Nous travaillons en direct avec des ateliers certifiés en Europe pour vous offrir des paires de qualité à des prix justes. Chaque chaussure que nous vendons, nous la portons d'abord nous-mêmes.
            </p>
            <div className="flex gap-6">
              {[
                { icon: '🌱', text: 'Matières responsables' },
                { icon: '🏅', text: 'Qualité garantie' },
                { icon: '🚚', text: 'Livraison rapide' },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-1 text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-stone-400 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80"
              alt="Atelier"
              className="rounded-2xl object-cover w-full aspect-square"
            />
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80"
              alt="Collection"
              className="rounded-2xl object-cover w-full aspect-square mt-8"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center mb-3">Ce que disent nos clients</h2>
        <p className="text-stone-500 text-center mb-12">Des milliers de clients satisfaits depuis 2010</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sophie M.', stars: 5, text: "Les Air Stride Pro sont incroyables ! Je cours depuis 10 ans et c'est la meilleure chaussure que j'aie jamais eue.", city: 'Bénin' },
            { name: 'Thomas R.', stars: 5, text: 'Service impeccable, livraison en 48h et les Velvet Loafer sont exactement comme sur les photos. Qualité irréprochable.', city: 'Gabon' },
            { name: 'Amira K.', stars: 4, text: 'Les Zen Walk ont transformé mes longues journées de travail. Je ne ressens plus aucune fatigue dans les jambes !', city: 'Togo' },
          ].map((review) => (
            <div key={review.name} className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex text-amber-400 mb-4 text-lg">{'★'.repeat(review.stars)}</div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="font-bold text-sm">{review.name} <span className="font-normal text-stone-400">· {review.city}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Address localisation google maps */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Notre boutique</h2>
              <p className="text-stone-600 mb-8">Visitez notre showroom pour découvrir notre collection complète et bénéficier de nos conseils experts.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-bold text-stone-900">Adresse</div>
                    <div className="text-stone-600">42 Rue de la Paix, 75000 Cotonou, Bénin</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-bold text-stone-900">Téléphone</div>
                    <div className="text-stone-600">+229 01 53 94 79 16</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <div className="font-bold text-stone-900">Horaires</div>
                    <div className="text-stone-600">
                      <div>Lun - Ven: 90h - 19h</div>
                      <div>Sam: 10h - 18h</div>
                      <div>Dim: Fermé</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1234567890123!2d2.123456789012345!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sSole%20%26%20Style%20Showroom!5e0!3m2!1sfr!2sbj!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
