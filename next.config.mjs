/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "havenflow.co.uk",
          },
        ],
        destination: "https://www.havenflow.co.uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
