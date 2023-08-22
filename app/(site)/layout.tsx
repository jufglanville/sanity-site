import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "add-your-open-graph-image-url-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="lg:max-w-7xl w-full mx-auto max-w-3xl md:px-16 px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
