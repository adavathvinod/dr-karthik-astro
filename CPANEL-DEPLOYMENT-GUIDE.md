# cPanel Deployment Guide
## Dr. Karthik Manchala - KM Ortho Clinic Website

---

## 📋 Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Production Site
```bash
npm run build
```

This creates a `dist` folder with all your static HTML files and assets.

### 3. Verify Build Output
Check that the `dist` folder contains:
- ✅ `index.html` and all page HTML files
- ✅ `_astro/` folder (CSS, JS, optimized assets)
- ✅ `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`
- ✅ `.htaccess` file
- ✅ All images and static assets

---

## 🚀 cPanel Upload Instructions

### Method 1: File Manager (Recommended for Small Sites)

1. **Login to cPanel**
   - URL: `https://yourdomain.com:2083` or `https://yourdomain.com/cpanel`
   - Enter your cPanel username and password

2. **Navigate to File Manager**
   - Go to: **Files** → **File Manager**
   - Navigate to `public_html` directory

3. **Clear Existing Files** (if any)
   - Select all files in `public_html`
   - Click **Delete** (backup first if needed)

4. **Upload Files**
   - Click **Upload** button
   - Select ALL files from your `dist` folder
   - Wait for upload to complete (progress bar will show)

5. **Extract Compressed Files** (if you uploaded a ZIP)
   - If you zipped the `dist` folder first:
   - Select the ZIP file in File Manager
   - Click **Extract**
   - Move all contents from extracted folder to `public_html` root

### Method 2: FTP/SFTP (Recommended for Large Sites)

1. **Get FTP Credentials from cPanel**
   - cPanel → **Files** → **FTP Accounts**
   - Or use your cPanel main account credentials

2. **Connect with FTP Client** (FileZilla recommended)
   - **Host**: `ftp.yourdomain.com` or your server IP
   - **Username**: Your cPanel username
   - **Password**: Your cPanel password
   - **Port**: 21 (FTP) or 22 (SFTP - more secure)

3. **Upload Files**
   - Navigate to `/public_html` on the remote server
   - Upload ALL contents from your local `dist` folder
   - DO NOT upload the `dist` folder itself, upload its contents

### Method 3: cPanel File Manager Direct Upload (Fastest)

1. **Compress the dist folder** on your computer
   ```bash
   # Windows PowerShell
   Compress-Archive -Path dist\* -DestinationPath dist.zip
   
   # Or manually: Right-click dist folder → Send to → Compressed folder
   ```

2. **Upload ZIP to cPanel**
   - cPanel → File Manager → `public_html`
   - Upload `dist.zip`
   - Right-click `dist.zip` → Extract
   - Delete `dist.zip` after extraction

---

## 📁 Required Files Structure in public_html

After upload, your `public_html` should look like this:

```
public_html/
├── index.html                    # Homepage
├── about.html                    # About page
├── services.html                 # Services page
├── contact.html                  # Contact page
├── cases.html                    # Cases page
├── knee-replacement-manikonda.html
├── hip-replacement-manikonda.html
├── arthroscopy-manikonda.html
├── fracture-treatment-manikonda.html
├── sports-injury-treatment-manikonda.html
├── 404.html                      # Custom 404 page
├── .htaccess                     # Apache configuration (IMPORTANT!)
├── robots.txt                    # Search engine directives
├── sitemap-index.xml            # Main sitemap
├── sitemap-0.xml                # Sitemap pages
├── humans.txt                   # Credits file
├── security.txt                 # Security contact
├── manifest.json                # PWA manifest
├── browserconfig.xml            # MS tile config
├── _astro/                      # Optimized assets folder
│   ├── *.css                    # Compiled stylesheets
│   ├── *.js                     # JavaScript bundles
│   └── *.webp, *.png, *.jpg    # Optimized images
└── [any other image files]      # Your original images
```

---

## ⚙️ Post-Upload Configuration

### 1. Set File Permissions

In cPanel File Manager, set these permissions (chmod):

| File/Folder | Permission | Numeric |
|-------------|-----------|---------|
| All HTML files | 644 | rw-r--r-- |
| All folders | 755 | rwxr-xr-x |
| .htaccess | 644 | rw-r--r-- |
| robots.txt | 644 | rw-r--r-- |
| All assets (.css, .js, images) | 644 | rw-r--r-- |

**To change permissions:**
- Select file/folder → Right-click → Change Permissions
- Or select and click **Permissions** in toolbar

### 2. Verify .htaccess is Working

Test URL redirection:
- Visit: `https://yourdomain.com/about.html`
- Should redirect to: `https://yourdomain.com/about` (clean URL)

If not working:
- Check if `.htaccess` exists in `public_html` root
- Verify Apache `mod_rewrite` is enabled (ask your host)

### 3. Test SSL/HTTPS

- Visit: `http://yourdomain.com`
- Should automatically redirect to: `https://yourdomain.com`

**If SSL not working:**
- cPanel → **Security** → **SSL/TLS Status**
- Click **Run AutoSSL** (free Let's Encrypt certificate)
- Or install SSL certificate manually

### 4. Configure Domain (if needed)

If using subdomain or addon domain:
- cPanel → **Domains** → **Addon Domains** or **Subdomains**
- Set document root to `public_html` or specific subfolder
- Update DNS if needed

---

## 🧪 Testing Checklist

After deployment, test these URLs:

### ✅ Page Accessibility
- [ ] `https://yourdomain.com/` - Homepage
- [ ] `https://yourdomain.com/about` - About page
- [ ] `https://yourdomain.com/services` - Services page
- [ ] `https://yourdomain.com/contact` - Contact page
- [ ] `https://yourdomain.com/cases` - Cases page
- [ ] `https://yourdomain.com/knee-replacement-manikonda`
- [ ] `https://yourdomain.com/hip-replacement-manikonda`
- [ ] `https://yourdomain.com/arthroscopy-manikonda`
- [ ] `https://yourdomain.com/fracture-treatment-manikonda`
- [ ] `https://yourdomain.com/sports-injury-treatment-manikonda`
- [ ] `https://yourdomain.com/404` - Custom 404 page

### ✅ SEO Files
- [ ] `https://yourdomain.com/robots.txt`
- [ ] `https://yourdomain.com/sitemap-index.xml`
- [ ] `https://yourdomain.com/humans.txt`
- [ ] `https://yourdomain.com/.well-known/security.txt`

### ✅ Redirects & Clean URLs
- [ ] HTTP → HTTPS redirect working
- [ ] www → non-www redirect working (or vice versa)
- [ ] .html extension removed from URLs
- [ ] `/about.html` redirects to `/about`

### ✅ Mobile Responsiveness
- [ ] Test on mobile device
- [ ] Check responsive design
- [ ] Verify touch targets (buttons)

### ✅ Performance
- [ ] Images loading properly
- [ ] CSS styles applied correctly
- [ ] JavaScript working (mobile menu, forms)
- [ ] Page load speed acceptable

### ✅ Forms & Interactions
- [ ] Contact form working
- [ ] WhatsApp link working
- [ ] Phone call link working
- [ ] Mobile menu working

---

## 🔍 SEO Post-Deployment Tasks

### 1. Submit to Google Search Console

```
1. Go to: https://search.google.com/search-console
2. Add property: yourdomain.com
3. Verify ownership (multiple methods available)
4. Submit sitemap: https://yourdomain.com/sitemap-index.xml
```

### 2. Submit to Bing Webmaster Tools

```
1. Go to: https://www.bing.com/webmasters
2. Add site: yourdomain.com
3. Verify ownership
4. Submit sitemap: https://yourdomain.com/sitemap-index.xml
```

### 3. Update Google My Business

- Ensure website URL is correct
- Add all service pages as additional URLs
- Update business information

### 4. Social Media Updates

- Update website link on all social profiles
- Share new website announcement
- Update bio/about sections

---

## 🐛 Troubleshooting Common Issues

### Issue: Pages show 404 errors

**Solution:**
- Check if HTML files exist in `public_html`
- Verify `.htaccess` file is present
- Check file permissions (should be 644)
- Contact host to enable `mod_rewrite`

### Issue: CSS/Images not loading

**Solution:**
- Check if `_astro` folder was uploaded
- Verify folder permissions (should be 755)
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors (F12)

### Issue: .htaccess not working

**Solution:**
- Rename `.htaccess` to `htaccess.txt` and back
- Check if hidden files are visible in File Manager
- Contact host to enable `.htaccess` overrides
- Verify `AllowOverride All` in Apache config

### Issue: SSL/HTTPS errors

**Solution:**
- Install SSL certificate through cPanel
- Use AutoSSL (free Let's Encrypt)
- Update all internal links to use HTTPS
- Check mixed content warnings in browser

### Issue: "Index of /" directory listing shows

**Solution:**
- Ensure `index.html` exists in root
- Check `.htaccess` has `Options -Indexes`
- Verify file name is exactly `index.html` (case-sensitive)

### Issue: Slow loading speed

**Solution:**
- Enable Gzip compression (already in `.htaccess`)
- Check if CloudFlare or CDN is configured
- Optimize images further (use WebP format)
- Enable browser caching (already in `.htaccess`)

---

## 🔄 Updating Your Site

When you make changes:

1. **Make changes to source code**
2. **Rebuild the site**
   ```bash
   npm run build
   ```
3. **Upload only changed files to cPanel**
   - Or upload entire `dist` folder again
4. **Clear browser cache** to see changes

**Tip**: Use FTP client with "sync" feature to upload only modified files.

---

## 📊 Performance Optimization (Optional)

### Enable CloudFlare (Recommended)

1. Sign up at: https://www.cloudflare.com
2. Add your domain
3. Update nameservers at your domain registrar
4. Enable:
   - Auto Minify (JS, CSS, HTML)
   - Brotli compression
   - Rocket Loader
   - Browser Cache TTL

### Enable cPanel Optimizations

- cPanel → **Optimize Website** → Enable compression
- cPanel → **Select PHP Version** → Use PHP 8.x (if needed)
- Enable OPcache if available

---

## 📞 Support Contacts

### Your Hosting Provider
- Check cPanel for support tickets
- Live chat (if available)
- Email support

### Common cPanel Hosts
- **Hostinger**: https://www.hostinger.com/cpanel-hosting
- **Bluehost**: https://www.bluehost.com
- **SiteGround**: https://www.siteground.com
- **GoDaddy**: https://www.godaddy.com

---

## ✅ Quick Upload Script (Windows)

Save this as `upload.ps1`:

```powershell
# Build the site
npm run build

# Zip the dist folder
Compress-Archive -Path dist\* -DestinationPath dist.zip -Force

Write-Host "✅ Build complete! dist.zip is ready to upload to cPanel"
Write-Host "📁 Upload dist.zip to public_html and extract it there"
```

Run it before each upload:
```bash
powershell -ExecutionPolicy Bypass -File upload.ps1
```

---

## 🎯 Final Notes

- **Always backup** your existing site before uploading
- **Test thoroughly** after deployment
- **Monitor** Google Search Console for errors
- **Update regularly** to maintain security
- **Keep source code** on your local machine and GitHub

---

**Need Help?** Contact your web developer or hosting provider's support team.

**Site URL**: https://yourdomain.com  
**Deployed**: [Date]  
**Version**: 1.0
