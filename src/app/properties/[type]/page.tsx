import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPropertiesByType } from '@/data/properties';
import PropertyGrid from '@/components/properties/PropertyGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Validate types
const VALID_TYPES = ['villas', 'apartments', 'plots'];

type Props = {
  params: Promise<{ type: string }>;
};

export async function generateStaticParams() {
  return VALID_TYPES.map((type) => ({
    type,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { type } = resolvedParams;
  
  if (!VALID_TYPES.includes(type)) {
    return { title: 'Not Found' };
  }

  const title = `Premium ${type.charAt(0).toUpperCase() + type.slice(1)} in Visakhapatnam | Vizag Properties`;
  
  return {
    title,
    description: `Explore our handpicked selection of premium ${type} in prime locations across Visakhapatnam.`,
  };
}

export default async function PropertyTypePage({ params }: Props) {
  const resolvedParams = await params;
  const { type } = resolvedParams;

  if (!VALID_TYPES.includes(type)) {
    notFound();
  }

  // Map URL param to data type
  const dataType = type === 'villas' ? 'villa' : type === 'apartments' ? 'apartment' : 'plot';
  const properties = getPropertiesByType(dataType);
  
  const displayTitle = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/properties" className="hover:text-gold transition-colors">Properties</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-foreground capitalize">
              {type}
            </li>
          </ol>
        </nav>

        <SectionHeading 
          title={`Premium ${displayTitle} in Vizag`}
          subtitle={`Discover our curated selection of ${type} for the finest living`}
          alignment="left"
        />

        <div className="mt-10">
          <PropertyGrid properties={properties} columns={3} />
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="font-display text-3xl text-navy mb-4">Can’t find the perfect {dataType}?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            We have off-market {type} and exclusive pre-launch offers that aren’t listed publicly. Let our advisory team find the perfect match for your requirements.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Talk to an Advisor
          </Button>
        </div>
      </div>
    </main>
  );
}
