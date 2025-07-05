
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'd like to book a cruise.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ANumber of guests: ${formData.guests}%0APreferred date: ${formData.date}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/23057432310?text=${whatsappMessage}`, '_blank');
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/23057432310', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section - Changed text to white */}
      <section className="relative py-20 bg-ocean-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-16 w-16 text-coral mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-coral">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to embark on your tropical adventure? Get in touch and let's plan your perfect cruise!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg">
                  We're here to help you plan the perfect cruise experience. Contact us via WhatsApp for 
                  instant booking or fill out the form and we'll get back to you soon!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Phone className="h-8 w-8 text-coral mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">WhatsApp Booking</h3>
                        <p className="text-gray-600">+230 5743 2310</p>
                        <Button 
                          onClick={handleWhatsAppDirect}
                          variant="outline" 
                          size="sm" 
                          className="mt-2 border-coral text-coral hover:bg-coral hover:text-white"
                        >
                          Message Us Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Clock className="h-8 w-8 text-turquoise mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Operating Hours</h3>
                        <p className="text-gray-600">Opens 9 AM Sunday</p>
                        <p className="text-sm text-gray-500">Daily (Weather Permitting)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <MapPin className="h-8 w-8 text-ocean-blue mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900">Our Location</h3>
                        <p className="text-gray-600">Résidence La Chaux, MU</p>
                        <p className="text-gray-600">Mahebourg 50823, Mauritius</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Quick Tips */}
              <Card className="bg-turquoise/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-ocean-blue">
                    <Star className="h-5 w-5 mr-2" />
                    Quick Booking Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Book 2-3 days in advance for better availability</li>
                    <li>• Bring sunscreen, swimwear, and a towel</li>
                    <li>• Weather conditions may affect scheduling</li>
                    <li>• We provide all snorkeling equipment</li>
                    <li>• Vegetarian BBQ options available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Book Your Cruise</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message / Special Requests</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Tell us about any special occasions, dietary requirements, or questions you might have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-3"
                  >
                    Send Booking Request via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit us at our location in Mahebourg
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-coral" />
              <h3 className="text-xl font-bold mb-2">Résidence La Chaux, MU</h3>
              <p>Mahebourg 50823, Mauritius</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Contact;
