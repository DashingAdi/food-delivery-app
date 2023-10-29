import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Sign In',
  description: 'Sign in to login to your foodie account.',
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