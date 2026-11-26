import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

type Review = {
  name: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text?: { text: string; languageCode?: string };
  originalText?: { languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
  flagContentUri?: string;
};

type Data = { rating?: number; count?: number; mapsUrl?: string; reviews: Review[] };

const external = { target: "_blank", rel: "noopener noreferrer" };

// Follows Google's display rules: attribution, author credit, link to each review and ordering notice.
const GoogleReviews = () => {
  const anchor = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // Each request is billed by Google, so load only when the visitor scrolls near.
    const element = anchor.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        fetch("/api/google-reviews")
          .then((res) => (res.ok ? res.json() : null))
          .then((body) => body?.reviews?.length && setData(body))
          .catch(() => {});
      },
      { rootMargin: "400px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={anchor} className="min-h-px">
      {data && (
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-3 text-center">Our Google Reviews</h2>
          {data.rating && (
            <p className="text-center text-lg mb-2">
              {data.rating.toFixed(1)} out of 5 from {data.count} reviews
            </p>
          )}
          <p className="text-center mb-8">
            <span translate="no" className="text-sm text-[#5E5E5E] dark:text-white" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>
              Google Maps
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.reviews.map((review) => (
              <Card key={review.name} className="p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {review.authorAttribution?.photoUri && (
                    <img src={review.authorAttribution.photoUri} alt="" referrerPolicy="no-referrer" className="h-10 w-10 rounded-full" />
                  )}
                  <div>
                    <a href={review.authorAttribution?.uri} {...external} className="font-semibold hover:underline">
                      {review.authorAttribution?.displayName}
                    </a>
                    <p className="text-sm text-muted-foreground">{review.relativePublishTimeDescription}</p>
                  </div>
                </div>
                <p className="mb-2" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
                <p className="text-muted-foreground mb-2">{review.text?.text}</p>
                {review.originalText?.languageCode !== review.text?.languageCode && (
                  <p className="text-xs text-muted-foreground mb-2">Translated by Google</p>
                )}
                <div className="mt-auto flex gap-4 text-sm">
                  {review.googleMapsUri && <a href={review.googleMapsUri} {...external} className="text-primary underline">View on Google Maps</a>}
                  {review.flagContentUri && <a href={review.flagContentUri} {...external} className="text-muted-foreground underline">Report</a>}
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Up to five reviews, ordered by relevance by Google. Reviews aren't verified by Google, but Google checks for and removes fake content when it's identified.
          </p>
          {data.mapsUrl && (
            <p className="text-center mt-4">
              <a href={data.mapsUrl} {...external} className="text-primary underline">See us on Google Maps</a>
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default GoogleReviews;
