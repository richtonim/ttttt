import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  path?: string
  type?: string
}

const SITE = 'https://interiorpup.com'

export function SEO({
  title,
  description,
  path = '/',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('INTERIORPUP')
      ? title
      : `${title} | INTERIORPUP.AI`
    document.title = fullTitle

    const setMeta = (selector: string, content: string, attr = 'name') => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${selector}"]`,
      )
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, selector)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE}${path}`, 'property')
    setMeta('og:type', type, 'property')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${SITE}${path}`
  }, [title, description, path, type])

  return null
}
