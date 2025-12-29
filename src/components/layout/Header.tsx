import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  Home,
  HelpCircle,
  Mail,
  Filter,
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'FAQ', icon: HelpCircle },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const categoryLinks = [
    { href: '/bestsellers', label: 'All Products', active: true },
    { href: '/bestsellers', label: 'Private Collection' },
    { href: '/men', label: 'men' },
    { href: '/women', label: 'women' },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/30">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <h1 className="font-serif text-lg font-bold text-gold tracking-widest">
                ÉCLAT
              </h1>
              <span className="text-[8px] tracking-[0.28em] text-gold/70 uppercase">
                Parfum
              </span>
            </Link>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingBag className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gold text-black text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          'fixed inset-0 bg-black/70 z-[60] transition-opacity',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* SIDEBAR */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-[300px] z-[70]',
          'bg-gradient-to-b from-[#0b0b0b] via-[#0f0f0f] to-[#0b0b0b]',
          'transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gold/70 hover:text-gold"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="pt-8 pb-6">
          <h2 className="text-center font-serif text-2xl text-gold">
            Menu
          </h2>
        </div>

        {/* NAV LINKS */}
        <nav className="px-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                flex items-center gap-3 px-4 py-2.5 rounded-lg
                bg-gradient-to-b from-[#151515] to-[#0f0f0f]
                border border-gold/20
                text-gold text-sm
                hover:border-gold/50 transition
              "
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* FILTER */}
        <div className="px-5 mt-6">
          <div className="flex items-center gap-2 text-gold/70 mb-3">
            <Filter className="h-3.5 w-3.5" />
            <span className="text-[11px] tracking-widest uppercase">
              Filter by Category
            </span>
          </div>

          <div className="space-y-2">
            {categoryLinks.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm transition',
                  item.active
                    ? 'bg-gold text-black font-semibold'
                    : 'bg-gradient-to-b from-[#1a1a1a] to-[#121212] text-gold/80 hover:bg-gold/10'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full px-5 pb-6">
          <div className="h-px bg-gold/20 mb-3" />
          <p className="text-gold/70 text-xs">
            Making Luxury Affordable
          </p>
          <p className="text-gold/40 text-[10px] mt-1">
            © 2012 Éclat Parfum Beirut
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;
