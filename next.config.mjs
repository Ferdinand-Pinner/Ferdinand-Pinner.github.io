/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/Ferdinand-Pinner.github.io",
    reactStrictMode: true,
    images: {
        unoptimized: true,
      },
  };

export default nextConfig;
