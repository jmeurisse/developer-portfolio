/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/developer-portfolio' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
  output: 'export', // Enables static export
};
