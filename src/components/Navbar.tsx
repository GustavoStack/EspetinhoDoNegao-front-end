
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import CartDrawer from "./CartDrawer";
import CartButton from "./ui/CartButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className={`font-pacifico text-2xl md:text-3xl ${isScrolled ? "text-churrasco-red" : "text-white text-shadow"}`}>
              Espetinho do Negão
            </span>
          </a>
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? "text-churrasco-red" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Início", "Sobre", "Menu", "Depoimentos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()) }}
                className={`font-medium text-lg hover:text-churrasco-red transition-colors ${isScrolled ? "text-churrasco-brown" : "text-white text-shadow"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["Início", "Sobre", "Menu", "Depoimentos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-lg text-churrasco-brown hover:text-churrasco-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <CartButton onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};

export default Navbar;
