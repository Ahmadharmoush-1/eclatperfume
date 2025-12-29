import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import CollectionPreview from '@/components/home/CollectionPreview';
import { getProductsByCategory } from '@/data/products';
import { useEffect } from 'react';
const Index = () => {
  const menProducts = getProductsByCategory('men');
  const womenProducts = getProductsByCategory('women');
  const bestsellers = getProductsByCategory('bestseller');
   
      useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

  return (
    <>
      <Helmet>
        <title>Eclat Parfum Beirut | Premium Lebanese Fragrances</title>
        <meta
          name="description"
          content="Discover luxury perfumes at affordable prices. Eclat Parfum offers premium fragrances for men and women with free testers and fast delivery across Lebanon."
        />
      </Helmet>

      <Layout>
        <HeroSection />
        <TrustSection />
        
        <div className="container">
          <CollectionPreview
            title="Bestsellers"
            subtitle="Our most loved fragrances"
            products={bestsellers}
            link="/bestsellers"
          />

          <div className="border-t border-border/30" />

          <CollectionPreview
            title="For Him"
            subtitle="Masculine fragrances that make a statement"
            products={menProducts}
            link="/men"
          />

          <div className="border-t border-border/30" />

          <CollectionPreview
            title="For Her"
            subtitle="Elegant scents for the modern woman"
            products={womenProducts}
            link="/women"
          />
        </div>
      </Layout>
    </>
  );
};

export default Index;
