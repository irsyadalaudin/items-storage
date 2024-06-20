/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'90': '92.5vh'
			},
			colors: {
				'navbar-color': '#18353B',
				'form-color': '#DE5623'
			},
		},
	},
	plugins: [],
}