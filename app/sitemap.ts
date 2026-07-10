import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://www.sealinkelectric.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/careers', '/contact']
  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
  }))
}
