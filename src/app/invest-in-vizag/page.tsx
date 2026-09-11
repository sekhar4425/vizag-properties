import { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingUp, 
  Building, 
  MapPin, 
  AlertCircle,
  Briefcase,
  Plane
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Invest in Vizag | Vizag Properties',
  description: 'Discover why smart investors are choosing Visakhapatnam. Explore infrastructure growth, IT development, and premium micro-markets in Vizag.',
};

const microMarkets = [
  {
    name: 'Rushikonda',
    description: 'The premier IT and luxury residential hub, featuring stunning sea views, IT SEZs, and premium villa communities.',
  },
  {
    name: 'Madhurawada',
    description: 'A rapidly expanding residential corridor with excellent connectivity, educational institutions, and integrated townships.',
  },
  {
    name: 'Bheemunipatnam (Bheemili)',
    description: 'An emerging luxury destination along the coast, offering heritage charm and high-end beachfront developments.',
  },
  {
    name: 'MVP Colony',
    description: 'An established, highly sought-after premium residential neighborhood known for its layout and convenience.',
  },
  {
    name: 'Gajuwaka',
    description: 'The industrial powerhouse of Vizag, driving significant rental demand and sustained commercial growth.',
  }
];

export default function InvestInVizagPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-navy to-navy"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Why Smart Investors Are Choosing <span className="text-gold">Visakhapatnam</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            A unique convergence of port-led industrial growth, IT sector expansion, and unparalleled coastal lifestyle makes Vizag the premier investment destination in Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Why Vizag */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="The Vizag Advantage" 
            subtitle="A city poised for exponential growth"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <TrendingUp className="text-gold w-10 h-10 mb-6" />
              <h3 className="font-display text-2xl text-navy mb-4">Economic Engine</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                As the executive capital and largest city of Andhra Pradesh, Vizag boasts a diverse economy driven by heavy industries, maritime trade, and a rapidly expanding IT ecosystem.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <Plane className="text-gold w-10 h-10 mb-6" />
              <h3 className="font-display text-2xl text-navy mb-4">Strategic Connectivity</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                Exceptional connectivity via a major natural harbor, an expanding international airport, and upcoming greenfield infrastructure projects enhancing global accessibility.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <Briefcase className="text-gold w-10 h-10 mb-6" />
              <h3 className="font-display text-2xl text-navy mb-4">Lifestyle Destination</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                A pristine coastline, green hills, and a cosmopolitan culture offer a quality of life that attracts top talent and drives demand for premium residential spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & IT */}
      <section className="py-20 px-6 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-navy">Transformative Infrastructure</h2>
            <p className="font-body text-gray-600 text-lg">
              Visakhapatnam is witnessing unprecedented infrastructure development that is fundamentally reshaping its real estate landscape.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0"></div>
                <p className="font-body text-gray-700"><strong>Bhogapuram International Airport:</strong> Upcoming greenfield project expected to significantly boost connectivity and property values in the northern corridor.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0"></div>
                <p className="font-body text-gray-700"><strong>Metro Rail Project:</strong> Proposed mass transit system to enhance intra-city connectivity.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0"></div>
                <p className="font-body text-gray-700"><strong>IT/SEZ Expansion:</strong> Growing footprint of multinational tech companies in Rushikonda and Madhurawada IT hills.</p>
              </li>
            </ul>
            <p className="text-xs text-gray-400 italic flex items-center gap-1">
              <AlertCircle size={14} /> Source: Public domain information. Subject to project timelines.
            </p>
          </div>
          <div className="bg-background rounded-3xl p-10 h-full min-h-[400px] border border-border flex items-center justify-center">
             <div className="text-center text-gray-400">
               <Building size={64} className="mx-auto mb-4 opacity-50" />
               <p className="font-display text-xl">Infrastructure Growth Map</p>
               <p className="font-body text-sm mt-2">Visual representation area</p>
             </div>
          </div>
        </div>
      </section>

      {/* Premium Micro-Markets */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Premium Micro-Markets" 
            subtitle="Key investment corridors in Visakhapatnam"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {microMarkets.map((market) => (
              <div key={market.name} className="bg-card p-6 rounded-2xl border border-border hover:border-gold transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-gold" size={24} />
                  <h3 className="font-display text-xl text-navy">{market.name}</h3>
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {market.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Considerations */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl mb-10 text-center">Investment Considerations</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold font-bold">1</div>
                <div>
                  <h4 className="font-display text-xl mb-2">Indicative Rental Yields</h4>
                  <p className="font-body text-gray-300 text-sm">Premium properties in IT corridors typically offer competitive rental yields, driven by corporate and expat demand. (Note: Yields are indicative and subject to market conditions).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold font-bold">2</div>
                <div>
                  <h4 className="font-display text-xl mb-2">Capital Appreciation Potential</h4>
                  <p className="font-body text-gray-300 text-sm">Infrastructure developments like the new airport and IT parks present strong potential for capital appreciation over a 5-10 year horizon.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold font-bold">3</div>
                <div>
                  <h4 className="font-display text-xl mb-2">Regulatory Compliance</h4>
                  <p className="font-body text-gray-300 text-sm">Ensure all investments are AP RERA compliant and have clear titles. We assist in comprehensive due diligence for all recommended properties.</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 flex gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>Disclaimer: Real estate investments are subject to market risks. The information provided is indicative and should not be construed as a financial guarantee.</span>
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl mb-6">Ready to build your Vizag portfolio?</h3>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Book a Consultation to Discuss Vizag Investment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
