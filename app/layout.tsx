import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://culture-holdings.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Culture Holdings Ltd | Building African Enterprise",
    template: "%s | Culture Holdings Ltd",
  },

  description:
    "Culture Holdings Ltd is an African investment and enterprise development company creating long-term value through responsible investment, strategic partnerships and sustainable growth.",

  keywords: [
    "Culture Holdings",
    "Culture Holdings Ltd",
    "African investment company",
    "Uganda investment company",
    "African enterprise development",
    "commercial agriculture Uganda",
    "responsible mineral trading",
    "real estate investment Africa",
    "international trade Africa",
    "strategic investment Uganda",
  ],

  authors: [
    {
      name: "Culture Holdings Ltd",
    },
  ],

  creator: "Culture Holdings Ltd",
  publisher: "Culture Holdings Ltd",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Culture Holdings Ltd | Building African Enterprise",
    description:
      "Building African enterprise and creating long-term value through responsible investment, strategic partnerships and sustainable growth.",
    siteName: "Culture Holdings Ltd",
    locale: "en_US",
    images: [
      {
        url: "/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Culture Holdings Ltd - Building African Enterprise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Culture Holdings Ltd | Building African Enterprise",
    description:
      "Building African enterprise and creating long-term value through responsible investment, strategic partnerships and sustainable growth.",
    images: ["/hero/hero.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Culture Holdings Ltd",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "African investment and enterprise development company focused on responsible investment, strategic partnerships and sustainable growth.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Uganda",
    },
    {
      "@type": "Place",
      name: "East Africa",
    },
    {
      "@type": "Place",
      name: "Africa",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Culture Holdings Ltd",
  url: siteUrl,
  description:
    "Culture Holdings Ltd - Building African enterprise and creating long-term value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}