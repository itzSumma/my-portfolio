import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import HorizontalProjects from "@/components/HorizontalProjects";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skill";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <HorizontalProjects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
