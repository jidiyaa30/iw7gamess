import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "IW7 Game Download – Get the Full Platform on Android for Free",
  description: "Download IW7 Game for Android in under 2 minutes. Free, safe, and packed with 500+ premium games. Compare download options and find the best method for your device.",
  keywords: ["IW7 Game download", "IW7 Game download free", "IW7 Game download Android", "IW7 Game download 2026", "get IW7 Game"],
  openGraph: {
    title: "IW7 Game Download – Get the Full Platform on Android for Free",
    description: "Download IW7 Game for Android in under 2 minutes. Free, safe, 500+ games.",
    url: "https://iw7gamess.com/iw7-game-download",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IW7 Game Download" }],
  },
  twitter: { card: "summary_large_image", title: "IW7 Game Download – Free for Android", description: "Download IW7 Game and access 500+ premium games.", images: ["/og-image.png"] },
  alternates: { canonical: "https://iw7gamess.com/iw7-game-download" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://iw7gamess.com" },
    { "@type": "ListItem", position: 2, name: "IW7 Game Download", item: "https://iw7gamess.com/iw7-game-download" },
  ],
};

export default function IW7GameDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">IW7 Game Download</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IW7 Game Download</span> – Fast, Free & Secure
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to join hundreds of thousands of IW7 players? The IW7 Game download takes less than two minutes on any modern Android device. Here is everything you need to know before and after downloading.
          </p>
          <TrackedCTALink location="iw7_game_download_cta" className="btn-cta text-lg px-10 py-4">
            Download IW7 Game
          </TrackedCTALink>
        </div>
      </section>

      {/* Download Methods Comparison */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Download Methods Compared</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left font-semibold p-3">Method</th>
                  <th className="text-left font-semibold p-3">Speed</th>
                  <th className="text-left font-semibold p-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Direct APK Link (this page)</td><td>Fastest</td><td>All users — recommended</td></tr>
                <tr><td>QR Code Scan</td><td>Fast</td><td>Users switching from desktop to mobile</td></tr>
                <tr><td>Telegram Bot</td><td>Fast</td><td>Users who prefer Telegram for file sharing</td></tr>
                <tr><td>File Sharing Apps</td><td>Varies</td><td>Offline transfers between friends</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before You Download */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Before You Download IW7 Game</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Check Your Storage</h3>
              <p className="text-gray-600">
                The IW7 Game APK requires approximately 60 MB of free storage space. After installation, the app may use up to 150 MB as it caches game assets. Go to Settings &gt; Storage to verify you have enough room. If space is tight, consider clearing unused apps or media files first.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Verify Android Version</h3>
              <p className="text-gray-600">
                IW7 Game requires Android 5.0 (Lollipop) or higher. To check your version, go to Settings &gt; About Phone &gt; Android Version. If you are on Android 4.x or lower, you will need to update your OS or use a newer device to run IW7 Game.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Stable Internet Connection</h3>
              <p className="text-gray-600">
                While the download itself is small, a stable connection ensures the APK file downloads completely without corruption. Wi-Fi is recommended, but 4G/5G mobile data works fine. Avoid downloading while on a moving vehicle or in areas with weak signal.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="text-xl font-semibold mb-3 text-primary">Battery Level</h3>
              <p className="text-gray-600">
                Ensure your device has at least 20% battery before starting the download and installation process. While the process is quick, an unexpected shutdown during installation could result in a corrupted install that requires re-downloading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* After Download */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">After Downloading IW7 Game</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { title: "Create Your Account", desc: "Register with your phone number or email. Verification takes under 30 seconds via OTP." },
              { title: "Claim Your Welcome Bonus", desc: "New players receive a generous welcome package including bonus credits and free spins." },
              { title: "Explore the Game Library", desc: "Browse 500+ games across slots, live tables, sports, arcade, and more. Use filters to find your favorites." },
              { title: "Set Up Notifications", desc: "Enable push notifications to stay informed about new games, promotions, and tournament schedules." },
            ].map((item, i) => (
              <div key={i} className="card-static flex items-center gap-4 p-4">
                <div className="step-number flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="iw7_game_download_cta" className="btn-primary px-8 py-3">
              Download IW7 Game Now
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iw7-apk" className="btn-outline">IW7 APK</Link>
            <Link href="/iw7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/iw7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/iw7-game-register" className="btn-outline">Register</Link>
            <Link href="/iw7-game-login" className="btn-outline">Login</Link>
            <Link href="/iw7-game-free" className="btn-outline">Free Download</Link>
          </div>
        </div>
      </section>
    </>
  );
}
