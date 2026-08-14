import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://www.sealinkelectric.com'

const routes = [
  '',
  '/capabilities',
  '/capabilities/marine-propulsion',
  '/capabilities/engine-controls',
  '/capabilities/marine-electronics',
  '/capabilities/intelligent-propulsion',
  '/capabilities/autonomous-systems',
  '/capabilities/digital-engineering',
  '/technology',
  '/technology/physics-informed-ai',
  '/technology/hydrodynamics',
  '/technology/engine-modelling',
  '/technology/control-systems',
  '/technology/data-telemetry',
  '/afcos',
  '/projects',
  '/about',
  '/careers',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
  }))
}
