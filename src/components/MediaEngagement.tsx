import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, TreePine, GraduationCap, Heart } from "lucide-react";

const MediaEngagement = () => {
  const videos = [
    {
      id: 1,
      title: "Virtual Tour: Ayra Skyline Residency",
      description: "Complete 360° walkthrough of our premium residential project",
      duration: "5:30",
      views: "2.5K views",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Construction Process: Behind the Scenes",
      description: "See how we build quality homes with transparency and precision",
      duration: "8:45",
      views: "1.8K views", 
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Happy Customer Stories",
      description: "Real testimonials from families who chose Ayra Nirman",
      duration: "6:20",
      views: "3.1K views",
      thumbnail: "/placeholder.svg"
    }
  ];

  const csrActivities = [
    {
      icon: GraduationCap,
      title: "Educational Support",
      description: "Built 3 schools in rural areas, providing quality education to 500+ children",
      impact: "500+ Children Educated",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Planted 10,000+ trees and implemented rainwater harvesting in communities",
      impact: "10,000+ Trees Planted",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Healthcare camps, skill development programs, and disaster relief support",
      impact: "2000+ Lives Touched",
      color: "bg-red-100 text-red-600"
    }
  ];

  const events = [
    {
      title: "Ayra Family Day 2024",
      date: "March 15, 2024",
      description: "Annual celebration with customers, employees, and construction teams",
      attendees: "500+ families"
    },
    {
      title: "Property Expo Vizag",
      date: "January 20-22, 2024",
      description: "Showcased latest projects at the city's biggest real estate exhibition",
      attendees: "10,000+ visitors"
    },
    {
      title: "Sustainability Workshop",
      date: "December 10, 2023",
      description: "Educational session on eco-friendly construction practices",
      attendees: "200+ participants"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Media & Community Engagement
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our story through videos, community initiatives, and events that make a difference
          </p>
        </div>

        {/* Video Tours Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Video Tours & Explainers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-48 bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-3 right-3 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground">{video.views}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CSR Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Social Impact & CSR Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {csrActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${activity.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto mt-2">
                      {activity.impact}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Events & Community */}
        <div className="bg-background rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Events & Community Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Feed Integration */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Follow Our Journey
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay connected with our latest updates, behind-the-scenes content, and community stories on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              Follow on Facebook
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-pink-500 rounded"></div>
              Follow on Instagram
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaEngagement;