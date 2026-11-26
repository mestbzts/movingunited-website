// Server function: the Instagram token stays on the server and is never sent to visitors.
// Needs the environment variable IG_ACCESS_TOKEN in Vercel.
export default async function handler(req, res) {
  const token = process.env.IG_ACCESS_TOKEN;
  res.setHeader("Cache-Control", "no-store");
  if (!token) return res.status(200).json({ posts: [] });

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
    limit: "9",
    access_token: token,
  });

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?${params}`);
    const body = await response.json();
    if (!response.ok) {
      // Log Instagram's message only, never the request URL (it contains the token).
      console.error("Instagram API error", response.status, body?.error?.message);
      return res.status(502).json({ posts: [] });
    }
    const posts = (body.data ?? [])
      .map((p) => ({
        id: p.id,
        caption: p.caption ?? "",
        image: p.media_type === "VIDEO" ? p.thumbnail_url : p.media_url,
        permalink: p.permalink,
      }))
      .filter((p) => p.image && p.permalink);
    // Let Vercel reuse the answer for 15 minutes.
    res.setHeader("Cache-Control", "public, s-maxage=900, stale-while-revalidate=3600");
    return res.status(200).json({ posts });
  } catch {
    console.error("Instagram request failed");
    return res.status(502).json({ posts: [] });
  }
}
