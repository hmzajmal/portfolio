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

export const metadata: Metadata = {
  title: "Hamza Jamal · Product Designer",
  description:
    "Product designer scaling activation, retention, and product experience. Currently @ Imagine.art.",
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
