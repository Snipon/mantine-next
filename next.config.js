/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["loremflickr.com", "cloudflare-ipfs.com"],
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;
