
import { Flame, Award, Clock, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-churrasco-beige">
      <div className="container mx-auto">
        <h2 className="section-title">Nossa História</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1000&auto=format&fit=crop" 
              alt="Nossos espetinhos sendo preparados" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Right side - Text */}
          <div>
            <p className="text-lg text-churrasco-charcoal mb-6">
              Fundado em 2023, o <span className="font-bold text-churrasco-red">Espetinho Grill</span> surgiu da paixão de uma família pelo autêntico churrasco brasileiro, com foco especial na arte dos espetinhos perfeitamente preparados.
            </p>
            <p className="text-lg text-churrasco-charcoal mb-6">
              Embora sejamos novos no mercado, trazemos uma tradição familiar de décadas no preparo de carnes nobres, oferecendo uma experiência única onde qualidade e sabor são nossas prioridades absolutas.
            </p>
            <p className="text-lg text-churrasco-charcoal mb-8">
              Cada espetinho é cuidadosamente preparado com ingredientes selecionados e grelhado no ponto exato, seguindo técnicas tradicionais que garantem o sabor autêntico do verdadeiro churrasco.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Flame className="text-churrasco-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-churrasco-brown">Fogo a Lenha</h3>
                  <p className="text-sm text-churrasco-charcoal">Sabor autêntico e defumado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="text-churrasco-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-churrasco-brown">Qualidade Premium</h3>
                  <p className="text-sm text-churrasco-charcoal">Cortes selecionados</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-churrasco-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-churrasco-brown">Preparo Artesanal</h3>
                  <p className="text-sm text-churrasco-charcoal">Receitas tradicionais</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="text-churrasco-red flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-churrasco-brown">Ambiente Familiar</h3>
                  <p className="text-sm text-churrasco-charcoal">Aconchego e tradição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
