import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Search, 
  Map, 
  Globe, 
  Handshake 
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About | Vizag Properties',
  description: 'Vizag Properties is a specialist property advisory for premium real estate in Visakhapatnam, catering to HNIs and NRIs.',
};

const principles = [
  {
    icon: Search,
    title: 'Curated Inventory',
    description: 'We do not list every property. We rigorously vet and curate only premium developments from reputed builders that meet our strict quality and legal standards.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Information',
    description: 'We believe in complete transparency. From clear pricing to honest assessments of project timelines and legal status, we provide the facts you need.'
  },
  {
    icon: Map,
    title: 'Local Expertise',
    description: 'Our deep-rooted knowledge of Visakhapatnam\'s micro-markets, infrastructure plans, and developer track records gives our clients a distinct advantage.'
  },
  {
    icon: Globe,
    title: 'NRI-Friendly Process',
    description: 'We understand the unique challenges faced by overseas buyers. Our processes are designed to offer seamless remote transactions and complete peace of mind.'
  },
  {
    icon: Handshake,
    title: 'End-to-End Coordination',
    description: 'From initial consultation and site visits to legal due diligence, registration, and post-possession management, we are with you at every step.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            A Specialist Property Advisory for <span className="text-gold">Premium Vizag Real Estate</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300">
            Guiding high-net-worth individuals and non-resident Indians through strategic real estate investments in Visakhapatnam.
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeading title="Who We Are" subtitle="Your trusted real estate partners" />
          
          <div className="prose prose-lg text-gray-600 font-body max-w-none">
            <p>
              Vizag Properties was founded with a singular vision: to elevate the real estate advisory experience in Visakhapatnam. In a market often characterized by information asymmetry, we stand as a beacon of transparency, professionalism, and specialized knowledge.
            </p>
            <p>
              We are not a traditional brokerage or a listing portal. We are a specialized property advisory firm focused exclusively on premium residential and commercial assets. Our strong relationships with top-tier developers give our clients access to exclusive inventory and pre-launch opportunities that define the future of Vizag’s skyline.
            </p>
            <p>
              Whether you are an NRI looking to build an asset back home, or an HNI seeking a luxury coastal residence, our tailored approach ensures your investment aligns perfectly with your financial goals and lifestyle aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Why Work With Us" 
            subtitle="The principles that drive our advisory"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">{principle.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach & CTA */}
      <section className="py-24 px-6 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-3xl md:text-4xl">Our Philosophy</h2>
          <p className="font-body text-gray-300 text-lg leading-relaxed">
            We believe that a real estate investment is more than a transaction; it is a legacy. Our approach is consultative, not transactional. We take the time to understand your vision, providing data-driven insights and rigorous due diligence to turn that vision into reality.
          </p>
          
          <div className="pt-8">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
