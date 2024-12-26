import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://burkhanoff.tech.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://burkhanoff.tech.vercel.app/titles',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://burkhanoff.tech.vercel.app/trending',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
    ];
}