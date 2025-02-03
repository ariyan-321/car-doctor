import { headers } from "next/headers";
import MyBookingsComp from "../components/tables/MyBookingsComp";

const fetchBookings = async () => {
  const fetchBookings = await fetch("http://localhost:3000/api/service", {
    headers: headers(),
  });
  const bookings = await fetchBookings.json();

  return bookings;
};

export default async function MyBookingsPage() {
  const data = await fetchBookings();

  console.log("bookings", data);
  return (
    <div>
      <MyBookingsComp data={data}></MyBookingsComp>
    </div>
  );
}
