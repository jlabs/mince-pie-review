/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mincepiebg: {
					500: '#1e1e1e'
				},
				pie: {
					400: '#f2ddbf',
					500: '#edd3b1',
					600: '#ddc29b'
				},
				foil: {
					500: '#B8B2A7'
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
