
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import TechnologySection from "@/components/TechnologySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="case-studies">
          <CaseStudies />
        </div>
        <div id="technologies">
          <TechnologySection />
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
