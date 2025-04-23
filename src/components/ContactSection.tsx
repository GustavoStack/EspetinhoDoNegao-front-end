
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
        <h2 className="text-center text-4xl font-semibold mb-6 font-pacifico text-churrasco-red">
          Informações de Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="py-6 px-4 rounded-lg bg-churrasco-brown/20">
            <div className="space-y-8">
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

          {/* Delivery e Retirada */}
          <div className="py-6 px-4 rounded-lg bg-churrasco-brown/20">
            <h3 className="text-center text-xl font-semibold mb-4">Delivery e Retirada</h3>
            <p className="text-gray-300 mb-2">
              Atendemos em toda a região central com delivery rápido.
            </p>
            <p className="text-gray-300">
              Para pedidos com retirada, teremos seu espetinho fresco e quentinho esperando por você!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
