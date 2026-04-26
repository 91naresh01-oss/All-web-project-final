import '../index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="gu">
      <body>{children}</body>
    </html>
  );
}