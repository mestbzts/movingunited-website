import BackToTopButton from "@/components/BackToTopButton";
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your needs and satisfaction in every move we make.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our team is trained, certified, and committed to the highest standards.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time service and transparent communication from start to finish.",
    },
    {
      icon: Heart,
      title: "Care & Respect",
      description: "We treat your belongings as if they were our own.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Moving United</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your Move. Our Mission. We're dedicated to making your relocation experience 
            seamless and stress-free with professional service you can trust.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Moving United began with a simple but powerful mission: Your Move. Our Mission. 
              We understand that every move represents a new chapter in life, and we're honored 
              to be part of that journey.
            </p>
            <p>
              Our commitment goes beyond simply transporting belongings from point A to point B. 
              We treat every item with the care and respect it deserves, ensuring your possessions 
              arrive safely at your new destination. Our professional team is dedicated to making 
              your moving experience as smooth and stress-free as possible.
            </p>
            <p>
              Today, Moving United serves both residential and commercial clients throughout the 
              region, offering comprehensive moving solutions including residential moving, commercial 
              moving, office relocation, staging, furniture assembly, and disposal services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
};

export default About;
