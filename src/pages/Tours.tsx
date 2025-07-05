
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, Waves } from 'lucide-react';

const Tours = () => {
  const tourPackages = [
    {
      title: "Southeast Islands Discovery",
      price: "From $75 per person",
      duration: "Full Day (8 hours)",
      capacity: "Up to 12 guests",
      image: "/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png",
      highlights: [
        "Ile de la Passe exploration",
        "GRSE Waterfall visit",
        "Île aux Cerfs BBQ lunch",
        "Snorkeling at coral reefs",
        "Ile aux Aigrettes nature reserve"
      ],
      includes: [
        "Professional skipper",
        "Snorkeling equipment",
        "BBQ lunch & drinks",
        "Music system",
        "Safety equipment"
      ]
    },
    {
      title: "Snorkeling & BBQ Adventure",
      price: "From $60 per person",
      duration: "Half Day (5 hours)",
      capacity: "Up to 15 guests",
      image: "/lovable-uploads/26257f01-6512-47a5-a7f7-856a0b160c59.png",
      highlights: [
        "Premium snorkeling spots",
        "Île aux Cerfs beach time",
        "Delicious BBQ lunch",
        "Crystal-clear lagoons",
        "Tropical fish watching"
      ],
      includes: [
        "Snorkeling gear",
        "BBQ lunch",
        "Soft drinks & water",
        "Beach towels",
        "Guided tour"
      ]
    },
    {
      title: "Romantic Sunset Cruise",
      price: "From $90 per couple",
      duration: "3 hours",
      capacity: "Up to 8 guests",
      image: "/lovable-uploads/f557d798-4d22-464d-8ae0-73cb4d286d3d.png",
      highlights: [
        "Stunning sunset views",
        "Romantic atmosphere",
        "Premium beverages",
        "Light refreshments",
        "Perfect for couples"
      ],
      includes: [
        "Welcome drinks",
        "Canapés & snacks",
        "Romantic setup",
        "Photography spots",
        "Privacy & comfort"
      ]
    },
    {
      title: "Family Fun Package",
      price: "From $55 per person",
      duration: "6 hours",
      capacity: "Up to 20 guests",
      image: "/lovable-uploads/14591c52-5af9-4edc-9315-9c04ad31d427.png",
      highlights: [
        "Kid-friendly activities",
        "Safe swimming areas",
        "Beach games",
        "Family BBQ lunch",
        "Educational island tours"
      ],
      includes: [
        "Life jackets for all ages",
        "Family meal",
        "Non-alcoholic drinks",
        "Entertainment",
        "Safety briefing"
      ]
    }
  ];

  const handleBooking = () => {
    window.open('https://wa.me/23057432310', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section - Changed to sea color background with black text */}
      <section className="relative py-20 bg-ocean-blue text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tour <span className="text-coral">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose your perfect adventure from our carefully crafted cruise experiences
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourPackages.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-coral text-white px-4 py-2 rounded-full font-bold">
                    {tour.price}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{tour.title}</CardTitle>
                  
                  {/* Tour Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-ocean-blue" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-ocean-blue" />
                      {tour.capacity}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      Premium Experience
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Waves className="h-4 w-4 mr-2 text-turquoise" />
                      Tour Highlights
                    </h4>
                    <ul className="space-y-1">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                    <ul className="space-y-1">
                      {tour.includes.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-turquoise rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-3"
                  >
                    Book This Tour
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Changed text to black */}
      <section className="py-16 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-black mb-8">
            Don't wait - book your dream cruise today and create memories that will last a lifetime!
          </p>
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-white text-coral hover:bg-gray-100 font-bold px-8 py-4 text-lg"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Tours;
