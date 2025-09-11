import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Calculator, MapPin, FileText, Calendar, ExternalLink, TrendingUp, Home } from 'lucide-react';

const Resources = () => {
  const [activeSection, setActiveSection] = useState('blogs');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  
  // Survey Form State
  const [surveyData, setSurveyData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    propertyType: '',
    location: 'vizag'
  });

  // Mock Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "How to Select a Property",
      category: "buying-guide",
      excerpt: "Essential tips and strategies for choosing the perfect property that matches your needs, budget, and long-term investment goals.",
      author: "Ramesh Kumar",
      date: "2024-09-05",
      readTime: "8 min read",
      tags: ["Property Selection", "Investment", "Tips"],
      featured: true
    },
    {
      id: 2,
      title: "REIT Explained",
      category: "investment",
      excerpt: "Understanding Real Estate Investment Trusts (REITs) - a comprehensive guide to this popular investment vehicle for real estate exposure.",
      author: "Priya Sharma",
      date: "2024-09-03",
      readTime: "12 min read",
      tags: ["REIT", "Investment", "Finance"],
      featured: false
    },
    {
      id: 3,
      title: "Why Vizag?",
      category: "market-analysis",
      excerpt: "Discover why Visakhapatnam is emerging as India's next major real estate hotspot with excellent growth potential and infrastructure development.",
      author: "Suresh Reddy",
      date: "2024-09-01",
      readTime: "10 min read",
      tags: ["Vizag", "Market Analysis", "Growth"],
      featured: true
    },
    {
      id: 4,
      title: "Home Loan Interest Rates 2024",
      category: "finance",
      excerpt: "Complete guide to current home loan interest rates, eligibility criteria, and how to get the best deals from various banks.",
      author: "Anjali Mehta",
      date: "2024-08-28",
      readTime: "6 min read",
      tags: ["Home Loans", "Interest Rates", "Banking"],
      featured: false
    },
    {
      id: 5,
      title: "Vastu Tips for Your New Home",
      category: "lifestyle",
      excerpt: "Traditional Vastu Shastra principles combined with modern architecture to create harmonious living spaces.",
      author: "Dr. Venkat Rao",
      date: "2024-08-25",
      readTime: "7 min read",
      tags: ["Vastu", "Home Design", "Traditional"],
      featured: false
    }
  ];

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "What is Lakshmi Castle's timeline?",
      answer: "Lakshmi Castle project was launched in 2023 with construction beginning in early 2024. The project is scheduled for completion by December 2025, with possession expected by March 2026. We provide regular monthly updates to all stakeholders and maintain transparency throughout the construction process.",
      category: "project-timeline"
    },
    {
      id: 2,
      question: "What are the payment options available for Lakshmi Castle?",
      answer: "We offer flexible payment plans including: 20% at booking, 30% during construction milestones, 40% on completion, and 10% on possession. We also provide assistance with home loans from leading banks at competitive rates starting from 8.5% per annum.",
      category: "payment"
    },
    {
      id: 3,
      question: "What amenities are included in Lakshmi Castle?",
      answer: "Lakshmi Castle offers premium amenities including a fully equipped gymnasium, swimming pool, clubhouse with recreational facilities, landscaped gardens, children's play area, 24/7 security, power backup, rainwater harvesting, and ample parking space.",
      category: "amenities"
    },
    {
      id: 4,
      question: "Is Lakshmi Castle Vastu compliant?",
      answer: "Yes, Lakshmi Castle is designed following traditional Vastu principles while incorporating modern architectural elements. The layout ensures proper directional alignment, natural light through airy windows, and positive energy flow throughout the 10,000 sq ft space.",
      category: "design"
    },
    {
      id: 5,
      question: "What makes Vizag a good investment location?",
      answer: "Visakhapatnam offers excellent growth potential with expanding IT sector, port development, upcoming metro rail, international airport connectivity, and affordable property rates at ₹5,000/sq ft compared to other metro cities. The government's focus on making Vizag the executive capital adds to its investment appeal.",
      category: "location"
    },
    {
      id: 6,
      question: "What is the area and pricing of Lakshmi Castle?",
      answer: "Lakshmi Castle spans 10,000 sq ft with spacious, well-ventilated rooms designed for modern families. Pricing starts from ₹5 crores with various payment plans available. Contact our sales team for detailed pricing and current offers.",
      category: "pricing"
    }
  ];

  // Filter functions
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // EMI Calculator
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = loanTenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const totalAmount = calculateEMI() * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleSurveySubmit = () => {
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
    setSurveyData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      propertyType: '',
      location: 'vizag'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section id="resource">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-4">Resources Center</h1>
            <p className="text-xl text-amber-100 max-w-2xl">
              Everything you need to make informed real estate decisions - from expert guides to interactive tools
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 py-4">
              {[
                { id: 'blogs', label: 'Blogs & Articles', icon: FileText },
                { id: 'faq', label: 'FAQ', icon: Calendar },
                { id: 'tools', label: 'Interactive Tools', icon: Calculator }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === id
                      ? 'bg-amber-100 text-amber-700 border-2 border-amber-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Blogs & Articles Section */}
          {activeSection === 'blogs' && (
            <div className="space-y-8">
              {/* Search and Filter Controls */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles, guides, and tips..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
                    >
                      <option value="all">All Categories</option>
                      <option value="buying-guide">Buying Guide</option>
                      <option value="investment">Investment</option>
                      <option value="market-analysis">Market Analysis</option>
                      <option value="finance">Finance</option>
                      <option value="lifestyle">Lifestyle</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Featured Articles */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.filter(post => post.featured).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm mb-3">
                          Featured
                        </div>
                        <h3 className="text-xl font-bold">{post.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full capitalize">
                          {post.category.replace('-', ' ')}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <p>By {post.author}</p>
                          <p>{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                        <button className="flex items-center text-amber-600 hover:text-amber-700 font-medium">
                          Read More
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Regular Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded capitalize">
                          {post.category.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          )}

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Find answers to common questions about Lakshmi Castle, investment opportunities, and our services
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <div className="flex-shrink-0">
                          {openFAQ === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-amber-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>
                      {openFAQ === faq.id && (
                        <div className="px-6 pb-5">
                          <div className="bg-amber-50 rounded-lg p-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interactive Tools Section */}
          {activeSection === 'tools' && (
            <div className="space-y-8">
              {/* EMI Calculator */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <Calculator className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">EMI Calculator</h2>
                  <p className="text-gray-600">Calculate your monthly EMI for home loans with current interest rates</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* Calculator Inputs */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Loan Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          min="100000"
                          max="50000000"
                          step="100000"
                        />
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="10000000"
                        step="100000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Interest Rate (% per annum)
                      </label>
                      <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        min="1"
                        max="20"
                        step="0.1"
                      />
                      <input
                        type="range"
                        min="6"
                        max="15"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Loan Tenure (years)
                      </label>
                      <input
                        type="number"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        min="1"
                        max="30"
                      />
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  </div>

                  {/* Calculator Results */}
                  <div className="bg-gradient-to-br from-amber-400 to-amber-700 rounded-xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-6">EMI Calculation Results</h3>
                    <div className="space-y-6">
                      <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                        <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
                        <p className="text-3xl font-bold text-amber-600">₹{calculateEMI().toLocaleString()}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                          <p className="text-lg font-semibold text-gray-900">₹{totalAmount.toLocaleString()}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                          <p className="text-lg font-semibold text-red-600">₹{totalInterest.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Principal Amount</span>
                          <span>Interest Amount</span>
                        </div>
                        <div className="flex rounded-lg overflow-hidden h-4">
                          <div 
                            className="bg-amber-500"
                            style={{width: `${(loanAmount / totalAmount) * 100}%`}}
                          ></div>
                          <div 
                            className="bg-red-400"
                            style={{width: `${(totalInterest / totalAmount) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Rates Map */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Property Rates</h2>
                  <p className="text-gray-600">Current property rates in key locations</p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visakhapatnam (Vizag)</h3>
                        <p className="text-2xl font-bold text-amber-600">₹5,000/sq ft</p>
                        <p className="text-sm text-gray-600 mt-2">Prime residential areas</p>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Potential</h3>
                        <p className="text-2xl font-bold text-amber-600">15-20%</p>
                        <p className="text-sm text-gray-600 mt-2">Annual appreciation</p>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <Home className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Lakshmi Castle</h3>
                        <p className="text-2xl font-bold text-amber-600">₹5+ Cr</p>
                        <p className="text-sm text-gray-600 mt-2">10,000 sq ft premium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Interest Survey */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <FileText className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Property Interest Survey</h2>
                  <p className="text-gray-600">Tell us about your property requirements and get personalized recommendations</p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={surveyData.name}
                        onChange={(e) => setSurveyData({...surveyData, name: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={surveyData.email}
                        onChange={(e) => setSurveyData({...surveyData, email: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={surveyData.phone}
                      onChange={(e) => setSurveyData({...surveyData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                    <select 
                      value={surveyData.budget}
                      onChange={(e) => setSurveyData({...surveyData, budget: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select your budget range</option>
                      <option value="below-50L">Below ₹50 Lakhs</option>
                      <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="1Cr-2Cr">₹1 Crore - ₹2 Crores</option>
                      <option value="2Cr-5Cr">₹2 Crores - ₹5 Crores</option>
                      <option value="above-5Cr">Above ₹5 Crores</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type Interest</label>
                    <div className="space-y-3">
                      {[
                        { value: 'lakshmi-castle', label: 'Lakshmi Castle (Premium Luxury)' },
                        { value: 'villa', label: 'Independent Villa' },
                        { value: 'apartment', label: 'Luxury Apartment' },
                        { value: 'commercial', label: 'Commercial Property' },
                        { value: 'investment', label: 'Investment Properties' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={surveyData.propertyType === option.value}
                            onChange={(e) => setSurveyData({...surveyData, propertyType: e.target.checked ? option.value : ''})}
                            className="mr-3 text-amber-600 focus:ring-amber-500 rounded"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location</label>
                    <select 
                      value={surveyData.location}
                      onChange={(e) => setSurveyData({...surveyData, location: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="vizag">Visakhapatnam (Vizag)</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="chennai">Chennai</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSurveySubmit}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-colors font-semibold"
                  >
                    Submit Survey & Get Personalized Recommendations
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. Your information is secure and will not be shared with third parties.
                  </p>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Loan Assistance</h3>
                  <p className="text-sm text-gray-600 mb-3">Get help with home loans at competitive rates starting from 8.5%</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">Learn More</button>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Site Visit</h3>
                  <p className="text-sm text-gray-600 mb-3">Schedule a visit to Lakshmi Castle and experience luxury living</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">Book Visit</button>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-gray-600 mb-3">Get free consultation from our real estate experts</p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-medium text-sm">Consult Now</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;