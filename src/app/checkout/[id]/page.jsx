import React from "react";
import CheckOutForm from "../components/CheckOutForm";

export default async function checkOutPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const details = await res.json();

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 p-4">
      <CheckOutForm details={details}></CheckOutForm>
    </div>
  );
}
