import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://aiflash.news';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO({ title, description, path = '', type = 'website', noindex = false }: SEOProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title.includes('AIFLASH') ? title : `${title} | AIFLASH.NEWS`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    setLink('canonical', url);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', 'AIFLASH.NEWS', true);
    setMeta('og:image', `${BASE_URL}/logo.png`, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', `${BASE_URL}/logo.png`);
  }, [fullTitle, description, url, type, noindex]);

  return null;
}
