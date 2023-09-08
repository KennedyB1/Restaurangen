import { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { deleteBooking, getBookings, getCostumer } from "../services/restaurantServices";
import { ICostumer, IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { H2centered } from "./style/Title";
import Datepicker from "./DatePicker";
import { DashboardWrapper } from "./style/Wrappers";
import ChangeBooking from "./ChangeBooking";
import EditBooking from "./EditBooking";

export const Dashboard = () => {
  const restaurantId = useContext(restaurantIdContext);
  const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [foundBookings, setFoundBookings] = useState<IFetchedBooking[]>([]);
  const [costumers, setCostumers] = useState<ICostumer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [view, setView] = useState<string>('1');
  const [bookingId, setBookingId] = useState<string>('');


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Set loading to true when fetching data
      const bookingsData = await getBookings(restaurantId);
      setBookings(bookingsData);
      setIsLoading(false); // Set loading to false when data is fetched
    }

    fetchData();
  }, [restaurantId]);

  useEffect(() => {
    async function getCostumersArr() {
      const filteredBookings = bookings.filter((booking) => {
        return booking.date === bookingDate.toISOString().slice(0, 10);
      });
      setFoundBookings(filteredBookings);

      setIsLoading(true); // Set loading to true when fetching data
      const costumerPromises = filteredBookings.map(async (booking) => {
        const costumerArray = await getCostumer(booking.customerId);
        return costumerArray[0];
      });
      
      const costumersData = await Promise.all(costumerPromises);
      setCostumers(costumersData);
      console.log(costumers);
      console.log(foundBookings)
      setIsLoading(false); // Set loading to false when data is fetched
    }

    getCostumersArr();}, [bookingDate, bookings]);

    const removeBooking = async (id: string) => {
        await deleteBooking(id);
        setBookings(bookings.filter((booking) => booking._id !== id));
    }

    useEffect(() => {
        console.log(view);
        console.log(bookingId);
    }, [setView, setBookingId]);

    if(view === '1') {
        return (
          <BookingSection>
              <DashboardWrapper>
                  <H2centered>Välj datum för att visa bokningar</H2centered>
                  <Datepicker setDate={setBookingDate} date={bookingDate} />
                  {isLoading ? (
                  <p>Loading...</p>
                  ) : <ChangeBooking 
                  foundBookings={foundBookings} 
                  costumers={costumers} 
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
                    costumers = {costumers}
                    setView = {setView} />
                </DashboardWrapper>
            </BookingSection>
        )
    }
};

