
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
      src: "/lovable-uploads/4e79dc9b-1279-416e-a8e7-8f568eb12726.png",
      title: "River Adventure",
      description: "Peaceful river cruise through lush greenery"
    },
    {
      src: "/lovable-uploads/0faf0c3b-cb69-41be-b62b-dd9ccf79c534.png",
      title: "Historic Lighthouse",
      description: "Iconic lighthouse on a tropical island"
    },
    {
      src: "/lovable-uploads/7a4741b5-58af-4f1a-8e7c-002e11ae3f74.png",
      title: "Our Cruise Boat",
      description: "Comfortable and safe vessel for your adventure"
    },
    {
      src: "/lovable-uploads/6fd919a9-02ff-4930-9ebe-51cc77f30d66.png",
      title: "Pristine Beach",
      description: "Untouched white sand beaches"
    },
    {
      src: "/lovable-uploads/7421c7cb-4b94-4417-90c0-d53df91252d1.png",
      title: "Happy Guests",
      description: "Creating unforgettable memories together"
    },
    {
      src: "/lovable-uploads/8ea3d0d4-f88c-48a2-b7e2-9e0501ae79eb.png",
      title: "Aerial Paradise",
      description: "Stunning aerial view of tropical lagoon"
    },
    {
      src: "/lovable-uploads/b3828c77-4c78-45be-ac0c-406769fb33bd.png",
      title: "Sandbank Island",
      description: "Remote sandbank in crystal clear waters"
    },
    {
      src: "/lovable-uploads/f86e0e2a-b758-4483-a3f0-eec0dbe73bf4.png",
      title: "Marine Wildlife",
      description: "Incredible whale and dolphin encounters"
    },
    {
      src: "/lovable-uploads/a1e3214f-eb3b-4581-a79e-752ad73547a5.png",
      title: "Sea Turtle",
      description: "Amazing underwater wildlife experiences"
    },
    {
      src: "/lovable-uploads/52c8a7df-0b63-4a21-8888-375a87557b6c.png",
      title: "Coastal Views",
      description: "Dramatic coastline and island formations"
    },
    {
      src: "/lovable-uploads/a840fe10-6859-4e04-ae65-dc26d58ed984.png",
      title: "Swimming with Turtles",
      description: "Magical underwater encounters with sea turtles"
    },
    {
      src: "/lovable-uploads/5a3dfad9-5a36-4b8f-a1e4-2657e0b70e32.png",
      title: "Paradise Sandbank",
      description: "Exclusive access to pristine white sand beaches"
    },
    {
      src: "/lovable-uploads/3de784e9-9358-41a2-8982-d8354097aac5.png",
      title: "Crystal Rock Formation",
      description: "Iconic natural rock formations in turquoise waters"
    },
    {
      src: "/lovable-uploads/6c3fdc3d-f017-4361-a401-330e5c74778e.png",
      title: "Aerial Island View",
      description: "Breathtaking bird's eye view of tropical paradise"
    },
    {
      src: "/lovable-uploads/6482c02e-a7e1-4b83-bf0d-5578a64cbc4f.png",
      title: "Beach Relaxation",
      description: "Perfect spot for relaxation and sunbathing"
    },
    {
      src: "/lovable-uploads/5b2d9c77-587b-4219-9bfa-1f8c3ccd54b7.png",
      title: "Tropical Waterfall",
      description: "Hidden waterfall accessible by boat"
    },
    {
      src: "/lovable-uploads/758b104d-66f1-4acd-ad82-ed2307bf2f36.png",
      title: "Whale Watching",
      description: "Magnificent whales in their natural habitat"
    },
    {
      src: "/lovable-uploads/3a8a0eec-79a3-4756-9400-a7cefe1c7dde.png",
      title: "Private Beach Setup",
      description: "Exclusive beach dining experience"
    },
    {
      src: "/lovable-uploads/08589367-9276-465b-965c-9e6fa8ac01cf.png",
      title: "Island Paradise",
      description: "Aerial view of untouched tropical island"
    },
    {
      src: "/lovable-uploads/d532fb06-6ff9-4b9a-9d89-2b6905fbacd0.png",
      title: "Scenic Flight View",
      description: "Amazing perspective from our scenic flights"
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section - Changed text to white */}
      <section className="relative py-20 bg-ocean-blue text-white">
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

      {/* Call to Action - Changed text to black */}
      <section className="py-16 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-black mb-8">
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
