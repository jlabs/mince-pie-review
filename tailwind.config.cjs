/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr',
			},
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
				},
				brandblue: {
					400: '#94C6D3',
					600: '#066791'
				},
				brandyellow: {
					500: '#FFB600'
				},
				brandgrey: {
					500: '#1E1E1E'
				}
			}
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
