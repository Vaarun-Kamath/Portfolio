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
				'profile-pic': "url('/public/Me.jpg')",
			},
			fontSize: {
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
			fontFamily:{
				codepro:'codepro',
				firacode: 'firacode',
			},
			width: {
				'25rem':'25rem',
				'30rem':'30rem',
				'40rem':'40rem',
				'45rem':'45rem',
				'50rem':'50rem',
				'55rem':'55rem',
				'hello':'60rem',
			},
			height: {
				'25rem':'25rem',
				'50rem':'50rem',
				'55rem':'55rem',
				'60rem':'60rem',
				'70rem':'70rem',
			},
			boxShadow:{
				'card': '0 0px 10px 1px rgba(0, 0, 0, 0.1)',
			},
		},

	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
export default config
