
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import TourHighlights from '@/components/TourHighlights';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Phone } from 'lucide-react';

const Index = () => {
  const handleBooking = () => {
    window.open('https://wa.me/23057432310', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <TourHighlights />
      
      {/* Quick Stats */}
      <section className="py-16 bg-gradient-ocean text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-lg">Islands Visited</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-lg">Hours of Adventure</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center text-4xl font-bold mb-2">
                5 <Star className="h-8 w-8 text-yellow-400 fill-current ml-1" />
              </div>
              <div className="text-lg">Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Final CTA - Changed text to black */}
      <section className="py-20 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            The Ocean is Calling
          </h2>
          <p className="text-xl md:text-2xl text-black mb-8">
            Don't just dream about paradise — experience it! Book your unforgettable cruise today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-white text-coral hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Book Now via WhatsApp
            </Button>
          </div>
          
          <div className="mt-8 text-black">
            <p className="text-lg font-medium">
              ⭐ One day. A lifetime of memories. ⭐
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
