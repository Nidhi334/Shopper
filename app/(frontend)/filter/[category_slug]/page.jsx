import React from 'react'
import { CategoryList } from '../../components/category-list'
import ProductSection from '../../components/product-section'
import Heading from '../../components/heading'

const page = ({params}) => {
  const {category_slug} = params;
  return (
    <div>
      <Heading color="bg-pink-500" title={`Your search term "${category_slug}"`} subtitle="Total 0 Category Found"/>
      <div className="flex flex-1 px-[10%] mt-2">
        <div className="w-3/12">
        <CategoryList/>
        </div>
        <div className="9/12">
        <ProductSection/>
        
        </div>
      </div>
    </div>
  )
}

export default page