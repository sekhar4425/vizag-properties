import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import PropertyFinder from "@/components/home/PropertyFinder";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyVizag from "@/components/home/WhyVizag";
import ServicesPreview from "@/components/home/ServicesPreview";
import NRISection from "@/components/home/NRISection";
import InvestmentBrief from "@/components/home/InvestmentBrief";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <PropertyFinder />
      <FeaturedProperties />
      <WhyVizag />
      <ServicesPreview />
      <NRISection />
      <InvestmentBrief />
    </main>
  );
}
