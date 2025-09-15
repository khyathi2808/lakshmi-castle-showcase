import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Calculator, MapPin, FileText, Calendar, ExternalLink, TrendingUp, Home } from 'lucide-react';
import "./prohight.css";
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
      <div id="resource">
        {/* Header */}
        <section data-scroll-section className="sticky-section1 items-center justify-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl text-black font-bold mb-4">Resources Center</h1>
            <p className="text-xl text-black max-w-2xl">
              Everything you need to make informed real estate decisions - from expert guides to interactive tools
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="section-stack flex flex-col items-center justify-center  text-white max-w-7xl mx-auto px-4 py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 py-4">
              {[
                { id: 'blogs', label: 'Blogs & Articles', icon: FileText },
                { id: 'faq', label: 'FAQ', icon: Calendar },
                
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === id
                      ? 'bg-amber-100 text-[#bf9c63] border-2 border-amber-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
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
                      className="w-full text-black pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF9C63] focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
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
                    <div className="h-48 bg-gradient-to-br from-[#aaa8a3] to-[#BF9C63] flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm mb-3">
                          Featured
                        </div>
                        <h3 className="text-xl font-bold">{post.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-amber-100 text-black text-sm rounded-full capitalize">
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
         
        </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;