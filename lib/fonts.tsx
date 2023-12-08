import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

/*
  using next font to add our local font to the site
  disableing linter as next font doesnt allow backticks
  for the strings below
*/

// setting up local font below
const momentum = localFont({
	display: 'fallback',
	variable: '--font-Momentum',
	src: [
		{
			path: '../public/fonts/momentum/MonumentGrotesk-Medium.woff2',
			weight: '500'
		}
	]
})
// setting up a google font below
// define your variable fonts
const inter = Inter({
	display: 'fallback',
	variable: '--font-Inter',
	weight: ['400', '700'],
	subsets: ['latin']
})


export {momentum, inter}
