import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Highlights from "@/components/sections/Highlights";
import Pricing from "@/components/sections/Pricings";
import Amenities from "@/components/sections/Ámenities";
import FloorPlan from "@/components/sections/FloorPlan";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import FooterContact from "@/components/sections/FooterContact";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/shared/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-200 selection:text-black">
      <Navbar />
      <Hero />
      {/* Upcoming real estate visual sections will line up here directly */}
      <Overview/>
      <Highlights/>
      <Pricing/>
      <Amenities/>
      <FloorPlan/>
      <Gallery/>
      <Location/>
      <FooterContact/>
      <Footer/>
      <FloatingActions/>
    </main>
  );
}