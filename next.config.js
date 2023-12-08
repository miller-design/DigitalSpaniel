/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		additionalData: `
      @use "sass:math";
      @import 'node_modules/include-media/dist/_include-media.scss';
      @import 'src/styles/base/config';
      @import 'src/styles/base/mixins';
      @import 'src/styles/base/type';
      @import 'src/styles/base/grid';
      @import 'src/styles/base/animations';
    `
	},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.mux.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
