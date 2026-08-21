import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import AboutTeaser from "../components/AboutTeaser";
import ServicesGrid from "../components/ServicesGrid";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <AboutTeaser />
      <ServicesGrid limit={4} />
      <Portfolio limit={6} />
      <Stats />
      <Testimonials limit={3} />
      <Cta />
    </>
  );
}
