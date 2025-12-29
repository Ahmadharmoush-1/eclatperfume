import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  // Men's Perfumes
  {
    id: 'men-1',
    name: 'Sauvage',
    price: 45,
    image: '/photos/men/sauvage.jpg',
    category: 'men',
    description: 'A bold, masculine fragrance with notes of leather and wood',
  },
  {
    id: 'men-2',
    name: 'Azzaro Most Wanted',
    price: 42,
    image: '/photos/men/azzaromostwanted,jpg.jpg',
    category: 'men',
    description: 'Fresh aquatic notes perfect for everyday wear',
  },
  {
    id: 'men-3',
    name: 'Bleu de Chanel',
    price: 65,
    image: '/photos/men/bluedechanel.jpg',
    category: 'men',
    description: 'Premium Arabian oud with rich, deep tones',
  },
  {
    id: 'men-4',
    name: 'Creed Aventus',
    price: 55,
    image: '/photos/men/creedavebtus.jpg',
    category: 'men',
    description: 'Warm tobacco and vanilla blend for evening occasions',
  },
  {
    id: 'men-5',
    name: 'La Nuit De L\'Homme',
    price: 48,
    image: '/photos/men/LaNuitDeLHomme.jpg',
    category: 'men',
    description: 'Wild and untamed with spicy pepper notes',
  },
  {
    id: 'men-6',
    name: 'Stronger With You',
    price: 52,
    image: '/photos/men/stroingerwithyou.jpg',
    category: 'men',
    description: 'Sophisticated nightlife fragrance with amber base',
  },

  // Women's Perfumes
  {
    id: 'women-1',
    name: 'Black Opium Yves SaintLaurent ',
    price: 48,
    image: '/photos/women/BlackOpiumYvesSaintLaurent.jpg',
    category: 'women',
    description: 'Delicate Bulgarian rose with soft musk',
  },
  {
    id: 'women-2',
    name: 'Coco Mademoiselle Chanel EDP',
    price: 55,
    image: '/photos/women/CocoMademoiselleChanelEDP.jpg',
    category: 'women',
    description: 'Exotic orchid bloom with creamy vanilla',
  },
  {
    id: 'women-3',
    name: 'Delina Exclusif Parfums de Marly',
    price: 42,
    image: '/photos/women/DelinaExclusifParfumsdeMarly.jpg',
    category: 'women',
    description: 'Light floral with Japanese cherry notes',
  },
  {
    id: 'women-4',
    name: 'La Vie Est Belle Lancome',
    price: 58,
    image: '/photos/women/LaVieEstBelleLancome.jpg',
    category: 'women',
    description: 'Warm amber and honey sunset fragrance',
  },
  {
    id: 'women-5',
    name: 'Libre Yves Saint Laurent',
    price: 45,
    image: '/photos/women/LibreYvesSaintLaurent.jpg',
    category: 'women',
    description: 'Night-blooming jasmine with soft sandalwood',
  },
  {
    id: 'women-6',
    name: 'La Femme',
    price: 62,
    image: '/assets/perfume-women-1.jpg',
    category: 'women',
    description: 'Timeless feminine elegance in a bottle',
  },

  // Bestsellers
   {
    id: 'best-1',
    name: 'Sauvage',
    price: 45,
    image: '/photos/men/sauvage.jpg',
    category: 'men',
    description: 'A bold, masculine fragrance with notes of leather and wood',
  },
    {
    id: 'best-2',
    name: 'Bleu de Chanel',
    price: 65,
    image: '/photos/men/bluedechanel.jpg',
    category: 'men',
    description: 'Premium Arabian oud with rich, deep tones',
  },
  {
    id: 'best-3',
    name: 'Black Opium Yves SaintLaurent ',
    price: 48,
    image: '/photos/women/BlackOpiumYvesSaintLaurent.jpg',
    category: 'women',
    description: 'Delicate Bulgarian rose with soft musk',
  },
  {
    id: 'best-4',
    name: 'Libre Yves Saint Laurent',
    price: 45,
    image: '/photos/women/LibreYvesSaintLaurent.jpg',
    category: 'women',
    description: 'Night-blooming jasmine with soft sandalwood',
  },
];

export const getProductsByCategory = (
  category: 'men' | 'women' | 'bestseller'
) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
