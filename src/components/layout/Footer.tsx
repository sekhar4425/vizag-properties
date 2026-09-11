import * as React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-gray-300 py-16 md:py-24 border-t border-navy-light/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col inline-block">
              <span className="font-display text-3xl tracking-wide text-white">VIZAG</span>
              <span className="font-display text-sm tracking-widest text-gold -mt-1">PROPERTIES</span>
            </Link>
            <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
              Private Property & Investment Advisory
            </p>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Curating premium real estate opportunities and providing bespoke investment advisory in Visakhapatnam for discerning clients and NRIs.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/properties" className="hover:text-gold transition-colors text-sm">All Properties</Link></li>
              <li><Link href="/properties?type=villa" className="hover:text-gold transition-colors text-sm">Premium Villas</Link></li>
              <li><Link href="/properties?type=apartment" className="hover:text-gold transition-colors text-sm">Luxury Apartments</Link></li>
              <li><Link href="/properties?type=plot" className="hover:text-gold transition-colors text-sm">Investment Plots</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/services#nri" className="hover:text-gold transition-colors text-sm">NRI Concierge</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Discover</h3>
            <ul className="space-y-4">
              <li><Link href="/invest-in-vizag" className="hover:text-gold transition-colors text-sm">Invest in Vizag</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors text-sm">Contact Advisory</Link></li>
              <li><Link href="/resources" className="hover:text-gold transition-colors text-sm">Market Reports</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-display text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Beach Road, Pandurangapuram,<br />
                  Visakhapatnam, AP 530003
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gold shrink-0" />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href="mailto:advisory@vizagproperties.com" className="text-sm hover:text-white transition-colors">
                  advisory@vizagproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />
        
        <div className="mb-8">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            <strong>Disclaimer:</strong> Vizag Properties operates as a Private Property & Investment Advisory. The information provided on this website is for general informational purposes only and does not constitute financial, legal, or real estate advice. All property details, pricing, and availability are subject to change without notice. Renderings and images may be indicative. All listed properties may include “DEMO PROPERTY” markers as this is a demonstration environment. Rental yields and ROI figures are indicative and based on market estimates; we make no financial guarantees. Please verify all information independently before making any investment decisions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-gray-800 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vizag Properties. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/rera" className="hover:text-white transition-colors">RERA Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
