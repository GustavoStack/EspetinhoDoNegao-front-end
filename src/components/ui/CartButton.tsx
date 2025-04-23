import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  onClick: () => void;
};

export default function CartButton({ onClick }: Props) {
  const { cart } = useCart();
  const totalQty = cart.reduce((a, i) => a + i.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="fixed z-50 bottom-6 right-6 rounded-full bg-churrasco-red text-white p-4 shadow-lg flex items-center gap-2 hover:bg-red-800 transition-all"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={28} />
      {totalQty > 0 && (
        <span className="bg-white text-churrasco-red rounded-full px-2 text-sm font-bold">{totalQty}</span>
      )}
    </button>
  );
}