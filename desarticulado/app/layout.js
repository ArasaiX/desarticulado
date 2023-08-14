import { HeaderCustom } from './components/HeaderCustom'
import { HeroCustom } from './components/HeroCustom'
import NavBarMenu from './components/NavBarMenu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desarticulado',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderCustom/> */}
        <NavBarMenu/>
        {children}
      </body>
    </html>
  )
}