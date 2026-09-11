import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const steps = [
  { num: '01', title: 'Discover' },
  { num: '02', title: 'Shortlist' },
  { num: '03', title: 'Virtual Site Visit' },
  { num: '04', title: 'Legal & Documentation' },
  { num: '05', title: 'Purchase & Post-Possession Support' },
];

export default function NRISection() {
  return (
    <section className="bg-navy text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold tracking-[0.2em] text-sm uppercase font-semibold mb-4">FOR NRI INVESTORS</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">Invest in Vizag From Anywhere in the World</h2>
          <p className="text-white/80 text-lg">Buy remotely with confidence through our transparent, guided process designed specifically for global citizens.</p>
        </div>

        <div className="relative mt-16 mb-20 max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:w-48">
                <span className="text-gold font-display text-4xl lg:text-5xl font-bold bg-navy pr-4">{step.num}</span>
                <span className="text-white font-medium text-lg lg:text-base lg:pt-2">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 bg-white/5 py-4 rounded-lg inline-block w-full max-w-3xl mx-auto border border-white/10 mb-12 flex flex-col items-center">
          <p className="text-sm text-white/70 uppercase tracking-widest mb-2 font-semibold">Available across timezones</p>
          <p className="text-gold font-medium">US <span className="text-white/30 mx-2">|</span> UK <span className="text-white/30 mx-2">|</span> GCC <span className="text-white/30 mx-2">|</span> Singapore <span className="text-white/30 mx-2">|</span> Australia</p>
        </div>

        <div className="text-center flex justify-center">
          <Button asChild className="bg-gold hover:bg-gold-hover text-white border-none py-6 px-8 text-lg">
            <Link href="/contact">Get the NRI Investment Brief</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
