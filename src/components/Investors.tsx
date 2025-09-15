import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, TrendingUp, Award, MapPin, Users, Calendar, Leaf, Building, Phone, Mail, ExternalLink, Star, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import "./prohight.css";
const InvestorsScreen = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('lakshmi');
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Quote form state
  const [quoteForm, setQuoteForm] = useState({
    projectType: '',
    budgetRange: '',
    timeline: ''
  });

  // Partnership form state
  const [partnershipForm, setPartnershipForm] = useState({
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    description: ''
  });

  // Contact details
  const contactInfo = {
    phone: '9963379888',
    email: 'info@ayranirman.com',
    address: '504, 5th Floor, Kotu Empire, VIP Rd, Siripuram, Visakhapatnam, Andhra Pradesh 530003'
  };

  const projects = {
    lakshmi: {
      name: 'Pink Plan',
      area: '1,900 sq ft',
      features: ['Vastu-compliant design', 'Airy windows throughout', 'Premium gym facility', 'Swimming pool', 'Modern clubhouse'],
      status: 'Ready to Move',
      price: '₹1.9 Cr onwards'
    },
    vizag2: {
      name: 'Green Plan',
      area: '2,400 sq ft',
      features: ['Swimming pool', 'Modern clubhouse', 'Children\'s play area', 'Jogging track', '24/7 security'],
      status: 'Ready to move',
      price: '₹2.04 Cr onwards'
    }
  };

  const newsItems = [
    {
      title: "Ayra Nirma Featured in Vizag Times",
      date: "Sept 2024",
      source: "Vizag Times",
      excerpt: "Leading real estate developer transforms Vizag's skyline"
    },
    {
      title: "Lakshmi Castle Wins Design Excellence",
      date: "Aug 2024",
      source: "Property Today",
      excerpt: "Innovative Vastu-compliant architecture sets new standards"
    },
    {
      title: "Sustainability Initiative Recognition",
      date: "July 2024",
      source: "Green Builder",
      excerpt: "100+ trees planted as part of environmental commitment"
    }
  ];

  // Form validation
  const validateQuoteForm = () => {
    if (!quoteForm.projectType || !quoteForm.budgetRange || !quoteForm.timeline) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get a personalized quote.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validatePartnershipForm = () => {
    if (!partnershipForm.companyName || !partnershipForm.email || !partnershipForm.phone || !partnershipForm.serviceCategory) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(partnershipForm.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(partnershipForm.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  // Form submission handlers
  const handleQuoteSubmit = () => {
    if (!validateQuoteForm()) return;
    
    setIsSubmitting(true);
    
    const message = `Investment Quote Request:
Project Type: ${quoteForm.projectType}
Budget Range: ${quoteForm.budgetRange}
Timeline: ${quoteForm.timeline}

Contact for discussion: ${contactInfo.phone}`;

    const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    const emailSubject = 'Investment Quote Request - Ayra Nirman';
    const emailBody = message;
    const emailUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open WhatsApp and email
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');

    toast({
      title: "Quote Request Sent!",
      description: "We've opened WhatsApp and your email client. Our team will contact you soon.",
    });

    setIsSubmitting(false);
  };

  const handlePartnershipSubmit = () => {
    if (!validatePartnershipForm()) return;
    
    setIsSubmitting(true);
    
    const message = `Partnership Request:
Company: ${partnershipForm.companyName}
Email: ${partnershipForm.email}
Phone: ${partnershipForm.phone}
Service Category: ${partnershipForm.serviceCategory}
Description: ${partnershipForm.description}`;

    const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    const emailSubject = 'Partnership Request - Ayra Nirman';
    const emailBody = message;
    const emailUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open WhatsApp and email
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');

    toast({
      title: "Partnership Request Sent!",
      description: "We've opened WhatsApp and your email client. We'll review your request and get back to you.",
    });

    // Reset form
    setPartnershipForm({
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: '',
      description: ''
    });
    
    setIsSubmitting(false);
  };

  const handleViewDetails = (projectName: string) => {
    const message = `I'm interested in learning more about ${projectName}. Please share detailed information and pricing.`;
    const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallNow = () => {
    window.open(`tel:+91${contactInfo.phone}`, '_self');
  };

  const handleEmailContact = () => {
    const emailSubject = 'Inquiry - Ayra Nirman Properties';
    const emailBody = 'Hello,\n\nI am interested in your real estate projects. Please contact me with more information.\n\nThank you.';
    const emailUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(emailUrl, '_blank');
  };

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div id="investor" className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <div className="sticky-section1 relative bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Investment Opportunities
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              Discover premium real estate investments in Vizag's most promising locations
            </p>
            <div className="flex items-center justify-center gap-8 text-amber-200">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">15% Projected Growth</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Award-Winning Projects</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Prime Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<div>
      
        {/* Investment Opportunities Section */}
        <section className="sticky-section flex flex-col justify-center items-center  mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Investment Opportunities</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab('lakshmi')}
              variant={activeTab === 'lakshmi' ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'lakshmi'
                  ? 'shadow-lg transform scale-105'
                  : 'hover:border-amber-400'
              }`}
            >
              Lakshmi Castle1
            </Button>
            <Button
              onClick={() => setActiveTab('vizag2')}
              variant={activeTab === 'vizag2' ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'vizag2'
                  ? 'shadow-lg transform scale-105'
                  : 'border-amber-400'
              }`}
            >
              Lakshmi Castle2
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{projects[activeTab].name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-amber-600" />
                      <span className="text-gray-600">Area: {projects[activeTab].area}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-600" />
                      <span className="text-gray-600">Status: {projects[activeTab].status}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      <span className="text-gray-600">Starting: {projects[activeTab].price}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                  <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg mb-4 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white/70" />
                  </div>
                  <div className="text-center">
                    <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-primary w-full justify-start"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://whatsapp-image-2025-08-29-at-11-50-54-pm-1.tiiny.site/';
                    link.download = 'Lakshmi-Castle-Brochure.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  aria-label="Download project brochure"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Vizag Section */}
        <section className="flex flex-col justify-center h-screen items-center h-100 sticky-section1 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Vizag?</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                <Award className="w-5 h-5" />
                Top 10 Real Estate Markets in India
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growing Economy</h3>
                <p className="text-gray-600">Industrial hub with expanding IT sector and port facilities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                <p className="text-gray-600">Major coastal city with excellent connectivity and infrastructure</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rising Demand</h3>
                <p className="text-gray-600">Increasing population and urbanization driving real estate growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Pricing & ROI Section */}
       

        {/* AI Predictions Section */}
        <section className="flex flex-col justify-center h-screen items-center sticky-section mb-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">AI Market Predictions</h2>
              <div className="text-6xl font-bold mb-2">15%</div>
              <p className="text-xl text-amber-100 mb-4">Projected Growth by 2030</p>
              <p className="text-amber-200 max-w-2xl mx-auto">
                Based on advanced AI analysis of market trends, infrastructure development, 
                and economic indicators, Vizag real estate shows strong growth potential.
              </p>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="flex h-screen flex-col justify-center items-center sticky-section1 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest News & Media Features</h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Button
                    onClick={prevNews}
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <div className="text-center flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {newsItems[currentNewsIndex].title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {newsItems[currentNewsIndex].source} • {newsItems[currentNewsIndex].date}
                    </p>
                    <p className="text-gray-600">
                      {newsItems[currentNewsIndex].excerpt}
                    </p>
                  </div>
                  
                  <Button
                    onClick={nextNews}
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="flex justify-center gap-2">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNewsIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentNewsIndex ? 'bg-amber-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Partnership Section */}
        <section className="flex flex-col justify-center  h-screen items-center sticky-section  mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Business with Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Join Our Vendor Network</h3>
              <p className="text-gray-600 mb-6">
                Partner with Ayra Nirma and be part of Vizag's most prestigious real estate projects. 
                We're looking for reliable contractors, suppliers, and service providers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Competitive payment terms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Long-term partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Quality-focused projects</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={partnershipForm.companyName}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, companyName: e.target.value }))}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={partnershipForm.email}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, email: e.target.value }))}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={partnershipForm.phone}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, phone: e.target.value }))}
                />
                <select 
                  value={partnershipForm.serviceCategory}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, serviceCategory: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select Service Category</option>
                  <option value="construction">Construction</option>
                  <option value="materials">Materials Supply</option>
                  <option value="services">Professional Services</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  placeholder="Tell us about your services"
                  rows={3}
                  value={partnershipForm.description}
                  onChange={(e) => setPartnershipForm(prev => ({ ...prev, description: e.target.value }))}
                />
                <Button 
                  onClick={handlePartnershipSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 text-white hover:bg-amber-700"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Partnership Request'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Testimonials Section */}
        <section className="sticky-section1 h-screen flex flex-col justify-center items-center mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Awards & Recognition</h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-800">Quality Construction Award</p>
                  <p className="text-sm text-gray-600">Coming Soon - 2024</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">Sustainability Excellence</p>
                  <p className="text-sm text-gray-600">Green Building Initiative</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Client Testimonials</h3>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-2">
                    "Lakshmi Castle is our dream home! The attention to detail and quality is exceptional."
                  </p>
                  <p className="text-sm text-gray-600">- Priya S., Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Sustainability */}
        <section className="sticky-section flexjustify-center items-center h-screen mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-semibold">Project Timeline</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">2025: Lakshmi Castle Launched</p>
                    <p className="text-sm text-gray-600">Premium residential project unveiled</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">2026: Phase I Completion</p>
                    <p className="text-sm text-gray-600">Ready for possession</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold">2027: Vizag Phase II Launch</p>
                    <p className="text-sm text-gray-600">Next generation smart homes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-semibold">Sustainability Impact</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-lg font-semibold mb-4">Trees Planted</p>
                <p className="text-gray-600 mb-4">
                  As part of our environmental commitment, we've planted over 100 trees 
                  across our project sites, contributing to a greener Vizag.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-xl font-semibold text-green-600">25%</div>
                    <p className="text-sm text-gray-600">Energy Savings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-amber-600">30%</div>
                    <p className="text-sm text-gray-600">Water Conservation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
       
      </div>
    </div>
  );
};

export default InvestorsScreen;