/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Skip ESLint during builds
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'miro.medium.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
