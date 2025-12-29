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

  return (
    <div 
      className="group relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden 
                 transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10
                 animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image Container - Compact with object-contain */}
      <div className="relative aspect-square p-2 md:p-3 bg-gradient-to-b from-background/50 to-transparent">
        <div className="relative w-full h-full flex items-center justify-center">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            priority={priority}
            className="!object-contain w-[85%] h-[85%] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Bestseller Badge */}
        {product.category === 'bestseller' && (
          <div className="absolute top-2 right-2 z-10">
            <Star className="h-4 w-4 text-gold fill-gold" />
          </div>
        )}

        {/* Category Badge - Mobile optimized */}
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2 py-0.5 text-[10px] md:text-xs font-medium bg-gold/90 text-primary-foreground rounded-full">
            {product.category === 'men' ? 'Him' : product.category === 'women' ? 'Her' : '★'}
          </span>
        </div>
      </div>

      {/* Content - Compact */}
      <div className="p-2 md:p-3 pt-1 space-y-1.5 md:space-y-2">
        {/* Product Name - 1-2 lines with ellipsis */}
        <h3 className="font-serif text-sm md:text-base font-semibold text-foreground leading-tight 
                       line-clamp-1 md:line-clamp-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Price & Add Button Row */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-base md:text-lg font-bold text-gold">${product.price}</span>
          
          {/* Compact Add Button */}
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddToCart}
            className="h-7 md:h-8 px-2 md:px-3 text-xs md:text-sm"
          >
            <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 md:mr-1" />
            <span className="hidden md:inline">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
