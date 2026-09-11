import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vizag Properties',
  description: 'How Vizag Properties handles information submitted through this website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="font-display text-4xl text-navy md:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 leading-relaxed text-muted">
          <p>When you submit an enquiry, we use the information you provide to respond to your request and coordinate the relevant advisory service.</p>
          <p>We do not sell personal information. We may share it only with professional advisers or service providers where this is necessary to handle your enquiry and permitted by law.</p>
          <p>You may request access to, correction of, or deletion of your submitted information by contacting us through the contact page.</p>
        </div>
      </article>
    </main>
  );
}
