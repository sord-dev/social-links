/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeholder.com", "i.postimg.cc", "i.ibb.co"],
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
