"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { trackCTAClick, trackNavClick } from "@/lib/gtag";

const CTA_LINK = "https://share.iw7game.com/share/agent/AAWWH944?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

const allRoutes = [
  "/", "/download", "/about", "/features", "/blog",
  "/blog/iw7-game-complete-guide",
  "/blog/iw7-apk-download-android",
  "/blog/iw7-game-register-login",
  "/iw7", "/iw7-game", "/iw7-gaming", "/iw7-gamers",
  "/iw7-apk", "/iw7-game-apk", "/iw7-apk-download",
  "/iw7-game-download", "/iw7-game-login", "/iw7-game-register",
  "/iw7-game-app", "/iw7-game-2026", "/iw7-game-android",
  "/iw7-app-download", "/iw7-login", "/iw7-register",
  "/download-iw7", "/iw7-game-online", "/iw7-game-play",
  "/iw7-game-bonus", "/iw7-game-install", "/iw7-game-free",
  "/iw7-game-latest-version", "/iw7-game-update",
  "/iw7-download", "/iw7-game-apk-download", "/iw7-game-rewards",
  "/iw7-game-apk-2026", "/iw7-game-features", "/iw7-game-guide",
  "/iw7-game-review", "/iw7-game-signup",
  "/privacy-policy", "/disclaimer",
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const mainTimer = setTimeout(() => {
      allRoutes.forEach((route, index) => {
        const routeTimer = setTimeout(() => {
          router.prefetch(route);
        }, index * 100);
        timers.push(routeTimer);
      });
    }, 5000);

    return () => {
      clearTimeout(mainTimer);
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm relative">
      <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 py-2 relative">
        <div className="flex items-center justify-between h-10">
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            onClick={() => trackCTAClick("header_logo")}
          >
            <Image
              src="/logo.webp"
              alt="IW7 Game Official Logo - Download IW7 APK"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              priority
            />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              IW7<span className="text-primary">Game</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                onClick={() => trackNavClick(link.name)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-cta !py-2.5 !px-5 !text-sm !rounded-lg"
              onClick={() => trackCTAClick("header_download_btn")}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
