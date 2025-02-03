"use server"

import dbConnect from "@/lib/dbConnect";

export const loginUser=async(payload)=>{
    const{email,password}=payload;

    const userCollection=dbConnect("test-user")
    const user=await userCollection.findOne({email})
    if(!user){
        return null;
    }
    return user;
}