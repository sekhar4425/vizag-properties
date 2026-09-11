import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact | Vizag Properties',
  description: 'Get in touch with our specialists to discuss your real estate investment in Visakhapatnam.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Let&apos;s Discuss Your <span className="text-gold">Investment</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300">
            Our advisory team is ready to guide you through premium real estate opportunities in Visakhapatnam.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Contact Form Container - Left Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
                <SectionHeading 
                  title="Send us a message" 
                  subtitle="Fill out the form below and we will get back to you promptly."
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact Information - Right Side (2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="font-display text-3xl text-navy">Direct Contact</h2>
              <p className="font-body text-gray-600 mb-8">
                Prefer to reach out directly? Use the contact details below to connect with our team.
              </p>

              <div className="space-y-6">
                <a href="tel:+919876543210" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-border group">
                  <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy">Phone</h3>
                    <p className="font-body text-gray-600 mt-1">+91 98765 43210</p>
                  </div>
                </a>

                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-border group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    {/* Using simple Lucide icon for WhatsApp placeholder */}
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy">WhatsApp</h3>
                    <p className="font-body text-gray-600 mt-1">Message us instantly</p>
                  </div>
                </a>

                <a href="mailto:advisory@vizagproperties.ai" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-border group">
                  <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy">Email</h3>
                    <p className="font-body text-gray-600 mt-1">advisory@vizagproperties.ai</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-border">
                  <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy">Office Address</h3>
                    <p className="font-body text-gray-600 mt-1 text-sm leading-relaxed">
                      Vizag Properties Advisory<br />
                      Level 4, Tech Park<br />
                      Rushikonda IT Hills<br />
                      Visakhapatnam, AP 530045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-border">
                  <div className="w-12 h-12 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-navy">Business Hours</h3>
                    <p className="font-body text-gray-600 mt-1 text-sm leading-relaxed">
                      Monday - Saturday<br />
                      9:30 AM - 6:30 PM (IST)<br />
                      <span className="text-gold font-medium mt-1 inline-block">Available 24/7 for NRI queries</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
