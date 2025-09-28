import { ImageResponse } from 'next/og';

// Use default (Node) runtime so it can be treated as static-compatible in export mode.
// Removed edge runtime & force-static directive to avoid export errors.

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
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
