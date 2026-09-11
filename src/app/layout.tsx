import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { JsonLd, organizationSchema } from "@/lib/structured-data";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  description: "Private property and investment advisory for premium Visakhapatnam real estate, serving discerning Indian and NRI investors.",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
