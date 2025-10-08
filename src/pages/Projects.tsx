import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TiffEventImg from "@/assets/Tiff-event.jpg";
import luxuryHome from "@/assets/ilkin.jpeg";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "TIFF VIP Lounge staging",
      type: "Staging & Commercial",
      location: "Toronto, ON",
      date: "September 2025",
      description: "Collaborated with Canapy Furniture, and successfully moved & staged their furniture to TIFF VIP Lounge.",
      highlights: ["Loading the furniture", "Unloading in the venue", "Placing them according to the design plan", "Touching up the final setup"],
      images: [TiffEventImg],
    },
    {
      title: "Luxury Home Move",
      type: "Residential",
      location: "North York, ON",
      date: "September 2025",
      description: "White-glove moving service for a luxurious Mansion.",
      highlights: ["Careful transportation", "Unwrapping and assembling all items", "Placing all items according to plan", "Clean up"],
      images: [luxuryHome],
    },
    {
      title: "University Library Chairs Delivery",
      type: "Commercial",
      location: "Guelph, ON",
      date: "May 2025",
      description: "Organized relocation of 150 chairs to Guelph University.",
      highlights: ["Loaded & Secured all chairs", "Delivered on time", "Assembled all chairs", "Placed all items according to plan"],
      images: ["/images/projects/library1.jpg"],
    },
    {
      title: "Multi-Family Building",
      type: "Residential",
      location: "Seattle, WA",
      date: "December 2023",
      description: "Coordinated moves for 12 families transitioning to a new residential building.",
      highlights: ["Simultaneous coordination", "Elevator scheduling", "Individual storage units", "Move-in coordination"],
      images: ["/images/projects/multifamily1.jpg"],
    },
    {
      title: "Medical Practice Relocation",
      type: "Commercial",
      location: "Chicago, IL",
      date: "November 2023",
      description: "Moved a busy medical practice including sensitive equipment and patient records.",
      highlights: ["HIPAA compliance", "Medical equipment specialists", "After-hours move", "Same-day setup"],
      images: ["/images/projects/medical1.jpg"],
    },
    {
      title: "Estate Sale Preparation",
      type: "Residential",
      location: "Miami, FL",
      date: "October 2023",
      description: "Assisted with sorting, packing, and relocating items for estate settlement.",
      highlights: ["Gentle handling", "Item cataloging", "Distribution coordination", "Storage facilitation"],
      images: ["/images/projects/estate1.jpg"],
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
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
              style={{ aspectRatio: "3/4", minHeight: "420px", maxWidth: "400px", margin: "0 auto" }}
              onClick={() => navigate(`/projects/${index}`)}
            >
              {/* Show first image as preview */}
              {project.images && project.images[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-72 object-cover object-center"
                  style={{ aspectRatio: "3/4" }}
                />
              )}
              <div className="p-6 flex flex-col flex-1">
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

      {/* Testimonials moved to Home page */}
    </div>
  );
};

export default Projects;
