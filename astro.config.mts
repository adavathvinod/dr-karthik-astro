import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      // Enterprise-level sitemap configuration
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      
      // Custom priority and changefreq per page
      customPages: [
        'https://drkmortho.com/',
        'https://drkmortho.com/about',
        'https://drkmortho.com/services',
        'https://drkmortho.com/contact',
        'https://drkmortho.com/knee-replacement-manikonda',
        'https://drkmortho.com/hip-replacement-manikonda',
        'https://drkmortho.com/arthroscopy-manikonda',
        'https://drkmortho.com/fracture-treatment-manikonda',
        'https://drkmortho.com/sports-injury-treatment-manikonda',
        'https://drkmortho.com/cases',
      ],
      
      // SEO enhancements
      serialize(item) {
        // Customize priority based on page importance
        if (item.url.endsWith('/')) {
          item.priority = 1.0; // Homepage
          item.changefreq = 'daily';
        } else if (
          item.url.includes('knee-replacement') ||
          item.url.includes('hip-replacement') ||
          item.url.includes('arthroscopy')
        ) {
          item.priority = 0.9; // High-priority service pages
          item.changefreq = 'weekly';
        } else if (
          item.url.includes('services') ||
          item.url.includes('about') ||
          item.url.includes('contact')
        ) {
          item.priority = 0.8; // Important pages
          item.changefreq = 'weekly';
        } else if (item.url.includes('cases')) {
          item.priority = 0.7; // Case studies
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5; // Other pages
          item.changefreq = 'monthly';
        }
        
        item.lastmod = new Date();
        return item;
      },
      
      // Filter out any unwanted URLs
      filter: (page) => {
        // Exclude 404 and any test pages
        return !page.includes('/404');
      },
      
      // Generate multiple sitemaps if site grows
      entryLimit: 45000,
    }),
  ],
  site: 'https://drkmortho.com',
  output: 'static',
  
  // Additional SEO configurations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
