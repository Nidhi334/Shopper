
import DbConnect from '@/utils/dbconnect';
import React from 'react'
import TitleForm from './_components/TitleForm';
import DescriptionForm from './_components/DescriptionForm';
import Product from '@/models/Product';
import PriceForm from './_components/priceForm';
import DiscountPriceForm from './_components/disprice';
import CategoryForm from './_components/categoryForm';
import Category from '@/models/Category';
import BrandForm from './_components/brandForm';
import StockForm from './_components/stockForm';
import { BarCodeForm } from './_components/barcodForm';
import ImageForm from './_components/imageForm';
import PublishButton from './_components/publish-button';

const page = async ({params}) => {
  const {productid} = params;
  DbConnect();
  const product = await Product.findById(productid).populate('category');
  const category = await Category.find({});

  const total_fields=["name",,"description","price","barcode","stock","image","brand","category"]
  const filledFields = total_fields.filter((field) => product[field]).length;
  const remainingFields = total_fields.filter((field) =>!product[field]);
  return (
    <div>
      <div className='w-full'>
        <div className='flex flex-1 flex-col'>
          <div className='flex flex-1 justify-between'>
        <h2 className='text-xl font-semibold'>Edit Product</h2>
        <PublishButton className={!remainingFields ?? "coursor-not-allowed"}/>
        </div>
        </div>
       <div  className='flex flex-1 gap-2'>

        <p>Total fields: {total_fields.length}</p>
        <p>filled field:{filledFields}</p>

       </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col  flex-1'>
          <TitleForm label="Product Title" field={product.name} productid={productid} />
          <DescriptionForm label="Product Description" field={product.description} productid={productid}/>
          <PriceForm label="Product Price" field={product.price} productid={productid}/>
          <DiscountPriceForm label="Product DiscountPrice" field={product.discount_price} productid={productid}/>
          <CategoryForm data={category} label="Product Category" field={product.category?.cat_title} productid={productid} cat_id={product.category?._id}/>
        </div>
        <div className='flex flex-col  flex-1'>
          <BrandForm label="Product Brand" field={product.brand} productid={productid}/>
          <StockForm label="Product Stock" field={product.stock} productid={productid}/>
          <BarCodeForm label="Product Barcode" field={product.barcode} productid={productid}/>
          <ImageForm label="Product Image" field={product.image} productid={productid}/>
        </div>
       
      </div>
    </div>
  
  )
}

export default page