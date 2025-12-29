import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Eclat Parfum</title>
      </Helmet>

      <Layout>
        <div className="container py-20 text-center">
          <div className="max-w-md mx-auto animate-fade-up">
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 gradient-gold-text">
              404
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="secondary" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
