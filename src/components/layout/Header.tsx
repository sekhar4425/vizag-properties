'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isOverlay = false;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/welcome' },
    { name: 'Services', href: '/services' },
    { name: 'Invest in Vizag', href: '/invest-in-vizag' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300',
          isOverlay
            ? 'border-transparent bg-transparent py-5 md:py-6'
            : 'border-border bg-background py-4 shadow-[0_6px_24px_rgba(15,27,45,0.07)]'
        )}
      >
        <div className="container mx-auto grid grid-cols-[1fr_auto] items-center px-4 md:px-6 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex flex-col group z-50">
            <span className={cn('font-display text-2xl tracking-wide transition-colors md:text-3xl group-hover:text-gold', isOverlay ? 'text-white' : 'text-foreground')}>
              VIZAG
            </span>
            <span className="font-display text-xs md:text-sm tracking-widest text-gold -mt-1 group-hover:text-gold-hover transition-colors">
              PROPERTIES
            </span>
            <span className="text-[0.6rem] text-muted tracking-widest uppercase mt-1 hidden md:block">
              Private Property & Investment Advisory
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn('text-sm font-medium tracking-wide transition-colors hover:text-gold', isOverlay ? 'text-white/90' : 'text-foreground')}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-self-end">
            <Button href="/contact" size="sm">
              Book a Consultation
            </Button>
          </div>

          <button
            className={cn('z-50 p-2 transition-colors hover:text-gold lg:hidden', isOverlay ? 'text-white' : 'text-foreground')}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
