/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				mobile: '375px'
			},
			colors: {
				tomato: 'hsl(4, 100%, 67%)',
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: 'hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				gradientOrange: '#FE6150',
				gradientPink: '#FF5A68'
			},
			boxShadow: {
				buttonShadow: '0 10px 50px -10px #FE6150'
			}
		}
	},
	plugins: []
}
