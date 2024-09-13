import React from 'react'
import Heading from '../components/heading'
import { CartList } from './_components/cartlist'
import { PriceBreak } from './_components/pricebreak'
import Coupon from './coupon'

const page = () => {
  return (
   <>
   <Heading color="bg-black" title="My Cart" subtitle="Manage yoyr Cart By Adding your same product"/>
    <div className='px-[5%] flex flex-1 gap-4 mt-5'>
        <div className='w-9/12'>
        <CartList/>


        </div>
        <div className='w-3/12'>
        <PriceBreak/>
        <Coupon/>

        
        </div>

    </div>
   </>
  )
}

export default page