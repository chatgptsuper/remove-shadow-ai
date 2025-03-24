/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname:'res.cloudinary.com',
            port:'',
        }]
    },
    // 添加以下配置确保站点地图正确生成
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
