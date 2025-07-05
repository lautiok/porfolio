import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Encoding",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  compress: true, 
};

export default withNextIntl(nextConfig);
