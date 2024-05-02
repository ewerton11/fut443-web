import React from 'react'
import './globals.css'
import { AuthProvider } from './context/authContext'
import { IM_Fell_Great_Primer } from 'next/font/google'

const im_Fell_Great_Primer = IM_Fell_Great_Primer({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-im_fell',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={im_Fell_Great_Primer.variable}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
