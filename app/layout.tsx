import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Display face: Fraunces -- a warm, slightly editorial serif that keeps the
// brand feeling like a real learning institution rather than a generic SaaS
// product. Used sparingly, for headings only.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body face: Inter -- highly legible at small sizes, which matters for a
// platform aimed at students reading on phones.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Utility face: IBM Plex Mono -- used for small labels, stats, and the
// "stamped" kicker tags, evoking a grade-book / worksheet feel.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SEO_TITLE = "FreeEduCamp | Learn. Practice. Master.";
const SEO_DESCRIPTION =
  "Free educational resources, practice questions, daily challenges, and guided learning paths for secondary school students across Africa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://freeeducamp.org"),

  title: SEO_TITLE,
  description: SEO_DESCRIPTION,

  applicationName: "FreeEduCamp",

  keywords: [
    "FreeEduCamp",
    "education",
    "free learning",
    "online learning",
    "mathematics",
    "further mathematics",
    "physics",
    "chemistry",
    "biology",
    "english language",
    "WAEC",
    "NECO",
    "JAMB",
    "IGCSE",
    "secondary school",
    "African education",
    "practice questions",
    "study resources",
  ],

  authors: [
    {
      name: "Michael Adesina",
    },
  ],

  creator: "Michael Adesina",
  publisher: "FreeEduCamp",

  alternates: {
  canonical: "https://www.freeeducamp.org",
},


  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: "https://freeeducamp.org",
    siteName: "FreeEduCamp",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreeEduCamp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
