import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

/**
 * Configure fonts with custom variables for global use.
 */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

/**
 * Metadata for SEO and social sharing.
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'My Portfolio - Luis Raul Ariceaga',
    template: '%s | Luis Raul Ariceaga',
  },
  description: 'Showcasing my projects, blog, and future store.',
  openGraph: {
    title: 'My Portfolio - Luis Raul Ariceaga',
    description: 'Showcasing my projects, blog, and future store.',
    url: '/',
    siteName: 'Luis Raul Ariceaga',
    // Use a static asset suitable for export (removed dynamic opengraph-image route)
    images: ['/portrait.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter',
    creator: '@your_twitter',
  },
};

/**
 * RootLayout Component
 *
 * Wraps the application with a consistent layout structure, including a header and footer.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The Root Layout component.
 */
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[var(--background)] text-[var(--text-primary)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
