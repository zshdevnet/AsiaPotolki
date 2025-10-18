import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = 'https://asiapotolki.com/og-image.jpg'
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | AsiaPotolki`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL if provided
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | AsiaPotolki`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${title} | AsiaPotolki`);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, canonicalUrl, ogImage]);
};

// SEO data for each page
export const seoData = {
  home: {
    title: 'Premium Interior Design & Architecture Services',
    description: 'Transform your space with AsiaPotolki\'s expert interior design and architecture services. Residential & commercial projects, modern designs, custom solutions across Asia.',
    keywords: 'interior design, architecture, residential design, commercial design, home renovation, space planning, modern design, luxury interiors',
    canonicalUrl: 'https://asiapotolki.com'
  },
  services: {
    title: 'Interior Design Services - Residential & Commercial',
    description: 'Explore our comprehensive interior design services including residential design, commercial spaces, renovations, space planning, and custom furniture solutions.',
    keywords: 'interior design services, residential interior design, commercial interior design, home renovation, space planning, custom furniture, architectural consultation',
    canonicalUrl: 'https://asiapotolki.com/services'
  },
  projects: {
    title: 'Interior Design Portfolio - Completed Projects',
    description: 'Browse our portfolio of stunning interior design projects including modern apartments, luxury homes, commercial offices, and innovative space transformations.',
    keywords: 'interior design portfolio, completed projects, modern apartments, luxury homes, commercial design, space transformation, design gallery',
    canonicalUrl: 'https://asiapotolki.com/projects'
  },
  quote: {
    title: 'Get a Quote - Contact AsiaPotolki Interior Design',
    description: 'Get a personalized quote for your interior design project. Contact AsiaPotolki today for expert consultation and transform your space with our professional design services.',
    keywords: 'interior design quote, contact interior designer, design consultation, project estimate, interior design services cost',
    canonicalUrl: 'https://asiapotolki.com/quote'
  }
};