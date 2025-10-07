import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Testimonial = {
  id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: number;
};

const STORAGE_KEY = "mu_testimonials";

const defaultSeed: Testimonial[] = [
  {
    id: "seed-1",
    name: "Autokey Express",
    comment:
      "Moving United made our office relocation seamless. Their team was professional, efficient, and everything arrived safely.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
  },
  {
    id: "seed-2",
    name: "Ayberk Tuna",
    comment:
      "I was nervous about moving my art collection, but Moving United's specialists handled everything with incredible care.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 21,
  },
  {
    id: "seed-3",
    name: "Natasha Tolymbekova",
    comment:
      "The coordination for our multi-family move was flawless. Everyone moved in on schedule without any issues.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-4",
    name: "Martin Greystone",
    comment:
      "The lads did a great job and secured all my items. A very stressful moving day turned out to be very chill thanks to them. Nothing was damaged, and everything was put in its place. Thank you so much." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-5",
    name: "kim Maxwell",
    comment:
      "We ordered furniture for our office, and they handled everything from pickup to setup. Not a single scratch" ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-6",
    name: "Marshall Campbell",
    comment:
      "No job too heavy for these guys! They helped us get rid of large furniture that no one else wanted to touch." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-7",
    name: "Samantha Lee",
    comment:
      "Moving United's team was punctual, courteous, and efficient. They made our move stress-free and even helped with some last-minute changes." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-8",
    name: "David Kim",
    comment:
      "I highly recommend Moving United for any relocation needs. Their attention to detail and customer service is unmatched." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-9",
    name: "Emily Silverman",
    comment:
      "The team at Moving United went above and beyond to ensure our move was smooth. Reliable and responsive from start to finish. Great communication and top-quality service for our business move." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-10",
    name: "Michael Kumar",
    comment:
      "From start to finish, Moving United provided exceptional service. Their team was friendly, efficient, and made our move a breeze." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-11",
    name: "Najla Hejazi",
    comment:
      "We moved from a condo downtown to a house in the Newmarket, and they made it look effortless. Everything was wrapped, protected, and arrived in perfect condition." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-12",
    name: "Olivia Brown",
    comment:
      "The team at Moving United was fantastic! They were professional, efficient, and took great care of our belongings. They disassembled our large sectional, bed frames, and wardrobes quickly and put them back together perfectly in the new place. Everything was sturdy and aligned just like before. Highly recommend!" ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-13",
    name: "Said Benzia",
    comment:
      "We ordered furniture from Canapy furniture, and Moving United was extremely reliable delivery team. Communication was excellent, and they made sure everything arrived in perfect shape." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-14",
    name: "Angelo Carusso",
    comment:
      "We needed old commercial equipment removed, and they handled it safely and fast. They even cleaned up after themselves!" ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: "seed-15",
    name: "Linda Green",
    comment:
      "We work in real estate staging, and these movers are our go-to team. They understand how to handle delicate décor, large furniture, and tight spaces without a hitch." ,
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  

];

function loadTestimonials(): Testimonial[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSeed;
    const parsed = JSON.parse(raw) as Testimonial[];
    if (!Array.isArray(parsed)) return defaultSeed;
    return parsed;
  } catch {
    return defaultSeed;
  }
}

function saveTestimonials(items: Testimonial[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export const Testimonials: React.FC = () => {
  const { toast } = useToast();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTestimonials(loadTestimonials());
  }, []);

  useEffect(() => {
    saveTestimonials(testimonials);
  }, [testimonials]);

  const sorted = useMemo(() => {
    const copy = [...testimonials];
    // Order: highest rating first, then newest first
    copy.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.createdAt - a.createdAt;
    });
    return copy;
  }, [testimonials]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating < 1) {
      toast({
        title: "Please complete all fields",
        description: "Choose a star rating and write your comment.",
        variant: "destructive",
      });
      return;
    }
    const entry: Testimonial = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      comment: comment.trim(),
      rating,
      createdAt: Date.now(),
    };
    setTestimonials((prev) => [entry, ...prev]);
    setName("");
    setEmail("");
    setComment("");
    setRating(0);
    toast({
      title: "Thank you for your feedback!",
      description: "Your comment has been submitted and is now visible.",
    });
  };

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
            {sorted.slice(0, 15).map((t) => (
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

      <section className="max-w-3xl mx-auto">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-2">
                 {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    aria-label={`Rate ${star}`}
                    onClick={() => setRating(star)}
                    className="p-1"
                  >
                    <Star className={`h-6 w-6 cursor-pointer ${star <= rating ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Comment</label>
              <Textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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
      </section>
    </div>
  );
};

export default Testimonials;


