import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontSize: {
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
			fontFamily:{
				codepro:'codepro',
				firacode: 'firacode',
			}
		},

	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
export default config
