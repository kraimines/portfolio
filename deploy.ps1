# Clean up previous builds
if (Test-Path -Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path -Path "out") { Remove-Item -Recurse -Force "out" }
if (Test-Path -Path "docs") { Remove-Item -Recurse -Force "docs" }

# Build the project
Write-Host "Building the project..."
pnpm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

# Create .nojekyll file
New-Item -ItemType File -Path "docs\.nojekyll" -Force

# Add and commit changes
git add docs

git commit -m "Update GitHub Pages"

# Push changes
git push

Write-Host "Deployment completed successfully!" -ForegroundColor Green
