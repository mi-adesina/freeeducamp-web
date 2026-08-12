import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Subjects from "@/components/sections/Subjects";
import Features from "@/components/sections/Features";
import Vision from "@/components/sections/Vision";
import FounderStory from "@/components/sections/FounderStory";
import TrustSignals from "@/components/sections/TrustSignals";
import Waitlist from "@/components/sections/Waitlist";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Subjects />
        <Features />
        <Vision />
        <FounderStory />
        <TrustSignals />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
