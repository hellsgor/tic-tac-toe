import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  description: `Let's play`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
