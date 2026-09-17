import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";
import { COMPANY } from "@/data/company";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FF6B00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kenzengineering.com"),
  title: {
    default: "Kenz Engineering | Structural Steel Detailing & Engineering",
    template: "%s | Kenz Engineering",
  },
  description:
    "Kenz Engineering provides structural steel detailing, 3D modelling, fabrication drawings and engineering solutions for industrial, commercial and complex steel structures.",
  keywords: [
    "steel detailing company",
    "structural steel detailing",
    "steel detailing services",
    "structural steel detailing company",
    "steel fabrication drawings",
    "3D steel modelling",
    "structural steel engineering",
    "steel shop drawings",
    "PEB detailing services",
    "BIM steel detailing",
    "Tekla steel detailing",
  ],
  authors: [{ name: "Kenz Engineering" }],
  creator: "Kenz Engineering",
  publisher: "Kenz Engineering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenzengineering.com",
    siteName: "Kenz Engineering",
    title: "Kenz Engineering | Structural Steel Detailing & Engineering",
    description:
      "Precision structural steel detailing, 3D modelling, and fabrication documentation supporting steel fabricators, general contractors, and engineering teams worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineeringService",
    name: COMPANY.name,
    description: COMPANY.shortDescription,
    url: "https://kenzengineering.com",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.line1,
      addressLocality: COMPANY.address.city,
      addressCountry: COMPANY.address.country,
    },
    serviceType: [
      "Structural Steel Detailing",
      "3D Steel Modelling",
      "Shop & Fabrication Drawings",
      "Connection Detailing",
      "BIM / Revit Modelling",
      "PEB Design & Detailing",
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0F172A] font-sans antialiased selection:bg-[#FF6B00]/20 selection:text-[#EA580C]">
        <Header />
        <main className="flex-1 pt-[76px] sm:pt-[90px] lg:pt-[100px]">{children}</main>
        <MobileDock />
        <Footer />
      </body>
    </html>
  );
}
