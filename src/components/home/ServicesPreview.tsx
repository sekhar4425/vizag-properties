import Link from 'next/link';
import { Handshake, Globe, Scale, Video, BarChart3, Home } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Handshake,
    title: 'Channel Partner Advisory',
    description: 'Exclusive access to pre-launch opportunities and premium inventory through our developer networks.',
  },
  {
    icon: Globe,
    title: 'NRI Concierge',
    description: 'Dedicated relationship managers catering to overseas time zones and specific investment requirements.',
  },
  {
    icon: Scale,
    title: 'Legal & Title Support',
    description: 'Rigorous due diligence, RERA compliance checks, and end-to-end documentation assistance.',
  },
  {
    icon: Video,
    title: 'Virtual Site Visits',
    description: 'High-definition live property tours and neighborhood walkthroughs from anywhere in the world.',
  },
  {
    icon: BarChart3,
    title: 'Investment Analysis',
    description: 'Data-driven insights into micro-markets, infrastructure developments, and growth corridors.',
  },
  {
    icon: Home,
    title: 'Post-Possession Support',
    description: 'Handover assistance, interior design coordination, and property management referral services.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="SERVICES" title="More Than Property. Complete Advisory." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="border border-border bg-card p-8 rounded-xl hover:border-gold transition-colors duration-300 flex flex-col items-start group">
                <div className="p-3 bg-gold/10 rounded-lg text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
            <Link href="/services">Learn More About Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
