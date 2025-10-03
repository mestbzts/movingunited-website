import React, { useEffect, useMemo, useRef, useState } from "react";

type InstagramMediaItem = {
  id: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  media_type?: string;
};

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/movingunited.ca/";

const PAGE_SIZE = 12;

const InstagramFeedCarousel: React.FC = () => {
  const [items, setItems] = useState<InstagramMediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  const accessToken = import.meta.env.VITE_IG_ACCESS_TOKEN as string | undefined;

  useEffect(() => {
    let isCancelled = false;
    async function load() {
      setIsLoading(true);
      setError("");
      try {
        if (!accessToken) {
          // No token: show graceful fallback (no network call)
          setItems([]);
          return;
        }
        const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,thumbnail_url,caption,media_type&limit=${PAGE_SIZE}&access_token=${accessToken}`;
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`Instagram API error: ${resp.status}`);
        }
        const data = await resp.json();
        if (isCancelled) return;
        const parsed: InstagramMediaItem[] = Array.isArray(data.data) ? data.data : [];
        setItems(parsed.filter((it) => Boolean(it.media_url || it.thumbnail_url)));
      } catch (e: any) {
        if (isCancelled) return;
        setError(e?.message || "Failed to load Instagram feed");
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }
    load();
    return () => {
      isCancelled = true;
    };
  }, [accessToken]);

  const displayItems = useMemo<InstagramMediaItem[]>(() => items.slice(0, PAGE_SIZE), [items]);

  const scrollByAmount = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const content = (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByAmount(-360)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border px-3 py-2 shadow hover:bg-background"
      >
        ‹
      </button>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pr-10 pl-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {displayItems.map((item) => {
          const src = item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url || item.thumbnail_url || "";
          return (
            <a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[320px] max-w-[320px] scroll-snap-align-start"
            >
              <div className="w-[320px] h-[320px] overflow-hidden rounded-xl border bg-card">
                {src ? (
                  <img src={src} alt={item.caption || "Instagram post"} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">No preview</div>
                )}
              </div>
            </a>
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByAmount(360)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 border px-3 py-2 shadow hover:bg-background"
      >
        ›
      </button>
    </div>
  );

  if (isLoading) {
    return (
      <div className="text-center text-sm text-muted-foreground">Loading Instagram…</div>
    );
  }

  if (error || !accessToken || displayItems.length === 0) {
    return (
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          {accessToken
            ? "We couldn't load the Instagram feed right now."
            : "Connect your Instagram token to display your latest posts here."}
        </p>
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          Visit our Instagram profile
        </a>
      </div>
    );
  }

  return content;
};

export default InstagramFeedCarousel;


