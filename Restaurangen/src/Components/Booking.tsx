import { ChangeEvent, useContext, useEffect } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import DatePicker from "react-datepicker"
import "../calendar.css"
import { getBookings } from "../services/restaurantServices";
import { restaurantIdContext } from "../contexts/restaurantIdContext";

interface IBooking {
    id: string;
    restaurantId: string;
    date: string;
    time: string;
    numberOfGuests: number;
    customerId: string;
}


export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('18:00');
    const [guests, setGuests] = useState<string>('1');
    const [bookings, setBookings] = useState<IBooking[]>([]);
    const passedDates = (date: Date) => new Date() <= date;
    const [isAvaible, setIsAvailable] = useState<boolean | string>('');

    // hämta bokningar från databasen
    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    },[restaurantId]);

    // funktion som kollar om det finns tillräckligt många lediga bord för valt datum och tid
    const checkAviability = (time: string, date: Date, guests: string) => {
        const dateToCheck = date.toISOString().slice(0, 10);
        const guestsAmount = parseInt(guests);
        let tables = 1;

         //om antalet gäster är mindre än 6=1 bord, 12=2 bord
        if (guestsAmount > 6) {
            tables = 2;
        } else if (guestsAmount > 12) {
            tables = 3;
        }

        //Gör en array med andra bokningar för samma tid och datum tiden och datumet
        const filteredArray = bookings.filter(booking => booking.date === dateToCheck && booking.time === time);

        //om arrayen är kortare än antalet bord så finns det plats, annars inte
        setIsAvailable(tables < (15 - filteredArray.length) ? true : false);
    }


    return <>
        <div>
            <h2>När vill ni besöka oss?</h2>
            <div>
                <DatePicker 
                    filterDate={passedDates}
                    selected={date} 
                    onChange={(date: Date) => setDate(date)}
                    dateFormat="yyyy-MM-dd">
                </DatePicker>
                <select onChange={(e : ChangeEvent<HTMLSelectElement>) => setTime(e.target.value)}>
                    <option value="18:00">18:00</option>
                    <option value="21:00">21:00</option>
                </select>
            </div>
        </div>
        <div>
            <h2>Hur många är ni?</h2>
            <input 
                type="number" 
                min="1" 
                max="12" 
                onChange={(e : ChangeEvent<HTMLInputElement>) => setGuests(e.target.value)}>
            </input>
        </div>
        <button onClick={() => checkAviability(time, date, guests)}>Vidare till bokning</button>
        <p>{isAvaible === true ? 'Det finns bord' : isAvaible === false ? 'det finns inte bord' : isAvaible === '' ? '' : ''}</p>
    </>
}