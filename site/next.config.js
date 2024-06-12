/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: "E Z Z O P 6",
    description: "Testing the Kasm Registry",
    icon: "/img/logo.svg",
    listUrl: "https://ezzop6.github.io/kasm-registry/",
    contactUrl: "https://prachsproste.eu",
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/kasm-registry/1.0",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
