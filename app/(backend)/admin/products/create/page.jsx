import React from 'react'
import { ProductsForm } from '../_components/productsform'
import DbConnect from '@/utils/dbconnect'
import slugify from 'slugify'
import { redirect } from 'next/navigation'
import Product from '@/models/Product'

const page = () => {

    const handleProdectCreate = async (name) => {
        "use server"
        DbConnect();

        let data = Product.create({ name, slug: slugify(name)});
        redirect("/admin/products");
    }
    return (
        <div className='flex flex-1 justify-center'>
            <ProductsForm handleProdectCreate={handleProdectCreate} />
        </div>
    )
}

export default page