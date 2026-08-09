import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  metadataBase: new URL(
    "https://cultureholdings.vercel.app"
  ),


  title:
    "Culture Holdings Ltd | Building Sustainable African Enterprises",


  description:
    "Culture Holdings Ltd is an African investment company developing sustainable enterprises across commercial agriculture, responsible mineral trading, construction, real estate and international trade.",



  keywords: [

    "Culture Holdings",

    "Culture Holdings Ltd",

    "African investment company",

    "Uganda investment company",

    "East Africa business",

    "Commercial agriculture Africa",

    "Responsible mineral trading",

    "Construction Africa",

    "Real estate development",

    "International trade",

    "Strategic partnerships",

    "Investment Africa",

  ],



  authors: [

    {
      name: "Culture Holdings Ltd",
    },

  ],



  creator:
    "Culture Holdings Ltd",



  publisher:
    "Culture Holdings Ltd",



  robots: {

    index: true,

    follow: true,

  },



  openGraph: {

    title:
      "Culture Holdings Ltd | Building African Enterprise",


    description:
      "Creating long-term value through sustainable investments, strategic partnerships and enterprise development across Africa.",


    url:
      "https://cultureholdings.vercel.app",


    siteName:
      "Culture Holdings Ltd",


    locale:
      "en_US",


    type:
      "website",


    images: [

      {

        url:
          "/og/culture-holdings-og.png",

        width:
          1200,

        height:
          630,

        alt:
          "Culture Holdings Ltd",

      },

    ],

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "Culture Holdings Ltd",


    description:
      "Building sustainable African enterprises through strategic investment and partnerships.",


    images:
      [
        "/og/culture-holdings-og.png"
      ],

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}

    >


      <body

        className="
        min-h-full
        flex
        flex-col
        bg-slate-950
        text-white
        "

      >

        {children}

      </body>


    </html>

  );

}