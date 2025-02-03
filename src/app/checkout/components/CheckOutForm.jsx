"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function CheckOutForm({ details }) {
  const { data: session } = useSession();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const dueAmount = e.target.dueAmount.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const submitData={
        name:session?.user?.name,
        email:session?.user?.email,
        dueAmount:Number(details?.price),
        date,
        phone,
        address,
        service_id:details?._id,
        service_name:details?.title,
        service_img:details?.img,
        service_price:Number(details?.price),
    }
    console.log(submitData);
    
    const res=await fetch("http://localhost:3000/api/service",{
        method:"POST",
        body:JSON.stringify(submitData)
    })
    const postedResponse=await res.json();
    console.log("posted data:",postedResponse)
};

  return (
    <div>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-orange-400">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
          Checkout Form
        </h2>

        {details && (
          <div className="mb-4 p-4 bg-orange-50 border-l-4 border-orange-500">
            <p className="text-orange-700 font-semibold">
              {details.title || "Service Name"}
            </p>
            <p className="text-gray-600">
              {details.description || "No details available"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            readOnly
            defaultValue={session?.user?.name}
            placeholder="Full Name"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            readOnly
            defaultValue={session?.user?.email}
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="number"
            readOnly
            defaultValue={parseInt(details?.price)}
            name="dueAmount"
            placeholder="Due Amount"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="address"
            placeholder="Present Address"
            className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
