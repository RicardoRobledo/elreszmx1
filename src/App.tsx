import { marqueeItems } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Merch } from "@/components/sections/Merch";
import { Services } from "@/components/sections/Services";
import { Sponsors } from "@/components/sections/Sponsors";
import { Team } from "@/components/sections/Team";
import { Upcoming } from "@/components/sections/Upcoming";
import { Work } from "@/components/sections/Work";
import { Marquee } from "@/components/ui/Marquee";
import { SkipLink } from "@/components/ui/SkipLink";
import { StructuredData } from "@/components/ui/StructuredData";

export default function App() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Navbar />

      <main id="contenido" className="overflow-x-clip">
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <Team />
        <Work />
        <Services />
        <Sponsors />
        <Events />
        <Upcoming />
        <Merch />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
