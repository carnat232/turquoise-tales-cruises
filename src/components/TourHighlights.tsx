
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Waves, Camera, Star, Users } from 'lucide-react';

const TourHighlights = () => {
  const highlights = [
    {
      title: "Ile de la Passe",
      description: "Explore historic ruins and pristine beaches on this charming island",
      icon: <Camera className="h-8 w-8 text-coral" />,
      image: "/lovable-uploads/14591c52-5af9-4edc-9315-9c04ad31d427.png"
    },
    {
      title: "GRSE Waterfall",
      description: "Marvel at the stunning natural waterfall surrounded by lush tropical scenery",
      icon: <Waves className="h-8 w-8 text-turquoise" />,
      image: "/lovable-uploads/f557d798-4d22-464d-8ae0-73cb4d286d3d.png"
    },
    {
      title: "Île aux Cerfs BBQ",
      description: "Enjoy a delicious BBQ lunch on one of Mauritius' most beautiful islands",
      icon: <Star className="h-8 w-8 text-coral" />,
      image: "/lovable-uploads/26257f01-6512-47a5-a7f7-856a0b160c59.png"
    },
    {
      title: "Snorkeling Adventure",
      description: "Discover vibrant coral reefs and tropical fish in crystal-clear waters",
      icon: <Waves className="h-8 w-8 text-ocean-blue" />,
      image: "/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png"
    },
    {
      title: "Ile aux Aigrettes",
      description: "Visit this nature reserve island and spot rare endemic species",
      icon: <Camera className="h-8 w-8 text-tropical-green" />,
      image: "/lovable-uploads/14591c52-5af9-4edc-9315-9c04ad31d427.png"
    },
    {
      title: "Perfect for Groups",
      description: "Ideal for couples, families, and groups of friends seeking adventure",
      icon: <Users className="h-8 w-8 text-coral" />,
      image: "/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover <span className="text-ocean-blue">Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From historic islands to pristine snorkeling spots, our cruises offer unforgettable experiences 
            in the most beautiful waters of the Indian Ocean
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  {highlight.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourHighlights;
