import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Hero />
      <Bento />
      <Projects />
      <Experience />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}
