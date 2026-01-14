import { Play, Poppins } from 'next/font/google'
import Providers from '@/providers/Providers'
import './globals.css'

const play = Play({
  variable: '--font-play',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${play.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
