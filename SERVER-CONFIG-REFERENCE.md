# Server Configuration for Enterprise SEO & Security
# Dr. Karthik Manchala Ortho Clinic
# 
# NOTE: This file is a REFERENCE for server configuration
# Implementation depends on your hosting provider:
# - Apache: Use .htaccess or httpd.conf
# - Nginx: Use nginx.conf
# - Cloudflare/CDN: Use dashboard settings
# - Vercel/Netlify: Use vercel.json or netlify.toml

---

## Apache (.htaccess) Configuration

```apache
# ===============================================
# REDIRECT TO HTTPS
# ===============================================
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ===============================================
# WWW TO NON-WWW (or vice versa)
# ===============================================
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# ===============================================
# SECURITY HEADERS
# ===============================================
<IfModule mod_headers.c>
    # HSTS - Force HTTPS for 1 year
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    
    # Prevent clickjacking
    Header always set X-Frame-Options "SAMEORIGIN"
    
    # XSS Protection
    Header always set X-XSS-Protection "1; mode=block"
    
    # Prevent MIME type sniffing
    Header always set X-Content-Type-Options "nosniff"
    
    # Referrer Policy
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Permissions Policy
    Header always set Permissions-Policy "geolocation=(self), microphone=(), camera=()"
    
    # Content Security Policy
    Header always set Content-Security-Policy "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.youtube.com;"
</IfModule>

# ===============================================
# COMPRESSION
# ===============================================
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json application/xml application/rss+xml
</IfModule>

# ===============================================
# BROWSER CACHING
# ===============================================
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Images
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
    
    # CSS and JavaScript
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    
    # Fonts
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/ttf "access plus 1 year"
    
    # HTML
    ExpiresByType text/html "access plus 1 hour"
    
    # XML/JSON
    ExpiresByType application/xml "access plus 1 hour"
    ExpiresByType application/json "access plus 1 hour"
</IfModule>

# ===============================================
# FILE ACCESS RESTRICTIONS
# ===============================================
<FilesMatch "\.(htaccess|htpasswd|ini|log|sh|sql|conf|bak)$">
    Order Allow,Deny
    Deny from all
</FilesMatch>

# ===============================================
# ERROR PAGES
# ===============================================
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# ===============================================
# FORCE TRAILING SLASH (Optional)
# ===============================================
# RewriteCond %{REQUEST_FILENAME} !-f
# RewriteRule ^(.*[^/])$ /$1/ [L,R=301]

# ===============================================
# REMOVE FILE EXTENSIONS (for clean URLs)
# ===============================================
# RewriteCond %{REQUEST_FILENAME}.html -f
# RewriteRule ^([^\.]+)$ $1.html [NC,L]

```

---

## Nginx Configuration

```nginx
# ===============================================
# REDIRECT TO HTTPS
# ===============================================
server {
    listen 80;
    server_name drkmortho.com www.drkmortho.com;
    return 301 https://drkmortho.com$request_uri;
}

# ===============================================
# MAIN SERVER BLOCK
# ===============================================
server {
    listen 443 ssl http2;
    server_name www.drkmortho.com;
    return 301 https://drkmortho.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name drkmortho.com;
    
    root /var/www/drkmortho/dist;
    index index.html;
    
    # SSL Configuration (use Let's Encrypt)
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # ===============================================
    # SECURITY HEADERS
    # ===============================================
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(self), microphone=(), camera=()" always;
    
    # ===============================================
    # GZIP COMPRESSION
    # ===============================================
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
    
    # ===============================================
    # CACHING
    # ===============================================
    location ~* \.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
    }
    
    location = /robots.txt {
        expires 1d;
        add_header Cache-Control "public";
    }
    
    location ~* sitemap.*\.xml$ {
        expires 1d;
        add_header Cache-Control "public";
    }
    
    # ===============================================
    # MAIN LOCATION
    # ===============================================
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
    
    # ===============================================
    # ERROR PAGES
    # ===============================================
    error_page 404 /404.html;
    error_page 500 502 503 504 /500.html;
    
    # ===============================================
    # SECURITY: DENY ACCESS TO HIDDEN FILES
    # ===============================================
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

---

## Vercel Configuration (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(self), microphone=(), camera=()"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "rewrites": []
}
```

---

## Netlify Configuration (netlify.toml)

```toml
# Netlify Configuration for SEO & Security

[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(self), microphone=(), camera=()"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

[[headers]]
  for = "/*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "https://www.drkmortho.com/*"
  to = "https://drkmortho.com/:splat"
  status = 301
  force = true

[[redirects]]
  from = "/home"
  to = "/"
  status = 301

# 404 redirect
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

---

## Cloudflare Page Rules

### Rule 1: Force HTTPS
- URL: `http://*drkmortho.com/*`
- Setting: Always Use HTTPS

### Rule 2: Cache Everything (Static Assets)
- URL: `*drkmortho.com/*.{jpg,jpeg,png,webp,gif,svg,css,js,woff,woff2}`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 1 month

### Rule 3: Cache Sitemap
- URL: `*drkmortho.com/*sitemap*.xml`
- Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 day
  - Browser Cache TTL: 1 day

### Cloudflare Settings Recommendations:
- **SSL/TLS:** Full (strict)
- **Always Use HTTPS:** On
- **Automatic HTTPS Rewrites:** On
- **TLS 1.3:** Enabled
- **HTTP/2:** Enabled
- **HTTP/3 (with QUIC):** Enabled
- **Brotli Compression:** Enabled
- **Auto Minify:** CSS, JavaScript, HTML
- **Rocket Loader:** Optional (test first)

---

## Important Notes

1. **Choose ONE configuration method** based on your hosting:
   - Apache hosting: Use .htaccess
   - Nginx hosting: Use nginx.conf
   - Vercel: Use vercel.json
   - Netlify: Use netlify.toml
   - Cloudflare: Use Page Rules + dashboard settings

2. **Test thoroughly** after implementing server configurations

3. **Backup** existing configurations before making changes

4. **SSL Certificate** must be installed for HTTPS

5. **Monitor** server logs for any errors after deployment

6. **Validate** security headers using:
   - https://securityheaders.com/
   - https://observatory.mozilla.org/

---

## Testing Checklist

After implementing server configuration:

- [ ] HTTPS redirects working
- [ ] WWW to non-WWW redirect working (or vice versa)
- [ ] Security headers present (check with securityheaders.com)
- [ ] GZIP compression active
- [ ] Browser caching working
- [ ] Static files loading correctly
- [ ] Error pages (404, 500) displaying properly
- [ ] Sitemap accessible at /sitemap-index.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Page load speed improved
- [ ] SSL certificate valid and not expired

---

## Performance Testing Tools

1. **GTmetrix** - https://gtmetrix.com/
2. **WebPageTest** - https://www.webpagetest.org/
3. **Google PageSpeed Insights** - https://pagespeed.web.dev/
4. **Pingdom** - https://tools.pingdom.com/
5. **Security Headers** - https://securityheaders.com/

---

**Last Updated:** February 14, 2026  
**Maintained By:** DevOps Team  
**Review Frequency:** Quarterly
