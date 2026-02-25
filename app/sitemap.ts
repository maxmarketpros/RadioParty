import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.radioprophets.com'

    const routes = [
        '',
        '/wedding-band',
        '/wedding-dj',
        '/dance-band-event-dj',
        '/live-dj',
        '/wedding-planning',
        '/events-band',
        '/gallery',
        '/videos',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
