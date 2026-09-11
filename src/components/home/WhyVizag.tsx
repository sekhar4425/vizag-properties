import Link from 'next/link';
import { Plane, Building2, Waves, TrendingUp, MapPin, Heart } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Plane,
    title: 'Port & Airport Connectivity',
    description: 'Strategic location with an expanding international airport and deep-water port driving economic activity.',
  },
  {
    icon: Building2,
    title: 'IT & SEZ Growth',
    description: 'Rapidly developing technology hubs and Special Economic Zones attracting global corporations.',
  },
  {
    icon: Waves,
    title: 'Coastal Lifestyle',
    description: 'Unmatched quality of life with pristine beaches, scenic hills, and a temperate climate year-round.',
  },
  {
    icon: TrendingUp,
    title: 'Rental Yield Potential',
    description: 'Growing demand for premium housing from the corporate sector. (Indicative only, subject to market conditions).',
  },
  {
    icon: MapPin,
    title: 'Capital Appreciation Corridors',
    description: 'Emerging corridors showing structured urban development. (Subject to market conditions).',
  },
  {
    icon: Heart,
    title: 'Livability & Long-Term Growth',
    description: 'Consistently ranked among India\'s most livable and cleanest cities, ensuring sustainable long-term value.',
  },
];

export default function WhyVizag() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="INVESTMENT INSIGHTS" title="Why Investors Are Watching Vizag" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col p-6 bg-background rounded-xl border-b-2 border-transparent hover:border-gold transition-colors shadow-sm">
                <Icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-gold hover:bg-gold-hover text-white">
            <Link href="/invest-in-vizag">Explore the Vizag Investment Outlook</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
