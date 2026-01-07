import { MetadataRoute } from 'next'
import { i18n } from '@/i18n/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buloqboshi-sanatorium.uz' // Replace with actual domain
  
  const routes = [''] // Add subpaths if site grows, e.g. '/about'

  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach(route => {
    i18n.locales.forEach(locale => {
       sitemap.push({
           url: `${baseUrl}/${locale}${route}`,
           lastModified: new Date(),
           changeFrequency: 'weekly',
           priority: 1,
       })
    })
  })

  return sitemap
}
