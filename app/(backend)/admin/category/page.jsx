import React from 'react'
import { CategoryCalling } from './create/_components/category-calling'
import Category from '@/models/Category'
import DbConnect from '@/utils/dbconnect'
import Link from 'next/link'

const page = async() => {
  DbConnect();
  const categories = await Category.find({});
  return (
    <div>
      <div className='flex flex-1 justify-between items-center mb-4'>
        <h2 className='text-2xl text-pink-700 font-semibold '>Manage Category</h2>

        < Link href='/admin/category/create'>
          <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>
            Add New Category
          </button>
        </Link>


      </div>
         <CategoryCalling data={categories}/>
    </div>
  )
}

export default page