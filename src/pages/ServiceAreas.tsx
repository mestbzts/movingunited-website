import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import { areas } from "@/areas";

const ServiceAreas = () => (
  <div className="min-h-screen">
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Areas We Serve</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Moving United serves homes and businesses in Toronto, York Region and surrounding communities.
        </p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <Link key={area.slug} to={`/service-areas/${area.slug}`} onClick={() => window.scrollTo(0, 0)}>
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h2 className="text-2xl font-bold mb-2">Movers in {area.name}</h2>
              <p className="text-muted-foreground">{area.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link to="/contact">Get Your Free Quote</Link>
        </Button>
      </div>
    </section>
    <BackToTopButton />
  </div>
);

export default ServiceAreas;
