/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  }
};

export default nextConfig;
