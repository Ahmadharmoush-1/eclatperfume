import { Gift, CheckCircle, Clock, Truck } from 'lucide-react';

const trustItems = [
  {
    icon: Gift,
    title: 'FREE TESTER',
    description: 'With Every Order',
  },
  {
    icon: CheckCircle,
    title: 'HIGH QUALITY',
    description: 'Same As Original',
  },
  {
    icon: Clock,
    title: 'LONG LASTING',
    description: 'Premium Fragrance',
  },
  {
    icon: Truck,
    title: 'FAST DELIVERY',
    description: 'Quick Shipping',
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center p-6 border border-gold/30 rounded-lg bg-card/30 
                         transition-all duration-500 hover:border-gold hover:bg-gold/5 hover:shadow-lg hover:shadow-gold/10
                         animate-fade-in-up cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 
                            transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-sm md:text-base font-semibold text-gold mb-1 tracking-wide">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection