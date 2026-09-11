'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/welcome' },
    { name: 'Services', href: '/services' },
    { name: 'Invest in Vizag', href: '/invest-in-vizag' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-wide text-foreground">VIZAG</span>
            <span className="font-display text-sm tracking-widest text-gold -mt-1">PROPERTIES</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-muted hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-display text-foreground hover:text-gold transition-colors block py-2"
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/50 backdrop-blur border-t border-border space-y-4">
          <Button href="/contact" className="w-full" size="lg" onClick={onClose}>
            Book a Consultation
          </Button>
          
          <div className="flex items-center justify-center space-x-6 pt-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-muted hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
