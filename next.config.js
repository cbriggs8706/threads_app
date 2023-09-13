/** @type {import('next').NextConfig} */
const nextConfig = {
	typscript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ['mongoose'],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.clerk.com',
			},
			{
				protocol: 'https',
				hostname: 'images.clerk.dev',
			},
			{
				protocol: 'https',
				hostname: 'uploadthing.com',
			},

			// Had to add this one protocol to fix after having uploaded my own profile pic
			{
				protocol: 'https',
				hostname: 'utfs.io',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
}

module.exports = nextConfig
