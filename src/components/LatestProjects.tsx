import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const LatestProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: "Ayra Skyline Residency",
      location: "MVP Colony, Visakhapatnam",
      progress: 75,
      completionDate: "Dec 2024",
      units: 120,
      status: "ongoing",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Ayra Green Valley",
      location: "Gajuwaka, Visakhapatnam", 
      progress: 45,
      completionDate: "Jun 2025",
      units: 180,
      status: "ongoing",
      image: "/placeholder.svg"
    }
  ];

  const upcomingProjects = [
    {
      id: 3,
      name: "Ayra Luxury Towers",
      location: "Madhurawada, Visakhapatnam",
      launchDate: "Jan 2025",
      units: 200,
      status: "upcoming",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Ayra Coastal Heights",
      location: "Rushikonda, Visakhapatnam",
      launchDate: "Mar 2025", 
      units: 150,
      status: "upcoming",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover our ongoing developments and upcoming premium residential projects across Visakhapatnam
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Ongoing Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.progress}% Complete
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Completion: {project.completionDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.units} Units
                      </span>
                    </div>
                    <Button className="w-full">View Project Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Upcoming Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary">
                    Coming Soon
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Launch: {project.launchDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.units} Units
                      </span>
                    </div>
                    <Button className="w-full" variant="outline">Register Interest</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;