import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BackToTopButton from "@/components/BackToTopButton";
import NotFound from "./NotFound";
import { getArea } from "@/areas";

const AreaDetail = () => {
  const { slug } = useParams();
  const area = getArea(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) return <NotFound />;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Movers in {area.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">{area.summary}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
              <a href="tel:+14375058275">Call (437) 505-8275</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <p className="text-lg text-muted-foreground">{area.intro}</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Planning your {area.name} move</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {area.tips.map((tip) => (
            <Card key={tip.title} className="p-6">
              <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.text}</p>
            </Card>
          ))}
        </div>

        {area.recentWork && (
          <>
            <h2 className="text-3xl font-bold mt-12 mb-4">Recent work in {area.name}</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {area.recentWork.map((job) => (
                <li key={job}>{job}</li>
              ))}
            </ul>
            <Link to="/projects" className="inline-block mt-4 text-primary underline">See our projects</Link>
          </>
        )}

        <h2 className="text-3xl font-bold mt-12 mb-4">How we can help</h2>
        <p className="text-muted-foreground">
          Residential moving, commercial moving, office relocation, staging, furniture assembly and disposal services.
        </p>
        <Link to="/services" className="inline-block mt-4 text-primary underline">View all services</Link>

        <h2 className="text-3xl font-bold mt-12 mb-4">Nearby areas</h2>
        <ul className="flex flex-wrap gap-4">
          {area.nearby.map((nearbySlug) => {
            const nearby = getArea(nearbySlug);
            return nearby ? (
              <li key={nearby.slug}>
                <Link to={`/service-areas/${nearby.slug}`} className="text-primary underline">
                  Movers in {nearby.name}
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </section>
      <BackToTopButton />
    </div>
  );
};

export default AreaDetail;
