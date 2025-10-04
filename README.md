# Moving United Website

## Environment Variables

### Instagram Feed (Optional)
To display live Instagram posts in the carousel on the Home page, set the following environment variable:

```
VITE_IG_ACCESS_TOKEN=YOUR_USER_ACCESS_TOKEN
```

This token must be an Instagram Basic Display API User Access Token. The carousel gracefully falls back to a profile link if the token is not set or if the API call fails.

## Setup Instructions

1. Set the required environment variables in a `.env` file at the project root
2. Update and redeploy after setting the variables

## Features

- Responsive design with modern UI
- Instagram feed integration (optional)
- Functional contact form with email integration
- Testimonials carousel with localStorage persistence
- Social media integration (Facebook, Instagram)


