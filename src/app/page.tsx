import Bento, { Writing } from "@/components/Bento";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

// Projects is hidden until real entries replace the placeholders in content/projects.ts.
export default function Home() {
  return (
    <>
      <Hero />
      <Bento />
      <Writing />
      <Experience />
      <Contact />
    </>
  );
}
