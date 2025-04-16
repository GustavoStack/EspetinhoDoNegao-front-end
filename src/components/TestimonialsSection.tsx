
import { Star } from "lucide-react";

type TestimonialProps = {
  name: string;
  comment: string;
  rating: number;
  date: string;
  imageUrl?: string;
};

const Testimonial = ({ name, comment, rating, date, imageUrl }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={imageUrl || "https://i.pravatar.cc/100"} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-churrasco-brown">{name}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-churrasco-charcoal italic">"{comment}"</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rafael Silva",
      comment: "Os espetinhos de picanha são simplesmente incríveis! Suculentos e perfeitamente temperados. Já virei cliente fiel.",
      rating: 5,
      date: "20/03/2023",
      imageUrl: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Ana Oliveira",
      comment: "Ambiente aconchegante e atendimento excelente. A linguiça artesanal é um destaque! Recomendo demais.",
      rating: 4,
      date: "15/02/2023",
      imageUrl: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Carlos Mendes",
      comment: "Melhor espetinho da cidade! O de frango com bacon superou minhas expectativas. Voltarei com certeza.",
      rating: 5,
      date: "10/03/2023",
      imageUrl: "https://i.pravatar.cc/150?img=12"
    },
  ];
  
  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-churrasco-beige to-white">
      <div className="container mx-auto">
        <h2 className="section-title">O que Dizem Nossos Clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              comment={testimonial.comment}
              rating={testimonial.rating}
              date={testimonial.date}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
