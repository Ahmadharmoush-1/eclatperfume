import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Read Eclat Parfum's privacy policy. Learn how we protect your personal information and data."
        />
      </Helmet>

      <Layout>
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 animate-fade-up">
              <span className="gradient-gold-text">Privacy Policy</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8 animate-fade-up delay-100">
              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground">
                  When you place an order, we collect your name, phone number, and delivery address 
                  to process and deliver your order. This information is shared only via WhatsApp 
                  for order fulfillment purposes.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground">
                  Your information is used solely to process your orders, communicate about your 
                  delivery, and provide customer support. We do not sell or share your data with 
                  third parties for marketing purposes.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Data Security
                </h2>
                <p className="text-muted-foreground">
                  We take reasonable measures to protect your personal information. Orders are 
                  processed through WhatsApp's secure messaging platform.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about our privacy practices, please contact us via 
                  WhatsApp at +961 70 123 456.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;
