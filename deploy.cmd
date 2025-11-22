@echo off

echo Cleaning up previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
if exist docs rmdir /s /q docs

echo Installing dependencies...
pnpm install

if errorlevel 1 (
    echo Failed to install dependencies. Exiting...
    exit /b 1
)

echo Building the project...
set NODE_ENV=production
npx next build

if errorlevel 1 (
    echo Build failed. Please check the error messages above.
    exit /b 1
)

echo Creating docs directory...
if not exist docs mkdir docs

if exist out (
    echo Copying files to docs directory...
    xcopy /E /I /Y out\* docs\
) else (
    echo No out directory found. Trying to copy from .next/static...
    if exist .next\static xcopy /E /I /Y .next\static\* docs\
)

echo Creating .nojekyll file...
echo. > docs\.nojekyll

echo Adding files to git...
git add docs

if errorlevel 1 (
    echo Failed to add files to git. Is this a git repository?
    exit /b 1
)

echo Committing changes...
git commit -m "Update GitHub Pages"

if errorlevel 1 (
    echo No changes to commit.
) else (
    echo Pushing changes to GitHub...
    git push
)

echo.
echo ============================================
echo Deployment completed!
echo Please check your GitHub repository settings:
echo 1. Go to Settings > Pages
echo 2. Set Source to 'Deploy from a branch'
echo 3. Select 'main' branch and '/docs' folder
echo 4. Click Save
echo.
echo Your site will be available at:
echo https://kraimines.github.io/portfolio
echo ============================================

pause
