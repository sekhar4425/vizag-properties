import { Metadata } from 'next';
import { BookOpen, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Resources & Insights | Vizag Properties',
  description: 'Expert insights, market reports, and investment guides for Visakhapatnam real estate.',
};

const articles = [
  {
    title: 'Best Areas in Vizag for NRI Property Investment in 2026',
    description: 'A comprehensive analysis of micro-markets offering the best capital appreciation and rental yields for overseas investors.',
    category: 'Market Analysis',
  },
  {
    title: 'Vizag Property Investment Guide for NRIs',
    description: 'Step-by-step guide covering FEMA compliance, POA management, and repatriation of funds for real estate investments.',
    category: 'NRI Guide',
  },
  {
    title: 'Premium Villas in Visakhapatnam: What Buyers Should Consider',
    description: 'Key factors to evaluate when purchasing luxury villas, from built quality to community amenities and maintenance.',
    category: 'Buying Guide',
  },
  {
    title: 'Rushikonda vs Madhurawada: Which Area Is Right for You?',
    description: 'A comparative study of Vizag\'s two most prominent IT and residential corridors to help you make an informed choice.',
    category: 'Location Guide',
  },
  {
    title: 'How NRIs Can Buy Property in India',
    description: 'The legal and financial framework governing non-resident property purchases in the Indian real estate market.',
    category: 'Legal & Compliance',
  },
  {
    title: 'Visakhapatnam Micro-Markets 2026',
    description: 'Future projections and infrastructure developments shaping the next decade of Vizag real estate.',
    category: 'Future Trends',
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Resources & <span className="text-gold">Insights</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300">
            Expert analysis, market reports, and comprehensive guides for premium real estate investment in Visakhapatnam.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Latest Insights" 
            subtitle="Curated knowledge from our advisory team" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-semibold rounded-full font-body">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full font-body">
                      <Clock size={12} />
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {article.description}
                  </p>
                  <div className="pt-4 border-t border-border mt-auto flex items-center text-sm font-medium text-gray-400">
                    <BookOpen size={16} className="mr-2" />
                    Read Article
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-card p-10 rounded-2xl border border-border">
            <h3 className="font-display text-2xl text-navy mb-3">Want these insights in your inbox?</h3>
            <p className="font-body text-gray-600 mb-6">
              More articles and detailed market reports coming soon. Subscribe for updates.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-l-lg border border-border focus:outline-none focus:border-gold font-body"
              />
              <button className="bg-gold text-white px-6 py-3 rounded-r-lg font-body font-medium hover:bg-gold-hover transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
