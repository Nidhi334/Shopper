import React from 'react'
import { ProductCalling } from './_components/productCalling';
import Link from 'next/link';
import DbConnect from '@/utils/dbconnect';
import Product from '@/models/Product';

const page = async() => {

    const products  = await Product.find({});
    DbConnect();
  return (
    <div>


<div className='flex flex-1 justify-between items-center mb-4'>
        <h2 className='text-2xl text-pink-700 font-semibold '>Manage Products</h2>

        < Link href='/admin/products/create'>
          <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>
            Add New Product
          </button>
        </Link>


      </div>
        <ProductCalling  data={products}/>

    </div>
  )
}

export default page