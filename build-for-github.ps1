# Set environment variable for production
$env:NODE_ENV = "production"

# Clean previous builds
if (Test-Path -Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path -Path "out") { Remove-Item -Recurse -Force "out" }
if (Test-Path -Path "docs") { Remove-Item -Recurse -Force "docs" }

# Build the project
Write-Host "Building for production with GitHub Pages paths..." -ForegroundColor Cyan
pnpm run build:next

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

# Copy build output to docs folder
Write-Host "Copying build output to docs folder..." -ForegroundColor Cyan
xcopy /E /I /Y out docs

# Create .nojekyll file
New-Item -ItemType File -Path "docs\.nojekyll" -Force | Out-Null

Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host "You can now commit and push the docs folder to GitHub." -ForegroundColor Yellow
