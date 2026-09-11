import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vizagproperties.ai';

  const staticRoutes = [
    '',
    '/properties',
    '/properties/villas',
    '/properties/apartments',
    '/properties/plots',
    '/services',
    '/invest-in-vizag',
    '/about',
    '/contact',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.type === 'villa' ? 'villas' : property.type === 'apartment' ? 'apartments' : 'plots'}/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
