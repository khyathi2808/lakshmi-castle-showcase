import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Gayatri Aaditya",
      location: "Visakhapatnam",
      image: testimonial1,
      rating: 5,
      testimonial: "Living in Lakshmi Castle has been a dream come true. The quality of construction and attention to detail is exceptional.",
    },
    {
      id: 2,
      name: "Swetha",
      location: "Hyderabad",
      image: testimonial2,
      rating: 5,
      testimonial: "The location is perfect with easy access to everything we need. Ayra Nirman has truly delivered on their promises.",
    },
    {
      id: 3,
      name: "Surya Raju",
      location: "Mumbai",
      image: testimonial3,
      rating: 5,
      testimonial: "Outstanding project management and timely delivery. The premium fittings and finishes are top-notch.",
    },
    
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 star-rating" />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied residents who have made our properties their home
          </p>
        </AnimatedSection>

        {/* Navigation Buttons */}
        <AnimatedSection animation="fade-up" className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonials}
            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 hover-scale"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              {currentIndex * testimonialsPerPage + 1} - {Math.min((currentIndex + 1) * testimonialsPerPage, testimonials.length)} of {testimonials.length}
            </span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonials}
            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 hover-scale"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <AnimatedSection animation="stagger" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="testimonial-card group hover-lift hover-glow">
                <CardContent className="text-center">
                  {/* Profile Image */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 hover-scale">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} profile picture`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Location */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {testimonial.location}
                  </p>

                  {/* Star Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Pagination Dots */}
        <AnimatedSection animation="fade-up" className="flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                index === currentIndex
                  ? "bg-primary shadow-lg"
                  : "bg-muted hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="scale" className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Satisfied Residents
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the luxury and comfort that our residents love. Schedule a visit today.
            </p>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg hover-lift hover-glow"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              aria-label="Contact us today"
            >
              Contact Us Today
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;