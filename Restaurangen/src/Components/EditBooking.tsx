import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import { IFetchedBooking, ICustomer, IBookingUpdate } from "../interfaces/interfaces";
import Datepicker from "./DatePicker";
import { H2centered } from "./style/Title";
import stringToDate from "../functions/stringToDate";
import { Input, Select } from "./style/Form";
import { ButtonGreen } from "./style/Buttons";
import { updateBooking } from "../services/restaurantServices";
import { format } from "date-fns";

interface IEditBookingProps {
  bookingId: string;
  bookings: IFetchedBooking[];
  setBookings: (bookings: IFetchedBooking[]) => void;
  customers: ICustomer[];
  setView: (view: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export default function EditBooking(props: IEditBookingProps) {

  const booking = props.bookings.find((booking) => booking._id === props.bookingId);
  const [time, setTime] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<string>('');

  let costumer: ICustomer | undefined = undefined;

  useEffect(() => {
    if(booking !== undefined) {
      setTime(booking.time);
      setBookingDate(stringToDate(booking.date));
      setNumberOfGuests(JSON.stringify(booking.numberOfGuests));
    }
  }, []);
  
  costumer = props.customers.find((customer) => customer._id === booking?.customerId);

  const update = async (e: FormEvent) => {
    e.preventDefault();
    if(booking !== undefined) {
      const bookingData: IBookingUpdate = {
      date: format(bookingDate, 'yyyy-MM-dd'),
      time: time,
      numberOfGuests: parseInt(numberOfGuests),
      customerId: booking.customerId,
      restaurantId: booking.restaurantId,
      id: booking._id
     }
     
    await updateBooking(bookingData);
    props.setView('1');
  }
}
  
  return (
    <div>
      <H2centered>Redigera {costumer === undefined ? '{name}' : costumer.name}s bokning</H2centered>
      <form onSubmit={(e: FormEvent) => update(e)}>
      <Datepicker date={bookingDate} setDate={setBookingDate}/>
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