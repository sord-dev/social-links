/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.com",
      },
      {
        protocol: "https", 
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/social",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
