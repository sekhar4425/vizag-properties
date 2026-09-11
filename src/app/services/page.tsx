import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  Globe2, 
  Scale, 
  Video, 
  LineChart, 
  Key 
} from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services | Vizag Properties',
  description: 'Complete real estate advisory services in Visakhapatnam including Channel Partner Advisory, NRI Concierge, Legal Support, and Investment Analysis.',
};

const services = [
  {
    id: 'channel-partner',
    title: 'Channel Partner Advisory',
    icon: Building2,
    description: 'We help you identify the most suitable developer inventory across Visakhapatnam based on your investment goals and lifestyle requirements. Our advisory ensures you get access to exclusive properties before they hit the broader market.',
    features: [
      'Access to exclusive developer inventory',
      'Unbiased property comparison',
      'Negotiation assistance',
      'Documentation support'
    ]
  },
  {
    id: 'nri-concierge',
    title: 'NRI Concierge',
    icon: Globe2,
    description: 'A specialized service designed for Non-Resident Indians seeking to invest in Visakhapatnam. We manage the entire process remotely, from shortlisting to possession, giving you complete peace of mind.',
    features: [
      'Remote buying assistance',
      'Documentation & Power of Attorney support',
      'FEMA compliance guidance',
      'Post-purchase management'
    ]
  },
  {
    id: 'legal-title',
    title: 'Legal & Title Support',
    icon: Scale,
    description: 'We coordinate comprehensive due diligence with top legal professionals to ensure your investment is safe. Clear titles and regulatory compliance are the foundations of every transaction we advise on.',
    features: [
      'Title verification coordination',
      'RERA compliance checks',
      'Sale agreement vetting',
      'Registration assistance'
    ]
  },
  {
    id: 'virtual-site-visits',
    title: 'Virtual Site Visits',
    icon: Video,
    description: 'Cannot visit Visakhapatnam? Our detailed video walkthroughs and live virtual tours give you a realistic feel of the property, its surroundings, and the micro-market infrastructure without leaving your home.',
    features: [
      'Live guided video tours',
      'Drone footage of surroundings',
      'Neighborhood infrastructure analysis',
      'Progress updates for under-construction projects'
    ]
  },
  {
    id: 'investment-analysis',
    title: 'Investment Analysis',
    icon: LineChart,
    description: 'Make data-driven decisions with our comprehensive investment analysis. We provide indicative rental yields, capital appreciation projections, and comparative market analysis for premium properties.',
    features: [
      'Indicative rental yield calculations',
      'Micro-market growth analysis',
      'Comparative property evaluation',
      'Exit strategy planning'
    ]
  },
  {
    id: 'post-possession',
    title: 'Post-Possession Support',
    icon: Key,
    description: 'Our relationship doesn\'t end at possession. We offer ongoing support to ensure your property is well-maintained and generates optimal returns through our trusted network of property managers.',
    features: [
      'Rental management coordination',
      'Interior design & execution support',
      'Property maintenance oversight',
      'Resale advisory'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            More Than Property. <span className="text-gold">Complete Advisory.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Expert guidance tailored to high-net-worth individuals and NRIs seeking premium real estate opportunities in Visakhapatnam.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6">
                    <Icon size={32} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-navy">
                    {service.title}
                  </h2>
                  <p className="font-body text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                        <span className="font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full bg-card rounded-3xl p-8 border border-border shadow-sm flex items-center justify-center min-h-[300px]">
                  <div className="text-center opacity-50">
                    <Icon size={80} className="mx-auto text-navy mb-4" />
                    <p className="font-display text-xl text-navy">{service.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-24 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl">Ready to Explore Premium Properties?</h2>
          <p className="font-body text-gray-300 text-lg">
            Schedule a personalized consultation with our advisory team to discuss your investment objectives in Visakhapatnam.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
