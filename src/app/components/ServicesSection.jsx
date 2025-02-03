import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
  const serviceConnection = dbConnect("test-services");
  const data = await serviceConnection.find({}).toArray();


  return (
    <div className="grid gap-8 my-12 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((card) => (
        <div key={card._id} className="w-[80%] mx-auto max-w-md">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <figure className="relative">
              <Image
                className="w-full h-56 object-cover"
                width={384}
                height={224}
                src={card.img}
                alt={card.title}
              />
            </figure>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {card.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-orange-500">
                  ${card.price}
                </span>
                <Link
                  href={`/services/${card?._id}`}
                  className="flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition"
                >
                  View Details <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
