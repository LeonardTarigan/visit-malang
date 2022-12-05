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
            'www.wildhareboca.com',
            'www.asliindonesia.net',
            'piknikwisata.com',
            'cdn.idntimes.com',
            'www.pantainesia.com',
        ],
    },
};

module.exports = nextConfig;
