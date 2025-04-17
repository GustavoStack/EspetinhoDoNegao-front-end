
import { MapPin, Clock, Phone, Mail, ShoppingBag } from "lucide-react";
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
    address: "",
    orderNotes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pedido enviado:", formData);
    toast({
      title: "Pedido Enviado!",
      description: "Recebemos seu pedido e entraremos em contato para confirmar.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      orderNotes: ""
    });
  };

  return (
    <section id="contato" className="section-padding bg-churrasco-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-white mb-12">Faça seu Pedido</h2>
        
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
              <h3 className="text-xl font-semibold mb-4">Delivery e Retirada</h3>
              <p className="text-gray-300 mb-2">
                Atendemos em toda a região central com delivery rápido.
              </p>
              <p className="text-gray-300">
                Para pedidos com retirada, teremos seu espetinho fresco e quentinho esperando por você!
              </p>
            </div>
          </div>
          
          {/* Right Column - Order Form */}
          <div className="bg-white text-churrasco-charcoal p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-churrasco-red font-pacifico">Formulário de Pedido</h3>
            
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
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Endereço de Entrega</label>
                  <Input 
                    id="address" 
                    name="address" 
                    placeholder="Rua, número, bairro" 
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="orderNotes" className="block text-sm font-medium mb-1">Observações do Pedido</label>
                <Textarea 
                  id="orderNotes" 
                  name="orderNotes" 
                  placeholder="Alguma instrução especial para o seu pedido?" 
                  rows={3}
                  value={formData.orderNotes}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-churrasco-red hover:bg-red-800 text-white font-medium py-2 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Finalizar Pedido
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
