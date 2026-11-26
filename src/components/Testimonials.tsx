import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: number;
};

const defaultSeed: Testimonial[] = [
  {
    id: "seed-4",
    name: "Martin Greystone",
    comment:
      "The lads did a great job and secured all my items. A very stressful moving day turned out to be very chill thanks to them. Nothing was damaged, and everything was put in its place. Thank you so much.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
];

export const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => carouselRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border px-3 py-2 shadow hover:bg-background"
          >
            ‹
          </button>
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {defaultSeed.map((t) => (
              <div key={t.id} className="min-w-[320px] max-w-[320px] scroll-snap-align-start">
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                      />)
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">“{t.comment}”</p>
                  <div className="font-semibold">- {t.name}</div>
                </Card>
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => carouselRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border px-3 py-2 shadow hover:bg-background"
          >
            ›
          </button>
        </div>
      </section>


    </div>
  );
};

export default Testimonials;


