/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hsyntes.s3.us-east-2.amazonaws.com",
      "github.com",
      "camo.githubusercontent.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
