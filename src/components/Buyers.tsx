import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Calculator, 
  Home, 
  Shield, 
  TrendingUp, 
  Gift, 
  Users, 
  Phone, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Calendar, 
  Percent,
  LucideIcon,
  MessageCircle,
  ThumbsUp,
  Brain,
  Target,
  Award,
  Quote,
  Send,
  MapPin,
  Clock
} from 'lucide-react';
import "./prohight.css";
// Type definitions
interface BenefitData {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
}

interface ResaleData {
  title: string;
  growth: string;
  details: string;
}

interface LoyaltyProgram {
  title: string;
  benefit: string;
  details: string;
}

interface Package {
  title: string;
  price: string;
  features: string[];
}

interface Packages {
  furnished: Package;
  base: Package;
}

interface SecurityFeature {
  title: string;
  details: string;
}

interface AccordionState {
  [key: string]: boolean;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  serviceType: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  purchaseDate: string;
  propertyType: string;
}

interface Feedback {
  id: number;
  category: string;
  rating: number;
  count: number;
  percentage: number;
}

interface SurveyQuestion {
  id: number;
  question: string;
  type: 'radio' | 'select' | 'range';
  options?: string[];
  min?: number;
  max?: number;
  value: string | number;
}

interface AIPrediction {
  title: string;
  prediction: string;
  confidence: number;
  timeframe: string;
  details: string;
}

// Component Props Interface
interface BuyersProps {
  className?: string;
}

const Buyers: React.FC<BuyersProps> = ({ className = '' }) => {
  // State with proper typing
  const [activeTab, setActiveTab] = useState<keyof Packages>('furnished');
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [loanTenure, setLoanTenure] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    serviceType: 'I want to buy'
  });
  const [surveyData, setSurveyData] = useState<SurveyQuestion[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [showSurveyResults, setShowSurveyResults] = useState<boolean>(false);

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsVisible(true);
    initializeSurvey();
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const initializeSurvey = () => {
    setSurveyData([
      {
        id: 1,
        question: "What's your preferred property type?",
        type: 'radio',
        options: ['Apartment', 'Villa', 'Townhouse', 'Studio'],
        value: ''
      },
      {
        id: 2,
        question: "What's your budget range?",
        type: 'select',
        options: ['Under 50L', '50L-1Cr', '1Cr-2Cr', 'Above 2Cr'],
        value: ''
      },
      {
        id: 3,
        question: "How important is location to you? (1-10)",
        type: 'range',
        min: 1,
        max: 10,
        value: 5
      },
      {
        id: 4,
        question: "Preferred possession timeline?",
        type: 'radio',
        options: ['Immediate', '3-6 months', '6-12 months', '1+ years'],
        value: ''
      }
    ]);
  };

  // Handler functions with proper typing
  const toggleAccordion = (id: string): void => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSurveyChange = (id: number, value: string | number): void => {
    setSurveyData(prev => prev.map(q => 
      q.id === id ? { ...q, value } : q
    ));
  };

  const submitSurvey = (): void => {
    console.log('Survey submitted:', surveyData);
    setShowSurveyResults(true);
    alert('Survey submitted! Generating your personalized quote...');
  };

  const calculateEMI = (): number => {
    const P: number = loanAmount;
    const r: number = (interestRate / 100) / 12;
    const n: number = loanTenure * 12;
    const emi: number = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-IN');
  };

  const formatLakhs = (amount: number): string => {
    return (amount / 100000).toFixed(1);
  };

  // Data with proper typing
  const benefitsData: BenefitData[] = [
    { 
      icon: TrendingUp, 
      title: "Property Value Growth", 
      value: "10%", 
      subtitle: "Average annual appreciation" 
    },
    { 
      icon: DollarSign, 
      title: "ROI Potential", 
      value: "15%", 
      subtitle: "Expected returns" 
    },
    { 
      icon: Calendar, 
      title: "Investment Period", 
      value: "5-10", 
      subtitle: "Years for optimal gains" 
    },
    { 
      icon: CheckCircle, 
      title: "Success Rate", 
      value: "92%", 
      subtitle: "Customer satisfaction" 
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Hyderabad, Telangana",
      rating: 5,
      comment: "Excellent service and transparent process. Found my dream home within budget!",
      avatar: "RK",
      purchaseDate: "March 2024",
      propertyType: "3BHK Apartment"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      rating: 5,
      comment: "The EMI calculator helped me plan perfectly. Great investment guidance!",
      avatar: "PS",
      purchaseDate: "January 2024",
      propertyType: "2BHK Villa"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      location: "Mumbai, Maharashtra",
      rating: 4,
      comment: "Professional team, quick loan approval, and hassle-free documentation.",
      avatar: "MA",
      purchaseDate: "February 2024",
      propertyType: "1BHK Studio"
    },
    {
      id: 4,
      name: "Anita Reddy",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      comment: "AI predictions were spot-on! My property value increased as forecasted.",
      avatar: "AR",
      purchaseDate: "December 2023",
      propertyType: "4BHK Townhouse"
    }
  ];

  const feedbackData: Feedback[] = [
    { id: 1, category: "Service Quality", rating: 4.8, count: 1247, percentage: 96 },
    { id: 2, category: "Price Transparency", rating: 4.7, count: 1156, percentage: 94 },
    { id: 3, category: "Documentation Process", rating: 4.6, count: 1089, percentage: 92 },
    { id: 4, category: "Property Quality", rating: 4.9, count: 1334, percentage: 98 },
    { id: 5, category: "Customer Support", rating: 4.5, count: 987, percentage: 90 }
  ];

  const aiPredictions: AIPrediction[] = [
    {
      title: "Market Appreciation",
      prediction: "12-15% growth expected",
      confidence: 87,
      timeframe: "Next 2 years",
      details: "Based on infrastructure development and job market growth in your selected area."
    },
    {
      title: "Best Purchase Time",
      prediction: "Next 3-4 months",
      confidence: 82,
      timeframe: "Q2 2025",
      details: "Market analysis suggests optimal pricing window before seasonal demand increase."
    },
    {
      title: "Rental Yield Potential",
      prediction: "6-8% annual yield",
      confidence: 79,
      timeframe: "Immediate",
      details: "High rental demand in your preferred locations with growing IT sector presence."
    },
    {
      title: "Resale Value Projection",
      prediction: "25-30% increase",
      confidence: 91,
      timeframe: "5 years",
      details: "Metro connectivity and smart city initiatives will drive significant appreciation."
    }
  ];

  const packages: Packages = {
    furnished: {
      title: "Fully Furnished",
      price: "₹2,04,00,000",
      features: [
        "Premium modular kitchen", 
        "Designer furniture", 
        "Smart home automation", 
        "Branded appliances", 
        "Complete interiors"
      ]
    },
    base: {
      title: "Base Home",
      price: "₹1,90,00,000",
      features: [
        "Basic electrical fittings", 
        "Standard flooring", 
        "Basic plumbing", 
        "Unfurnished interiors", 
        "Ready to move structure"
      ]
    }
  };

  const securityFeatures: SecurityFeature[] = [
    { 
      title: "24/7 CCTV Surveillance", 
      details: "High-definition cameras covering all common areas and entry points" 
    },
    { 
      title: "MyGate Integration", 
      details: "Digital visitor management system with instant notifications" 
    },
    { 
      title: "Biometric Access", 
      details: "Fingerprint and card-based access control for enhanced security" 
    },
    { 
      title: "Security Personnel", 
      details: "Trained security guards available round the clock" 
    }
  ];

  const handleSubmitRequest = (): void => {
    console.log('Form submitted:', formData);
    alert('Request submitted successfully!');
  };

  const handleGetPreApproved = (): void => {
    const calculationData = {
      loanAmount,
      loanTenure,
      interestRate,
      emi: calculateEMI()
    };
    console.log('Pre-approval request:', calculationData);
    alert('Pre-approval request submitted!');
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-amber-400 fill-current" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div id="buyers" className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ${className}`}>
      <div >
        
        {/* Benefits of Early Investment */}
        <section className={`sticky-section1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits for Smart Buyers</h2>
            <p className="text-xl text-gray-600">Make informed decisions with our comprehensive buyer support</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit: BenefitData, index: number) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-t-4 border-blue-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">{benefit.value}</h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EMI Calculator */}
        <section className={`sticky-section transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h2>
            <p className="text-xl text-gray-600">Calculate your monthly payments and plan your budget</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Loan Amount: ₹{formatLakhs(loanAmount)} Lakhs
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="20000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹10L</span>
                    <span>₹2Cr</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Loan Tenure: {loanTenure} years
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5 years</span>
                    <span>30 years</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestRate(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3%</span>
                    <span>12%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl p-8 text-white">
                <div className="text-center">
                  <Calculator className="mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-6">Your EMI Calculation</h3>
                  <div className="text-5xl font-bold mb-4">
                    ₹{formatCurrency(calculateEMI())}
                  </div>
                  <p className="opacity-90 mb-8">Monthly EMI Amount</p>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="opacity-90">Principal Amount:</span>
                      <span className="font-semibold">₹{formatLakhs(loanAmount)}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-90">Total Interest:</span>
                      <span className="font-semibold">₹{formatLakhs(calculateEMI() * loanTenure * 12 - loanAmount)}L</span>
                    </div>
                    <div className="flex justify-between border-t border-white border-opacity-30 pt-4">
                      <span className="opacity-90">Total Amount:</span>
                      <span className="font-bold text-lg">₹{formatLakhs(calculateEMI() * loanTenure * 12)}L</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleGetPreApproved}
                    className="w-full bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 mt-6"
                  >
                    Get Pre-Approved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className={`sticky-section1 h-screen  flex flex-col justify-center items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied homeowners</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <div className="p-8">
                <div className="flex items-center justify-center mb-8">
                  <Quote className="text-amber-400" size={48} />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MapPin className="text-gray-500" size={16} />
                    <span className="text-gray-600">{testimonials[currentTestimonial].location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    "{testimonials[currentTestimonial].comment}"
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Home size={16} />
                      <span>{testimonials[currentTestimonial].propertyType}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{testimonials[currentTestimonial].purchaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-2 pb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-amber-400' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Feedback */}
        <section className={`sticky-section transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Feedback Analytics</h2>
            <p className="text-xl text-gray-600">Data-driven insights from our customer reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedbackData.map((feedback: Feedback) => (
              <div key={feedback.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{feedback.category}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="text-amber-400 fill-current" size={16} />
                    <span className="font-bold text-gray-900">{feedback.rating}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Satisfaction Rate</span>
                    <span className="font-semibold">{feedback.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${feedback.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Reviews</span>
                    <span>{feedback.count.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* AI Predictions */}
        <section className={`sticky-section1 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Market Predictions</h2>
            <p className="text-xl text-gray-600">Data-driven insights to help you make informed decisions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiPredictions.map((prediction: AIPrediction, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-amber-400 to-amber-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Brain className="text-white" size={32} />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{prediction.confidence}%</div>
                      <div className="text-sm opacity-90">Confidence</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{prediction.title}</h3>
                  <div className="text-2xl font-bold">{prediction.prediction}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="text-gray-500" size={16} />
                    <span className="text-gray-600 font-medium">{prediction.timeframe}</span>
                  </div>
                  <p className="text-gray-700">{prediction.details}</p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-amber-700 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className={`sticky-section transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">Select the perfect home package that suits your needs</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              {(Object.entries(packages) as [keyof Packages, Package][]).map(([key, pkg]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 px-8 py-4 font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-amber-600 text-white transform scale-105'
                      : ' amber-600 bg-blue-50'
                  }`}
                >
                  {pkg.title}
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{packages[activeTab].title}</h3>
                <p className="text-4xl font-bold text-blue-600">{packages[activeTab].price}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages[activeTab].features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className={`sticky-section1 flex flex-col items-center justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-600">Your safety and peace of mind is our top priority</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {securityFeatures.map((feature: SecurityFeature, index: number) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleAccordion(`security-${index}`)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Shield className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  {openAccordions[`security-${index}`] ? 
                    <ChevronUp className="text-gray-500" /> : 
                    <ChevronDown className="text-gray-500" />
                  }
                </button>
                {openAccordions[`security-${index}`] && (
                  <div className="px-8 pb-6 ml-16">
                    <p className="text-gray-600 leading-relaxed">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
       
      </div>
    </div>
  );
};

export default Buyers;