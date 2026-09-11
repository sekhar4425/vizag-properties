'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function InvestmentBrief() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'investment_brief' }),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', whatsapp: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full border border-black/10 bg-white text-foreground rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder:text-muted-foreground";

  return (
    <section className="bg-gold-light py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-navy tracking-[0.2em] text-sm uppercase font-semibold mb-3">FREE RESOURCE</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">Get the 2026 Vizag Investment Brief</h2>
          <p className="text-navy/80 text-lg max-w-2xl mx-auto">
            Understand Vizag’s key investment corridors, upcoming infrastructure projects, and strategic real estate opportunities.
          </p>
        </div>
        
        {status === 'success' ? (
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-gold/20 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-navy mb-2">Thank you!</h3>
            <p className="text-muted">Your request is with our advisory team. We’ll share the 2026 Vizag Investment Brief using your preferred contact details.</p>
            <Button onClick={() => setStatus('idle')} variant="outline" className="mt-6 border-gold text-gold hover:bg-gold hover:text-white">
              Download Another Copy
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="sr-only">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm mb-4 text-center">Something went wrong. Please try again.</p>
            )}
            
            <div className="text-center">
              <Button type="submit" disabled={status === 'loading'} className="bg-navy hover:bg-navy/90 text-white min-w-[250px] py-6 text-lg h-auto">
                {status === 'loading' ? 'Processing...' : 'Get the Investment Brief'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
