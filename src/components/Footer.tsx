
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-churrasco-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-pacifico text-2xl mb-4">Espetinho do Negão</h3>
            <p className="text-gray-300 mb-4">
              Tradição e sabor em cada espeto. O melhores espetinhos da região.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#início" onClick={(e) => {e.preventDefault();scrollToSection("início")}} className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" onClick={(e) => {e.preventDefault();scrollToSection("sobre")}} className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#menu" onClick={(e) => {e.preventDefault();scrollToSection("menu")}} className="text-gray-300 hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#depoimentos" onClick={(e) => {e.preventDefault();scrollToSection("depoimentos")}} className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" onClick={(e) => {e.preventDefault();scrollToSection("contato")}} className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Segunda a Sexta</span>
                <span>7:30h - 21:00h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sábado</span>
                <span>7:30h - 14:00h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>
        
        {/* Bottom Section */}
        <div className="text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Espetinho do Negão. Todos os direitos reservados.</p>
          <p className="mt-1">
            <a href="#" className="hover:underline">Política de Privacidade</a> | 
            <a href="#" className="hover:underline ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
