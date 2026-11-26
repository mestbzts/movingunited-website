import { useEffect, useState } from "react";

type IGPost = { id: string; caption: string; image: string; permalink: string };

// Shows nothing if the feed is not set up or unavailable.
const InstagramFeedCarousel = () => {
  const [posts, setPosts] = useState<IGPost[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/instagram")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (mounted && Array.isArray(data?.posts)) setPosts(data.posts);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  if (!posts.length) return null;

  return (
    <div className="grid grid-cols-3 gap-3">
      {posts.map((p) => (
        <a
          key={p.id}
          href={p.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-md"
          aria-label={p.caption ? p.caption.slice(0, 100) : "Instagram post"}
        >
          <img
            src={p.image}
            alt={p.caption ? p.caption.slice(0, 100) : "Instagram post"}
            loading="lazy"
            className="w-full h-32 md:h-56 object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeedCarousel;
