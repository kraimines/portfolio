/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: 'export',
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable React StrictMode for now to avoid potential issues
  reactStrictMode: false,
}

export default nextConfig
