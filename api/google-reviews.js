// Server function: reads reviews from the Google Places API.
// Needs GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in Vercel.
// Google does not allow review content to be stored or cached, so responses are not cached.
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return res.status(200).json({ reviews: [] });

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
