import { Button } from "@/components/ui/button";
import { GOOGLE_MAPS_URL, HOMESTARS_PROFILE_URL } from "@/reviewLinks";

// The HomeStars button stays hidden until its profile address is filled in.
const links = [
  { label: "See us on Google", url: GOOGLE_MAPS_URL },
  { label: "See us on HomeStars", url: HOMESTARS_PROFILE_URL },
].filter((link) => link.url);

const ReviewLinks = () => (
  <section className="py-12 container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Find Our Reviews</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {links.map((link) => (
        <Button key={link.url} size="lg" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </Button>
      ))}
    </div>
  </section>
);

export default ReviewLinks;
