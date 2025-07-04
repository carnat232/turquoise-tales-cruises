
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png",
      title: "Crystal Clear Lagoon",
      description: "Perfect turquoise waters of Mauritius"
    },
    {
      src: "/lovable-uploads/f557d798-4d22-464d-8ae0-73cb4d286d3d.png",
      title: "GRSE Waterfall",
      description: "Breathtaking natural waterfall"
    },
    {
      src: "/lovable-uploads/14591c52-5af9-4edc-9315-9c04ad31d427.png",
      title: "Historic Chapel",
      description: "Charming architecture on Ile de la Passe"
    },
    {
      src: "/lovable-uploads/26257f01-6512-47a5-a7f7-856a0b160c59.png",
      title: "Paradise Beach",
      description: "Sunset at Île aux Cerfs"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
      title: "Ocean Waves",
      description: "The rhythm of the Indian Ocean"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop",
      title: "Marine Life",
      description: "Incredible underwater adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      title: "Tropical Paradise",
      description: "Surrounded by nature's beauty"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      title: "Mountain Views",
      description: "Stunning landscapes from the water"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 text-coral mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Photo <span className="text-coral">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Experience the beauty of Mauritius through our lens - every cruise tells a story
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-white/90 mb-8">
            These could be your photos! Book your cruise today and capture unforgettable moments in paradise.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Gallery;
