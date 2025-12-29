import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/photos/hero-luxury.jpg"
          alt="Luxury Perfume Boutique"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Luxury Badge */}
          <div className="animate-fade-in-down flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-gold animate-pulse-soft" />
            <span className="text-sm text-gold font-medium tracking-[0.2em] uppercase">
              Luxury Redefined
            </span>
            <Sparkles className="h-4 w-4 text-gold animate-pulse-soft" />
          </div>

          {/* Main Title */}
          <h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-gold">Éclat Parfum</span>
            <br />
            <span className="text-gold tracking-widest">BEIRUT</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-champagne/80 font-light tracking-wide animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Where Elegance Meets Affordability
          </p>

          {/* CTA Button */}
          <div 
            className="pt-6 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <Link to="/bestsellers">
              <Button 
                variant="secondary" 
                size="lg" 
                className="group px-10 py-6 text-lg tracking-wider uppercase hover:scale-105 transition-transform duration-300"
              >
                Discover Collection
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;