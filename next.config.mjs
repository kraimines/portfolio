/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: 'export',
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Prevent concurrent static-export workers from racing on Windows.
  experimental: {
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 100,
  },
  
  // Disable React StrictMode for now to avoid potential issues
  reactStrictMode: false,
}

export default nextConfig
