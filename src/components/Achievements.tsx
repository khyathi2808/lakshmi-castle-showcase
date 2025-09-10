import { Award, Trophy, Users, Star, Building, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Best Real Estate Developer",
      description: "Andhra Pradesh Real Estate Excellence Awards 2023",
      year: "2023"
    },
    {
      icon: Trophy,
      title: "Quality Construction Award",
      description: "Recognized for superior construction standards and timely delivery",
      year: "2023"
    },
    {
      icon: Star,
      title: "Customer Satisfaction Excellence",
      description: "98% customer satisfaction rate across all completed projects",
      year: "2023"
    },
    {
      icon: Building,
      title: "Sustainable Building Certification",
      description: "Green building practices and eco-friendly construction methods",
      year: "2022"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Happy Families" },
    { number: "25+", label: "Completed Projects" },
    { number: "98%", label: "On-Time Delivery" }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and satisfied customers
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">
              Trusted by 5000+ families across Visakhapatnam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;