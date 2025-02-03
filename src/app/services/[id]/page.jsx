
import Link from "next/link";
import React from "react";

export default async function ServiceDetails({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const details=await res.json();

  if (!details) {
    return (
      <div className="text-center text-red-500 text-xl">Service Not Found</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={details.img}
        alt={details.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-3xl font-bold text-gray-800 mt-4">{details.title}</h2>
      <p className="text-xl text-gray-600 mt-2">Price: ${details.price}</p>
      <p className="text-gray-700 mt-4">{details.description}</p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Facilities</h3>
        <ul className="list-disc list-inside mt-2">
          {details.facility.map((item, index) => (
            <li key={index} className="text-gray-700 mt-1">
              <strong>{item.name}:</strong> {item.details}
            </li>
          ))}
        </ul>
        <Link href={`/checkout/${p.id}`} className="btn text-white bg-orange-500">Check Out</Link>
      </div>
    </div>
  );
}
