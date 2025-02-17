import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
  title: 'My Portfolio',
  description: 'Showcasing my projects, blog, and future store.',
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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <Header />
        <main className='container mx-auto p-6 sm:p-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
