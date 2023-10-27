"use client"

import React, { useState } from 'react'

const ShoppingCart = () => {
  const [items, setItems] = useState(0)

  const increment = () => {
    setItems(items + 1)
  }
  const decrement = () => {
    if (items-1 >= 0 ) {
      setItems(items - 1)
    }
  }

  return (
    <div>
      <div class="bg-gray-100 h-screen py-8 mt-4">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
              <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th class="text-left font-semibold">Product</th>
                      <th class="text-left font-semibold">Price</th>
                      <th class="text-left font-semibold">Quantity</th>
                      <th class="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-4">
                        <div class="flex items-center">
                          <img class="h-16 w-16 mr-4 rounded-md" src="https://falasteenifoodie.com/wp-content/uploads/2023/04/Strawberry-Cheesecake-Croissant.jpeg" alt="Product image"/>
                            <span class="font-semibold">Berry Croissant</span>
                        </div>
                      </td>
                      <td class="py-4">$19.99</td>
                      <td class="py-4">
                        <div class="flex items-center">
                          <button onClick={decrement} class="border rounded-md py-2 px-4 mr-2">-</button>
                          <span class="text-center w-8">{items}</span>
                          <button onClick={increment} class="border rounded-md py-2 px-4 ml-2">+</button>
                        </div>
                      </td>
                      <td class="py-4">$19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="md:w-1/4">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                <div class="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr class="my-2"/>
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">$21.98</span>
                  </div>
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart