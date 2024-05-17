import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Codeboost',
  description: 'Criação de um blog para o curso do Codeboost utilizando NextJS com a API do Prismic',
}

const atypBlText = localFont({
  src: [
    {
      path: './../fonts/AtypBLText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../fonts/AtypBLText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash-display',
  adjustFontFallback: false
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={atypBlText.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
