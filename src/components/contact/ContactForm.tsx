'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const values = new FormData(form);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.get('name'),
          email: values.get('email'),
          whatsapp: values.get('whatsapp'),
          location: values.get('location'),
          interestedIn: values.get('interest'),
          budget: values.get('budget'),
          contactTime: values.get('contactTime'),
          message: values.get('message'),
          source: 'contact_form',
        }),
      });

      if (!response.ok) throw new Error('Lead submission failed');
      setIsSubmitting(false);
      setSubmitStatus('success');
      form.reset();
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 text-center">
        <h3 className="font-display text-2xl mb-2">Thank You!</h3>
        <p className="font-body">Your request has been received. A Vizag Properties specialist will contact you shortly.</p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="mt-6 text-sm text-green-700 underline font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-body text-sm font-medium text-navy block">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-body text-sm font-medium text-navy block">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="font-body text-sm font-medium text-navy block">WhatsApp / Phone</label>
          <input 
            type="tel" 
            id="whatsapp" 
            name="whatsapp" 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="location" className="font-body text-sm font-medium text-navy block">Current Location / Country</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
            placeholder="e.g., Dubai, UAE"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="interest" className="font-body text-sm font-medium text-navy block">Interested In</label>
        <select 
          id="interest" 
          name="interest" 
          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
        >
          <option value="">Select an option...</option>
          <option value="villas">Premium Villas</option>
          <option value="apartments">Luxury Apartments</option>
          <option value="plots">Villa Plots</option>
          <option value="advisory">General Investment Advisory</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="budget" className="font-body text-sm font-medium text-navy block">Estimated Budget</label>
          <select 
            id="budget" 
            name="budget" 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
          >
            <option value="">Select budget range...</option>
            <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
            <option value="2cr-5cr">₹2 Cr - ₹5 Cr</option>
            <option value="5cr+">₹5 Cr +</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="contactTime" className="font-body text-sm font-medium text-navy block">Preferred Contact Time (IST)</label>
          <select 
            id="contactTime" 
            name="contactTime" 
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body"
          >
            <option value="">Select preferred time...</option>
            <option value="morning">Morning (9 AM - 12 PM IST)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM IST)</option>
            <option value="evening">Evening (4 PM - 8 PM IST)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="font-body text-sm font-medium text-navy block">Additional Requirements</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors font-body resize-none"
          placeholder="Tell us more about what you are looking for..."
        ></textarea>
      </div>

      {submitStatus === 'error' && (
        <div className="text-red-500 text-sm font-medium">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Speak to a Vizag Specialist'}
      </Button>
    </form>
  );
}
