import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="space-y-32 pb-64">
      <section className="relative">
        <Hero />
      </section>
      
      <section className="relative">
        <div className="container mx-auto px-4">
          <BentoGrid />
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}