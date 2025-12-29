import { Gift, Sparkles } from 'lucide-react';

const AnnouncementBar = () => {
  const items = Array(6).fill(null);

  return (
    <div className="bg-background py-2.5 overflow-hidden border-b border-border/30">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((_, index) => (
          <div key={index} className="flex items-center mx-8">
            <Gift className="h-4 w-4 text-gold mr-2" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Free Tester With Every Order
            </span>
            <Sparkles className="h-3 w-3 text-gold/60 ml-2" />
          </div>
        ))}
        {items.map((_, index) => (
          <div key={`repeat-${index}`} className="flex items-center mx-8">
            <Gift className="h-4 w-4 text-gold mr-2" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Free Tester With Every Order
            </span>
            <Sparkles className="h-3 w-3 text-gold/60 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
