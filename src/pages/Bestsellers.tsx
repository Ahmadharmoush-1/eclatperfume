import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const Bestsellers = () => {
  const products = getProductsByCategory('bestseller');

  return (
    <>
      <Helmet>
        <title>Bestsellers | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Shop our bestselling perfumes loved by customers across Lebanon. Premium fragrances with free testers and fast delivery."
        />
      </Helmet>

      <Layout>
        <div className="container py-8 page-transition">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-gold-text">Bestsellers</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our most loved fragrances, chosen by customers across Lebanon.
              These signature scents define the Eclat experience.
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </Layout>
    </>
  );
};

export default Bestsellers;
