import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Writing />
      <Workshops />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
