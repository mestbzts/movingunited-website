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
              style={{
                aspectRatio: "3/4",
                minHeight: "520px", // slightly taller for more text
                maxWidth: "400px",
                margin: "0 auto"
              }}
              onClick={() => navigate(`/projects/${index}`)}
            >
              {/* Show first image as preview */}
              {project.images && project.images[0] && (
                <div className="flex justify-center items-center w-full" style={{ height: "180px" }}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover object-center rounded"
                    style={{ maxHeight: "100%", maxWidth: "100%", aspectRatio: "3/4" }}
                  />
                </div>
              )}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={project.type === "Commercial" ? "default" : "secondary"} className="text-xs px-2 py-1">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  {project.location}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                <div className="space-y-1">
                  <div className="text-xs font-semibold">Key Highlights:</div>
                  <ul className="space-y-0.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary mt-1 flex-shrink-0" />
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
