import React from 'react'
import { ProductCard } from './product-card'

const ProductSection = () => {
  return (
    <div className='grid grid-cols-4 gap-5 md:grid-cols-4'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

    </div>
  )
}

export default ProductSection