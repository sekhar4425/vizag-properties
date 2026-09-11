'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { useCallback } from 'react';
import { cn } from '@/lib/utils';

interface PropertyFiltersProps {
  currentType?: string;
  currentBudget?: string;
  currentLocation?: string;
  currentPossession?: string;
}

export default function PropertyFilters({
  currentType = '',
  currentBudget = '',
  currentLocation = '',
  currentPossession = ''
}: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = currentType;
  const budget = currentBudget;
  const location = currentLocation;
  const possession = currentPossession;

  const updateFilters = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/properties?${params.toString()}`);
  }, [router, searchParams]);

  const propertyTypes = [
    { label: 'All Properties', value: '' },
    { label: 'Villas', value: 'villas' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'Plots', value: 'plots' },
  ];
  const selectClass = 'w-full appearance-none rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15';
  const hasFilters = type || location || budget || possession;

  return (
    <section className="mb-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_32px_rgba(15,27,45,0.05)]" aria-label="Property filters">
      <div className="flex flex-col gap-4 border-b border-border bg-gold-light/45 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-navy">
          <SlidersHorizontal className="h-4 w-4 text-gold" aria-hidden="true" />
          Refine your search
        </div>
        {hasFilters && (
          <button
            onClick={() => router.push('/properties')}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gold transition-colors hover:text-gold-hover sm:self-auto"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset filters
          </button>
        )}
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Property type</p>
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Property type">
            {propertyTypes.map((propertyType) => (
              <button
                key={propertyType.value || 'all'}
                type="button"
                onClick={() => updateFilters('type', propertyType.value)}
                className={cn(
                  'whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                  type === propertyType.value
                    ? 'border-navy bg-navy text-white shadow-sm'
                    : 'border-border bg-card text-muted hover:border-gold hover:text-navy'
                )}
                aria-pressed={type === propertyType.value}
              >
                {propertyType.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Location</label>
            <select value={location} onChange={(e) => updateFilters('location', e.target.value)} className={selectClass}>
              <option value="">All Locations</option>
              <option value="Rushikonda">Rushikonda</option>
              <option value="Madhurawada">Madhurawada</option>
              <option value="MVP Colony">MVP Colony</option>
              <option value="Bheemunipatnam">Bheemunipatnam</option>
              <option value="Gajuwaka">Gajuwaka</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Budget</label>
            <select value={budget} onChange={(e) => updateFilters('budget', e.target.value)} className={selectClass}>
              <option value="">Any Budget</option>
              <option value="under_1cr">Under ₹1 Cr</option>
              <option value="1cr_3cr">₹1 Cr - ₹3 Cr</option>
              <option value="3cr_5cr">₹3 Cr - ₹5 Cr</option>
              <option value="above_5cr">Above ₹5 Cr</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Possession</label>
            <select value={possession} onChange={(e) => updateFilters('possession', e.target.value)} className={selectClass}>
              <option value="">Any Status</option>
              <option value="ready">Ready to Move</option>
              <option value="under_construction">Under Construction</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
