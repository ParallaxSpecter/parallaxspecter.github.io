import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Gestisce immagini in un sito statico
  },
};

export default nextConfig;
