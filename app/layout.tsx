import './globals.scss'
import type { Metadata } from 'next'
import { openSans } from './../lib/fonts'
import { SiteHeader } from '@/components/SiteHeader/SiteHeader'
import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu'

export const metadata: Metadata = {
  title: 'Digital Spaniel - Brand, Development & Marketing Agency',
  description: 'creating brand experiences which are memorable and distinct.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const linksTestData = [
    {
      title: 'Services',
      url: '/',
      target: '',
    },
    {
      title: 'Work',
      url: '/#',
      target: '',
    },
    {
      title: 'About',
      url: '/#',
      target: '',
    },
    {
      title: 'Blog',
      url: '/#',
      target: '',
    },
    {
      title: 'Contact',
      url: '/#',
      target: '',
    },
  ]

  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <SiteHeader links={linksTestData}/>
        <BurgerMenu />
        {children}
      </body>
    </html>
  )
}
