// next.config.mjs est le fichier de configuration pour Next.js

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lottie.host",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "dam.malt.com",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "supabase.com",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "wxgxrdnloaoasynvuaqi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  productionBrowserSourceMaps: true,

  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://*.supabase.co
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://www.google.com
                https://www.gstatic.com
                https://vercel.live
                https://*.vercel.live
                https://*.github.com
                https://*.githubusercontent.com
                https://*.calendly.com
                https://assets.calendly.com
                https://cdn.jsdelivr.net
                https://unpkg.com
                https://*.lottiefiles.com
                https://lottie.host;
              style-src 'self' 'unsafe-inline'
                https://*.supabase.co
                https://www.gstatic.com
                https://fonts.googleapis.com
                https://*.github.com
                https://*.githubusercontent.com
                https://*.calendly.com
                https://assets.calendly.com;
              img-src 'self' data: blob:
                https://*.supabase.co
                https://www.google-analytics.com
                https://www.gstatic.com
                https://www.google.com
                https://*.github.com
                https://*.githubusercontent.com
                https://*.calendly.com
                https://assets.calendly.com;
              font-src 'self' data:
                https://*.supabase.co
                https://fonts.gstatic.com
                https://*.calendly.com;
              connect-src 'self'
                https://*.supabase.co
                https://www.google-analytics.com
                https://*.google-analytics.com
                https://*.google.com
                https://docs.google.com
                https://*.docs.google.com
                https://contacts.google.com
                https://*.contacts.google.com
                https://peoplestack-pa.clients6.google.com
                https://appsgenaiserver-pa.clients6.google.com
                https://appsgrowthpromo-pa.clients6.google.com
                https://api.iconify.design
                https://api.unisvg.com
                https://api.simplesvg.com
                https://*.calendly.com
                https://cdn.jsdelivr.net
                https://unpkg.com
                https://*.lottiefiles.com
                https://lottie.host;
              worker-src 'self' blob: 'unsafe-eval';
              child-src 'self' blob: 'unsafe-eval';
              script-src-elem 'self' 'unsafe-inline'
                https://cdn.jsdelivr.net
                https://unpkg.com
                https://*.lottiefiles.com
                https://lottie.host;
              frame-src 'self'
                https://*.supabase.co
                https://www.google.com
                https://*.google.com
                https://docs.google.com
                https://*.docs.google.com
                https://contacts.google.com
                https://*.contacts.google.com
                https://www.gstatic.com
                https://vercel.live
                https://*.vercel.live
                https://*.calendly.com
                https://calendly.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next-live/feedback/:path*",
        headers: [
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
