import type { NextConfig } from 'next';

// ── CONFIGURE THIS ──────────────────────────────────────────────
// If your site will live at https://<username>.github.io/<repo>/
// set isProjectSite = true and set repoName accordingly.
const isProjectSite = true; // set to false ONLY if your repo is <username>.github.io
const repoName = 'portfolio-LuisRaulAriceaga'; // <-- put your repository name here (case-sensitive)
// ────────────────────────────────────────────────────────────────

const base = isProjectSite ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  // Required for GitHub Pages (static files only)
  output: 'export',

  // Safer for static hosting: writes /route/index.html so /route works on Pages
  trailingSlash: true,

  // Disable Next's image optimization server (not available on GitHub Pages)
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  // Make all asset and link URLs resolve from the repo subpath
  // (skip these if your repo is <username>.github.io)
  basePath: base || undefined,
  assetPrefix: base || undefined,

  // Your existing options (kept as-is)
  reactStrictMode: true,
  poweredByHeader: false,

  // NOTE: headers() is ignored on static export (no server on GitHub Pages).
  // You can leave it here; it just won’t be applied by Pages.
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
};

export default nextConfig;
