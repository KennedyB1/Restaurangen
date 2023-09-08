import { useState, ChangeEvent } from "react";
import { IFetchedBooking, ICostumer, IBookingUpdate } from "../interfaces/interfaces";
import Datepicker from "./DatePicker";
import { H2centered } from "./style/Title";
import stringToDate from "../functions/stringToDate";
import { Input, Select } from "./style/Form";
import { ButtonGreen } from "./style/Buttons";
import { updateBooking } from "../services/restaurantServices";

interface IEditBookingProps {
  bookingId: string;
  bookings: IFetchedBooking[];
  costumers: ICostumer[];
  setView: (view: string) => void;
}

export default function EditBooking(props: IEditBookingProps) {
  const booking = props.bookings.find((booking) => booking._id === props.bookingId);
  const costumer = props.costumers.find((costumer) => costumer._id === booking?.customerId);
  const [time, setTime] = useState<string>('JSON.stringify(booking?.time)');
  const [date, setDate] = useState<Date>(stringToDate(booking.date));
  const [numberOfGuests, setNumberOfGuests] = useState<string>(JSON.stringify(booking?.numberOfGuests));
  console.log(costumer);
  console.log(booking)
  console.log(props.bookingId);

  const updateBooking = async () => {

    const bookingData: IBookingUpdate = {
      date: date.toISOString().slice(0, 10),
      time: time,
      numberOfGuests: parseInt(numberOfGuests),
      customerId: booking?.customerId,
      restaurantId: booking.restaurantId,
      _id: booking?._id
    }
    await updateBooking(bookingData);
    props.setView('1');
  }

  return (
    <div>
      <H2centered>Redigera {costumer?.name}s bokning</H2centered>
      <form onSubmit={updateBooking}>
      <Datepicker date={date} setDate={setDate}/>
      <Select onChange={(e : ChangeEvent<HTMLSelectElement>) => setTime(e.target.value)} required>
          <option value="18:00">18:00</option>
          <option value="21:00">21:00</option>
      </Select>
      <Input 
          type="number" 
          min="1" 
          max="24" 
          onChange={(e : ChangeEvent<HTMLInputElement>) => setNumberOfGuests(e.target.value)}
          required>
      </Input>
      <ButtonGreen type="submit">Uppdatera bokning</ButtonGreen>
      </form>
    </div>
  )
}