import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
// import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Dr.Sarah
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Expert Cosmetic Dentist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Transforming smiles with advanced cosmetic dentistry. Over years of experience in creating beautiful, confident smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Doctor Image - Circular */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <img
  src="/photos/droussama.jpg"
  alt="Dr.Ossama Bachour - Expert Cosmetic Dentist"
  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-8 border-primary-light shadow-2xl"
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
