import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
