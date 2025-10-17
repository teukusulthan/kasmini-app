import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TargetAudience } from "@/components/TargetAudience";
import { Comparison } from "@/components/Comparison";
import { Demo } from "@/components/Demo";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav selalu di atas */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Value strip (highlight nilai cepat dibaca) */}
      <ValueStrip />

      {/* Anchor untuk smooth-scroll dari Navbar */}
      <div id="fitur" />
      <Features />

      <div id="cara-kerja" />
      <HowItWorks />

      <TargetAudience />

      <Comparison />

      <div id="demo" />
      <Demo />

      <Testimonials />

      <FinalCTA />

      <Footer />
    </div>
  );
}
