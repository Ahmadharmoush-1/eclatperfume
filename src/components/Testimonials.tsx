import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Emily Johnson",
    text: "Dr.Sarah completely transformed my smile! The veneers look so natural, and the entire process was comfortable and professional. I can't stop smiling now!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Best dental experience I've ever had. The teeth whitening results exceeded my expectations, and the staff made me feel completely at ease throughout the treatment.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    text: "After years of feeling self-conscious about my smile,Dr.Sarah  smile makeover gave me the confidence I always wanted. The results are absolutely stunning!",
    rating: 5,
  },
  {
    name: "David Martinez",
    text: "Professional, caring, and highly skilled. My dental implants look and feel just like real teeth. Dr.Sarah  is truly an artist in cosmetic dentistry.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied patients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-primary fill-current" size={28} />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="text-lg font-semibold text-primary text-center">
              - {testimonials[currentIndex].name}
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
