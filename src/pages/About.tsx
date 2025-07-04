
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Star, Waves, Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-coral">Our Story</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Passionate about sharing the beauty of Mauritius through unforgettable sea adventures
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Embark on an unforgettable adventure
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Embark on an unforgettable adventure with a tropical cruise to the Southeast islands of Mauritius! 
                Our experienced skippers will guide you through crystal-clear turquoise waters to discover hidden gems 
                like Ile de la Passe, Ile au Phare, and the breathtaking GRSE Waterfall.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Indulge in a delicious BBQ lunch on the pristine shores of Île aux Cerfs, where you can relax on 
                white sandy beaches and soak up the tropical sun. For the more adventurous, dive into the vibrant 
                underwater world with our snorkeling equipment and explore the colorful coral reefs teeming with 
                exotic marine life.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't miss the chance to visit Ile aux Aigrettes, a nature reserve island where you can spot rare 
                endemic species and learn about Mauritius' unique ecosystem. Our cruise is perfect for couples seeking 
                a romantic escape, families looking for fun-filled memories, or groups of friends ready for an exciting day out.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Throughout your journey, enjoy complimentary snacks and refreshing drinks while listening to tropical 
                tunes on our onboard music system. Our friendly crew ensures your safety and comfort, making this 
                cruise an experience you'll treasure forever.
              </p>
              
              <div className="bg-coral/10 rounded-xl p-6 mt-8">
                <p className="text-coral text-xl font-semibold text-center">
                  Book your Southeast Mauritius cruise today and let the ocean breeze carry you to paradise!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose <span className="text-ocean-blue">Our Cruises</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-coral mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Crew</h3>
                <p className="text-gray-600">Professional skippers with years of local experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-turquoise mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Service</h3>
                <p className="text-gray-600">Exceptional hospitality and attention to detail</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Waves className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pristine Locations</h3>
                <p className="text-gray-600">Access to the most beautiful and secluded spots</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Camera className="h-12 w-12 text-tropical-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unforgettable Moments</h3>
                <p className="text-gray-600">Picture-perfect memories that last a lifetime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default About;
