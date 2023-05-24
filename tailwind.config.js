/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx,scss}', './index.html'],
	theme: {
		extend: {
			colors: {
				gray: '#242424',
				blue: '#3d3bff',
				'light-gray': '#f7f7f5',
				purple: '#C9C8FF',
				yellow: '#fff705',
				white: '#FFF',
				black: '#000',
				'light-red': '#febcb4',
			},
			fontSize: {
				xs: '.9rem',
				sm: '1rem',
				lg: '1.5rem',
				xl: '1.6rem',
				'2xl': '1.75rem',
				'3xl': '2.0rem',
				'4xl': '2.5rem',
				'5xl': '3.5rem',
				'6xl': '4.5rem',
				'7xl': '5.5rem',
			},
			borderRadius: {
				'layout-10': '0.7rem',
				'layout-20': '1.4rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			screens: {
				mobile: { max: '620px' },
				tablet: { max: '1060px' },
			},
		},
	},
	plugins: [],
}
