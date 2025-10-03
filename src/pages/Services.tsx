import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Building2, Warehouse, Box, Truck, Shield } from "lucide-react";
import residentialImage from "@/assets/residential-moving.jpg";
import commercialImage from "@/assets/commercial-moving.jpg";
import storageImage from "@/assets/storage-services.jpg";

const Services = () => {
  const mainServices = [
    {
      title: "Residential Moving",
      description: "Whether you're moving across town or across the country, our residential moving services ensure your belongings arrive safely and on time. We handle everything from packing to unpacking.",
      image: residentialImage,
      features: [
        "Full-service packing and unpacking",
        "Furniture disassembly and reassembly",
        "Specialty item handling",
        "Local and long-distance moves",
      ],
    },
    {
      title: "Commercial Moving",
      description: "Minimize downtime with our efficient commercial moving services. We understand the importance of getting your business up and running quickly in your new location.",
      image: commercialImage,
      features: [
        "After-hours and weekend moves",
        "Office furniture and equipment handling",
        "IT equipment relocation",
        "Minimal business disruption",
      ],
    },
    {
      title: "Office Relocation",
      description: "Specialized office moving services designed to keep your business operations running smoothly during the transition to your new workspace.",
      image: storageImage,
      features: [
        "Strategic planning and coordination",
        "Minimal downtime approach",
        "Technology and equipment setup",
        "Organized labeling system",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Box,
      title: "Staging",
      description: "Professional staging services to help your property look its best for showings and open houses.",
    },
    {
      icon: Truck,
      title: "Furniture Assembly",
      description: "Expert furniture assembly and disassembly services to ensure safe transport and proper setup.",
    },
    {
      icon: Shield,
      title: "Disposal Services",
      description: "Responsible disposal and donation services for items you no longer need during your move.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive moving solutions designed to meet all your relocation needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-20">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's make your move smooth and stress-free.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
