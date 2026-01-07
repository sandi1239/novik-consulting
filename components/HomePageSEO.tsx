import React from 'react';
import SEO from './SEO';

const HomePageSEO: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novik Consulting',
    description: 'Aider les PME du Québec à récupérer les millions laissés sur la table en subventions et crédits d\'impôt.',
    url: 'https://novikconsulting.com',
    logo: 'https://novikconsulting.com/Logo/novik_cons_logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales'
    },
    sameAs: [
      'https://www.linkedin.com/company/scalewithteddy',
      'https://twitter.com/scalewithteddy'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Scale With Teddy',
    url: 'https://scalewithteddy.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://scalewithteddy.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://scalewithteddy.com'
      }
    ]
  };

  // Combine all schemas
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, breadcrumbSchema]
  };

  return (
    <SEO
      title="Subventions et Crédits d'Impôt PME Québec"
      description="Découvrez comment récupérer 50 000 $ à 200 000 $ en subventions gouvernementales. Analyse gratuite pour les PME du Québec."
      structuredData={structuredData}
    />
  );
};

export default HomePageSEO;
