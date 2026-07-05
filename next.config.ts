import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/iw7game", destination: "/iw7-game", permanent: true },
      { source: "/iw7gamess", destination: "/iw7-gaming", permanent: true },
      { source: "/iw7apk", destination: "/iw7-apk", permanent: true },
      { source: "/iw7gameapk", destination: "/iw7-game-apk", permanent: true },
      { source: "/iw7gameapkdownload", destination: "/iw7-game-apk-download", permanent: true },
      { source: "/iw7apkdownload", destination: "/iw7-apk-download", permanent: true },
    ];
  },
};

export default nextConfig;
