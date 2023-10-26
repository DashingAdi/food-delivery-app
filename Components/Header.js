import React from 'react'
import NavigationBar from './Navigation'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between px-10 p-4'>
        <div className='main-img'>
          <Link href='/'>  
            <img src="https://lh3.google.com/u/0/d/1CeJ2N-cd-YjqLFTJ-mJ1rEEAR03mTCqx=w1920-h991-iv1" alt="logo" />
          </Link>
        </div>
        <NavigationBar/>
      </div>
    </>
  )
}

export default Header