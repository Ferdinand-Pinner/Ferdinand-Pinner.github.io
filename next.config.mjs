/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/ferdinand-pinner.github.io",
    assetPrefix: "/ferdinand-pinner.github.io",
    reactStrictMode: true,
    images: {
        unoptimized: true,
      },
  };

export default nextConfig;
