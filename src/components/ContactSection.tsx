
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Reserva Recebida!",
      description: "Entraremos em contato para confirmar sua reserva.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="section-padding bg-churrasco-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-white mb-12">Faça sua Reserva</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-pacifico text-churrasco-red">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-churrasco-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-300">Av. Brasil, 1234 - Centro</p>
                    <p className="text-gray-300">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-churrasco-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento</h4>
                    <p className="text-gray-300">Segunda a Sexta: 18h - 23h</p>
                    <p className="text-gray-300">Sábado e Domingo: 12h - 00h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-churrasco-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-300">(11) 3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-churrasco-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">contato@espetinhogrill.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 py-6 px-4 rounded-lg bg-churrasco-brown/20">
              <h3 className="text-xl font-semibold mb-4">Venha nos Visitar</h3>
              <p className="text-gray-300 mb-2">
                Estamos localizados em uma região central, de fácil acesso, com estacionamento no local.
              </p>
              <p className="text-gray-300">
                Para grandes grupos, recomendamos reserva antecipada.
              </p>
            </div>
          </div>
          
          {/* Right Column - Reservation Form */}
          <div className="bg-white text-churrasco-charcoal p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-churrasco-red font-pacifico">Formulário de Reserva</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nome Completo</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="(00) 00000-0000" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-1">Número de Pessoas</label>
                  <Input 
                    id="guests" 
                    name="guests" 
                    type="number" 
                    min="1" 
                    placeholder="2" 
                    required
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">Data e Hora</label>
                <Input 
                  id="date" 
                  name="date" 
                  type="datetime-local" 
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Se tiver alguma preferência ou solicitação especial, informe aqui." 
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-churrasco-red hover:bg-red-800 text-white font-medium py-2"
              >
                Enviar Reserva
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
