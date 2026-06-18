import { HeadContent, Scripts, createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Sole & Style — Chaussures de qualité' },
      { name: 'description', content: 'Découvrez notre sélection de chaussures pour tous les styles et toutes les occasions.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body className="bg-stone-50 text-stone-900">
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">👟</span>
          <span className="font-black text-xl tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">
            Sole & Style
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link to="/" className="hover:text-stone-900 transition-colors">Accueil</Link>
          <a href="#categories" className="hover:text-stone-900 transition-colors">Catalogue</a>
          {/* <a href="#categories" className="hover:text-stone-900 transition-colors">Catégories</a> */}
          <a href="#about" className="hover:text-stone-900 transition-colors">À propos</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👟</span>
              <span className="font-black text-xl text-white">Sole & Style</span>
            </div>
            <p className="text-sm leading-relaxed">
              Votre destination pour des chaussures de qualité, alliant confort, style et durabilité depuis 2010.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Catalogue</Link></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Catégories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livraison & retours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guide des tailles</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 12 rue de la Mode, Cotonou 75001</li>
              <li>📞 +229 01 53 94 79 16</li>
              <li>✉️ michoaganchiracdona@gmail.com</li>
              <li className="pt-2">Lundi–Samedi : 90h–19h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-12 pt-6 text-xs text-center text-stone-500">
          © {new Date().getFullYear()} Sole & Style. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
