/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nightclub-api-dhqe.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
