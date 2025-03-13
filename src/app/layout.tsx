import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chivoMono = localFont({
  src: [
    {
      path: "../../public/fonts/ChivoMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ChivoMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chivo-mono",
});

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: `Let's play`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${chivoMono.variable} bg-asphalt text-base text-white`}
      >
        {children}
      </body>
    </html>
  );
}
