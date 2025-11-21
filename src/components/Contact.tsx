import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our friendly team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clinic Address</h3>
                  <p className="text-muted-foreground">
                    Nabatieh<br />
                    <br />
                     ,Lebanon
                  </p>  <p className="text-muted-foreground">
                    Beirut , Luxury Clinic<br />
                    <br />
                     ,Lebanon
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone Number</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    <Button
                      onClick={handleWhatsApp}
                      variant="link"
                      className="p-0 h-auto text-primary hover:text-primary-hover"
                    >
                      <MessageCircle size={16} className="mr-1" />
                      WhatsApp Available
                    </Button>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Address</h3>
                  <p className="text-muted-foreground">
                    info@drsarahfarhatdib.com<br />
                    appointments@drsarahfarhatdib.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clinic Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow us</h3>
              <div className="flex gap-4">
                <button className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                  <Facebook className="text-primary hover:text-primary-foreground" size={24} />
                </button>
                <button className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                  <Instagram className="text-primary hover:text-primary-foreground" size={24} />
                </button>
                <button className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="text-primary hover:text-primary-foreground" size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215783034568!2d-73.98784668459395!3d40.748817379328115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
