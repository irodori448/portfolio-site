import path from "node:path";
import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  // Pins the workspace root explicitly. Without this, Turbopack walks up
  // looking for a lockfile and can land on an unrelated one in a parent
  // directory (e.g. the user's home folder), which it then ignores with a
  // warning — this avoids that ambiguity outright.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        // microCMS's media library serves images from this fixed host
        // regardless of your service domain — safe to allow up front even
        // before the service exists.
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default withBotId(nextConfig);
