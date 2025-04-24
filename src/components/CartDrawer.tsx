import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, CreditCard, DollarSign } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const paymentMethods = [
  { id: "cash", label: "Dinheiro", icon: <DollarSign size={18} /> },
  { id: "card", label: "Cartão", icon: <CreditCard size={18} /> },
];

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { cart, removeFromCart, changeItemQty, total, clearCart, } = useCart();
  const [finalized, setFinalized] = useState(false);
  const navigate = useNavigate();

  function handleQty(id: number, delta: number) {
    const item = cart.find(i => i.id === id);
    if (item && item.quantity + delta >= 1) {
      changeItemQty(id, item.quantity + delta);
    }
  }

  function handleFinishOrder() {
    setFinalized(true);
    clearCart();
    navigate("/checkout", { state: { items: cart } });
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>
            <ShoppingCart className="inline mr-2" /> Seu Carrinho
          </SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <div className="py-10 text-center text-muted-foreground">
            {finalized ? "Pedido finalizado! Obrigado!" : "Seu carrinho está vazio."}
          </div>
        ) : (
          <>
            <div className="overflow-y-auto max-h-96">
              {cart.map(item => (
                <div key={item.id} className="flex items-center border-b py-3 gap-3">
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.price}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" onClick={() => handleQty(item.id, -1)}>
                      <Minus />
                    </Button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQty(item.id, +1)}>
                      <Plus />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4 space-y-3">
              <div className="flex justify-between text-lg font-bold">
                <div>Total</div>
                <div>
                  R$ {total.toFixed(2)}
                </div>
              </div>
              <SheetClose asChild>
                <Button type="button" className="w-full bg-churrasco-red text-white mt-2" onClick={handleFinishOrder}>
                  Finalizar Pedido
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}