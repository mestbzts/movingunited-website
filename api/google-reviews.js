// Server function: reads reviews from the Google Places API.
// Needs GOOGLE_PLACES_API_KEY in Vercel. GOOGLE_PLACE_ID optionally replaces the ID below.
// Google does not allow review content to be stored or cached, so responses are not cached.
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const key = process.env.GOOGLE_PLACES_API_KEY;
  // Worked out from the business's Google Maps share link.
  const placeId = process.env.GOOGLE_PLACE_ID || "ChIJfeufLfJFfgURSgz610Dmgh4";
  if (!key) return res.status(200).json({ reviews: [] });

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
      }
    );
    const body = await response.json();
    if (!response.ok) {
      console.error("Google Places error", response.status, body?.error?.status);
      return res.status(502).json({ reviews: [] });
    }
    return res.status(200).json({
      rating: body.rating,
      count: body.userRatingCount,
      mapsUrl: body.googleMapsUri,
      reviews: body.reviews ?? [],
    });
  } catch {
    console.error("Google Places request failed");
    return res.status(502).json({ reviews: [] });
  }
}
