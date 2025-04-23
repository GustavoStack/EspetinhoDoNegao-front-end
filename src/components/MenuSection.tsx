import { useState, useEffect } from "react";
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui/tabs";
import { Utensils, Beer, GlassWater, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";

type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  productType: string;
  imageUrl: string
};

type CategoryType = {
  id: string;
  label: string;
  icon: JSX.Element;
};

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState<Record<string, MenuItemType[]>>({});
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:8090/products");

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data: MenuItemType[] = await response.json();

        const groupedItems: Record<string, MenuItemType[]> = data.reduce((acc, item) => {
          if (!acc[item.productType]) {
            acc[item.productType] = [];
          }
          acc[item.productType].push(item);
          return acc;
        }, {});

        setMenuItems(groupedItems);

        setCategories([
          { id: "FOOD_TYPE", label: "Espetinhos", icon: <Utensils size={18} /> },
          { id: "DRINK_TYPE", label: "Bebidas", icon: <GlassWater size={18} /> },
          { id: "BEER_TYPE", label: "Cervejas", icon: <Beer size={18} /> },
          { id: "ACCOMPANIMENT_TYPE", label: "Acompanhamentos", icon: <Utensils size={18} /> },
        ]);
      } catch (error) {
        console.error("Erro ao buscar os dados do menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (loading) {
    return (
      <section id="menu" className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <p>Carregando o cardápio...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Nosso Cardápio</h2>
        <p className="text-center text-lg text-churrasco-charcoal mb-12 max-w-2xl mx-auto">
          Descubra nossa seleção de espetinhos preparados com carnes selecionadas e temperos especiais.
        </p>

        <Tabs defaultValue={categories[0]?.id || ""} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {categories.map(category => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-churrasco-red data-[state=active]:text-white flex items-center gap-2"
              >
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems[category.id]?.map(item => (
                  <div key={item.id} className="menu-item flex gap-4">
                    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-churrasco-brown">
                          {item.name}
                        </h3>
                        <span className="font-bold text-churrasco-red">R$ {item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <Button
                        size="sm"
                        className="mt-3 bg-churrasco-red text-white hover:bg-red-800"
                        onClick={() => addToCart({ id: item.id, name: item.name, price: item.price.toFixed(0)})}
                      >
                        Adicionar ao carrinho
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-flex items-center gap-2">
            <ShoppingBag size={18} />
            Fazer Pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;