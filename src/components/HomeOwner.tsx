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
  Heart,
  Award,
  MapPin,
  Share2,
  Building2,
  Smile,
  TreePine,
  Coffee,
  Camera,
  Music,
  Gamepad2,
  PartyPopper
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

interface InvestmentOption {
  title: string;
  type: string;
  roi: string;
  description: string;
  minInvestment: string;
}

interface ReferralBenefit {
  level: string;
  reward: string;
  description: string;
  icon: LucideIcon;
}

interface CSRInitiative {
  title: string;
  impact: string;
  description: string;
  participationCount: string;
}

interface CommunityEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
  image: string;
}

interface Meme {
  id: number;
  title: string;
  likes: number;
  comments: number;
  image: string;
  author: string;
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

// Component Props Interface
interface HomeOwnerProps {
  className?: string;
}

const HomeOwner: React.FC<HomeOwnerProps> = ({ className = '' }) => {
  // State with proper typing
  const [activeTab, setActiveTab] = useState<keyof Packages>('furnished');
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [loanTenure, setLoanTenure] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeEventTab, setActiveEventTab] = useState<string>('upcoming');
  const [activeMemeTab, setActiveMemeTab] = useState<string>('trending');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    serviceType: 'I want to sell'
  });

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const resaleData: ResaleData[] = [
    { 
      title: "Year 1-2", 
      growth: "8-10%", 
      details: "Initial market adjustment period with steady growth" 
    },
    { 
      title: "Year 3-5", 
      growth: "12-15%", 
      details: "Peak appreciation period with infrastructure development" 
    },
    { 
      title: "Year 5+", 
      growth: "10-12%", 
      details: "Sustained long-term growth with area maturity" 
    }
  ];

  const loyaltyPrograms: LoyaltyProgram[] = [
    { 
      title: "Refer a Friend", 
      benefit: "5% off on next purchase", 
      details: "When your referral purchases a home" 
    },
    { 
      title: "Loyalty Points", 
      benefit: "1 point per ₹1000 spent", 
      details: "Redeem points for home accessories" 
    },
    { 
      title: "Anniversary Bonus", 
      benefit: "₹50,000 home credit", 
      details: "On your property purchase anniversary" 
    },
    { 
      title: "Upgrade Program", 
      benefit: "Zero processing fee", 
      details: "When upgrading to a larger property" 
    }
  ];

  const packages: Packages = {
    furnished: {
      title: "Fully Furnished",
      price: "₹85,00,000",
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
      price: "₹65,00,000",
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
    },
    { 
      title: "Emergency Response", 
      details: "Direct connection to local police and medical emergency services" 
    }
  ];

  // New data for additional sections
  const investmentOptions: InvestmentOption[] = [
    {
      title: "Rental Yield Properties",
      type: "Monthly Returns",
      roi: "8-12% annually",
      description: "Properties optimized for rental income with guaranteed tenants",
      minInvestment: "₹25 Lakhs"
    },
    {
      title: "Flip Properties",
      type: "Capital Gains",
      roi: "20-35% in 2 years",
      description: "Strategic renovations for quick resale at premium prices",
      minInvestment: "₹40 Lakhs"
    },
    {
      title: "Commercial Spaces",
      type: "Long-term Growth",
      roi: "15-25% annually",
      description: "Office spaces and retail outlets with appreciation potential",
      minInvestment: "₹60 Lakhs"
    },
    {
      title: "Land Banking",
      type: "Future Development",
      roi: "30-50% in 5 years",
      description: "Prime land parcels in upcoming development areas",
      minInvestment: "₹15 Lakhs"
    }
  ];

  const referralBenefits: ReferralBenefit[] = [
    {
      level: "Bronze Referrer",
      reward: "₹25,000 + Gold Coin",
      description: "First successful referral bonus",
      icon: Award
    },
    {
      level: "Silver Referrer",
      reward: "₹50,000 + Home Voucher",
      description: "After 3 successful referrals",
      icon: Star
    },
    {
      level: "Gold Referrer",
      reward: "₹1,00,000 + Vacation",
      description: "After 5 successful referrals",
      icon: Gift
    },
    {
      level: "Platinum Referrer",
      reward: "₹2,50,000 + Car",
      description: "After 10 successful referrals",
      icon: TrendingUp
    }
  ];

  const csrInitiatives: CSRInitiative[] = [
    {
      title: "Green Housing Initiative",
      impact: "500+ Solar Installations",
      description: "Free solar panel installations for underprivileged communities",
      participationCount: "1,200+ residents participated"
    },
    {
      title: "Education Support Program",
      impact: "₹50 Lakhs Donated",
      description: "Scholarship and infrastructure support for local schools",
      participationCount: "850+ families benefited"
    },
    {
      title: "Healthcare Access Drive",
      impact: "10,000+ Check-ups",
      description: "Free health camps and mobile medical units",
      participationCount: "2,500+ residents involved"
    },
    {
      title: "Skill Development Center",
      impact: "300+ Trained",
      description: "Job-oriented skill training for youth",
      participationCount: "600+ volunteers contributed"
    }
  ];

  const communityEvents: CommunityEvent[] = [
    {
      id: 1,
      title: "Annual Housing Expo",
      date: "2025-10-15",
      time: "10:00 AM",
      location: "Community Center",
      type: "Exhibition",
      attendees: 450,
      image: "🏠"
    },
    {
      id: 2,
      title: "Diwali Celebration",
      date: "2025-10-31",
      time: "6:00 PM",
      location: "Central Park",
      type: "Festival",
      attendees: 800,
      image: "🪔"
    },
    {
      id: 3,
      title: "Kids Fun Day",
      date: "2025-11-05",
      time: "2:00 PM",
      location: "Play Area",
      type: "Family",
      attendees: 200,
      image: "🎈"
    },
    {
      id: 4,
      title: "Yoga & Wellness Workshop",
      date: "2025-11-12",
      time: "7:00 AM",
      location: "Garden Area",
      type: "Health",
      attendees: 120,
      image: "🧘‍♀️"
    }
  ];

  const memes: Meme[] = [
    {
      id: 1,
      title: "When you finally get your dream home keys",
      likes: 234,
      comments: 45,
      image: "😍🔑",
      author: "HomeOwner_2024"
    },
    {
      id: 2,
      title: "EMI vs Rent debate be like...",
      likes: 456,
      comments: 89,
      image: "🤔💭",
      author: "PropertyMemer"
    },
    {
      id: 3,
      title: "House hunting in 2025",
      likes: 678,
      comments: 123,
      image: "🔍🏠",
      author: "FirstTimeBuyer"
    },
    {
      id: 4,
      title: "When society maintenance increases",
      likes: 345,
      comments: 67,
      image: "😭💸",
      author: "CommunityResident"
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

  const handleJoinCSR = (initiative: string): void => {
    alert(`Thank you for your interest in joining "${initiative}"! We'll contact you soon.`);
  };

  const handleEventRegister = (eventId: number): void => {
    alert(`Successfully registered for event ID: ${eventId}`);
  };

  const handleLikeMeme = (memeId: number): void => {
    alert(`Liked meme ID: ${memeId}`);
  };

  return (
    <div id="homeOwner">
      <div>
        
        {/* Benefits of Early Investment */}
        <section className="sticky-section h-screen flex flex-col items-center justify-center text-white ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Early Investment</h2>
            <p className="text-xl text-gray-600">Start building your wealth today with smart property investments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit: BenefitData, index: number) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-t-4 border-primary animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{benefit.value}</h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Resale & Investment Options */}
        <section className={`sticky-section1 h-screen transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resale & Investment Options</h2>
            <p className="text-xl text-gray-600">Diversify your real estate portfolio with multiple investment strategies</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {investmentOptions.map((option: InvestmentOption, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-l-4 border-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {option.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{option.roi}</div>
                    <div className="text-sm text-gray-500">Expected ROI</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Min. Investment: {option.minInvestment}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resale Value Growth */}
        <section className={`sticky-section h-screen flex flex-col  items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resale Value Growth</h2>
            <p className="text-xl text-gray-600">Watch your investment grow year over year</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {resaleData.map((item: ResaleData, index: number) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleAccordion(`resale-${index}`)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-2xl font-bold text-green-600 mt-1">{item.growth} appreciation</p>
                  </div>
                  {openAccordions[`resale-${index}`] ? 
                    <ChevronUp className="text-gray-500" /> : 
                    <ChevronDown className="text-gray-500" />
                  }
                </button>
                {openAccordions[`resale-${index}`] && (
                  <div className="px-8 pb-6 animate-slide-down">
                    <p className="text-gray-600 leading-relaxed">{item.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Referral Benefits */}
        <section className={`sticky-section1 h-screen transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Referral Benefits</h2>
            <p className="text-xl text-gray-600">Earn amazing rewards by referring friends and family</p>
          </div>
          <div className="bg-gradient-to-r from-amber-400 to-amber-700 rounded-xl p-8 text-white mb-8">
            <div className="text-center">
              <Share2 className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Share the Joy of Home Ownership</h3>
              <p className="text-lg opacity-90 mb-6">Help others find their dream home and earn exclusive rewards</p>
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Start Referring Now
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {referralBenefits.map((benefit: ReferralBenefit, index: number) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.level}</h3>
                    <p className="text-xl font-bold from-amber-200 to-amber-500 mb-2">{benefit.reward}</p>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Extra Benefits - Loyalty Programs */}
        <section className={`sticky-section h-screen flex flex-col  items-center justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Member Benefits</h2>
            <p className="text-xl text-gray-600">Enjoy special perks and rewards as our valued customer</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {loyaltyPrograms.map((program: LoyaltyProgram, index: number) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleAccordion(`loyalty-${index}`)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                    <p className="text-lg font-medium text-purple-600 mt-1">{program.benefit}</p>
                  </div>
                  {openAccordions[`loyalty-${index}`] ? 
                    <ChevronUp className="text-gray-500" /> : 
                    <ChevronDown className="text-gray-500" />
                  }
                </button>
                {openAccordions[`loyalty-${index}`] && (
                  <div className="px-8 pb-6 animate-slide-down">
                    <p className="text-gray-600 leading-relaxed">{program.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CSR / Community Engagement */}
        <section className={`sticky-section1 flex flex-col  items-center justify-center  transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CSR & Community Engagement</h2>
            <p className="text-xl text-gray-600">Building communities, transforming lives together</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-8 text-white mb-8">
            <div className="text-center">
              <Heart className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Making a Difference Together</h3>
              <p className="text-lg opacity-90 mb-6">Join our community in creating positive social impact</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {csrInitiatives.map((initiative: CSRInitiative, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">{initiative.impact}</div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <TreePine className="text-green-600" size={24} />
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{initiative.participationCount}</span>
                  <button 
                    onClick={() => handleJoinCSR(initiative.title)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    Join Initiative
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Events */}
        <section className={`sticky-section flex flex-col transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Events</h2>
            <p className="text-xl text-gray-600">Connect, celebrate, and create memories with your neighbors</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveEventTab('upcoming')}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeEventTab === 'upcoming'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Calendar className="inline mr-2" size={20} />
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveEventTab('past')}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeEventTab === 'past'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Camera className="inline mr-2" size={20} />
                Past Events
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {communityEvents.map((event: CommunityEvent, index: number) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{event.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Festival' ? 'bg-orange-100 text-orange-800' :
                        event.type === 'Health' ? 'bg-green-100 text-green-800' :
                        event.type === 'Family' ? 'bg-pink-100 text-pink-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-600">{event.attendees} attending</span>
                      </div>
                      <button 
                        onClick={() => handleEventRegister(event.id)}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Memes */}
        <section className={`sticky-section1 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Memes</h2>
            <p className="text-xl text-gray-600">Share laughs and connect through humor</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveMemeTab('trending')}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeMemeTab === 'trending'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <TrendingUp className="inline mr-2" size={20} />
                Trending
              </button>
              <button
                onClick={() => setActiveMemeTab('latest')}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeMemeTab === 'latest'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Smile className="inline mr-2" size={20} />
                Latest
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {memes.map((meme: Meme, index: number) => (
                  <div
                    key={meme.id}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-4">{meme.image}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{meme.title}</h3>
                      <p className="text-sm text-gray-600">by @{meme.author}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleLikeMeme(meme.id)}
                          className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Heart size={18} />
                          <span className="text-sm font-medium">{meme.likes}</span>
                        </button>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Coffee size={18} />
                          <span className="text-sm">{meme.comments}</span>
                        </div>
                      </div>
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-yellow-600 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Upload Your Meme
                </button>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default HomeOwner;