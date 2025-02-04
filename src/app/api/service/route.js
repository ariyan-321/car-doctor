import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


// get route
export const GET = async (req) => {
  const session = await getServerSession(authOptions);

  if (session) {
    console.log(session);
    const email = session?.user?.email;
    const bookingCollection = dbConnect("test-booking");
    const result = await bookingCollection.find({ email }).toArray();

    return NextResponse.json(result);
  }

  return NextResponse.json({});
};

export const POST = async (req) => {
  const body = await req.json();
  const bookingCollection = dbConnect("test-booking");
  const result = await bookingCollection.insertOne(body);
  console.log(body);
  return NextResponse.json(result);
};
