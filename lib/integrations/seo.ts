// SEO & Meta Tags Optimization
import type { Metadata } from 'next';

export function generateMetadata(
  title: string,
  description: string,
  image?: string,
  url?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export function generateSchemaMarkup(type: string, data: Record<string, any>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  return JSON.stringify(schema);
}

export function generateOrganizationSchema() {
  return generateSchemaMarkup('Organization', {
    name: 'Jordan Hashemite Charity Organization',
    url: 'https://jhco.org.jo',
    logo: 'https://jhco.org.jo/logo.png',
    description: 'Leading humanitarian NGO providing aid across 30+ countries',
    sameAs: [
      'https://twitter.com/jhco',
      'https://facebook.com/jhco',
      'https://instagram.com/jhco',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+962-6-xxxx-xxxx',
      contactType: 'Customer Service',
    },
  });
}

export function generateProgramSchema(
  name: string,
  description: string,
  image: string
) {
  return generateSchemaMarkup('Program', {
    name,
    description,
    image,
    organization: {
      '@type': 'Organization',
      name: 'Jordan Hashemite Charity Organization',
    },
  });
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return generateSchemaMarkup('BreadcrumbList', {
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
