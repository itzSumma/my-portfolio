import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HorizontalProjects from "@/components/HorizontalProjects";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <div id="projects">
          <HorizontalProjects />
        </div>
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

