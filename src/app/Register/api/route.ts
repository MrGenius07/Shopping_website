import { NextResponse } from "next/server";
import Data from "../data";
import connectDB from "@/lib/mongoose";

export async function POST(req: any){
    const {formData} = await req.json();

    try {
        await connectDB();
        await Data.create({
            fullName: formData.fullName, // Accessing fullName property from formData
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            gender: formData.gender,
            country: formData.country
        })
        return NextResponse.json({msg: ["Message Sent"]})
    }
    catch (error) {
        console.log(error);
    }
    console.log(formData);

    return NextResponse.json({msg: ["hi!"]})
}