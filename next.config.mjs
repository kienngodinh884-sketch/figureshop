/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // cho phép tất cả domain
      },
      {
        protocol: "http",
        hostname: "**", // nếu ảnh dùng http
      },
    ],
  },
};

export default nextConfig;