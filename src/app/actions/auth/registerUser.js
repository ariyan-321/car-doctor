"use server";

import dbConnect from "@/lib/dbConnect";

export const resgisterUser = async (payload) => {
  //valudation
  const userCollection = await dbConnect("test-user");

  const{name,email,password}=payload;

  if(!email || !password){
    return {success:false}
  }


  const user =await  userCollection.findOne({ email: payload.email });

  if (!user) {
    const result = await userCollection.insertOne(payload);
    return result;
  }
  return {success:false};
};
