import { ImageResponse } from 'next/og';

// Simplified for static export; synchronous generation, default runtime.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        Luis Raul Ariceaga · Portfolio
      </div>
    ),
    size,
  );
}
