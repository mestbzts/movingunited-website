import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback!",
      description: "Your comment has been submitted successfully.",
    });
  };

  const projects = [
    {
      title: "Downtown Office Relocation",
      type: "Commercial",
      location: "New York, NY",
      date: "March 2024",
      description: "Successfully relocated a 50-employee tech company to their new downtown office space with zero downtime.",
      highlights: ["15,000 sq ft office", "100+ workstations", "Server room relocation", "Weekend completion"],
    },
    {
      title: "Luxury Home Move",
      type: "Residential",
      location: "Beverly Hills, CA",
      date: "February 2024",
      description: "White-glove moving service for a 8,000 sq ft luxury residence with valuable art collection and antiques.",
      highlights: ["Climate-controlled transport", "Art handling specialists", "Custom crating", "Storage coordination"],
    },
    {
      title: "University Library Transfer",
      type: "Commercial",
      location: "Boston, MA",
      date: "January 2024",
      description: "Organized relocation of 50,000+ books and research materials during semester break.",
      highlights: ["Cataloging system maintained", "Phased move approach", "Archive preservation", "2-week completion"],
    },
    {
      title: "Multi-Family Building",
      type: "Residential",
      location: "Seattle, WA",
      date: "December 2023",
      description: "Coordinated moves for 12 families transitioning to a new residential building.",
      highlights: ["Simultaneous coordination", "Elevator scheduling", "Individual storage units", "Move-in coordination"],
    },
    {
      title: "Medical Practice Relocation",
      type: "Commercial",
      location: "Chicago, IL",
      date: "November 2023",
      description: "Moved a busy medical practice including sensitive equipment and patient records.",
      highlights: ["HIPAA compliance", "Medical equipment specialists", "After-hours move", "Same-day setup"],
    },
    {
      title: "Estate Sale Preparation",
      type: "Residential",
      location: "Miami, FL",
      date: "October 2023",
      description: "Assisted with sorting, packing, and relocating items for estate settlement.",
      highlights: ["Gentle handling", "Item cataloging", "Distribution coordination", "Storage facilitation"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a look at some of our recent successful moves and see the quality 
            of service we deliver to every client.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={project.type === "Commercial" ? "default" : "secondary"}>
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Key Highlights:</div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                "SwiftMove made our office relocation seamless. Their team was professional, 
                efficient, and everything arrived safely."
              </p>
              <div className="font-semibold">- Tech Company CEO</div>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                "I was nervous about moving my art collection, but SwiftMove's specialists 
                handled everything with incredible care."
              </p>
              <div className="font-semibold">- Art Collector</div>
            </Card>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                "The coordination for our multi-family move was flawless. Everyone moved 
                in on schedule without any issues."
              </p>
              <div className="font-semibold">- Property Manager</div>
            </Card>
          </div>

          {/* Client Comment Form */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-primary cursor-pointer hover:fill-primary" />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Comment</label>
                  <Textarea 
                    placeholder="Tell us about your experience with Moving United..." 
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Comment
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
