
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const items = location.state?.items as CartItem[] || [];

  const [formData, setFormData] = useState({
    client: "",
    street: "",
    number: "",
    neighborhood: "",
    phoneNumber: "",
    methodPayment: "dinheiro"
  });

  const deliveryFee = 3.00;

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const order = {
        ...formData,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total
      };

      await axios.post("http://localhost:8090/orders", order);

      setFormData({client: "", street: "", number: "", neighborhood: "", phoneNumber: "", methodPayment: "dinheiro"});

      console.log("Pedido enviado:", order);
    } catch (error) {
      console.error("Erro ao enviar pedido:", error);
      toast({
        title: "Erro ao realizar o pedido",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pedido realizado com sucesso!",
      description: "Em breve você receberá a confirmação do seu pedido.",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-churrasco-background py-12">
      <div className="container max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-churrasco-red mb-8">
          Finalizar Pedido
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between">
            <p>Taxa da emtrega </p><span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                required
                value={formData.client}
                placeholder="Nome completo..."
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="address">Rua</Label>
              <Input
                id="address"
                required
                value={formData.street}
                placeholder="Nome da rua..."
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address">Número</Label>
                <Input
                  id="address"
                  required
                  value={formData.number}
                  placeholder="Numero da casa..."
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="address">Bairro</Label>
                <Input
                  id="address"
                  required
                  value={formData.neighborhood}
                  placeholder="Nome do bairro..."
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                required
                value={formData.phoneNumber}
                placeholder="(55) 99999-9999"
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </div>

            <div>
              <Label>Forma de Pagamento</Label>
              <RadioGroup
                value={formData.methodPayment}
                onValueChange={(value) => setFormData({ ...formData, methodPayment: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dinheiro" id="dinheiro" />
                  <Label htmlFor="dinheiro">Dinheiro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix">PIX</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao">Cartão</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-churrasco-red hover:bg-red-800"
          >
            Confirmar Pedido
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;