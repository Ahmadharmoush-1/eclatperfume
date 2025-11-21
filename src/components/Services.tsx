import { 
  Sparkles, Smile, Scissors, Heart, 
  AlignHorizontalJustifyCenter, Activity, 
  ShieldCheck, Zap 
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Comprehensive aesthetic treatments to enhance your smile's appearance and boost your confidence.",
  },
  {
    icon: Smile,
    title: "Endodontics",
    description: "Custom porcelain veneers that create a perfectly aligned, bright, and beautiful smile.",
  },
  {
    icon: Zap,
    title: "Teeth Whitening",
    description: "Professional whitening treatments that brighten your smile up to 8 shades in just one visit.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
  },
  {
    icon: Heart,
    title: "Smile Makeover",
    description: "Complete smile transformation combining multiple treatments for stunning results.",
  },
  {
    icon: AlignHorizontalJustifyCenter,
    title: "Hollywood Smile",
    description: "Clear aligners and traditional braces to straighten teeth discreetly and effectively.",
  },
  // {
  //   icon: Scissors,
  //   title: "Gum Contouring",
  //   description: "Laser gum reshaping to create a balanced, aesthetically pleasing smile line.",
  // },
  // {
  //   icon: Activity, 
  //   title: "Root Canal",
  //   description: "Pain-free root canal treatments to save damaged teeth and restore oral health.",
  // },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      {/* Inline Tailwind CSS */}
      <style>{`
        /* Animations */
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental solutions tailored to your unique needs
          </p>
        </div>

        {/* MOBILE SWIPE CAROUSEL + DESKTOP GRID */}
        <div
          className="
            md:grid md:grid-cols-2 lg:grid-cols-4 gap-6
            flex overflow-x-auto snap-x snap-mandatory scrollbar-hide
            space-x-4 md:space-x-0 px-1
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                transition-all duration-300 transform hover:scale-105
                animate-fade-in group snap-center min-w-[85%] sm:min-w-0
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="
                  bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 
                  group-hover:bg-primary group-hover:text-primary-foreground 
                  transition-colors duration-300
                ">
                  <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SWIPE HINT — MOBILE ONLY */}
        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden animate-pulse">
          ◀ Swipe to explore ▶
        </p>
      </div>
    </section>
  );
};

export default Services;
