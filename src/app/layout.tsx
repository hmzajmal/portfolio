import type { Metadata } from "next";
import { Bricolage_Grotesque, Architects_Daughter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth"],
});

const architectsDaughter = Architects_Daughter({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://hamzajamal.design";
const siteTitle = "Hamza Jamal · Product Designer";
const siteDescription =
  "Product designer scaling activation, retention, and product experience. Currently @ Imagine.art.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Hamza Jamal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${architectsDaughter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
