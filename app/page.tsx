import Contact from "@/components/Contact";
import Edge from "@/components/Edge";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Programs from "@/components/Programs";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Edge />
        <Expertise />
        <Programs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}