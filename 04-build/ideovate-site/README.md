# Ideovate website (Next.js, static export for Cloudflare Pages)

## Run locally
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to /out

## Deploy on Cloudflare Pages
1. Put this folder in a GitHub repository.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Build command: `npm run build`. Build output directory: `out`. Environment variable: NODE_VERSION = 20.
4. After the first deploy: Custom domains > add ideovate.ca (and www). If the domain's DNS is on Cloudflare this is automatic.
5. Keep your Zoho MX, SPF, DKIM and DMARC records; the website records do not affect them.

## What is built
Homepage with motion (Phase 4, first pass) and a /book holding page. Remaining pages follow the approved Phase 3 copy.
