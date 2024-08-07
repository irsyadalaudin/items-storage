/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'14.5': '58px',
				'15': '62px',
				'18': '67px',
				'90': '92.5vh',
				'176': '176px',
				'250': '250px',
				'363': '363px',
				'560': '570px',
				'900': '900px',
				'960': '68px',
				'1000': '1000px',
				'1290': '1290px',
				'1250': '1250px'
			},
			colors: {
				'navbar-color': '#18353B',
				'form-color': '#DE5623'
			},
			boxShadow: {
				'right-bottom-left': '5px 5px 10px -5px rgba(0, 0, 0, 0.3), -5px 0px 10px -5px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
}