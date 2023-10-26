import { Inter } from 'next/font/google'
import './globals.css'
import HydrationZustand from '@/Components/HydrationZustand'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foodie by Dev Dynamos',
  description: 'Offers features like real-time order tracking, table reservations, and restaurant reviews.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HydrationZustand>
          <div className=''>
            <Header/>
            {children}
            <Footer/>
            </div>
        </HydrationZustand>
      </body>
    </html>
  )
}
