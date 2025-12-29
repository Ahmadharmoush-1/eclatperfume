import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Read Eclat Parfum's terms of service. Understand our policies for orders, delivery, and returns."
        />
      </Helmet>

      <Layout>
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 animate-fade-up">
              <span className="gradient-gold-text">Terms of Service</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8 animate-fade-up delay-100">
              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Orders
                </h2>
                <p className="text-muted-foreground">
                  All orders are placed via WhatsApp. By placing an order, you agree to provide 
                  accurate contact and delivery information. We reserve the right to cancel orders 
                  with incorrect or incomplete information.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Pricing & Payment
                </h2>
                <p className="text-muted-foreground">
                  All prices are listed in USD. Payment is collected upon delivery (Cash on Delivery). 
                  We do not accept online payments at this time.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Delivery
                </h2>
                <p className="text-muted-foreground">
                  We deliver to all areas in Lebanon. Delivery times vary based on location. 
                  You will be contacted via WhatsApp to confirm delivery details.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Returns & Exchanges
                </h2>
                <p className="text-muted-foreground">
                  Due to the nature of fragrance products, we cannot accept returns on opened items. 
                  If you receive a damaged or incorrect product, please contact us within 24 hours 
                  of delivery.
                </p>
              </section>

              <section className="glass-card rounded-xl p-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  For any questions about these terms, please contact us via WhatsApp at 
                  +961 70 123 456.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Terms;
