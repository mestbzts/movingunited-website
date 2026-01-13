import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { useEffect } from "react";
import TiffEventImg from "@/assets/Tiff-event.jpg";
import luxuryHome from "@/assets/ilkin.jpeg";
import BackToTopButton from "@/components/BackToTopButton";
import ChairsImg from "@/assets/Chairs-deliv.jpeg";
import Windowss from "@/assets/windows-deliv.jpeg";
import Furniturestore from "@/assets/furniture-store.jpeg";
import phisio from "@/assets/phisio.jpg";
import MTCC from "@/assets/mtcc-setup.jpeg";
import { title } from "process";
const Projects = () => {

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      images: [ChairsImg],
    },
    {
      title: "MTCC delivery and setup",
      type: "Commercial",
      location: "Toronto, ON",
      date: "April 2025",
      description: "Delivered and set up furniture for the Metro Toronto Convention Centre.",
      highlights: ["Timely delivery", "Professional setup", "Client satisfaction", "Attention to detail", "Seamless coordination"],
      images: [MTCC],
    },
    {
      title: "Window and Frame Delivery",
      type: "Residential",
      location: "St. Catharines, ON",
      date: "February 2025",
      description: "Unloaded a full container of windows and frame materials for a luxurious home construction project.",
      highlights: ["Container unloading", "Material organization", "Damage-free delivery", "Quality verification"],
      images: [Windowss],
    },
    {
      title: "Physiotherapy center Relocation",
      type: "Commercial",
      location: "Toronto, ON",
      date: "December 2024",
      description: "Moved a busy physiotherapy center including sensitive equipment and patient records.",
      highlights: ["Patient record transfer", "Medical equipment specialists", "After-hours move", "Same-day setup"],
      images: [phisio],
    },
    {
      title: "Furniture store staging",
      type: "Commercial",
      location: "Toronto, ON",
      date: "October 2024",
      description: "Assisted with Moving, Assembling, and staging items for a furniture store.",
      highlights: ["Gentle handling", "Assembling", "Placing within the store", "Final touches"],
      images: [Furniturestore],
    },
  ];

  return (
    <div className="min-h-screen relative">
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
              className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              style={{
                aspectRatio: "3/4",
                minHeight: "520px", // slightly taller for more text
                maxWidth: "400px",
                margin: "0 auto"
              }}
            >
              {/* Show first image as preview */}
              {project.images && project.images[0] && (
                <div className="w-full" style={{ height: "240px" }}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover object-center rounded"
                    style={{ aspectRatio: "3/4" }}
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

      <BackToTopButton />
    </div>
  );
};


export default Projects;
