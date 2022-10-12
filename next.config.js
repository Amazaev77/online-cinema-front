/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		APP_SERVER_URL: process.env.NEXT_PUBLIC_APP_SERVER_URL,
		APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.NEXT_PUBLIC_APP_SERVER_URL}/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
