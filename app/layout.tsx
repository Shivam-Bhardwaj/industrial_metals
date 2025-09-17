import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { inter, playfair } from "./theme";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Industrial Metal Service",
    template: "%s | Industrial Metal Service"
  },
  description:
    "Industrial Metal Service provides Bay Area manufacturers with fast access to certified aluminum, stainless steel, and other nonferrous metals, along with expert saw cutting and recycling services.",
  metadataBase: new URL("https://industrial-metal-service.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
