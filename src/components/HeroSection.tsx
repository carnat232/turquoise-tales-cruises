
import React from 'react';
import { Button } from '@/components/ui/button';
import { Waves, Star } from 'lucide-react';

const HeroSection = () => {
  const handleBooking = () => {
    window.open('https://wa.me/23057432310', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/bf74323b-7bf3-4ccb-b5b4-09a3ba93a15e.png')`
        }}
      />
      
      {/* Animated waves overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32 text-white/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="animate-wave"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Waves className="h-12 w-12 text-turquoise animate-wave mr-4" />
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sail Into <span className="text-turquoise">Paradise</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-200">
          Discover Mauritius by Sea
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience the crystal-clear turquoise waters of the Indian Ocean with unforgettable island adventures
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleBooking}
            size="lg" 
            className="bg-coral hover:bg-coral/90 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Book Your Cruise Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-full"
          >
            View Our Tours
          </Button>
        </div>
        
        <div className="mt-12 text-lg font-medium">
          <div className="text-coral mb-2">🌊 Your island escape starts here 🌊</div>
          <div className="text-turquoise">One day. A lifetime of memories.</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
