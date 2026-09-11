import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RERA Disclaimer | Vizag Properties',
  description: 'Important RERA and property-listing disclaimer for Vizag Properties.',
};

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="font-display text-4xl text-navy md:text-5xl">RERA Disclaimer</h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted">
          <p>Vizag Properties is an advisory website. Any project information shown here is illustrative unless expressly identified otherwise.</p>
          <p>Prospective buyers should verify the applicable RERA registration, project approvals, title documents, specifications, pricing, and availability directly with the registered developer and appropriate authorities before proceeding.</p>
          <p>Demo listings on this website are clearly marked and must not be treated as offers for sale.</p>
        </div>
      </article>
    </main>
  );
}
