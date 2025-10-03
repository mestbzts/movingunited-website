import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Package, Building2, Warehouse, CheckCircle, Phone, FileText, Truck, Wrench, MapPin, Instagram } from "lucide-react";
import InstagramFeedCarousel from "@/components/InstagramFeedCarousel";
import heroImage from "@/assets/hero-moving.jpg";
import residentialImage from "@/assets/residential-moving.jpg";
import commercialImage from "@/assets/commercial-moving.jpg";
import storageImage from "@/assets/storage-services.jpg";

const Home = () => {
  const services = [
    {
      title: "Residential Moving",
      description: "Smooth and stress-free home relocations with experienced professionals.",
      icon: Package,
      image: residentialImage,
    },
    {
      title: "Commercial Moving",
      description: "Efficient office and business moving services with minimal downtime.",
      icon: Building2,
      image: commercialImage,
    },
    {
      title: "Office Relocation",
      description: "Seamless office transitions with minimal business disruption.",
      icon: Warehouse,
      image: storageImage,
    },
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Reach out to discuss your moving needs",
    },
    {
      icon: FileText,
      title: "Get a Free Quote",
      description: "Receive a detailed estimate for your move",
    },
    {
      icon: Truck,
      title: "We Move Your Goods",
      description: "Our team safely transports your belongings",
    },
    {
      icon: Wrench,
      title: "Assembly & Disassembly",
      description: "We handle furniture disassembly and reassembly",
    },
    {
      icon: MapPin,
      title: "Unload at Destination",
      description: "We carefully place everything where you need it",
    },
  ];

  const features = [
    "Licensed & Insured Professionals",
    "24/7 Customer Support",
    "Competitive Pricing",
    "Free Estimates",
    "Packing & Unpacking Services",
    "Climate-Controlled Storage",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 43, 83, 0.7), rgba(31, 97, 94, 0.7)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Moving United
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8">
            Your Move. Our Mission.
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional moving services for residential and commercial needs. 
            We handle your belongings with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="ghost" asChild className="group/btn">
                  <Link to="/services">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Moving Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient, and stress-free moving in 5 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Moving United?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best moving experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today and experience the difference 
            professional moving services can make.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">Follow Us on Instagram</h2>
            <p className="text-lg text-muted-foreground">See our latest moves, images, and reels.</p>
          </div>
          <div className="mb-8">
            <InstagramFeedCarousel />
          </div>
          <div className="text-center">
            <a
              href="https://www.instagram.com/movingunited.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
              aria-label="Visit our Instagram profile"
            >
              <Instagram className="h-6 w-6" />
              <span>@movingunited.ca</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
