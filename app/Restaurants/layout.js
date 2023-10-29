import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Best Restaurants in India',
  description: 'Order food online from one of the best food restaurants in India',
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