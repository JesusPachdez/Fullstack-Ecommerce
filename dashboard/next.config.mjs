import { withGluestackUI } from "@gluestack/ui-next-adapter";

// Suppress DefinePlugin warnings about conflicting process.env.DEV
// This must be done before any webpack plugins are initialized
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args.join(" ");
  // Suppress DefinePlugin warnings about process.env.DEV conflicts
  if (
    message.includes("Conflicting values for 'process.env.DEV'") ||
    (message.includes("DefinePlugin") && message.includes("process.env.DEV"))
  ) {
    return;
  }
  originalWarn.apply(console, args);
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    // Also configure webpack to ignore warnings as a backup
    const originalIgnoreWarnings = config.ignoreWarnings || [];
    config.ignoreWarnings = [
      ...(Array.isArray(originalIgnoreWarnings) ? originalIgnoreWarnings : []),
      (warning) => {
        if (warning.message && typeof warning.message === "string") {
          return warning.message.includes(
            "Conflicting values for 'process.env.DEV'"
          );
        }
        return false;
      },
    ];
    return config;
  },
};

// Wrap withGluestackUI and clean up invalid config options
const gluestackConfig = withGluestackUI(nextConfig);

// Clean up invalid config options that withGluestackUI might add
if (gluestackConfig.compiler) {
  // Remove invalid compiler options
  delete gluestackConfig.compiler.define;
  delete gluestackConfig.compiler.turbopack;
  if (Object.keys(gluestackConfig.compiler).length === 0) {
    delete gluestackConfig.compiler;
  }
}
// Remove any root-level 'turbopack' key if present
if (gluestackConfig.turbopack !== undefined) {
  delete gluestackConfig.turbopack;
}

export default gluestackConfig;
