import type { NextConfig } from 'next';

// ── CONFIGURE THIS ──────────────────────────────────────────────
// If your site will live at https://<username>.github.io/<repo>/,
// set repoName to your repository name (case-sensitive).
const repoName = 'portfolio-LuisRaulAriceaga';
// Only add the subpath in PRODUCTION so dev runs at "/" without 404s
const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? `/${repoName}` : '';
// ────────────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Safer for static hosting: creates /route/index.html so /route works on Pages
  trailingSlash: true,

  // Disable Next's image optimizer (not available on GitHub Pages)
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

// Read basePath/assetPrefix from environment
  // - In dev (NEXT_PUBLIC_BASE_PATH="") => site runs at "/"
  // - In prod (NEXT_PUBLIC_BASE_PATH="/<repo>") => site runs under the repo subpath
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
