import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/model";
import { NextResponse } from "next/server";


export async function POST(request){
    const {username,email,password} = await request.json();
    console.log(username,email,password);
    await connectToDb();

    await User.create({username,email,password});
    return NextResponse.json({message:"Topic Created"}, {status:201});
}