/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
  images: {
    domains: [
      "placehold.co",
      "bkdelivery.co.id",
      "media-order.bkdelivery.co.id",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "bkdelivery.co.id",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "media-order.bkdelivery.co.id",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
