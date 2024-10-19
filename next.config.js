/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/developer-portfolio' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        type: 'asset/resource', // Use webpack's asset handling for fonts
      },
      {
        test: /\.txt$/,
        type: 'asset/source', // Treat text files as raw sources
      }
    );
    return config;
  },
};
