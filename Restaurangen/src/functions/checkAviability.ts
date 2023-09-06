import { IFetchedBooking } from "../interfaces/interfaces";

export const checkAviability = (time: string, date: Date, guests: string, bookings: IFetchedBooking[]) => {
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

  // loopa igenom filteredArray och räkna ut antal bord baserat på antal gäster per sällskap

  //om arrayen är kortare än antalet bord så finns det plats, annars inte
  return (tables < (15 - filteredArray.length) ? true : false);
}