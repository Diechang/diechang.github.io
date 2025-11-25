/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Semantic colors using CSS variables
				bg: 'rgb(var(--color-bg) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				text: {
					main: 'rgb(var(--color-text-main) / <alpha-value>)',
					muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
				},
				primary: {
					DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
					// Optional: Keep specific shades if needed for gradients, but try to use semantic names
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},
				// Accent color for warm (light) / cool (dark) distinction
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
