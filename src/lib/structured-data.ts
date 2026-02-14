// Enterprise-level Structured Data (Schema.org) for Google Rich Results
// This enables Knowledge Graph, Rich Snippets, and enhanced search appearance

const BASE_URL = "https://drkmortho.com";

export interface StructuredDataConfig {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

// Main Organization Schema - For Knowledge Graph
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "Physician"],
  "@id": `${BASE_URL}/#organization`,
  name: "Dr. Karthik Manchala Ortho Clinic",
  alternateName: "KM Ortho Clinic",
  legalName: "Dr. Karthik Manchala Orthopaedic Clinic",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/logo.png`,
    width: "112",
    height: "112",
    caption: "Dr. Karthik Manchala Ortho Clinic"
  },
  image: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#image`,
    url: `${BASE_URL}/og-image.jpg`,
    width: "1200",
    height: "630",
    caption: "Dr. Karthik Manchala Orthopaedic Surgeon"
  },
  description: "Premier orthopaedic clinic in Hyderabad with 12+ years of expertise in joint replacement, arthroscopy, and sports injury treatment. Led by Dr. Karthik Manchala, MS Orthopaedics.",
  telephone: "+91-628-189-4631",
  email: "drkmortho@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puppalguda, Manikonda",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500089",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.395",
    longitude: "78.375"
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad"
    },
    {
      "@type": "State",
      name: "Telangana"
    },
    {
      "@type": "Country",
      name: "India"
    }
  ],
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Insurance",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00"
    }
  ],
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    name: "Dr. Karthik Manchala"
  },
  medicalSpecialty: [
    "Orthopedics",
    "Joint Replacement Surgery",
    "Arthroscopic Surgery",
    "Sports Medicine",
    "Trauma Surgery",
    "Fracture Management"
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Knee Replacement Surgery",
      description: "Total and partial knee replacement procedures"
    },
    {
      "@type": "MedicalProcedure",
      name: "Hip Replacement Surgery",
      description: "Total hip replacement and hip resurfacing"
    },
    {
      "@type": "MedicalProcedure",
      name: "Arthroscopy",
      description: "Minimally invasive joint surgery"
    },
    {
      "@type": "MedicalProcedure",
      name: "Sports Injury Treatment",
      description: "ACL reconstruction, meniscus repair, and sports medicine"
    },
    {
      "@type": "MedicalProcedure",
      name: "Fracture Treatment",
      description: "Comprehensive fracture management and trauma care"
    }
  ],
  sameAs: [
    "https://www.facebook.com/drkmortho",
    "https://www.instagram.com/drkmortho",
    "https://www.linkedin.com/in/dr-karthik-manchala",
    "https://twitter.com/drkmortho",
    "https://www.youtube.com/@drkmortho"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-628-189-4631",
      contactType: "customer service",
      email: "drkmortho@gmail.com",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN",
      contactOption: "TollFree"
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-628-189-4631",
      contactType: "emergency",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1"
  }
});

// Doctor/Person Schema - For Knowledge Panel
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  "@id": `${BASE_URL}/#founder`,
  name: "Dr. Karthik Manchala",
  honorificPrefix: "Dr.",
  givenName: "Karthik",
  familyName: "Manchala",
  jobTitle: "Orthopaedic, Joint Replacement & Arthroscopic Surgeon",
  description: "MS Orthopaedics with 12+ years of experience. Specialist in joint replacement, arthroscopy, and sports injury treatment. Trained at NIMS, Hyderabad.",
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/doctor-image.jpg`,
    caption: "Dr. Karthik Manchala"
  },
  url: BASE_URL,
  email: "drkmortho@gmail.com",
  telephone: "+91-628-189-4631",
  worksFor: {
    "@id": `${BASE_URL}/#organization`
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "NIMS (Nizam's Institute of Medical Sciences)",
      location: "Hyderabad, India"
    }
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MS Orthopaedics"
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "MBBS"
    }
  ],
  knowsAbout: [
    "Orthopedic Surgery",
    "Joint Replacement",
    "Arthroscopy",
    "Sports Medicine",
    "Trauma Surgery",
    "Fracture Management"
  ],
  memberOf: {
    "@type": "Organization",
    name: "Indian Orthopaedic Association"
  },
  award: "12+ Years of Excellence in Orthopaedic Care",
  sameAs: [
    "https://www.linkedin.com/in/dr-karthik-manchala",
    "https://twitter.com/drkmortho"
  ]
});

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Dr. Karthik Manchala Ortho Clinic",
  description: "Premier orthopaedic clinic in Hyderabad specializing in joint replacement, arthroscopy, and sports injury treatment",
  publisher: {
    "@id": `${BASE_URL}/#organization`
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/services?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`
  }))
});

// Service Schema
export const getServiceSchema = (config: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: config.name,
  description: config.description,
  url: `${BASE_URL}${config.url}`,
  provider: {
    "@id": `${BASE_URL}/#organization`
  },
  performer: {
    "@id": `${BASE_URL}/#founder`
  }
});

// Review Schema
export const getReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@id": `${BASE_URL}/#organization`
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5"
  },
  author: {
    "@type": "Person",
    name: "Patient Review"
  }
});

// FAQ Schema
export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// Article/Page Schema
export const getArticleSchema = (config: StructuredDataConfig) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: config.title,
  description: config.description,
  url: `${BASE_URL}${config.url}`,
  image: config.image || `${BASE_URL}/og-image.jpg`,
  datePublished: config.datePublished || new Date().toISOString(),
  dateModified: config.dateModified || new Date().toISOString(),
  author: {
    "@id": `${BASE_URL}/#founder`
  },
  publisher: {
    "@id": `${BASE_URL}/#organization`
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}${config.url}`
  }
});

// Local Business with enhanced features
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${BASE_URL}/#local-business`,
  name: "Dr. Karthik Manchala Ortho Clinic",
  image: `${BASE_URL}/clinic-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puppalguda, Manikonda",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500089",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.395",
    longitude: "78.375"
  },
  telephone: "+91-628-189-4631",
  url: BASE_URL,
  priceRange: "₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00"
    }
  ],
  hasMap: "https://maps.google.com/?q=Dr+Karthik+Manchala+Ortho+Clinic+Manikonda+Hyderabad"
});

// Complete Schema Bundle for Homepage
export const getCompleteHomeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getPersonSchema(),
    getWebsiteSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema([{ name: "Home", url: "/" }])
  ]
});

// Service Page Schema Bundle
export const getServicePageSchema = (serviceName: string, serviceUrl: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getPersonSchema(),
    getServiceSchema({
      name: serviceName,
      description: serviceDescription,
      url: serviceUrl
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: serviceName, url: serviceUrl }
    ])
  ]
});

// About Page Schema Bundle
export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getPersonSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" }
    ]),
    {
      "@type": "AboutPage",
      name: "About Dr. Karthik Manchala",
      description: "Learn about Dr. Karthik Manchala's expertise in orthopaedic surgery",
      url: `${BASE_URL}/about`,
      mainEntity: {
        "@id": `${BASE_URL}/#founder`
      }
    }
  ]
});

// Contact Page Schema Bundle
export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" }
    ]),
    {
      "@type": "ContactPage",
      name: "Contact Dr. Karthik Manchala",
      description: "Get in touch with Dr. Karthik Manchala Ortho Clinic",
      url: `${BASE_URL}/contact`
    }
  ]
});
