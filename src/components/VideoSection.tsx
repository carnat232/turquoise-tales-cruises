
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
    },
    {
      src: "/lovable-uploads/5a3dfad9-5a36-4b8f-a1e4-2657e0b70e32.png",
      title: "Paradise Sandbank",
      description: "Exclusive access to pristine white sand beaches"
    },
    {
      src: "/lovable-uploads/6482c02e-a7e1-4b83-bf0d-5578a64cbc4f.png",
      title: "Beach Relaxation",
      description: "Perfect spot for relaxation and sunbathing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue to-turquoise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="text-sm font-semibold text-black uppercase tracking-wide">
              WELCOME TO MAURITIUS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Luxury Seaside
              <br />
              <span className="text-coral">Adventures</span>
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Nestled in the pristine Indian Ocean waters, our cruises offer
              an exquisite collection of luxury experiences and unforgettable moments. Our
              beachfront adventures combine elegant design with modern
              comfort, creating the perfect setting for an unforgettable seaside
              getaway.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Whether you're seeking a romantic escape, a family vacation, or a
              peaceful retreat, our diverse range of tours caters to
              every preference and need. Each experience is thoughtfully designed to
              provide panoramic sea views and direct beach access.
            </p>
            <Button 
              className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right side - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top row - 2 images */}
              <div className="space-y-4">
                <div className="h-[240px] rounded-2xl overflow-hidden">
                  <img 
                    src={galleryImages[0].src} 
                    alt={galleryImages[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[240px] rounded-2xl overflow-hidden">
                  <img 
                    src={galleryImages[1].src} 
                    alt={galleryImages[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right column - different sized images */}
              <div className="space-y-4">
                <div className="h-[160px] rounded-2xl overflow-hidden">
                  <img 
                    src={galleryImages[2].src} 
                    alt={galleryImages[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[160px] rounded-2xl overflow-hidden">
                  <img 
                    src={galleryImages[3].src} 
                    alt={galleryImages[3].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[160px] rounded-2xl overflow-hidden">
                  <img 
                    src={galleryImages[4].src} 
                    alt={galleryImages[4].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
