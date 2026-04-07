import type { Metadata } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Von Rosen Consulting | Legacy & Visibility Strategy for Leaders 50+",
  description:
    "Strategic consulting, coaching, and speaking for executives, founders, and leaders 50+ who are building what comes next. LinkedIn strategy, AI workflows, and practical visibility infrastructure.",
  openGraph: {
    title: "Von Rosen Consulting",
    description:
      "You built the career. Now build the legacy. Strategic consulting and coaching for leaders 50+.",
    url: "https://vonrosenconsulting.com",
    siteName: "Von Rosen Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
