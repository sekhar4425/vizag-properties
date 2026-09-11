import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-[78svh] w-full items-end pb-14 pt-28 sm:min-h-[85vh] sm:pb-20 sm:pt-32">
      <Image
        src="/images/hero.png"
        alt="Visakhapatnam Premium Real Estate"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-gold-light uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Private Property & Investment Advisory
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Visakhapatnam’s Premium Properties for HNI & NRI Investors
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8 mt-6">
            We curate premium villas, apartments and plotted developments across Vizag — with trusted developer relationships and end-to-end support.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild className="bg-gold hover:bg-gold-hover text-white border-none">
              <Link href="/contact">Book a Private Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Get the NRI Investment Brief</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Schedule a Virtual Site Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
