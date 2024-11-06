/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or '*' for any protocol
        hostname: "**", // Allows images from any hostname
      },
    ],
  },
};

export default nextConfig;
