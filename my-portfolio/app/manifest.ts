import type { MetadataRoute } from 'next';

// Mark as static for export mode
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My Portfolio - Luis Raul Ariceaga',
    short_name: 'Portfolio',
    description: 'Showcasing projects, blog and resume of Luis Raul Ariceaga',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
