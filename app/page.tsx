import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessSectors from "@/components/BusinessSectors";
import About from "@/components/About";
import Investment from "@/components/Investment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Statistics from "@/components/Statistics";
export default function Homepage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <BusinessSectors />
      <Investment />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}