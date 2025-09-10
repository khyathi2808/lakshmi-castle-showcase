import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, FileText, BookOpen, HelpCircle, MapPin, MessageCircle } from "lucide-react";

const Resources = () => {
  const blogs = [
    {
      title: "How to Select the Perfect Property in Vizag",
      description: "Complete guide to choosing the right property based on location, amenities, and investment potential",
      category: "Property Guide",
      readTime: "8 min read"
    },
    {
      title: "Understanding Real Estate Terms - REIT, ISG, and More",
      description: "Decode complex real estate terminology and make informed investment decisions",
      category: "Education",
      readTime: "6 min read"
    },
    {
      title: "Vizag Real Estate Market Trends 2024",
      description: "Latest market analysis and property price trends in Visakhapatnam",
      category: "Market Analysis",
      readTime: "10 min read"
    },
    {
      title: "Fun Stories from Our Construction Sites",
      description: "Heartwarming stories from our builders, workers, and the communities we create",
      category: "Fun & Events",
      readTime: "5 min read"
    }
  ];

  const faqs = [
    {
      question: "What is the typical timeline for property handover?",
      answer: "Our projects typically take 18-24 months from construction start to handover, with regular updates provided."
    },
    {
      question: "Do you offer home loan assistance?",
      answer: "Yes, we have partnerships with major banks offering competitive interest rates and loan processing support."
    },
    {
      question: "What are the maintenance charges?",
      answer: "Maintenance charges range from ₹2-4 per sqft depending on amenities, covering security, housekeeping, and common area maintenance."
    },
    {
      question: "Can I customize interiors in my apartment?",
      answer: "Yes, we offer flexible interior packages and customization options to suit your preferences and budget."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Resources & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to make informed property decisions
          </p>
        </div>

        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="tools">Interactive Tools</TabsTrigger>
            <TabsTrigger value="blogs">Blogs & Guides</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* EMI Calculator */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    EMI Calculator
                  </CardTitle>
                  <CardDescription>Calculate your monthly EMI instantly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                    <Input id="loan-amount" placeholder="50,00,000" />
                  </div>
                  <div>
                    <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                    <Input id="interest-rate" placeholder="8.5" />
                  </div>
                  <div>
                    <Label htmlFor="tenure">Tenure (Years)</Label>
                    <Input id="tenure" placeholder="20" />
                  </div>
                  <Button className="w-full">Calculate EMI</Button>
                </CardContent>
              </Card>

              {/* Property Rate Map */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Property Rate Map
                  </CardTitle>
                  <CardDescription>Explore property rates across Vizag</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">Interactive Map</span>
                  </div>
                  <Button className="w-full" variant="outline">Open Interactive Map</Button>
                </CardContent>
              </Card>

              {/* Instant Quote */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    Get Instant Quote
                  </CardTitle>
                  <CardDescription>Personalized property quotes in seconds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input id="budget" placeholder="₹40-60 Lakhs" />
                  </div>
                  <div>
                    <Label htmlFor="bhk">Preferred BHK</Label>
                    <Input id="bhk" placeholder="2 BHK" />
                  </div>
                  <Button className="w-full">Get Quote</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blogs" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg hover:text-primary transition-colors">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{blog.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-sm text-primary font-medium">{blog.category}</span>
                      <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                View All Blog Posts
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline">
                View All FAQs
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resources;