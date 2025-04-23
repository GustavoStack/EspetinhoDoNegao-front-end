import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CartProvider>
        <Navbar />
        <Hero />
        <AboutSection />
        <MenuSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Index;
