import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Unordered selected items show up here',
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