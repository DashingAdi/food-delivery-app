"use client"

import React, { use, useCallback, useContext, useDeferredValue, useEffect, useState } from 'react'
import Example from '@/Components/Delivery/ShoppingCart'


const Menu = (props) => {
  const [items, setItems] = useState(0)

  const increment = () => {
    setItems(items + 1)
  }
  const decrement = () => {
    setItems(items - 1)
  }

  return (
    <>
      <div class="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60 h-">
        <a href="#">
          <img class="rounded-t-lg h-52" src={props.src} alt="" />
        </a>
        <div class="p-5 ">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          </a>
          <p class="mb-3 font-normal text-xs text-gray-400 dark:text-gray-400">{props.description}</p>
          <div class="flex justify-between align-bottom ">
            <p class="text-lg font-semibold text-orange-500">{props.price}</p>
            <div class="flex">
              <button onClick={decrement} class="flex align-middle justify-center border rounded-md w-8">-</button>
                <span class="text-center w-8">{items}</span>
              <button onClick={increment} class="flex align-middle justify-center border rounded-md w-8">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu