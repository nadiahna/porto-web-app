import './globals.css'
// import { Sacramento } from 'next/font/google'
import localFont from 'next/font/local'

// const sacramento = Sacramento({ subsets: ['latin'] })
const satoshi = localFont({
  src : [
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      size:'14px',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Satoshi-Black.otf',
      weight: '900',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '500',
    }

  ],
  variable: '--font-satoshi',
})

export const metadata = {
  title: 'Nadian.tech',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  )
}
