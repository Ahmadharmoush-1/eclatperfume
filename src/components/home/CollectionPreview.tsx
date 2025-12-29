import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

interface CollectionPreviewProps {
  title: string;
  subtitle: string;
  products: Product[];
  link: string;
  linkLabel?: string;
}

const CollectionPreview = ({
  title,
  subtitle,
  products,
  link,
  linkLabel = 'View All',
}: CollectionPreviewProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4 animate-fade-in-up">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-gold-text">{title}</span>
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Link to={link}>
            <Button variant="secondary" className="group hover:scale-105 transition-transform duration-300">
              {linkLabel}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              priority={index < 2}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;