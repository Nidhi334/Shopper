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

   
  export function CategoryForm({handleInsertCategory}) {
    DbConnect();
    
    const [cat_title, setCat_title] = useState("");
    const [cat_description, setCat_description] = useState("");
    return (
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create New Category
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill out this form to creata a new category.
        </Typography>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Category Title
            </Typography>
            <Input
              size="lg"
              value={cat_title}
              onChange={(e) => setCat_title(e.target.value)}
              placeholder="e.g shampoo, chair etc."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Category Description
            </Typography>
            <Textarea
            value={cat_description}
            onChange={(e) => setCat_description(e.target.value)} 
            placeholder="write Category Descriptionhere"/>
           
          <Button className="mt-6" onClick={() => handleInsertCategory(cat_title,cat_description)} fullWidth>
            Create Category
          </Button>
          </div>
         
        </div>
      </Card>
    );
  }