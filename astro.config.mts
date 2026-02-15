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
        'https://drkarthikmanchala.com/',
        'https://drkarthikmanchala.com/about',
        'https://drkarthikmanchala.com/services',
        'https://drkarthikmanchala.com/contact',
        'https://drkarthikmanchala.com/knee-replacement-manikonda',
        'https://drkarthikmanchala.com/hip-replacement-manikonda',
        'https://drkarthikmanchala.com/arthroscopy-manikonda',
        'https://drkarthikmanchala.com/fracture-treatment-manikonda',
        'https://drkarthikmanchala.com/sports-injury-treatment-manikonda',
        'https://drkarthikmanchala.com/cases',
      ],
      
      // SEO enhancements
      serialize(item: any) {
        // Customize priority based on page importance
        if (item.url.endsWith('/')) {
          item.priority = 1.0; // Homepage
        } else if (
          item.url.includes('knee-replacement') ||
          item.url.includes('hip-replacement') ||
          item.url.includes('arthroscopy')
        ) {
          item.priority = 0.9; // High-priority service pages
        } else if (
          item.url.includes('services') ||
          item.url.includes('about') ||
          item.url.includes('contact')
        ) {
          item.priority = 0.8; // Important pages
        } else if (item.url.includes('cases')) {
          item.priority = 0.7; // Case studies
        } else {
          item.priority = 0.5; // Other pages
        }
        
        item.lastmod = new Date().toISOString();
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
  site: 'https://drkarthikmanchala.com/',
  output: 'static',
  
  // Performance & SEO optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  
  // Vite optimizations for faster builds and page loads
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
