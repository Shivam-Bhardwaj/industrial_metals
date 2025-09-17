import { CTA } from "./components/CTA";
import { Hero } from "./components/Hero";
import { Industries } from "./components/Industries";
import { InventoryHighlights } from "./components/InventoryHighlights";
import { ResourceHighlights } from "./components/ResourceHighlights";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <InventoryHighlights />
      <Industries />
      <Testimonials />
      <ResourceHighlights />
      <CTA />
    </main>
  );
}
