import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iw7gamess.com"),
  title: {
    default: "IW7 Game – Download APK, Login, Register & Complete Guide 2026",
    template: "%s | IW7 Game",
  },
  description:
    "IW7 Game is a premium Android gaming platform with 500+ games. Download the latest IW7 APK, register your account, login securely, and explore exclusive rewards. The ultimate IW7 Gaming guide for 2026.",
  keywords: [
    "IW7 Game",
    "IW7",
    "IW7 APK",
    "IW7 App",
    "IW7 Game Download",
    "IW7 Game APK",
    "Download IW7",
    "IW7 Game Login",
    "IW7 Game Register",
    "IW7 Game Features",
    "IW7 Game 2026",
    "IW7 Android",
    "IW7 Gaming",
    "IW7 Download APK",
    "iw7game",
    "iw7gamess",
  ],
  authors: [{ name: "iw7gamess.com" }],
  creator: "iw7gamess.com",
  publisher: "iw7gamess.com",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iw7gamess.com",
    siteName: "IW7 Game",
    title: "IW7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "IW7 Game is a premium Android gaming platform. Download the latest IW7 APK, register, login, and explore features & exclusive rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IW7 Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IW7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "IW7 Game is a premium Android gaming platform. Download the latest IW7 APK, register, login, and explore features & exclusive rewards.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "tkGjSFwQ7d_fU5V8vLiKvdsjeNB_JmW2bsU_PVZr578",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://iw7gamess.com/#website",
      url: "https://iw7gamess.com",
      name: "IW7 Game",
      description:
        "IW7 Game is a premium Android gaming platform. Download APK, register, login, and explore features.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://iw7gamess.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://iw7gamess.com/#organization",
      name: "IW7 Game",
      url: "https://iw7gamess.com",
      logo: "https://iw7gamess.com/logo.webp",
      sameAs: [
        "https://www.facebook.com/iw7game",
        "https://t.me/iw7game"
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "IW7 Game",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "12547",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
