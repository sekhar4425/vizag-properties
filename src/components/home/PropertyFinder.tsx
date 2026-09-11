'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function PropertyFinder() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    type: '',
    budget: '',
    location: '',
    possession: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.type) params.append('type', filters.type);
    if (filters.budget) params.append('budget', filters.budget);
    if (filters.location) params.append('location', filters.location);
    if (filters.possession) params.append('possession', filters.possession);
    
    router.push(`/properties?${params.toString()}`);
  };

  const selectClass = "w-full border border-border bg-card text-foreground rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none";

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="SEARCH" title="Find the Right Property in Vizag" />
        
        <form onSubmit={handleSubmit} className="mt-8 bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Property Type</label>
              <select name="type" value={filters.type} onChange={handleChange} className={selectClass}>
                <option value="">All Types</option>
                <option value="villas">Villas</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Budget</label>
              <select name="budget" value={filters.budget} onChange={handleChange} className={selectClass}>
                <option value="">Any Budget</option>
                <option value="under-1cr">Under ₹1 Cr</option>
                <option value="1-2cr">₹1–2 Cr</option>
                <option value="2-5cr">₹2–5 Cr</option>
                <option value="5cr-plus">₹5 Cr+</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Location</label>
              <select name="location" value={filters.location} onChange={handleChange} className={selectClass}>
                <option value="">All Locations</option>
                <option value="rushikonda">Rushikonda</option>
                <option value="bheemunipatnam">Bheemunipatnam</option>
                <option value="mvp-colony">MVP Colony</option>
                <option value="madhurawada">Madhurawada</option>
                <option value="gajuwaka">Gajuwaka</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-muted mb-2">Possession</label>
              <select name="possession" value={filters.possession} onChange={handleChange} className={selectClass}>
                <option value="">Any</option>
                <option value="ready">Ready to Move</option>
                <option value="under-construction">Under Construction</option>
                <option value="new-launch">New Launch</option>
              </select>
            </div>
            
            <div>
              <Button type="submit" className="w-full bg-gold hover:bg-gold-hover text-white py-3 h-auto">
                Explore Properties
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
