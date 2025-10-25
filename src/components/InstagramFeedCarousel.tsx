import React, { useEffect, useState } from "react";

type IGPost = {
  id: string;
  caption?: string;
  media_url?: string;
  permalink?: string;
  media_type?: string;
};

const InstagramFeedCarousel: React.FC = () => {
  const token = import.meta.env.VITE_IG_TOKEN as string | undefined;
  const [posts, setPosts] = useState<IGPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError("Instagram token not configured.");
      return;
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${token}`;

    let mounted = true;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Instagram API error");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (data && Array.isArray(data.data)) {
          setPosts(data.data.slice(0, 9)); // show latest 9
        } else {
          setError("No posts found.");
        }
      })
      .catch((err) => {
        console.error("Instagram fetch error:", err);
        if (mounted) setError("Failed to load Instagram feed.");
      });

    return () => {
      mounted = false;
    };
  }, [token]);

  if (error) {
    return (
      <div className="text-center text-sm text-muted-foreground">
        {error}
      </div>
    );
  }

  if (!posts.length) {
    return <div className="text-center text-sm text-muted-foreground">Loading Instagram...</div>;
  }

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
          {p.media_type === "VIDEO" ? (
            // show poster image if available (media_url often points to a playable URL)
            <img
              src={p.media_url}
              alt={p.caption ?? "Instagram video"}
              className="w-full h-32 object-cover"
            />
          ) : (
            <img
              src={p.media_url}
              alt={p.caption ?? "Instagram image"}
              className="w-full h-32 object-cover"
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default InstagramFeedCarousel;

/*
Notes:
- This is a simple client-side fetch using the long-lived token you provided.
- For production, it's safer to proxy requests through a server (so the token isn't exposed to clients).
- Do NOT commit .env.local to your repository. Use server-side fetching for better security.
*/


