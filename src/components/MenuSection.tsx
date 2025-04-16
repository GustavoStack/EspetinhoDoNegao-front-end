
import { useState } from "react";
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui/tabs";

type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  imageUrl: string;
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("carnes");
  
  const menuItems: Record<string, MenuItemType[]> = {
    carnes: [
      {
        id: 1,
        name: "Picanha Premium",
        description: "O clássico corte brasileiro, macio e suculento.",
        price: "R$ 15,90",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 2,
        name: "Maminha",
        description: "Corte macio e saboroso, temperado com sal grosso.",
        price: "R$ 12,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 3,
        name: "Cupim",
        description: "Macio e suculento, derrete na boca.",
        price: "R$ 13,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 4,
        name: "Costela",
        description: "Lentamente assada para máxima suculência.",
        price: "R$ 14,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    aves: [
      {
        id: 5,
        name: "Frango com Bacon",
        description: "Cubos de frango envoltos em bacon crocante.",
        price: "R$ 10,90",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 6,
        name: "Coração de Frango",
        description: "Tradicional e saboroso, na medida certa de sal.",
        price: "R$ 9,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    especiais: [
      {
        id: 7,
        name: "Espeto Misto",
        description: "Combinação de carnes nobres em um único espeto.",
        price: "R$ 18,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 8,
        name: "Linguiça Artesanal",
        description: "Receita da casa, levemente apimentada.",
        price: "R$ 11,90",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    acompanhamentos: [
      {
        id: 9,
        name: "Pão de Alho",
        description: "Crocante por fora, macio por dentro.",
        price: "R$ 7,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 10,
        name: "Legumes Grelhados",
        description: "Mix de legumes frescos grelhados na brasa.",
        price: "R$ 8,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  };

  const categories = [
    { id: "carnes", label: "Carnes" },
    { id: "aves", label: "Aves" },
    { id: "especiais", label: "Especiais" },
    { id: "acompanhamentos", label: "Acompanhamentos" }
  ];

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Nosso Cardápio</h2>
        <p className="text-center text-lg text-churrasco-charcoal mb-12 max-w-2xl mx-auto">
          Descubra nossa seleção de espetinhos preparados com carnes selecionadas e temperos especiais.
        </p>
        
        <Tabs defaultValue="carnes" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-churrasco-red data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems[category.id].map(item => (
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
                          {item.popular && (
                            <span className="ml-2 bg-churrasco-red text-white text-xs px-2 py-0.5 rounded-full">Popular</span>
                          )}
                        </h3>
                        <span className="font-bold text-churrasco-red">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-block">Faça sua Reserva</a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
