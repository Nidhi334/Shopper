import Product from "@/models/Product";
import DbConnect from "@/utils/dbconnect";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){

    const productid = params.productid;

    const fields = await req.json();

    DbConnect();
    const updated = await Product.findByIdAndUpdate(productid,{...fields})

    return NextResponse.json({"msg":"product field update successfully"});
}