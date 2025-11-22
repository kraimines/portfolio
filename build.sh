#!/bin/bash

# Clean up previous builds
rm -rf .next out docs

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Please check the error messages above."
    exit 1
fi

# Create .nojekyll file
touch docs/.nojekyll

echo "Build completed successfully!"
echo "You can now deploy the 'docs' folder to GitHub Pages."
