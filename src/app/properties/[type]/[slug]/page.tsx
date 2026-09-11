import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { properties, getPropertyBySlug, getPropertiesByType } from '@/data/properties';
import PropertyGallery from '@/components/properties/PropertyGallery';
import PropertyCard from '@/components/properties/PropertyCard';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { MapPin, Bed, Maximize, Calendar, User, ShieldCheck, CheckCircle2, AlertTriangle, Phone, Mail, MessageCircle } from 'lucide-react';

const VALID_TYPES = ['villas', 'apartments', 'plots'];

type Props = {
  params: Promise<{ type: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { type: string; slug: string }[] = [];
  
  properties.forEach(p => {
    const typePlural = p.type === 'villa' ? 'villas' : p.type === 'apartment' ? 'apartments' : 'plots';
    params.push({ type: typePlural, slug: p.slug });
  });
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { type, slug } = resolvedParams;
  
  if (!VALID_TYPES.includes(type)) return { title: 'Not Found' };
  
  const dataType = type === 'villas' ? 'villa' : type === 'apartments' ? 'apartment' : 'plot';
  const property = getPropertyBySlug(dataType, slug);
  
  if (!property) return { title: 'Property Not Found' };
  
  return {
    title: `${property.title} | ${property.location} | Vizag Properties`,
    description: property.description,
    openGraph: {
      images: property.images.length > 0 ? [{ url: property.images[0] }] : [],
    }
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { type, slug } = resolvedParams;
  
  if (!VALID_TYPES.includes(type)) {
    notFound();
  }

  const dataType = type === 'villas' ? 'villa' : type === 'apartments' ? 'apartment' : 'plot';
  const property = getPropertyBySlug(dataType, slug);
  
  if (!property) {
    notFound();
  }

  // Get related properties (same type, exclude current)
  const relatedProperties = getPropertiesByType(dataType)
    .filter(p => p.id !== property.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/properties" className="hover:text-gold transition-colors">Properties</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href={`/properties/${type}`} className="hover:text-gold transition-colors capitalize">{type}</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-foreground truncate max-w-[200px] md:max-w-xs">
              {property.title.replace('[DEMO] ', '')}
            </li>
          </ol>
        </nav>

        {/* Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          
          {/* Left Column (2/3) - Details */}
          <div className="lg:w-2/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                {property.type}
              </span>
              {property.possession.toLowerCase().includes('ready') && (
                <span className="inline-block bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Ready to Move
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-navy mb-4">
              {property.title.replace('[DEMO] ', '')}
            </h1>
            
            <div className="flex items-center text-muted text-lg mb-8">
              <MapPin className="w-5 h-5 mr-2 text-gold" />
              {property.location}, {property.microMarket}
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 py-6 border-y border-border">
              {property.type !== 'plot' && (
                <div className="flex flex-col">
                  <span className="text-muted text-sm flex items-center gap-1.5"><Bed className="w-4 h-4" /> Configuration</span>
                  <span className="font-medium text-foreground">{property.configuration}</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-muted text-sm flex items-center gap-1.5"><Maximize className="w-4 h-4" /> Area</span>
                <span className="font-medium text-foreground">{property.area} {property.areaUnit}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-sm flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Possession</span>
                <span className="font-medium text-foreground">{property.possession}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-sm flex items-center gap-1.5"><User className="w-4 h-4" /> Developer</span>
                <span className="font-medium text-foreground">{property.developer}</span>
              </div>
            </div>

            {/* Demo Data Banner */}
            {property.demoData && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-900">Demo Property Listing</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    This is a demonstration property for the Vizag Properties website. Images, pricing, and details are illustrative. Please contact our advisors for actual available properties.
                  </p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-navy mb-4">About this Property</h2>
              <p className="text-muted leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display text-2xl text-navy mb-4">Key Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display text-2xl text-navy mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="bg-muted/30 border border-border rounded-lg p-3 text-center text-sm font-medium text-foreground">
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RERA */}
            {property.reraNumber && (
              <div className="bg-card border border-border rounded-lg p-5 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">RERA Approved</h4>
                  <p className="text-sm text-muted mt-0.5">Registration No: <span className="font-medium text-foreground">{property.reraNumber}</span></p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column (1/3) - Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-muted mb-1">Starting Price</p>
                <div className="font-display text-3xl md:text-4xl text-gold font-medium">
                  {formatPrice(property.priceMin)}
                </div>
                {property.priceMax > property.priceMin && (
                  <p className="text-muted mt-1">Up to {formatPrice(property.priceMax)}</p>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {property.virtualTour && (
                  <Button variant="outline" className="w-full justify-center">
                    Schedule a Virtual Site Visit
                  </Button>
                )}
                <Button variant="primary" className="w-full justify-center">
                  Talk to an Advisor
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  Request ROI Analysis
                </Button>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Quick Contact</p>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-muted hover:text-gold transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+91 98765 43210</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a href="mailto:info@vizagproperties.com" className="flex items-center gap-3 text-muted hover:text-gold transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>info@vizagproperties.com</span>
                  </a>
                </div>
              </div>

              {property.rentalYield && property.rentalYield !== 'Not Applicable' && (
                <div className="mt-8 bg-muted/30 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">Indicative Rental Yield</p>
                  <p className="font-medium text-foreground">{property.rentalYield}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-24 pt-16 border-t border-border">
            <h2 className="font-display text-3xl text-navy mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
