import './globals.scss'
import type { Metadata } from 'next'
import { momentum, inter } from './../lib/fonts'

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Boilerplate description field',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${momentum.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
