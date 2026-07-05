"use client";

import { trackCTAClick } from "@/lib/gtag";

export default function TrackedCTALink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  const CTA_LINK =
    "https://share-rxapq9cajg.iw7.io/web/share/index.html?ic=AD0C06E0&ts=1783239420&m=2&lang=en&id=1";

  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackCTAClick(location)}
    >
      {children}
    </a>
  );
}
