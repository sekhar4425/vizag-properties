import { Metadata } from 'next';
import Link from 'next/link';
import { getProperties } from '@/data/properties';
import PropertyGrid from '@/components/properties/PropertyGrid';
import PropertyFilters from '@/components/properties/PropertyFilters';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Premium Properties in Visakhapatnam | Vizag Properties',
  description: 'Explore our handpicked selection of premium villas, luxury apartments, and prime plots in Visakhapatnam.',
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  
  const typeParam = typeof resolvedParams.type === 'string' ? resolvedParams.type : undefined;
  const locationParam = typeof resolvedParams.location === 'string' ? resolvedParams.location : undefined;
  const budgetParam = typeof resolvedParams.budget === 'string' ? resolvedParams.budget : undefined;
  const possessionParam = typeof resolvedParams.possession === 'string' ? resolvedParams.possession : undefined;

  // Map plural 'villas' back to singular 'villa' for data filtering if needed
  let filterType = typeParam;
  if (typeParam === 'villas') filterType = 'villa';
  if (typeParam === 'apartments') filterType = 'apartment';
  if (typeParam === 'plots') filterType = 'plot';

  let properties = getProperties({ 
    type: filterType, 
    location: locationParam 
  });

  // Additional filtering for budget
  if (budgetParam) {
    properties = properties.filter(p => {
      if (budgetParam === 'under_1cr') return p.priceMin < 10000000;
      if (budgetParam === '1cr_3cr') return p.priceMin >= 10000000 && p.priceMin <= 30000000;
      if (budgetParam === '3cr_5cr') return p.priceMin > 30000000 && p.priceMin <= 50000000;
      if (budgetParam === 'above_5cr') return p.priceMin > 50000000;
      return true;
    });
  }

  // Additional filtering for possession
  if (possessionParam) {
    properties = properties.filter(p => {
      const pos = p.possession.toLowerCase();
      if (possessionParam === 'ready') return pos.includes('ready');
      if (possessionParam === 'upcoming') return p.status === 'upcoming';
      if (possessionParam === 'under_construction') return !pos.includes('ready') && p.status !== 'upcoming';
      return true;
    });
  }

  return (
    <main className="min-h-screen bg-background pb-16 pt-32 md:pt-36">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-foreground">
              Properties
            </li>
          </ol>
        </nav>

        <SectionHeading 
          title="Premium Properties in Vizag"
          subtitle="Discover our curated selection of the finest real estate investments"
          alignment="left"
        />

        <div className="mt-8">
          <PropertyFilters 
            currentType={typeParam}
            currentLocation={locationParam}
            currentBudget={budgetParam}
            currentPossession={possessionParam}
          />
        </div>

        <div className="mt-10">
          <PropertyGrid properties={properties} columns={3} />
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h2 className="font-display text-3xl text-navy mb-4">Can’t find what you’re looking for?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            We have off-market properties and exclusive pre-launch offers that aren’t listed publicly. Let our advisory team find the perfect match for your requirements.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Talk to an Advisor
          </Button>
        </div>
      </div>
    </main>
  );
}
