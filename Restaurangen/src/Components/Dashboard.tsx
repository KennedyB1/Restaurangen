import { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { getBookings } from "../services/restaurantServices";
import { ICostumer, IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { H2centered } from "./style/Title";
import Datepicker from "./DatePicker";
import { LightP } from "./style/P";
import { getCostumer } from "../services/restaurantServices";

export const Dashboard = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
    const [bookingDate, setBookingDate] = useState<Date>(new Date());
    const [foundBookings, setFoundBookings] = useState<IFetchedBooking[]>([]);
    const [costumers, setCostumers] = useState<ICostumer[]>([]);
    let costumersArr: ICostumer[] = [];
    
    // Use a single `useEffect` to fetch bookings and update `bookings` state.
    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    }, [restaurantId]);

    // Use a single `useEffect` to filter and update `foundBookings` state.
    useEffect(() => {
        const filteredBookings = bookings.filter((booking) => {
            return booking.date === bookingDate.toISOString().slice(0, 10);
        });

        setFoundBookings(filteredBookings);

        getCostumersArr();
        
    }, [bookingDate, bookings]); // Include `bookings` as a dependency here
    
    // loopa igenom foundbookings för att hitta alla kunders namn
    const getCostumersArr = async () => {
        costumersArr = await Promise.all(foundBookings.map(async (booking) => {
            const costumer = await getCostumer(booking.customerId);
            return costumer;
        }));
        console.log(costumersArr);
        setCostumers(costumersArr);
        console.log(costumers);
        }

        costumersArr.map((booking) => () => {
            console.log(booking.name)
        })


    return (
        <BookingSection>
            <BookingWrapper>
                <H2centered>Välj datum för att visa bokningar</H2centered>
                <Datepicker setDate={setBookingDate} date={bookingDate} />
                {
                costumers.map((booking) => (
                    <LightP key={booking.id}>{booking.name}</LightP>
                ))}
            </BookingWrapper>
        </BookingSection>
    );
};
