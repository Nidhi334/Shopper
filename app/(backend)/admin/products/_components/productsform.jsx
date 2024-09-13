"use client"

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
import { useState } from "react";
import DbConnect from "@/utils/dbconnect";

   
  export function ProductsForm({handleProdectCreate}) {
    
    const [name, setName] = useState("");
    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create New Product
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill out the name of products don't worry we can update
        </Typography>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Product Title
            </Typography>
            <Input
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g shampoo, chair etc."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           
           
          <Button className="mt-6" onClick={() => handleProdectCreate(name)} fullWidth>
            Create Product
          </Button>
          </div>
         
        </div>
      </Card>
    );
  }