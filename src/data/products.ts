export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  sizes: number[]
  colors: string[]
  badge?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Air Stride Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description:
      'Conçues pour les coureurs exigeants, les Air Stride Pro offrent un amorti exceptionnel grâce à leur semelle en mousse réactive. La tige en mesh respirant assure une ventilation optimale, tandis que la semelle extérieure en caoutchouc haute résistance garantit une adhérence parfaite sur toutes les surfaces. Idéales pour les longues distances comme pour les sprints.',
    shortDescription: 'Chaussure de running haut de gamme avec amorti réactif.',
    price: 14900,
    category: 'Running',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ['Blanc/Rouge', 'Noir/Bleu', 'Gris/Orange'],
    badge: 'Nouveauté',
  },
  {
    id: 2,
    name: 'Urban Classic',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
    description:
      "Le style intemporel rencontre le confort moderne avec les Urban Classic. Inspirées du design des années 80, ces sneakers en cuir pleine fleur sont rehaussées de détails contrastés et d'une semelle légère en EVA. Portez-les avec un jean ou un costume décontracté pour un look toujours impeccable.",
    shortDescription: 'Sneakers en cuir au design intemporel pour le quotidien.',
    price: 12500,
    category: 'Lifestyle',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: ['Blanc/Noir', 'Camel', 'Marine'],
  },
  {
    id: 3,
    name: 'Trail Blazer X',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    description:
      "Affrontez tous les terrains avec les Trail Blazer X. Dotées d'une semelle Vibram ultra-adhérente et d'une membrane imperméable, ces chaussures de trail vous accompagnent quelle que soit la météo. Le système de laçage rapide Boa® vous permet de les ajuster parfaitement même avec des gants.",
    shortDescription: 'Chaussure de trail imperméable pour les aventuriers.',
    price: 17900,
    category: 'Trail',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: ['Vert/Noir', 'Orange/Gris'],
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Velvet Loafer',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80',
    description:
      "L'élégance sans compromis. Les Velvet Loafer sont taillées dans un velours de la plus haute qualité et montées à la main dans notre atelier parisien. La doublure en cuir de veau et la semelle en cuir cousue à la main font de ces mocassins le summum du raffinement. Un classique indémodable pour les occasions spéciales.",
    shortDescription: 'Mocassins en velours faits main, pour les grandes occasions.',
    price: 24500,
    category: 'Habillé',
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Bordeaux', 'Bleu nuit', 'Noir'],
    badge: 'Artisanal',
  },
  {
    id: 5,
    name: 'Street Dunk Low',
    image: 'https://images.unsplash.com/photo-1584735175097-42e7f14218bb?w=800&q=80',
    description:
      'Née sur les terrains de basket, adoptée dans les rues. La Street Dunk Low revisite les codes de la chaussure de sport avec une tige mi-haute structurée, une semelle vulcanisée et des détails colorés audacieux. Disponible en éditions limitées, chaque colorway raconte une histoire unique.',
    shortDescription: 'Sneakers mi-hautes inspirées du basket, style street incontournable.',
    price: 11900,
    category: 'Lifestyle',
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ['Blanc/Vert', 'Noir/Or', 'Rouge/Blanc'],
  },
  {
    id: 6,
    name: 'Zen Walk',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    description:
      "Pour ceux qui font des milliers de pas par jour, les Zen Walk sont la solution ultime. Leur semelle anatomique en gel viscoélastique épouse la forme du pied et réduit la fatigue. La tige en tissu recyclé certifié est à la fois légère, résistante et respectueuse de l'environnement. Le confort intelligent.",
    shortDescription: 'Chaussures de marche ergonomiques en matières recyclées.',
    price: 9900,
    category: 'Confort',
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: ['Beige/Blanc', 'Gris ardoise', 'Marine/Crème'],
    badge: 'Éco-responsable',
  },
]

export const categories = ['Tous', 'Running', 'Lifestyle', 'Trail', 'Habillé', 'Confort']

export default products
