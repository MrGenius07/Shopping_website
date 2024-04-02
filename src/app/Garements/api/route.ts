import { NextResponse } from "next/server";
import Data from "../data";
import connectDB from "@/lib/mongoose";

export async function POST(req: any){
    const { cart } = await req.json();

    try {
        await connectDB();
        
        // Loop through each item in the cart array
        for (const item of cart) {
            await Data.create({
                id: item.id,
                name: item.name,
                image: item.image
            });
        }

        return NextResponse.json({ msg: ["Message Sent"] });
    }
    catch (error) {
        console.log(error);
    }

    console.log(cart);
    return NextResponse.json({ msg: ["hi!"] });
}
