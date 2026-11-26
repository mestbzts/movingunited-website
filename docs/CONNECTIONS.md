# Connecting Instagram and reviews

Add secrets in Vercel: Project > Settings > Environment Variables (Production and Preview),
then redeploy. Never commit them to this repository.

## Instagram
1. Revoke the old token that was committed to this repository.
2. The account must be a professional (business or creator) account.
3. In the Meta developer dashboard, create a new long-lived access token.
4. Add it as `IG_ACCESS_TOKEN`.
5. The token lasts 60 days. Refresh it before then and update the variable.

## Google reviews
1. In Google Cloud, enable billing and "Places API (New)" and create an API key.
   Restrict the key to that API and set a daily quota and budget alert.
2. Add `GOOGLE_PLACES_API_KEY`. The Place ID is set in `api/google-reviews.js`;
   if Google rejects it, find the right one and add it as `GOOGLE_PLACE_ID`.
3. Google requires public Terms of Use and a Privacy Policy that cover its terms.

## Reviews widget
The Elfsight widget is in `src/components/ElfsightReviews.tsx`. Choose its review sources in the
Elfsight dashboard. If it shows Google reviews, the Google API setup above is not needed.

## HomeStars
The profile address is set in `src/reviewLinks.ts`.
