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
  LucideIcon 
} from 'lucide-react';

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

  const handleSubmitRequest = (): void => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
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
    // Handle pre-approval logic here
    alert('Pre-approval request submitted!');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ${className}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to text-white transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Your Dream Home Awaits</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Invest in your future with premium properties that grow in value while providing the perfect living experience
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                className="bg-hero-accent text-hero-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-hero-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => console.log('Explore Properties clicked')}
              >
                Explore Properties
              </button>
              <button 
                className="border-2 border-hero-accent px-8 py-3 rounded-lg font-semibold hover:bg-hero-accent hover:text-hero-accent-foreground transform hover:scale-105 transition-all duration-300"
                 onClick={handleEnquireNow}
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Benefits of Early Investment */}
        <section id="homeOwner" className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
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

        {/* Resale Value Growth */}
        <section className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
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

        {/* Extra Benefits - Loyalty Programs */}
        <section className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
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

        {/* Packages */}
        <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
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
                      ? 'bg-primary text-primary-foreground transform scale-105'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {pkg.title}
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{packages[activeTab].title}</h3>
                <p className="text-4xl font-bold text-primary">{packages[activeTab].price}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages[activeTab].features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg animate-fade-in"
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

        {/* Personalized Quotes - EMI Calculator */}
        <section className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Personalized Quote</h2>
            <p className="text-xl text-gray-600">Calculate your EMI and plan your investment</p>
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
                    className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
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
                    className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
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
                    className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3%</span>
                    <span>12%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl p-8">
                <div className="text-center">
                  <Calculator className="mx-auto text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Your EMI Calculation</h3>
                  <div className="text-5xl font-bold text-primary mb-4">
                    ₹{formatCurrency(calculateEMI())}
                  </div>
                  <p className="text-gray-600 mb-8">Monthly EMI Amount</p>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Amount:</span>
                      <span className="font-semibold">₹{formatLakhs(loanAmount)}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest:</span>
                      <span className="font-semibold">₹{formatLakhs(calculateEMI() * loanTenure * 12 - loanAmount)}L</span>
                    </div>
                    <div className="flex justify-between border-t pt-4">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-bold text-lg">₹{formatLakhs(calculateEMI() * loanTenure * 12)}L</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleGetPreApproved}
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 mt-6"
                  >
                    Get Pre-Approved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Old Home Assistance */}
        <section className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Home className="mx-auto mb-4" size={48} />
                <h2 className="text-3xl font-bold mb-4">Need to Sell or Rent Your Old Home?</h2>
                <p className="text-xl opacity-90">We'll help you get the best value for your current property</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Assistance?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle size={20} />
                      <span>Free property valuation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle size={20} />
                      <span>Professional photography</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle size={20} />
                      <span>Marketing across platforms</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle size={20} />
                      <span>Legal assistance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Property Address"
                      value={formData.address}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange('address', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <select 
                      value={formData.serviceType}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFormChange('serviceType', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    >
                      <option value="I want to sell">I want to sell</option>
                      <option value="I want to rent">I want to rent</option>
                      <option value="I want to sell and buy">I want to sell and buy</option>
                    </select>
                    <button
                      onClick={handleSubmitRequest}
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Submit Request</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
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
                  <div className="px-8 pb-6 ml-16 animate-slide-down">
                    <p className="text-gray-600 leading-relaxed">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary via-primary-glow to-hero-gradient-to rounded-xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of satisfied homeowners who trusted us with their dreams</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => console.log('Call Now clicked')}
                className="bg-hero-accent text-hero-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-hero-accent/90 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </button>
              <button 
                onClick={() => console.log('Book Site Visit clicked')}
                className="border-2 border-hero-accent px-8 py-4 rounded-lg font-semibold hover:bg-hero-accent hover:text-hero-accent-foreground transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Site Visit</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeOwner;