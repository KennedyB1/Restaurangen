import React, { useContext, useEffect, useState } from "react";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { getBookings, getCostumer } from "../services/restaurantServices";
import { ICostumer, IFetchedBooking } from "../interfaces/interfaces";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { H2centered } from "./style/Title";
import Datepicker from "./DatePicker";
import { LightP } from "./style/P";

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

      setIsLoading(true); // Set loading to true when fetching data
      const costumerPromises = filteredBookings.map(async (booking) => {
        const costumerArray = await getCostumer(booking.customerId);
        return costumerArray[0];
      });
      
      const costumersData = await Promise.all(costumerPromises);
      setCostumers(costumersData);
      setIsLoading(false); // Set loading to false when data is fetched
    }

    getCostumersArr();
  }, [bookingDate, bookings]);

  return (
    <BookingSection>
      <BookingWrapper>
        <H2centered>Välj datum för att visa bokningar</H2centered>
        <Datepicker setDate={setBookingDate} date={bookingDate} />
        {isLoading ? (
          <p>Loading...</p> // Display loading indicator when isLoading is true
        ) : (
          costumers.map((costumer) => (
            <LightP key={costumer.id}>
              {costumer.name} {costumer.lastname}
            </LightP>
          ))
        )}
      </BookingWrapper>
    </BookingSection>
  );
};

