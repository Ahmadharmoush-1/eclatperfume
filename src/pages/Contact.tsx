import { Helmet } from 'react-helmet-async';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '96170123456';

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your perfumes.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Get in touch with Eclat Parfum. Contact us via WhatsApp for orders, inquiries, and customer support. Fast response guaranteed."
        />
      </Helmet>

      <Layout>
        <div className="container py-12 md:py-16">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-gold-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out via WhatsApp 
              for the fastest response.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* WhatsApp CTA */}
            <div className="glass-card rounded-xl p-8 text-center mb-12 animate-fade-up">
              <div className="h-20 w-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-[#25D366]" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Chat With Us on WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Our team is ready to help you find the perfect fragrance. 
                Click below to start a conversation.
              </p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chat
              </Button>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+961 70 123 456',
                  description: 'Call us during business hours',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@eclatparfum.com',
                  description: 'Send us an email anytime',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Beirut, Lebanon',
                  description: 'Serving all areas nationwide',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  content: 'Mon - Sat: 9AM - 8PM',
                  description: 'Sunday: 10AM - 6PM',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gold font-medium">{item.content}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
