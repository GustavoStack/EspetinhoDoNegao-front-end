import { useState } from "react";
import { TabsList, TabsTrigger, TabsContent, Tabs } from "@/components/ui/tabs";
import { Utensils, Beer, GlassWater, ShoppingBag } from "lucide-react";

type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  imageUrl: string;
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("espetinhos");
  
  const menuItems: Record<string, MenuItemType[]> = {
    espetinhos: [
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
      },
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
      },
      {
        id: 7,
        name: "Linguiça Artesanal",
        description: "Receita da casa, levemente apimentada.",
        price: "R$ 11,90",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 8,
        name: "Kafta",
        description: "Carne moída temperada com especiarias orientais.",
        price: "R$ 12,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    bebidas_nao_alcoolicas: [
      {
        id: 9,
        name: "Água Mineral",
        description: "Com ou sem gás - 500ml.",
        price: "R$ 5,00",
        imageUrl: "https://images.unsplash.com/photo-1578653520367-4a8b6247be2f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 10,
        name: "Refrigerante",
        description: "Coca-Cola, Guaraná, Sprite - Lata 350ml.",
        price: "R$ 6,00",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1578653520367-4a8b6247be2f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 11,
        name: "Suco Natural",
        description: "Laranja, Abacaxi ou Limão - Copo 300ml.",
        price: "R$ 8,00",
        imageUrl: "https://images.unsplash.com/photo-1578653520367-4a8b6247be2f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 12,
        name: "Água de Coco",
        description: "Natural e gelada - Copo 300ml.",
        price: "R$ 7,00",
        imageUrl: "https://images.unsplash.com/photo-1578653520367-4a8b6247be2f?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    cervejas: [
      {
        id: 13,
        name: "Cerveja Pilsen",
        description: "Brahma, Skol, Antarctica - Long Neck 355ml.",
        price: "R$ 8,90",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 14,
        name: "Cerveja Puro Malte",
        description: "Brahma Duplo Malte, Heineken - Long Neck 355ml.",
        price: "R$ 10,90",
        imageUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 15,
        name: "Cerveja Artesanal",
        description: "IPA, APA, Stout - Garrafa 500ml.",
        price: "R$ 18,90",
        imageUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 16,
        name: "Chopp",
        description: "Claro ou escuro - Copo 350ml.",
        price: "R$ 12,00",
        popular: true,
        imageUrl: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    acompanhamentos: [
      {
        id: 17,
        name: "Pão de Alho",
        description: "Crocante por fora, macio por dentro.",
        price: "R$ 7,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 18,
        name: "Legumes Grelhados",
        description: "Mix de legumes frescos grelhados na brasa.",
        price: "R$ 8,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 19,
        name: "Farofa da Casa",
        description: "Com bacon e temperos especiais.",
        price: "R$ 6,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 20,
        name: "Vinagrete",
        description: "Tomate, cebola e pimentão frescos.",
        price: "R$ 5,90",
        imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  };

  const categories = [
    { id: "espetinhos", label: "Espetinhos", icon: <Utensils size={18} /> },
    { id: "bebidas_nao_alcoolicas", label: "Bebidas", icon: <GlassWater size={18} /> },
    { id: "cervejas", label: "Cervejas", icon: <Beer size={18} /> },
    { id: "acompanhamentos", label: "Acompanhamentos", icon: <Utensils size={18} /> }
  ];

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Nosso Cardápio</h2>
        <p className="text-center text-lg text-churrasco-charcoal mb-12 max-w-2xl mx-auto">
          Descubra nossa seleção de espetinhos preparados com carnes selecionadas e temperos especiais.
        </p>
        
        <Tabs defaultValue="espetinhos" className="w-full max-w-4xl mx-auto">
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
