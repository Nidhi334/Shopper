import React from 'react'
import { CategoryForm } from './_components/categoryform'
import DbConnect from '@/utils/dbconnect'
import Category from '@/models/Category'
import { redirect } from 'next/navigation'

const page = () => {

  const handleInsertCategory = async (cat_title, cat_description) => {
    "use server"
    DbConnect();
    let data = await Category.create({cat_title,cat_description})

    redirect("/admin/category")
  }
  return (
    <div className='flex flex-1 justify-center'>
      <CategoryForm handleInsertCategory={handleInsertCategory} />
    </div>
  )
}

export default page