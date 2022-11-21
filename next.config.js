/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['t-cf.bstatic.com', 'res.klook.com'],
    },
};

module.exports = nextConfig;
