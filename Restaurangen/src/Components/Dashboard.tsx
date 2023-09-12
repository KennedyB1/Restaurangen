import { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { deleteBooking, getBookings, getCustomer } from "../services/restaurantServices";
import { ICustomer, IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { H2centered } from "./style/Title";
import Datepicker from "./DatePicker";
import { DashboardWrapper } from "./style/Wrappers";
import ChangeBooking from "./ChangeBooking";
import EditBooking from "./EditBooking";
import LogoutButton from "./LogOutButton";

export const Dashboard = () => {
  const restaurantId = useContext(restaurantIdContext);
  const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [foundBookings, setFoundBookings] = useState<IFetchedBooking[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [view, setView] = useState<string>('1');
  const [bookingId, setBookingId] = useState<string>('');

  useEffect(() => {
        console.log('runs')
        fetchData();
    }, [restaurantId, view]);
    
    async function fetchData() {
      setIsLoading(true); 
      const bookingsData = await getBookings(restaurantId);
      setBookings(bookingsData);
      setIsLoading(false);
    }

  useEffect(() => {
    console.log('runs2')
    async function getCustomersArr() {
      const filteredBookings = bookings.filter((booking) => {
        return booking.date === bookingDate.toISOString().slice(0, 10);
      });

      setFoundBookings(filteredBookings)

      setIsLoading(true);
      const costumerPromises = filteredBookings.map(async (booking) => {
        const costumerArray = await getCustomer(booking.customerId);
        if (costumerArray.length > 0) {
        return costumerArray[0];
        }
        return
      });
      
      const customersData = await Promise.all(costumerPromises);
      setCustomers(customersData);
      setIsLoading(false);
    }

    getCustomersArr();
    }, [bookingDate, setBookingDate, bookings]);

    const removeBooking = async (id: string) => {
        await deleteBooking(id);
        setBookings(bookings.filter((booking) => booking._id !== id));
    }

    useEffect(() => {
        console.log(view);
        console.log(bookingId);
    }, [setView, setBookings]);

    if(view === '1') {
        return (
          <BookingSection>
             <LogoutButton />
              <DashboardWrapper>
                  <H2centered>Välj datum för att visa bokningar</H2centered>
                  <Datepicker setDate={setBookingDate} date={bookingDate} />
                  {isLoading ? (
                  <p>Loading...</p>
                  ) : <ChangeBooking 
                  foundBookings={foundBookings} 
                  customers={customers} 
                  removeBooking={removeBooking}
                  setView={setView}
                  setBookingId = {setBookingId}/>}
                 
              </DashboardWrapper>
          </BookingSection>
        );
    } else if(view === '2'){
        return (
            <BookingSection>
                <DashboardWrapper>
                    <EditBooking 
                    bookingId={bookingId}
                    bookings={bookings}
                    setBookings={setBookings}
                    customers = {customers}
                    setView = {setView}
                    setIsLoading={setIsLoading}
                     />
                </DashboardWrapper>
            </BookingSection>
        )
    }
};

