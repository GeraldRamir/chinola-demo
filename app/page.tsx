import { Hero } from "@/components/hero";
import { NewArrivals, CampaignStrip, CategoryIndex, Stories } from "@/components/home-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top">
      <main id="main">
        <Hero />
        <NewArrivals />
        <CampaignStrip />
        <CategoryIndex />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
