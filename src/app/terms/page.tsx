import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vizag Properties',
  description: 'Terms governing use of the Vizag Properties website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="font-display text-4xl text-navy md:text-5xl">Terms of Service</h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted">
          <p>This website provides general information about property and advisory services. It is not financial, legal, tax, or investment advice.</p>
          <p>Property availability, illustrations, specifications, and pricing are indicative and may change. All enquiries and transactions remain subject to independent verification and applicable agreements.</p>
          <p>By using this website, you agree not to rely solely on its content when making a property or investment decision.</p>
        </div>
      </article>
    </main>
  );
}
