/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hsyntes.s3.us-east-2.amazonaws.com",
      "github.com",
      "camo.githubusercontent.com",
      "img.icons8.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
