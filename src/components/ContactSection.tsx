import { useState } from "react";

import { Phone, MessageCircle, Mail, MapPin, Send, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interestedIn: "Property"
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your interest in Lakshmi Castle. Our team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interestedIn: "Property"
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interestedIn: "Property"
    });
    toast({
      title: "Form Reset",
      description: "All form fields have been cleared.",
    });
  };

  const handleCallNow = () => {
    window.open("tel:+919963379888", "_self");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "99633 79888",
      action: () => window.open("tel:+919963379888", "_self"),
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      content: "99633 79888",
      action: () =>  window.open('https://wa.me/919963379888?text=Hi, I would like to schedule a site visit for Lakshmi Castle', '_blank'),
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@ayranirman.com",
      action: () => window.open("mailto:info@ayranirman.com", "_self"),
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "504, 5th Floor, Kotu Empire, VIP Rd, Siripuram, Visakhapatnam",
      action: () => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }),
      color: " from-amber-400 to-amber-700"
    }
  ];

  return (
    <section id="contact" className=" h-screen sticky-section py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="card-luxury cursor-pointer hover-lift" onClick={info.action}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 shadow-md`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={handleCallNow}
                className="w-full bg-amber-500 hover:bg-amber-700 text-white text-lg px-4 py-2 rounded-lg"
                aria-label="Call developer now"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 99633 79888
              </Button>
              
              <Button
                onClick={() => document.querySelector('#floor-plans')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="w-full btn-outline-luxury text-amber-500"
                aria-label="View floor plans"
              >
                View Floor Plans
              </Button>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl">Send us an Inquiry</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestedIn">Interested In</Label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={(e) => setFormData(prev => ({ ...prev, interestedIn: e.target.value }))}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="Property">Property</option>
                      
                      <option value="Site Visit">Schedule Site Visit</option>
                      <option value="Investment Opportunity">Investment Opportunity</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements, preferred floor, budget, or any specific questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                      aria-label="Submit inquiry form"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleReset}
                      className="btn-outline-luxury"
                      aria-label="Reset form fields"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Reset Form
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to being contacted by our sales team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ContactSection;