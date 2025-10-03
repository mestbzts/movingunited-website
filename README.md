# Instagram Feed Setup

Optional: To display live Instagram posts in the carousel on the Home page, set the following environment variable in a `.env` file at the project root (or your hosting provider's env settings):

```
VITE_IG_ACCESS_TOKEN=YOUR_USER_ACCESS_TOKEN
```

This token must be an Instagram Basic Display API User Access Token. The carousel gracefully falls back to a profile link if the token is not set or if the API call fails.

Update and redeploy after setting the variable.


