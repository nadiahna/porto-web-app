/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // imageExtensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
}

module.exports = {
    nextConfig,
    images: {
        domains: ["localhost", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
      }

}
