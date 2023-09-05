import { ChangeEvent, useContext, useEffect } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import DatePicker from "react-datepicker"
import "../calendar.css"
import { getBookings } from "../services/restaurantServices";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { checkAviability } from "../functions/checkAviability";
import { IFetchedBooking } from "../interfaces/interfaces";


export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('18:00');
    const [guests, setGuests] = useState<string>('1');
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
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

    const clickFunction = () => {
        setIsAvailable(checkAviability(time, date, guests, bookings))
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
        <button onClick={clickFunction}>Kontrollera tillgänglighet</button>
        <p>{isAvaible === true ? 'Det finns bord' : isAvaible === false ? 'det finns inte bord' : isAvaible === '' ? '' : ''}</p>
    </>
}