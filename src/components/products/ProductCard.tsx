import { memo } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  index?: number;
}

const ProductCard = memo(({ product, priority = false, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const categoryLabel = {
    men: 'For Him',
    women: 'For Her',
    bestseller: 'Bestseller',
  };

  return (
    <div 
      className="group glass-card rounded-xl overflow-hidden transition-all duration-500 
                 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-2 hover:border-gold/50
                 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image with lazy loading */}
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          priority={priority}
          aspectRatio="square"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-gold/90 text-primary-foreground rounded-full
                          transform transition-transform duration-300 group-hover:scale-105">
            {categoryLabel[product.category]}
          </span>
        </div>

        {/* Bestseller Star */}
        {product.category === 'bestseller' && (
          <div className="absolute top-3 right-3 z-10">
            <Star className="h-5 w-5 text-gold fill-gold animate-pulse-soft" />
          </div>
        )}
        
        {/* Quick Add Button - appears on hover */}
        <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 
                        transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddToCart}
            className="w-full"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-gold">${product.price}</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddToCart}
            className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;