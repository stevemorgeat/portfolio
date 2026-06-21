/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100 % statique → déployable sur S3 + CloudFront comme aujourd'hui.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }, // pas d'optimiseur serveur en export statique
  pageExtensions: ['ts', 'tsx'], // le contenu est en MDX-données, pas en pages MDX
  // Cohabitation temporaire avec le legacy Vite (import.meta.env) : on ne type-check
  // pas tout le repo au build Next. À retirer une fois la migration terminée.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
