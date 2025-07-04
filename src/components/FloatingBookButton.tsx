
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const FloatingBookButton = () => {
  const handleBooking = () => {
    window.open('https://wa.me/23057432310', '_blank');
  };

  return (
    <Button
      onClick={handleBooking}
      className="fixed bottom-6 right-6 z-50 bg-coral hover:bg-coral/90 text-white shadow-lg rounded-full p-4 animate-float"
      size="lg"
    >
      <Phone className="h-5 w-5 mr-2" />
      Book Now
    </Button>
  );
};

export default FloatingBookButton;
