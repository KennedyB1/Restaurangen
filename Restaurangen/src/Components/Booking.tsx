import { FormEvent, useContext, useEffect, useState } from "react";
import "../calendar.css"
import 'react-datepicker/dist/react-datepicker.css'
import { createBooking, getBookings } from "../services/restaurantServices";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { checkAviability } from "../functions/checkAviability";
import { IBooking, IFetchedBooking } from "../interfaces/interfaces";
import BookingForm from "./BookingForm";
import CheckAvaibility from "./CheckAvaibility";
import ConfirmationPage from "./ConfirmationPage";

export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('18:00');
    const [guests, setGuests] = useState<string>('1');
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
    const [isAvaible, setIsAvailable] = useState<boolean | string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [view, setView] = useState<number>(1);

    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    },[restaurantId]);

    useEffect(() => {
        if (isAvaible === true) {
            setView(2);
        } if(isAvaible === '') {
            setView(1);
        }
    }, [isAvaible]);

    const clickFunction = (e: FormEvent) => {
        e.preventDefault();
        setIsAvailable(checkAviability(time, date, guests, bookings));
    }

    const sendBooking = (e: FormEvent) => {
        e.preventDefault();
        const booking: IBooking = {
            'restaurantId': restaurantId,
            'date': date.toISOString().slice(0, 10),
            'time': time,
            'numberOfGuests': parseInt(guests),
                'customer': {
                'name': name,
                'lastname': lastName,
                'email': email,
                'phone': phoneNumber
             }
        }
        createBooking(booking);
        setView(3);
    }


    if(view === 1) {
    return (
        <CheckAvaibility 
        clickFunction={clickFunction}
        setDate={setDate}
        setTime={setTime}
        setGuests={setGuests}
        date={date}
        time={time}
        guests={guests}
        isAvaible={isAvaible}/>)
    } else if(view === 2) {
        return (
            <BookingForm 
            sendBooking={sendBooking}
            setPhoneNumber={setPhoneNumber}
            setName={setName}
            setLastName={setLastName}
            setEmail={setEmail}
            setIsAvaible={setIsAvailable}
            />
        )
    } else if(view === 3) {
        return (
        <ConfirmationPage
            name={name}
            date={date}
            time={time}
        />
        )
    }
}
