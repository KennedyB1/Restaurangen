import { IFetchedBooking, ICostumer } from "../interfaces/interfaces";

interface IEditBookingProps {
  bookingId: string;
  bookings: IFetchedBooking[];
  costumers: ICostumer[];
}

export default function EditBooking(props: IEditBookingProps) {
  const booking = props.bookings.find((booking) => booking._id === props.bookingId);
  const costumer = props.costumers.find((costumer) => costumer._id === booking?.customerId);
  console.log(costumer);
  console.log(booking)
  console.log(props.bookingId);
  return (
    <div>
      <h1>EditBooking</h1>
    </div>
  )
}