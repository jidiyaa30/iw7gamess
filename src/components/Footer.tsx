import Image from "next/image";
import Link from "next/link";
import TrackedCTALink from "./TrackedCTALink";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
  { name: "Complete Guide", href: "/blog/iw7-game-complete-guide" },
  { name: "APK Download Guide", href: "/blog/iw7-apk-download-android" },
  { name: "Register & Login", href: "/blog/iw7-game-register-login" },
];

const brandLinks = [
  { name: "IW7", href: "/iw7" },
  { name: "IW7 Game", href: "/iw7-game" },
  { name: "IW7 Gaming", href: "/iw7-gaming" },
  { name: "IW7 Gamers", href: "/iw7-gamers" },
  { name: "IW7 APK", href: "/iw7-apk" },
  { name: "IW7 Game APK", href: "/iw7-game-apk" },
  { name: "IW7 Game App", href: "/iw7-game-app" },
  { name: "IW7 Game Features", href: "/iw7-game-features" },
];

const apkLinks = [
  { name: "IW7 APK Download", href: "/iw7-apk-download" },
  { name: "IW7 Game Download", href: "/iw7-game-download" },
  { name: "IW7 App Download", href: "/iw7-app-download" },
  { name: "Download IW7", href: "/download-iw7" },
  { name: "IW7 Download", href: "/iw7-download" },
  { name: "IW7 Game APK Download", href: "/iw7-game-apk-download" },
  { name: "IW7 Game APK 2026", href: "/iw7-game-apk-2026" },
  { name: "IW7 Game Install", href: "/iw7-game-install" },
  { name: "IW7 Game Latest Version", href: "/iw7-game-latest-version" },
  { name: "IW7 Game Update", href: "/iw7-game-update" },
  { name: "IW7 Game Free", href: "/iw7-game-free" },
];

const moreLinks = [
  { name: "IW7 Game Login", href: "/iw7-game-login" },
  { name: "IW7 Login", href: "/iw7-login" },
  { name: "IW7 Game Register", href: "/iw7-game-register" },
  { name: "IW7 Register", href: "/iw7-register" },
  { name: "IW7 Game Signup", href: "/iw7-game-signup" },
  { name: "IW7 Game 2026", href: "/iw7-game-2026" },
  { name: "IW7 Game Android", href: "/iw7-game-android" },
  { name: "IW7 Game Online", href: "/iw7-game-online" },
  { name: "IW7 Game Play", href: "/iw7-game-play" },
  { name: "IW7 Game Bonus", href: "/iw7-game-bonus" },
  { name: "IW7 Game Rewards", href: "/iw7-game-rewards" },
  { name: "IW7 Game Guide", href: "/iw7-game-guide" },
  { name: "IW7 Game Review", href: "/iw7-game-review" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* CTA Banner */}
      <div className="hero-gradient footer">
        <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Start Your IW7 Gaming Journey Today
          </h3>
          <p className="text-red-100 mb-6 mx-auto">
            Download the IW7 Game APK now and unlock 500+ premium games, daily rewards, and exclusive bonuses on your Android device.
          </p>
          <TrackedCTALink
            location="footer_cta_banner"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download IW7 APK Free
          </TrackedCTALink>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <TrackedCTALink location="footer_logo" className="flex items-center gap-2.5 mb-4 group">
              <Image src="/logo.webp" alt="IW7 Game Logo" width={36} height={36} className="w-9 h-9 rounded-lg shadow-md" />
              <span className="text-lg font-bold text-white tracking-tight">
                IW7<span className="text-red-400">Game</span>
              </span>
            </TrackedCTALink>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              IW7 Game is a next-generation mobile gaming platform built for Android. Enjoy a seamless experience with fast performance, secure accounts, and exciting daily rewards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">IW7 Game</h4>
            <ul className="space-y-2.5">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">APK Download</h4>
            <ul className="space-y-2.5">
              {apkLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">More</h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Notice:</strong> This website provides informational content about IW7 Game and is not affiliated with or operated by the official IW7 Game platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2026 iw7gamess.com | All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
