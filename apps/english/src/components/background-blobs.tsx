'use client';

// Static gradient background — replaces heavy animated blobs for better performance
export default function BackgroundBlobs() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdf4 50%, #fdf2f8 100%)',
      }}
    />
  );
}
