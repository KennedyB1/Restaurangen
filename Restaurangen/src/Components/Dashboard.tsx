import { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { getBookings } from "../services/restaurantServices";
import { IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { H2centered } from "./style/Title";
import Datepicker from "./DatePicker";


export const Dashboard = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
    const [bookingDate, setBookingDate] = useState<Date>(new Date());
    const [foundBookings, setFoundBookings] = useState<IFetchedBooking[]>([]);
    const [bookingHtml, setBookingHtml] = useState<JSX.Element[]>();

    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    },[restaurantId]);

    useEffect(() => {
        console.log('runs')
        setFoundBookings(bookings.filter((booking) => {
            return booking.date === bookingDate.toISOString().slice(0, 10)
        }))

        const html = foundBookings.map((booking) => {return <p key={booking.id}>{booking.id}</p>})
        console.log(html)
        setBookingHtml(html);
    }, [bookingDate])


    return  (     
    <BookingSection>
        <BookingWrapper>
            <H2centered>Välj datum för att visa bokningar</H2centered>
            <Datepicker setDate={setBookingDate} date={bookingDate}/>
            {bookingHtml}
            {/* {foundBookings.map((booking) => {return <p key={booking.id}>{booking.id}</p>})} */}
        </BookingWrapper>
    </BookingSection>
    )
}