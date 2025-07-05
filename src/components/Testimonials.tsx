
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      location: "United Kingdom",
      rating: 5,
      text: "Absolutely magical experience! The crew was fantastic, the snorkeling was incredible, and the BBQ lunch on Île aux Cerfs was unforgettable. We can't wait to come back!",
      image: "/lovable-uploads/4e401844-53bb-403e-9771-052c2757d06b.png"
    },
    {
      name: "Jean-Pierre Martin",
      location: "France",
      rating: 5,
      text: "A magnificent experience! The GRSE Waterfall was breathtaking, and the hospitality of the crew made our day perfect. Highly recommend this cruise to everyone!",
      image: "/lovable-uploads/3607b8bc-1775-4ec7-8dd8-adbcdf2b6262.png"
    },
    {
      name: "The Patel Family",
      location: "South Africa",
      rating: 5,
      text: "Perfect family adventure! Our kids loved the snorkeling, and we adults enjoyed the beautiful scenery and delicious food. The best day of our Mauritius vacation!",
      image: "/lovable-uploads/6417fd17-0ca9-427b-bd85-ab9612d2abbd.png"
    }
  ];

  return (
    <section className="py-20 bg-ocean-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-coral">Guests Say</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families, couples, and adventurers 
            who have experienced the magic of our cruises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
