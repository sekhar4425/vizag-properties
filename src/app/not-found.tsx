import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="font-display text-7xl md:text-9xl text-gold/20">404</h1>
        
        <div className="space-y-4">
          <h2 className="font-display text-3xl md:text-4xl text-navy">Page Not Found</h2>
          <p className="font-body text-gray-600">
            The page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/">
            <Button variant="primary">
              Return Home
            </Button>
          </Link>
          <Link href="/welcome">
            <Button variant="secondary">
              View Properties
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
