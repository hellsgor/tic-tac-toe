import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";

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
        className={`antialiased ${chivoMono.variable} bg-asphalt h-dvh font-mono text-base text-white`}
      >
        <Header />
        <main className="flex h-full flex-col items-center justify-center gap-10">
          {children}
        </main>
      </body>
    </html>
  );
}
