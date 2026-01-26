import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SponsorModal from "@/components/layout/SponsorModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Marco Díaz - Board Game Catalog',
  description: 'Discover and explore unique board games from independent developers around the world.',
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
    shortcut: '/images/favicon.png',
  },
  openGraph: {
    title: 'Marco Díaz - Board Game Catalog',
    description: 'Discover and explore unique board games from independent developers around the world.',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
