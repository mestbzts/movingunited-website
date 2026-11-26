import { Button } from "@/components/ui/button";
import { HOMESTARS_PROFILE_URL } from "@/reviewLinks";

// Hidden until the profile address is filled in.
const HomeStarsLink = () =>
  HOMESTARS_PROFILE_URL ? (
    <section className="py-12 container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Reviews on HomeStars</h2>
      <Button size="lg" asChild>
        <a href={HOMESTARS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          Read our HomeStars reviews
        </a>
      </Button>
    </section>
  ) : null;

export default HomeStarsLink;
