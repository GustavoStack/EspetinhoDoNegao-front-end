
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section id="início" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1529589381442-c47625e87178?q=80&w=1920')",
            backgroundPosition: "center center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-pacifico text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-shadow mb-4 animate-flame">
            Espetinho Grill
          </h1>
          <p className="text-xl sm:text-2xl text-white font-light mb-8 max-w-2xl mx-auto">
            Tradição e sabor em cada espeto. A melhor churrascaria especializada em espetinhos da cidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="btn-primary flex items-center justify-center gap-2">
              Ver Cardápio <ArrowRight size={18} />
            </a>
            <a 
              href="#contato" 
              className="py-3 px-8 rounded-full font-medium transition-all 
                       bg-transparent border-2 border-white text-white 
                       hover:bg-white hover:text-churrasco-red transform hover:-translate-y-1
                       flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Fazer Pedido
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="flex justify-center">
          <a href="#sobre" className="animate-bounce text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
