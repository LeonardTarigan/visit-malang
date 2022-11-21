/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            't-cf.bstatic.com',
            'res.klook.com',
            'asset.kompas.com',
            'assets.pikiran-rakyat.com',
            'encrypted-tbn0.gstatic.com',
        ],
    },
};

module.exports = nextConfig;
