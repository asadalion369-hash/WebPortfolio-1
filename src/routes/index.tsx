import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { WhyMe } from "@/components/sections/why-me";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { CaseStudies } from "@/components/sections/case-studies";
import { AlphaFramework } from "@/components/sections/alpha-framework";
import { TechnicalArsenal } from "@/components/sections/technical-arsenal";
import { Experience } from "@/components/sections/experience";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faqs } from "@/components/sections/faqs";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <WhyMe />
        <Services />
        <Projects />
        <CaseStudies />
        <AlphaFramework />
        <TechnicalArsenal />
        <Experience />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
