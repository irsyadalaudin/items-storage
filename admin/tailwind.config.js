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
				'960': '68px',
				'560': '570px',
				'1000': '1000px',
				'1290': '1290px',
				'1250': '1250px'
			},
			colors: {
				'navbar-color': '#18353B',
				'form-color': '#DE5623'
			},
		},
	},
	plugins: [],
}