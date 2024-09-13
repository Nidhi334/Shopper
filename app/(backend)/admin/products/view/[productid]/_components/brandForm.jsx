"use client"
import { Button, Input, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export function BrandForm  ({ label, field, productid }) {

    const [isEdit, setIsEdit] = useState(false);
    const [brand, setBrand] = useState(field);

    const  router = useRouter();


    const handelUpdate = async () => {

        try{
            await fetch(`http://localhost:3000/api/product/${productid}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({brand}),
            })
        }
        catch(error){
            console.log(error)
        }
        setIsEdit(false);
        setBrand(field);
        router.refresh();

    }
    return (
        <form className="mt-8 mb-2 flex-1  bg-gray-300 px-5 py-3 rounded-xl">
            <div className="mb-1 flex flex-col gap-6">
                <div className='flex justify-between items-center border-b pb-2'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        {label}
                    </Typography>
                    <Button size='sm' onClick={() => setIsEdit(!isEdit)} >Edit</Button>
                </div>
                {
                    isEdit ? <div className='flex'>
                        <Input
                            size="lg"
                            value={brand}
                            onChange={(e)=> setBrand(e.target.value)}
                            className="rounded-none flex-1 bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Button className="rounded-none w-auto" onClick={handelUpdate}>
                            Go

                        </Button>
                    </div> : ((field) ?  <p className='text-xl'>{field}</p>: <p className='text-xl italic'>{label} in empty</p>)
                }

            </div>
        </form>

    )
}

export default BrandForm