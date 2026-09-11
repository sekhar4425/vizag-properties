import { Property } from '@/data/properties';
import PropertyCard from './PropertyCard';
import { cn } from '@/lib/utils';

interface PropertyGridProps {
  properties: Property[];
  columns?: 2 | 3;
  className?: string;
}

export default function PropertyGrid({ properties, columns = 3, className }: PropertyGridProps) {
  if (!properties || properties.length === 0) {
    return (
      <div className="w-full py-16 text-center bg-muted/20 rounded-xl border border-dashed border-border">
        <h3 className="text-xl font-medium text-navy mb-2">No properties found</h3>
        <p className="text-muted">No properties match your current criteria. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className={cn(
      'mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2',
      columns === 3 && 'lg:grid-cols-3',
      className
    )}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
