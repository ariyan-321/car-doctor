"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

export default function MyBookingsComp({ data }) {
  const router=useRouter();
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE",
          });
          
          Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          router.refresh()
        } catch (error) {
          console.error("Error deleting:", error);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        My Bookings
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Amount Due</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((booking) => (
              <tr key={booking._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center">
                  <Image
                    width={100}
                    height={100}
                    src={booking.service_img}
                    alt={booking.service_name}
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  {booking.service_name}
                </td>
                <td className="px-4 py-2">
                  {new Date(booking.date).toDateString()}
                </td>
                <td className="px-4 py-2">${booking.dueAmount}</td>
                <td className="px-4 py-2">{booking.phone}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
