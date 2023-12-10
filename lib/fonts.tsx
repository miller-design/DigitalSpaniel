// import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'

/*
  using next font to add our local font to the site
  disableing linter as next font doesnt allow backticks
  for the strings below
*/

// setting up local font below
// const momentum = localFont({
// 	display: 'fallback',
// 	variable: '--font-Momentum',
// 	src: [
// 		{
// 			path: '../public/fonts/momentum/MonumentGrotesk-Medium.woff2',
// 			weight: '500'
// 		}
// 	]
// })
// setting up a google font below
// define your variable fonts
const openSans = Open_Sans({
	display: 'fallback',
	variable: '--font-open-sans',
	weight: ['400', '600'],
	subsets: ['latin']
})


export { openSans }
