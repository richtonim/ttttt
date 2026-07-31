import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  path?: string
  keywords?: string
}

const SITE = 'https://claimease.in'

export function SEO({ title, description, path = '/', keywords }: SEOProps) {
  const url = `${SITE}${path}`
  const fullTitle = title.includes('ClaimEase')
    ? title
    : `${title} | ClaimEase.AI`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
