import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, { params }) => {
  const session = await getServerSession(authOptions);
  const p = await params;
  const bookingCollection = dbConnect("test-booking");
  const currentBooking = await bookingCollection.findOne({
    _id: new ObjectId(p.id),
  });

  const isOwner = session?.user?.email == currentBooking.email;

  if (isOwner) {
    const deleteResponse = await bookingCollection.deleteOne({
      _id: new ObjectId(p.id),
    });
    revalidatePath("/my-bookings")
    return NextResponse(deleteResponse);
  }
  return NextResponse.json({message:"forbidden action"});
};

export const GET = async (req, { params }) => {
  const p = await params;
  const serviceConnection = dbConnect("test-services");
  const data = await serviceConnection.findOne({
    _id: new ObjectId(p.id),
  });

  return NextResponse.json(data);
};
