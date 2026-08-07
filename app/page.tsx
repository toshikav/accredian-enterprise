import Edge from "@/components/Edge";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Programs from "@/components/Programs";
import Solutions from "@/components/Solutions";
import Stats from "@/components/Stats";

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
      </main>
    </>
  );
}