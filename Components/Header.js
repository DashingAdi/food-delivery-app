import React from 'react'
import NavigationBar from './Navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between px-5 p-4'>
        <Avatar>
          <AvatarImage src="https://flowbite.com/docs/images/logo.svg" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
        <NavigationBar/>
      </div>
    </>
  )
}

export default Header