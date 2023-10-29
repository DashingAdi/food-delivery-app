import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Checkout best food items from all across the country',
  description: 'Order food online from any part of the country at affordable prices',
}

export default function RootLayout({ children }) {
    return (
        <body>
            <div className=''>
              <Header/>
                {children}
              <Footer/>
            </div>
        </body>
    )
  }