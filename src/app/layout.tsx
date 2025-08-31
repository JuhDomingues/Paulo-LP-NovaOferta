import type { Metadata } from "next";
import { DM_Sans, Manrope, Sora } from "next/font/google";
import "./globals.css";

// Configuração de todas as fontes
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap", 
  weight: ["400", "700"],
  variable: "--font-dm-sans",
  preload: false,
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-sora",
  preload: false,
});

export const metadata: Metadata = {
  title: "Paulo André Collet - Implementação na prática",
  description: "Autoridade no Instagram",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
      </head>
      <body className={`${manrope.variable} ${dmSans.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}