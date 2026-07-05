import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IW7 Game – Download APK, Register, Login & Play 500+ Games on Android 2026",
  description: "IW7 Game is the ultimate Android gaming platform with 500+ premium games. Download the latest IW7 APK for free, create your account in 60 seconds, and unlock daily rewards. Your complete IW7 Gaming guide for 2026.",
  keywords: ["IW7 Game", "IW7", "iw7game", "iw7gamess", "IW7 APK", "IW7 App", "IW7 Download", "IW7 Game Download", "IW7 Game APK", "IW7 Game Login", "IW7 Game Register", "IW7 Game Android", "IW7 Game 2026", "IW7 Gaming"],
  openGraph: {
    title: "IW7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to IW7 Game. Download the latest IW7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    url: "https://iw7gamess.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IW7 Game – Premium Android Gaming Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IW7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to IW7 Game. Download the latest IW7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://iw7gamess.com" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is IW7 Game and how does it work?", acceptedAnswer: { "@type": "Answer", text: "IW7 Game is a premium Android gaming platform offering 500+ games across categories like slots, live tables, sports, and arcade. Download the APK, create a free account, and start playing instantly." } },
    { "@type": "Question", name: "Is IW7 Game free to download and use?", acceptedAnswer: { "@type": "Answer", text: "Yes, the IW7 Game APK is completely free to download and install. Creating an account costs nothing, and new players receive a welcome bonus to get started." } },
    { "@type": "Question", name: "How do I create an IW7 Game account?", acceptedAnswer: { "@type": "Answer", text: "Open the IW7 app, tap Register, enter your mobile number or email, set a password, verify via OTP, and your account is ready in under 60 seconds." } },
    { "@type": "Question", name: "Is my personal information safe on IW7 Game?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. IW7 Game uses 256-bit SSL encryption, secure servers, and multi-factor authentication to protect all user data and transactions." } },
    { "@type": "Question", name: "What devices are compatible with IW7 Game?", acceptedAnswer: { "@type": "Answer", text: "IW7 Game runs on any Android device with Android 5.0 or higher, at least 2GB RAM, and 60MB of free storage." } },
    { "@type": "Question", name: "How do I login to IW7 Game?", acceptedAnswer: { "@type": "Answer", text: "Use your registered mobile number and password to login. IW7 Game also supports OTP-based login for quick access. If you forget your password, use the forgot password option to reset it." } },
    { "@type": "Question", name: "Can I withdraw my bonus money from IW7 Game?", acceptedAnswer: { "@type": "Answer", text: "Bonus usage depends on the app terms. Usually, bonus amounts must be wagered before withdrawal. Check the IW7 Game app for current bonus terms and withdrawal requirements." } },
    { "@type": "Question", name: "Is IW7 Game available on the Play Store?", acceptedAnswer: { "@type": "Answer", text: "Currently, IW7 Game is available via direct APK download from the official website. This allows faster updates and the full feature set without Play Store restrictions." } },
    { "@type": "Question", name: "What payment methods does IW7 Game support?", acceptedAnswer: { "@type": "Answer", text: "IW7 Game supports UPI (PhonePe, GPay, Paytm), Net Banking, and IMPS for both deposits and withdrawals. Transactions are fast, secure, and have no hidden charges." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePage />
    </>
  );
}
