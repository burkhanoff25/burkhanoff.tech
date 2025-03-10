import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/account/',
        },
        sitemap: 'https://burkhanoff.tech.vercel.app/sitemap.xml',
    };
}