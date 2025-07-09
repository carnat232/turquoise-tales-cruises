
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const VideoSection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png",
      title: "Crystal Clear Lagoon",
      description: "Perfect turquoise waters of Mauritius"
    },
    {
      src: "/lovable-uploads/26257f01-6512-47a5-a7f7-856a0b160c59.png",
      title: "Paradise Beach",
      description: "Sunset at Île aux Cerfs"
    },
    {
      src: "/lovable-uploads/6fd919a9-02ff-4930-9ebe-51cc77f30d66.png",
      title: "Pristine Beach",
      description: "Untouched white sand beaches"
    },
    {
      src: "/lovable-uploads/8ea3d0d4-f88c-48a2-b7e2-9e0501ae79eb.png",
      title: "Aerial Paradise",
      description: "Stunning aerial view of tropical lagoon"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text content */}
          <div className="space-y-8">
            <div className="text-sm font-semibold text-ocean-blue uppercase tracking-wide">
              WELCOME TO MAURITIUS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-serif">
              Luxury Seaside
              <br />
              <span className="text-coral">Adventures</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nestled in the pristine Indian Ocean waters, our cruises offer
                an exquisite collection of luxury experiences and unforgettable moments. Our
                beachfront adventures combine elegant design with modern
                comfort, creating the perfect setting for an unforgettable seaside
                getaway.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking a romantic escape, a family vacation, or a
                peaceful retreat, our diverse range of tours caters to
                every preference and need. Each experience is thoughtfully designed to
                provide panoramic sea views and direct beach access.
              </p>
            </div>
            <Button 
              className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 text-lg shadow-lg"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Creative 4-image collage */}
          <div className="relative h-[500px]">
            {/* Large horizontal beach image at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 rounded-2xl overflow-hidden shadow-lg z-10">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Tropical palm tree image - top left */}
            <div className="absolute top-0 left-0 w-48 h-32 rounded-2xl overflow-hidden shadow-lg z-20">
              <img 
                src={galleryImages[1].src} 
                alt={galleryImages[1].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Luxury resort view - top right */}
            <div className="absolute top-0 right-0 w-48 h-40 rounded-2xl overflow-hidden shadow-lg z-20">
              <img 
                src={galleryImages[2].src} 
                alt={galleryImages[2].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Beach umbrella and chair scene - bottom right, overlapping */}
            <div className="absolute bottom-16 right-8 w-44 h-36 rounded-2xl overflow-hidden shadow-lg z-30">
              <img 
                src={galleryImages[3].src} 
                alt={galleryImages[3].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
