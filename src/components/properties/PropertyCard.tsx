import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Property } from '@/data/properties';
import { cn, formatPrice } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const typePlural = property.type === 'villa' ? 'villas' : property.type === 'apartment' ? 'apartments' : 'plots';
  const href = `/properties/${typePlural}/${property.slug}`;

  return (
    <Link href={href} className={cn("group block w-full", className)}>
      <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold hover:-translate-y-1">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          {property.images[0] ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
          
          {/* Top Left Badge: Type */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
              {property.type}
            </span>
          </div>
          
          {/* Top Right Badges */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 items-end">
            {property.demoData && (
              <span className="inline-block bg-black/70 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm backdrop-blur-sm">
                DEMO
              </span>
            )}
            {property.virtualTour && (
              <span className="inline-block bg-navy text-white text-xs font-medium px-2.5 py-1 rounded-sm shadow-sm">
                Virtual Tour
              </span>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6">
          <div className="flex items-center gap-1.5 text-muted text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{property.location}{property.microMarket ? `, ${property.microMarket}` : ''}</span>
          </div>
          
          <h3 className="font-display text-xl text-foreground mb-3 line-clamp-1 group-hover:text-gold transition-colors">
            {property.title}
          </h3>
          
          <div className="text-sm text-muted mb-4 pb-4 border-b border-border/50">
            {property.configuration} | {property.area} {property.areaUnit}
          </div>
          
          <div className="flex flex-col gap-1 mb-2">
            <div className="font-display text-xl text-gold font-medium">
              {formatPrice(property.priceMin)} {property.priceMax > property.priceMin && `- ${formatPrice(property.priceMax)}`}
            </div>
            {property.highlights?.[0] && (
              <div className="text-sm text-muted italic line-clamp-1">
                “{property.highlights[0]}”
              </div>
            )}
          </div>
          
          {property.reraNumber && (
            <div className="text-xs text-muted/70 mt-3 pt-3 border-t border-border/50">
              RERA: {property.reraNumber}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
