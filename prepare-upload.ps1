# ========================================
# Upload Preparation Script for cPanel
# ========================================
# This script builds your site and prepares it for upload

Write-Host "🚀 Building Dr. Karthik Manchala Website for cPanel..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the site
Write-Host "📦 Step 1: Building production site..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build complete!" -ForegroundColor Green
Write-Host ""

# Step 2: Create a zip file
Write-Host "📁 Step 2: Creating dist.zip for easy upload..." -ForegroundColor Yellow

if (Test-Path "dist.zip") {
    Remove-Item "dist.zip" -Force
}

Compress-Archive -Path "dist\*" -DestinationPath "dist.zip" -Force

Write-Host "✅ dist.zip created!" -ForegroundColor Green
Write-Host ""

# Step 3: Display instructions
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "✅ YOUR SITE IS READY FOR CPANEL UPLOAD!" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 WHAT TO UPLOAD:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Option 1 (Recommended): Upload dist.zip" -ForegroundColor White
Write-Host "  - Login to cPanel → File Manager" -ForegroundColor Gray
Write-Host "  - Go to public_html folder" -ForegroundColor Gray
Write-Host "  - Upload dist.zip" -ForegroundColor Gray
Write-Host "  - Right-click dist.zip → Extract" -ForegroundColor Gray
Write-Host "  - Delete dist.zip after extraction" -ForegroundColor Gray
Write-Host ""
Write-Host "  Option 2: Upload dist folder contents via FTP" -ForegroundColor White
Write-Host "  - Use FileZilla or any FTP client" -ForegroundColor Gray
Write-Host "  - Upload ALL files from dist folder to public_html" -ForegroundColor Gray
Write-Host ""

Write-Host "📂 Files ready in:" -ForegroundColor Yellow
Write-Host "  - dist\ folder (for FTP)" -ForegroundColor White
Write-Host "  - dist.zip (for cPanel File Manager)" -ForegroundColor White
Write-Host ""

Write-Host "📚 For detailed instructions, see:" -ForegroundColor Yellow
Write-Host "  CPANEL-DEPLOYMENT-GUIDE.md" -ForegroundColor White
Write-Host ""

Write-Host "🔍 Quick checks before upload:" -ForegroundColor Yellow
$distPath = "dist"
$requiredFiles = @(
    "index.html",
    "robots.txt",
    "sitemap-index.xml",
    ".htaccess"
)

foreach ($file in $requiredFiles) {
    $filePath = Join-Path $distPath $file
    if (Test-Path $filePath) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file (MISSING!)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Yellow
Write-Host "  1. Upload to cPanel public_html" -ForegroundColor White
Write-Host "  2. Set file permissions (644 for files, 755 for folders)" -ForegroundColor White
Write-Host "  3. Test your site at https://yourdomain.com" -ForegroundColor White
Write-Host "  4. Submit sitemap to Google Search Console" -ForegroundColor White
Write-Host ""
Write-Host "===========================================" -ForegroundColor Cyan
