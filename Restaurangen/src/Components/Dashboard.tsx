import { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { deleteBooking, getBookings, getCostumer } from "../services/restaurantServices";
import { ICostumer, IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { H2, H2centered } from "./style/Title";
import Datepicker from "./DatePicker";
import { LightPSmaller } from "./style/P";
import { ButtonGreen, ButtonRed } from "./style/Buttons";
import { DashboardWrapper } from "./style/Wrappers";

export const Dashboard = () => {
  const restaurantId = useContext(restaurantIdContext);
  const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [foundBookings, setFoundBookings] = useState<IFetchedBooking[]>([]);
  const [costumers, setCostumers] = useState<ICostumer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state


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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    getCostumersArr();}, [bookingDate, bookings]);
//   }, [bookingDate, bookings]);

    const removeBooking = async (id: string) => {
        await deleteBooking(id);
        setBookings(bookings.filter((booking) => booking._id !== id));
    }

  return (
    <BookingSection>
        <DashboardWrapper>
            <H2centered>Välj datum för att visa bokningar</H2centered>
            <Datepicker setDate={setBookingDate} date={bookingDate} />
            {isLoading ? (
            <p>Loading...</p>
            ) : (
            costumers.map((costumer, i) => (
                <div key={foundBookings[i]._id}>
                <H2>
                {costumer.name} {costumer.lastname}
                </H2>
                <LightPSmaller>Tid: {foundBookings[i].time}, Antal personer: {foundBookings[i].numberOfGuests}</LightPSmaller>
                <ButtonGreen>Ändra bokning</ButtonGreen><ButtonRed onClick={() => removeBooking(foundBookings[i]._id)}>Ta bort bokning</ButtonRed>
                </div>
            ))
            )}
        </DashboardWrapper>
    </BookingSection>
  );
};

