// app/api/products/route.ts
import { NextResponse } from "next/server";
import Product from "@/utils/Product"; // Assuming this is your product model
import dbConnect from "@/utils/dbConnect";

// GET method for retrieving products
export async function GET() {
  await dbConnect();
  try {
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
  }
}

// POST method for adding a new product
export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    console.log(body)
    const newProduct = await Product.create(body)
    console.log(newProduct)
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Error adding product" }, { status: 500 });
  }
}
