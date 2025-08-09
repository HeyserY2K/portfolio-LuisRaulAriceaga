import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

/**
 * Configure fonts with custom variables for global use.
 */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Metadata for SEO and social sharing.
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
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
    images: ['/opengraph-image'],
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
    <html lang='es'>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <Header />
        <main className='container mx-auto p-6 sm:p-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
