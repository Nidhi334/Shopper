"use client"
import { Button, Input } from '@material-tailwind/react'
import React from 'react'

const Coupon = () => {
    return (
            <form className='flex gap-2 p-3 border w-full mt-4'>
                <Input type='text' placeholder='Enter couopn code' />
                <Button type='submit' className='bg-black text-white px-3 py-2'>Go</Button>
            </form>

    )
}

export default Coupon