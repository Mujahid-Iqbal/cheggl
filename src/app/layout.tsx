import '../app/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'

export const metadata = {
  title: 'Cheggl',
  description: 'Homepage redesign using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-primaryText">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
