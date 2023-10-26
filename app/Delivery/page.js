"use client"

import React from 'react'
import Menu from '@/Components/Menu'
import FoodBadge from '@/Components/Delivery/FoodBadge'
import ShoppingCart from '@/Components/Delivery/ShoppingCart'

const Delivery = () => {
  return (
    <>
        <div className='explore-sty'>
          <FoodBadge/>
            <div className='rests'>
                <Menu src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_49/1946793/ina-garten-smoked-salmon-croissants-2x1-zz-221207.jpg" price="$10.01" name="Smoke Tenderloin Slice Croissant" description="Plain croissant with smoke tenderloin beef sliced and vegetable"/>
                <Menu src="https://i1.wp.com/www.bakingwithdan.com/wp-content/uploads/2021/03/almondcroissant.2-scaled.jpg" price="$12.98" name="Almond Brown Sugar Croissant" description="Sweet croissant with topping almonds and brown sugar"/>
                <Menu src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/01/homemade-croissants-26-scaled.jpg" price="$9.67" name="Sweet Granulated Sugar Croissant" description="Sweet croissant extra sugar and filled stuffings"/>
                <Menu src="https://falasteenifoodie.com/wp-content/uploads/2023/04/Strawberry-Cheesecake-Croissant.jpeg" price="$8.92" name="Berry Whipped Cream Croissant" description="Sweet croissant with blueberries and stawberries inside"/>
                <Menu src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_49/1946793/ina-garten-smoked-salmon-croissants-2x1-zz-221207.jpg" price="$10.01" name="Smoke Tenderloin Slice Croissant" description="Plain croissant with smoke tenderloin beef sliced and vegetable"/>
                <Menu src="https://i1.wp.com/www.bakingwithdan.com/wp-content/uploads/2021/03/almondcroissant.2-scaled.jpg" price="$12.98" name="Almond Brown Sugar Croissant" description="Sweet croissant with topping almonds and brown sugar"/>
                <Menu src="https://lacuisinedegeraldine.fr/wp-content/uploads/2023/01/homemade-croissants-26-scaled.jpg" price="$9.67" name="Sweet Granulated Sugar Croissant" description="Sweet croissant extra sugar and filled stuffings"/>
                <Menu src="https://falasteenifoodie.com/wp-content/uploads/2023/04/Strawberry-Cheesecake-Croissant.jpeg" price="$8.92" name="Berry Whipped Cream Croissant" description="Sweet croissant with blueberries and stawberries inside"/>
            </div>
      </div>
    </>
  )
}

export default Delivery