import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const Men = () => {
  const products = getProductsByCategory('men');

  return (
    <>
      <Helmet>
        <title>Men's Perfumes | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Explore our collection of premium men's fragrances. Bold, masculine scents from Eclat Parfum with free testers and delivery across Lebanon."
        />
      </Helmet>

      <Layout>
        <div className="container py-8 page-transition">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-gold-text">Men's Collection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover bold, masculine fragrances crafted for the modern gentleman.
              From fresh aquatics to rich ouds.
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </Layout>
    </>
  );
};

export default Men;
