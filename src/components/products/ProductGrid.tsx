import { Product } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import { usePagination } from '@/hooks/usePagination';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  itemsPerPage?: number;
}

const ProductGrid = ({ products, title, subtitle, itemsPerPage = 8 }: ProductGridProps) => {
  const { currentItems, hasMore, loadMore } = usePagination({
    items: products,
    itemsPerPage,
  });

  return (
    <section className="py-12 md:py-16">
      {(title || subtitle) && (
        <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              <span className="gradient-gold-text">{title}</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {currentItems.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            priority={index < 4}
            index={index % itemsPerPage}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={loadMore}
            className="group hover:scale-105 transition-transform duration-300"
          >
            Load More Products
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
