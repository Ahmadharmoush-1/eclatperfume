import { Helmet } from 'react-helmet-async';
import { Heart, Star, Sparkles, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Learn about Eclat Parfum's mission to bring luxury fragrances to Lebanon at affordable prices. Quality, elegance, and customer satisfaction."
        />
      </Helmet>

      <Layout>
        <div className="container py-12 md:py-16">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-gold-text">Our Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Eclat Parfum was born from a simple belief: everyone deserves to experience 
              luxury fragrances without breaking the bank.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'We source only the finest ingredients to create fragrances that rival the originals.',
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority. We go above and beyond for every customer.',
              },
              {
                icon: Sparkles,
                title: 'Authentic Experience',
                description: 'Long-lasting scents that stay with you from morning to night.',
              },
              {
                icon: Award,
                title: 'Trusted Brand',
                description: 'Thousands of happy customers across Lebanon trust Eclat Parfum.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-6 text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-xl p-8 animate-fade-up">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 gradient-gold-text">
                Why Eclat Parfum?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Based in the heart of Beirut, Eclat Parfum has been serving Lebanon's fragrance 
                  lovers since our founding. We understand that a great perfume is more than just 
                  a scent – it's a statement, a memory, and an extension of who you are.
                </p>
                <p>
                  Our team carefully selects and crafts each fragrance to match the quality and 
                  character of designer perfumes, while keeping prices accessible for everyone. 
                  We believe luxury should be a feeling, not a price tag.
                </p>
                <p>
                  Every order comes with a free tester because we want you to experience the 
                  magic of Eclat before committing. That's our promise – quality you can trust, 
                  at prices you'll love.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 animate-fade-up delay-100">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 gradient-gold-text">
                Our Commitment
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Premium ingredients sourced from the finest suppliers',
                  'Long-lasting formulas that keep you smelling great all day',
                  'Fast, reliable delivery across all of Lebanon',
                  'Exceptional customer service via WhatsApp',
                  'Free testers with every order',
                  'Satisfaction guaranteed',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
