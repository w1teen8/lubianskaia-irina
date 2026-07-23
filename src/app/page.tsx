import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Prices from "@/components/Prices";
import WhyChooseMe from "@/components/WhyChooseMe";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Prices />
      <WhyChooseMe />
      <Reviews />
      <Booking />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
