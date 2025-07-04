
import React from 'react';
import { Waves, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-turquoise animate-wave" />
              <div className="text-xl font-bold">
                <span className="text-coral">Tropical</span>{' '}
                <span className="text-turquoise">South-East</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the pristine waters of Mauritius with our unforgettable cruise experiences. 
              From snorkeling adventures to island BBQ lunches, create memories that last a lifetime.
            </p>
            <div className="text-2xl font-bold text-coral">
              Your island escape starts here.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-turquoise">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-turquoise">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-coral" />
                <span className="text-gray-300">+230 5743 2310</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-coral" />
                <span className="text-gray-300">7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-coral" />
                <span className="text-gray-300">Mauritius, Indian Ocean</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Tropical South-East Cruise Company. All rights reserved.
          </p>
          <p className="text-coral mt-2 font-medium">
            Book now — the ocean is calling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
