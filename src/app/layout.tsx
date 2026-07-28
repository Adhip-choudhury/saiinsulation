import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sai Enterprises | Thermal Insulation, Acoustics & Civil Solutions",
  description:
    "ISO 9001:2008 Certified. 42+ years of expertise in thermal insulation, acoustic solutions, civil works, and AMC contracts across India.",
  keywords: [
    "thermal insulation",
    "acoustics",
    "civil works",
    "rockwool",
    "nitrile rubber",
    "PUF panels",
    "AMC contracts",
    "Sai Enterprises",
    "Aurangabad",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Sai Enterprises | Thermal Insulation, Acoustics & Civil Solutions",
    description:
      "ISO 9001:2008 Certified. 42+ years of expertise in thermal insulation, acoustic solutions, civil works, and AMC contracts across India.",
    type: "website",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Navbar />
        <div className="pt-[73px]">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
