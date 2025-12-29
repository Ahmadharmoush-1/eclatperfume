import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';

const Women = () => {
  const products = getProductsByCategory('women');

  return (
    <>
      <Helmet>
        <title>Women's Perfumes | Eclat Parfum Beirut</title>
        <meta
          name="description"
          content="Explore our collection of premium women's fragrances. Elegant, feminine scents from Eclat Parfum with free testers and delivery across Lebanon."
        />
      </Helmet>

      <Layout>
        <div className="container py-8 page-transition">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-gold-text">Women's Collection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elegant fragrances for the modern woman. From delicate florals to sensual orientals.
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </Layout>
    </>
  );
};

export default Women;