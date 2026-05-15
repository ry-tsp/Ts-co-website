import type { Metadata } from "next";
import { IBM_Plex_Sans, Cormorant_Garamond, Courier_Prime } from "next/font/google";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "Thompson Street",
  description:
    "Thompson Street advises companies on frontier technology, regulatory policy, and financial systems.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Thompson Street",
    description:
      "Thompson Street advises companies on frontier technology, regulatory policy, and financial systems.",
    url: "https://thompsonstreet.co",
    siteName: "Thompson Street",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thompson Street",
    description:
      "Thompson Street advises companies on frontier technology, regulatory policy, and financial systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${cormorant.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="font-ibm text-ink bg-white">
        <div className="min-h-screen flex">
          <div className="hidden sm:block w-[160px] fixed top-0 left-0 h-screen overflow-hidden bg-[#f0ece5] z-10">
            <Image
              src="/pine-michaux.png"
              alt="Pinus Strobus botanical illustration"
              fill
              className="object-cover object-[14%_top]"
              sizes="160px"
              quality={100}
              priority
            />
          </div>
          <div className="hidden sm:block w-[160px] flex-shrink-0" />
          <div className="flex flex-col min-h-screen flex-1">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
