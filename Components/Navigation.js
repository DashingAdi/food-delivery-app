"use client"

import React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/Components/ui/navigation-menu"


const NavigationBar = () => {
  return (
    <>
      <div className=''>
        <NavigationMenu>
          <NavigationMenuList>
            <Link href='/'>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Link href='/Menu'>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Search</NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Link href='/Cart'>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Cart</NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
            <Link href='/Login'>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}

export default NavigationBar


